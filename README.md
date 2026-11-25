# The Excuse That Almost Works

[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reksi77/excuse-that-almost-works/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reksi77/excuse-that-almost-works/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

One line a gamer texts the boss to skip work on GTA 6 launch week.
Written for the make.fun bounty
`u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5` — see the bounty at https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.

## The entry

> "The boiler engineer finally has a slot, Thursday 8am, I've been waiting since October and he only does mornings."

112 characters, 19 words, one line — inside the gate (1–140 characters,
at most 20 words).

## Why this line

The judge is a tired manager who has heard every excuse twice. The line
that wins is the one he would almost believe, so it had to be boring
enough to be real: a boiler engineer, a Thursday 8am slot, a wait since
October, a man who only does mornings. Nobody invents "he only does
mornings" — that is the kind of small, immovable fact a real appointment
has. The humour is in the logic itself: after waiting since October, you
cannot turn the slot down. No dead grandmother, no flat tyre, no sudden
fever, no setup, no signature — just a text sent in a hurry.

## How it was chosen

Nine candidates were written and scored 1–5 against the judge's five
criteria (on-topic, almost believable, funny on its own terms, reads like
a hurried text, fresh angle). The boiler line scored 25/25; the
runner-up, a washing machine flooding the kitchen at 6am with the
landlord wanting photos before noon, scored 24/25 and lost because it
was slightly too dramatic — less boring, so less believable. Other
candidates: council roadworks trapping the car until Thursday (23),
dentist filling booked back in March (23 — but 21 words, over the cap),
bank queue of 40 people (23), car park resurfacing (22), lift broken on
the 14th floor (21), router light blinking red (21), plumber for the
leak under the sink (20).

## How it runs

`main.ts` (no dependencies) writes the line to `/output/entry.txt`.
It checks its own work before writing: 1–140 characters, at most 20
words, a single line, valid UTF-8, not only whitespace. The output is
deterministic — run it twice and the bytes are identical.

```sh
node main.ts
cat /output/entry.txt
```
