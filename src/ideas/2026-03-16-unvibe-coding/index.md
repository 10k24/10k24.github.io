---
title: "Un-vibe Coding"
layout: idea
description: "What if AI programming didn’t feel like a crapshoot?"
tags: ideas
---

## Garbage In, Garbage Out

This was one of the first concepts taught in computer science education. Today, there’s a quiet problem with AI coding that nobody is talking about... at least not directly.

Vibe coding is the first time in the history of software where input doesn’t determine the output. You type a prompt: open, fuzzy, natural language and you get code back. Sometimes great code. Sometimes a disaster. Sometimes it doesn’t even compile. It’s usually something in between that looks fine until you look closer. The same prompt, run twice, produces different results. The same intent, described slightly differently, builds a different product. Expecting a different result from the same action is a definition of insanity. With all the talk of AI psychosis, maybe we have all gone insane.

This is new. And it’s being treated as normal.

Every other tool in the history of making things has had a deterministic relationship between input and output. A compiler takes source code and produces a binary — the same source, the same binary, every time. A design system takes a component and produces consistent UI — that’s the whole point of having a system. A recipe produces the same dish given the same ingredients and technique. Variance is a sign something went wrong.

With vibe coding, variance is the feature. There is no spec or requirements list, just vibes. And when your suggestion is fuzzy, your product is fuzzy. This is why people are burning thousands of dollars a month on AI coding tools and ending up with codebases nobody fully understands and a maintenance nightmare.

The problem isn’t the AI. The AI is doing exactly what you asked. The problem is that nobody taught us how to ask.

---

Here’s what we think is actually going on. Many people reaching for vibe coding tools are founders and product people — people who have a clear picture of what they want to build but no clean way to express it to a machine. Product Requirement Documents (PRDs) are too verbose, bloated, and slow. Nobody reads them. User stories are too vague to be actionable. Design specs show what things look like but not how they behave. Technical specs require you to already think like an engineer.

None of these artifacts were designed to be fed to an AI. None of them produce predictable outputs when you try.

So people improvise. They type into a prompt box the way they’d describe a product to a developer over Slack. Then the AI fills in the gaps with its best guess. Sometimes the guess is good. Often it isn’t. And you can’t easily tell the difference until you’ve built three screens of the wrong thing and experienced a few negative emotions.

What’s missing is a layer between intention and generation. Something that takes what you actually know about your product — who uses it, what they can do, what exists in the system — and structures it precisely enough that the output becomes predictable. Not just a prompt, a spec. But a spec written in plain language, not engineering jargon.

Perhaps, a spec/prompt that compiles.

---

We’ve been thinking about this from a slightly unusual angle. Our background is brand systems — we spend our days defining the rules that generate consistent visual outputs across every context a brand appears in. A type system, a color system, a component system. The whole discipline is about making variance a choice rather than an accident. You define the rules once, and the system produces predictable results everywhere.

Product behavior is the same problem. You have rules — who can do what, what exists, what happens when. The reason vibe coding produces unpredictable outputs is that those rules are either never written down or written in a form the AI can’t reason about reliably. The fix is writing the rules down in a form that actually compiles.

What would that look like in practice? Something like this:


1. What is it? What is the actual product in really simple terms, 1 sentence. The tagline.

2. Who shows up? Not “user types” or “personas” — just the people. Guest. User. Admin. Three words that immediately constrain everything downstream. Now your AI knows the vocabulary. Every behavior in the product has a subject.

3. Then you define the things in your product. Booking. Time slot. Schedule. The nouns. Again, just enough to close the vocabulary — no entity can appear in a behavior that hasn’t been named here.

4. Then you describe what happens, actions and behaviors.
    - Guest can browse and book.
    - User can manage their schedule.
    - Admin can change anything.
    Plain sentences. But structured — subject, verb, object.

The compiler can check these. If a behavior references an entity that doesn’t exist, it’s an error. If an actor has no behaviors, it’s an error. You can’t generate the prompt until the spec is clean.

That last part is the key. The prompt button is disabled until every loose end is resolved. The AI only ever sees a valid spec. The output becomes predictable — not because the AI got smarter, but because the input becomes precise.

---

This is what we’re calling un-vibe coding. It is a correction to the part of the process that’s currently broken: the translation from human intention to machine instruction.

The vibe coding tools are obsessed with the output. How fast can we generate? How many frameworks can we support? How beautiful is the UI? Nobody is working on the input — on making the thing you type into the prompt box actually mean what you meant.

That’s the problem worth solving. The input should determine the output. It always should have.

---

*We’re working on a tool that implements this as a structured editor with a live compiler. If this resonates, we’d like to hear what you’re building — and where the fuzzy inputs are costing you the most.*
