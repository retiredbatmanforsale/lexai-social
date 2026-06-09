# Topic Bank — Puru Kathuria (Lex AI Labs)

The renewable reservoir that feeds §4 of `LINKEDIN-SOP.md`. Not a calendar — a backlog.
**Two-stage pipeline:** Puru dumps raw → this file enriches each into a tagged, lead-runnable entry.

## How topics are stored — STOCK vs FLOW

| Nature | What it is | How it's stored | Examples |
|--------|-----------|-----------------|----------|
| **STOCK** | static, evergreen, enumerable, recyclable | a **listed entry** with full tags | curriculum explainers, interview Q-bank, comp data |
| **FLOW** | a moving stream you can't pre-list | a **watcher**: sources + trigger + default angle + SLA | frontier-lab news, IPOs, "what X said this week" |

**Entry schema (STOCK):**
`Intent × Topic × Format` | ICP | Hook mold · Angle (plain English) · **Needs from Puru** · Truth-source · recyclable?

**Watcher schema (FLOW):**
Sources to monitor · Trigger · Default Intent+angle · Format · **Needs from Puru** (voice note SLA) · Publish SLA

---

## SERIES 1 — Curriculum Explainers  ·  Intent: **Teach**  ·  STOCK  ·  PROF viz = our moat
The evergreen engine. Deep, recyclable, un-copyable because of PROF visualizations ("show what only you can show"). Also the fuel for the §6 repost engine (bundle into "the N concepts every AI engineer must know" carousels).

> Every entry here: ICP1/2 · Format = explainer + PROF viz · Needs from Puru = the viz/screenshot + his one-line "why it matters" · Truth-source = standard ML (verify notation only).

- **Gradient descent — the pillar under most deep learning.** Hook: big-claim ("one idea powers nearly every neural net"). recyclable ✓
- **Evolution: linear equation → sigmoid → neural network.** Hook: progression/story. PROF visuals + screenshots. recyclable ✓
- **The chain rule via a variable tree** (1 input, 1 hidden, 1 output: `a1=σ(z1=w1x+b1)`, `a2=σ(z2=w2a1+b2)`, `loss=MSE`). Viz = the variable dependency tree. Hook: "backprop is just one rule you learned in calculus." recyclable ✓
- **Weight / parameter sharing in CNNs.** PROF viz. Hook: "why a CNN sees a cat anywhere in the frame." recyclable ✓
- **Scaling laws in neural networks.** Excalifont viz. Hook: big-number. *(Provoke-flavored — can double as a thesis.)* recyclable ✓
- **A "Moore's law" for training NNs** — cost down, performance doubling. Viz. Hook: big-number + comparison. *(Provoke-flavored.)* recyclable ✓
- **Hyper-dimensional space folding in CNNs** — 3D tensors (W×H×C) projected through millions of hyper-dim matrices carving non-linear decision boundaries. Viz. Hook: vivid mental-model. (advanced)
- **The universal equation: `y = f(Wx + b)`** — NN, CNN, RNN, Transformer are all chained parameterized functions; every architecture is a specialized structuring of linear + non-linear transforms. Viz. Hook: two-line contrarian flip ("they look different; they're the same machine"). *(Strong Provoke-Teach hybrid.)* recyclable ✓
- **Why RNNs broke** — the vanishing gradient problem. PROF vanishing-gradient viz. Hook: "the flaw that killed RNNs and birthed Transformers." recyclable ✓
- **Embeddings in a Transformer** — token embeddings + positional embeddings (older GPT architectures & "Attention Is All You Need"). PROF viz. Hook: explainer cold-open. recyclable ✓
- **Addition over concatenation for positional encodings** — PE added element-wise (not concatenated) to token embeddings; nets learn to un-mix meaning + order. Concatenation keeps separate identity, can be geometrically superior in ViTs. Viz. Hook: contrarian "why add two different things together?" *(Provoke-Teach hybrid, advanced.)*

*(Keep dumping curriculum here — this series is your strongest and most recyclable.)*

---

## SERIES 2 — Frontier News Response  ·  Intent: **Provoke** (teardown) or **Reach** (riff)  ·  FLOW
Stored as **watchers**, not a list. The lead matches incoming news to a watcher and executes fast.

