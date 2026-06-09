from PIL import Image, ImageDraw, ImageFont, ImageFilter

SRC = 'Chamath-ProfessionalShot.webp'
FONT = '.fonts/InstrumentSerif-Italic.ttf'
TEXT = 'software that makes the software'

base = Image.open(SRC).convert('RGB')
W, H = base.size

# ---- 1) subtle bottom darkening gradient (for depth + legibility, not too loud) ----
grad_mask = Image.new('L', (1, H), 0)
for y in range(H):
    t = y / H
    start = 0.42
    if t < start:
        a = 0
    else:
        tt = (t - start) / (1 - start)
        a = int((tt ** 1.5) * 150)        # max ~150/255 at very bottom
    grad_mask.putpixel((0, y), a)
grad_mask = grad_mask.resize((W, H))
darklayer = Image.new('RGB', (W, H), (8, 11, 16))   # cool near-black
base = Image.composite(darklayer, base, grad_mask)

def make_text_layers(c_top, c_bot):
    F = 3  # supersample factor
    LW, LH = W * F, H * F
    margin_x = 64
    bottom_margin = 54
    maxw = (W - 2 * margin_x) * F

    # find largest font size that fits width
    size = 60
    while True:
        f = ImageFont.truetype(FONT, size * F)
        bb = f.getbbox(TEXT)
        if (bb[2] - bb[0]) >= maxw or size > 400:
            size -= 2
            f = ImageFont.truetype(FONT, size * F)
            break
        size += 2

    bb = f.getbbox(TEXT)                 # ink bbox at origin
    x = margin_x * F - bb[0]
    target_bottom = (H - bottom_margin) * F
    y = target_bottom - bb[3]

    # text alpha mask
    mask = Image.new('L', (LW, LH), 0)
    ImageDraw.Draw(mask).text((x, y), TEXT, font=f, fill=255)

    # vertical color gradient across the text's ink band
    ty0, ty1 = y + bb[1], y + bb[3]
    grad = Image.new('RGB', (LW, LH), c_bot)
    gd = ImageDraw.Draw(grad)
    span = max(1, ty1 - ty0)
    for yy in range(ty0, ty1 + 1):
        t = (yy - ty0) / span
        r = int(c_top[0] + (c_bot[0] - c_top[0]) * t)
        g = int(c_top[1] + (c_bot[1] - c_top[1]) * t)
        b = int(c_top[2] + (c_bot[2] - c_top[2]) * t)
        gd.line([(0, yy), (LW, yy)], fill=(r, g, b))

    text_rgba = grad.convert('RGBA')
    text_rgba.putalpha(mask)

    # soft drop shadow
    shadow = Image.new('RGBA', (LW, LH), (0, 0, 0, 0))
    sh_alpha = mask.filter(ImageFilter.GaussianBlur(7 * F))
    sh_color = Image.new('RGBA', (LW, LH), (0, 0, 0, 200))
    off = Image.new('L', (LW, LH), 0)
    off.paste(sh_alpha, (0, 5 * F))
    shadow.paste(sh_color, (0, 0), off)

    text_small = text_rgba.resize((W, H), Image.LANCZOS)
    shadow_small = shadow.resize((W, H), Image.LANCZOS)
    return shadow_small, text_small

def render(name, c_top, c_bot):
    sh, tx = make_text_layers(c_top, c_bot)
    out = base.convert('RGBA')
    out = Image.alpha_composite(out, sh)
    out = Image.alpha_composite(out, tx)
    out.convert('RGB').save(name, quality=95)
    print('wrote', name)

# Coral gradient (light peach -> deep coral)
render('Chamath-thumb-coral.png', (255, 178, 150), (255, 92, 80))
# Blue gradient (light azure -> deep blue)
render('Chamath-thumb-blue.png', (150, 198, 255), (44, 96, 235))
