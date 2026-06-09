# Raw material — Post: "What the hell is a forward-deployed engineer?"

> Status: raw source notes, not yet shaped into a post. See [[linkedin-post-format]] for the winning short-form shape (~150 words beats long).

## Core definition (SWE's perspective)

A Forward Deployed Engineer (FDE) = software engineer + solutions architect + technical consultant + product manager + startup founder, all in one role.

"Half engineer, half founder." / "Technical founder inside a large company."

## Traditional SWE vs FDE (table)

| Traditional SWE           | Forward Deployed Engineer                    |
| ------------------------- | -------------------------------------------- |
| Builds platform features  | Builds customer solutions                    |
| Internal stakeholders     | External customers                           |
| Optimizes code quality    | Optimizes customer outcomes                  |
| Roadmap driven            | Problem driven                               |
| Works from specifications | Discovers requirements                       |
| Usually one product       | Different customer problems every few months |

## The Palantir origin

Term became famous at Palantir. Their insight:
- Customers don't want software. Customers want outcomes.
- Instead of "Here's our platform, good luck," they embedded elite engineers directly inside customer orgs.
- Engineers sat with military officers, intelligence agencies, banks, hospitals, manufacturers — and built solutions on top of Palantir's platform.
- OpenAI is now doing the same.

## What an OpenAI FDE probably does (hypothetical $20M bank contract)

Bank says: "We want AI to reduce analyst workload by 40%." Nobody knows exactly how. FDE arrives.

- **Week 1 — Discovery:** Talk to traders, analysts, compliance, eng teams. Understand workflows, bottlenecks, data sources, risks. Not normal SWE work.
- **Weeks 2–4 — Prototype:** Build fast — retrieval system, agent workflow, eval framework, internal UI. Using OpenAI models + customer data + APIs. Goal isn't perfection, it's "Can we prove value?"
- **Months 2–3 — Production:** Prototype works. Now act like a senior engineer: architecture, scaling, observability, security, testing, deployment. Write the code themselves.
- **Months 3–6 — Feedback loop (the unique part):** FDE notices "GPT fails on compliance reports" or "GPT hallucinates on financial statements." That feedback goes straight to product, model teams, researchers. FDEs become the bridge between reality and research.

## Why OpenAI cares

OpenAI sells a general-purpose tech. Customers don't buy GPT — they buy support automation, legal doc review, healthcare workflows, coding productivity, agent systems. Someone has to connect the model to the business problem. That's the FDE.

## Why the role is attractive

Many engineers realize: writing code is only ~20% of creating business value. The hard part is finding the right problem, understanding users, influencing stakeholders, making tradeoffs, shipping under uncertainty. FDEs spend most of their time there.

## Why many engineers would hate it

If you love compiler engineering, distributed systems, databases, kernel work — you may hate FDE work. Your week: customer meetings, requirement gathering, demos, presentations, travel — instead of pure engineering.

## Time split contrast

- Senior Google SWE: ~80% engineering / 20% stakeholder mgmt
- OpenAI FDE: ~40–60% engineering / 40–60% customer interaction, discovery, demos, solution design

## The closing thesis

In the AI era, FDEs are becoming some of the highest-leverage engineers because frontier models are increasingly commoditized — the scarce skill is figuring out how to turn those models into measurable business outcomes.

## Personal angle (optional hook for the post)

Puru's background (Google Cloud Security + Lex AI) already shows FDE traits: talking to stakeholders, understanding customer workflows, building end-to-end solutions, teaching/communicating, operating in ambiguity. The biggest gap vs a real FDE: being much more customer-embedded.