- **Watcher: Lab IPO / funding.**
  - Sources: TechCrunch, The Information, company blogs (Anthropic, OpenAI, xAI, Mistral, Sarvam…).
  - Trigger: an IPO filing / mega-raise / valuation milestone.
  - Default: **Provoke** — "what this means for *engineers*, not investors" (teardown, not a news report).
  - Format: news-as-story. Needs from Puru: his thesis (voice note, same day). Publish SLA: <24h while hot.
  - *Seeds already in mind:* Anthropic IPO, OpenAI IPO.
- **Watcher: Model / product launch.**
  - Sources: lab release notes, HN front page.
  - Trigger: a frontier model or dev-tool ships.
  - Default: **Provoke/Teach** — "what changes in how you build now."
  - Format: story or explainer. Needs from Puru: hands-on take. SLA: <48h.
- **Watcher: Spicy industry moment / meme.**
  - Trigger: a moment the whole eng timeline is reacting to.
  - Default: **Reach** (capped ≤5%) — a riff/meme for recognition only. Needs from Puru: a one-line angle. SLA: while it's live.

---

## SERIES 3 — Interview Readiness  ·  Intent: **Teach**  ·  semi-STOCK (refresh each cycle)
Real questions asked in AI/ML interviews + how to think about them. Extremely **save-able** → repost-engine gold.

- Q-bank entry template: *"Asked at [company]: [question]. Here's the 60-second answer + the trap."*
- Needs from Puru: the actual questions (his + sourced from his network) and the model answer.
- Recyclable as carousels: "12 ML interview questions you'll get at [tier] companies."
- FLOW sub-stream: new questions surfacing this hiring season → watcher on his network/DMs.

---

## SERIES 4 — Compensation Intel  ·  Intent: **Teach / Prove**  ·  semi-STOCK (refresh quarterly)
AI/ML engineer salaries & comp at top tech in **India / Bangalore**. High broad reach + very save-able.

- Angle: levels, bands, what moves you between them; "what a [level] AI/ML eng actually earns in Bangalore."
- Needs from Puru: real numbers (his data + verified sources — levels.fyi, offers in his network).
- Truth-source: **must cite** — comp claims get fact-checked hard. Verify before posting.
- Recyclable: refresh the same template quarterly.

---

## SERIES 5 — Advice From the Top 1%  ·  Intent: **Provoke / Teach**  ·  semi-FLOW
What a Karpathy / a Google staff engineer / a top-1% tech person would tell an engineer or AI/ML engineer **today**: what to learn, how to prep for interviews, how to think about the career-ladder learning graph. Borrowed authority → SPCL credibility.

- STOCK version: synthesized evergreen advice ("if a staff eng mentored you for an hour, here's what they'd say").
- FLOW version: **Watcher** — when Karpathy/a notable staff eng posts advice, react with Puru's translation for *our* ICP. Sources: their X/blogs. Needs from Puru: his take + what he'd add/disagree with. SLA: <48h.
- Truth-source: attribute quotes to the person who said them; verify verbatim (per §5 / Hormozi "state facts").

---

## COVERAGE SNAPSHOT — vs the Intent target-mix (Teach 45 / Provoke 30 / Prove 10 / Relate 10 / Reach 5)

| Intent | Target | Current stock in this bank | Status |
|--------|--------|----------------------------|--------|
| **Teach** | 45% | Series 1 (deep), 3, 4 | ✅ **Over-stocked.** Strongest area. |
| **Provoke** | 30% | Series 2 (watchers), 5, + 4 contrarian-flavored explainers | ⚠️ **Thin as STOCK.** Depends on flow + hot takes. **Needs more standing Provoke angles.** |
| **Prove** | 10% | Series 4 (comp), IILM, launches | ⚠️ Thin — needs Puru's wins/case studies. |
| **Relate** | 10% | — | ❌ **EMPTY.** No personal/vulnerable stories dumped yet. |
| **Reach** | 5% | Series 2 riff watcher | ✅ Capped, fine. |

### → The most valuable thing to dump next
Your brain-dump is ~90% **Teach** (curriculum). The authority-led mix you chose needs **30% Provoke + 10% Relate**. So the highest-leverage thing you can add is NOT more curriculum — it's:

1. **Hot takes / contrarian theses (Provoke)** — your spiky opinions on where AI eng is going, what's overrated, what everyone gets wrong. Mark these `!` when you dump.
2. **Personal / vulnerable stories (Relate)** — "I noticed a pattern at Google…", failures, what building Lex taught you. These drive the most *comments* (strongest algo signal) and you have **zero** so far. Mark these `*`.

*Drop those in and this bank becomes balanced to the mix.*
