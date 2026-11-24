# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Yetu89/vending-pickup-01/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Yetu89/vending-pickup-01/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## Bounty

- **Bounty:** [One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
- **Reward:** $2
- **Entry:** free to enter
- **Closes:** 26 Nov 2026, 16:35 WIB

## Entry

> Are you exact change? Because every time you pass, my buttons light up and my snacks start falling for you.

107 characters — well inside the 200-character limit.

## Why this line

Grok (grok-4.3) scored it **9/10**: "Exact-change opener plus buttons/snacks-falling lands as the most natural machine pickup with a clean pun." The exact-change opener turns the most mundane vending-machine interaction into a compliment, and the payoff stacks two machine-native images — buttons lighting up and snacks falling — into the classic "falling for you" pun.

## Run

```sh
node main.ts
```

This validates the text against the gate (1–200 characters, one line, no control characters), writes `entry.txt` to `$OUTPUT_DIR` (default `/output`) with no trailing newline, then reads it back and compares it byte-for-byte with the entry text before printing the character count.
