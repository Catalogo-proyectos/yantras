---
name: impeccable
description: Design guidance system with 23 commands for AI-assisted frontend design. Provides structured design reviews, anti-pattern detection, and quality checks to generate better, non-repetitive interfaces.
---

# Impeccable Design Skill

A design guidance system for AI coding agents that prevents repetitive design patterns (overused fonts, purple gradients, poor contrast) and provides structured commands for design reviews and improvements.

## Quick Start

Install from CLI:
```bash
npx impeccable install
```

Then invoke:
```
/impeccable <command> <target>
```

## Core Philosophy

AI models trained on similar SaaS templates produce repetitive designs. Impeccable breaks these patterns by providing:
- Explicit design guidance and context
- 44 deterministic anti-pattern detectors + LLM critique
- Structured workflows for design iteration
- Design context files (PRODUCT.md, DESIGN.md)

## 23 Available Commands

### Planning & Structure
| Command | Purpose |
|---------|---------|
| `init` | One-time setup: gather design context, write PRODUCT.md and DESIGN.md |
| `shape` | Plan UX/UI before coding |
| `document` | Generate DESIGN.md from existing code |

### Design Creation & Iteration
| Command | Purpose |
|---------|---------|
| `craft` | Full shape-then-build workflow with visual iteration |
| `live` | Browser-based variant iteration |
| `extract` | Pull reusable components into design system |

### Quality Reviews
| Command | Purpose |
|---------|---------|
| `audit` | Run technical checks (accessibility, performance, responsiveness) |
| `critique` | UX design review assessing hierarchy and resonance |
| `polish` | Final pass and design system alignment |

### Fine-Tuning Adjustments
| Command | Purpose |
|---------|---------|
| `bolder` | Amplify understated designs |
| `quieter` | Tone down overly prominent designs |
| `distill` | Strip design to essentials |
| `harden` | Add error handling and edge cases |

### Visual Enhancement
| Command | Purpose |
|---------|---------|
| `animate` | Introduce purposeful motion |
| `colorize` | Deploy strategic color |
| `typeset` | Fix font hierarchy and sizing |
| `layout` | Correct spacing and visual rhythm |
| `delight` | Add moments of joy |
| `overdrive` | Add technically extraordinary effects |

### User Experience
| Command | Purpose |
|---------|---------|
| `onboard` | Design first-run and empty state flows |
| `clarify` | Improve UX copy clarity |
| `adapt` | Optimize for different devices |
| `optimize` | Performance improvements |

## Anti-Pattern Detection

The system includes **44 deterministic rules** plus LLM-only critiques, catching:

### Typography
- Overused fonts (Arial, Inter, system defaults without intentionality)
- Font sizes not aligned to scale
- Poor font hierarchy

### Color & Contrast
- Gray text on colored backgrounds (accessibility issue)
- Pure black/gray without tinting (lifeless appearance)
- Poor contrast ratios
- Overused purple gradients
- Dated color patterns

### Layout & Spacing
- Excessive card nesting
- Cramped spacing (< 16px gutters)
- Misaligned rhythm
- Poor visual hierarchy

### Motion & Animation
- Dated easing functions (bounce, elastic on UI interactions)
- Animations on keyboard actions (too frequent)
- Animation timing > 300ms on UI elements

### Design Patterns
- Side-tab borders
- Dark glows and shadows
- Repetitive SaaS templates
- Dark mode with insufficient contrast

### Accessibility
- Missing alt text
- Low contrast ratios
- Poor keyboard navigation indicators

## Design Context Management

### Project Types

`/impeccable init` determines whether your project is:

**Brand Surface** (marketing-focused)
- Landing pages
- Portfolios
- Marketing websites
- Hero sections

**Product Surface** (application-focused)
- App UI
- Dashboards
- SaaS tools
- Internal tools

This determines which design patterns are appropriate and how the commands adapt.

### Generated Files

After init, you'll have:
- `PRODUCT.md` - Product vision, values, and constraints
- `DESIGN.md` - Visual language, components, patterns

These files inform all subsequent design commands.

## Installation Methods

### Recommended: CLI Installer
```bash
npx impeccable install
npx impeccable update  # for future updates
```

Detects your AI coding tool (Cursor, Claude Code, Gemini CLI, etc.) and installs provider-native hooks.

### Git Submodule
For team vendoring and Git-based updates.

### Manual Copy
Download from impeccable.style or copy folders directly for your tool.

## Supported Tools

- Cursor
- Claude Code (recommended)
- OpenCode
- Pi
- Gemini CLI
- Codex CLI
- VS Code Copilot
- Kiro
- Trae (China and International)
- Rovo Dev
- Qoder

## CLI Detective Commands

Impeccable includes a standalone detector (runs without AI):

```bash
npx impeccable detect src/              # Scan directory for anti-patterns
npx impeccable detect index.html        # Scan single file
npx impeccable detect https://example.com  # Scan live URL
npx impeccable detect --json .          # CI-friendly JSON output
npx impeccable ignores list             # View ignored files
npx impeccable ignores add <pattern>    # Add ignore pattern
```

## Design Hook System

On Claude Code, Codex, and Cursor, installation includes provider-native hooks that:
- Run the Impeccable detector when you edit UI files
- Surface findings to the agent automatically
- Claude Code/Codex surface findings after edits
- Cursor blocks problematic proposals before writing

This means design guidance happens automatically without needing to invoke commands manually.

## Configuration

Projects store settings in:
- `.impeccable/config.json` - Team-wide configuration
- `.impeccable/config.local.json` - Machine-local settings (gitignored)

Customize:
- Which anti-patterns to enforce
- Design system colors and typography
- Brand guidelines
- Tool-specific settings

## Common Workflows

### New Project
1. `/impeccable init` - Establish design context
2. `/impeccable shape` - Plan the UX/UI
3. `/impeccable craft` - Build with iteration
4. `/impeccable audit` - Technical checks
5. `/impeccable polish` - Final refinements

### Improve Existing Design
1. `/impeccable audit` - Identify issues
2. `/impeccable critique` - Get UX feedback
3. `/impeccable bolder` or `/impeccable quieter` - Adjust prominence
4. `/impeccable typeset`, `/impeccable layout` - Refine details
5. `/impeccable polish` - Final pass

### Performance & Accessibility
1. `/impeccable audit` - Run full checks
2. `/impeccable optimize` - Improve performance
3. `/impeccable adapt` - Test responsiveness
4. `/impeccable harden` - Add edge cases

## Pro Tips

### Deterministic Detection
The detector rules are deterministic (always the same result). Use `npx impeccable detect --json` in CI/CD to gate design changes.

### Design Review Loop
Use `/impeccable critique` early and often. It's faster than building and discovering issues later.

### Variant Testing
Use `/impeccable live` to test multiple design variants in-browser before committing to code.

### Anti-Pattern Learning
Review the 44 detector rules to understand what patterns Impeccable considers outdated or problematic. This trains your intuition.

### Team Consistency
Share PRODUCT.md and DESIGN.md across teams. Use `.impeccable/config.json` to enforce team-wide design standards.

## Attribution

Created by Paul Bakaus. Website: [impeccable.style](https://impeccable.style)  
License: Apache 2.0

---

**Next Steps:**
1. Run `npx impeccable install` in your project
2. Run `/impeccable init` to establish design context
3. Use specific commands (`/impeccable shape`, `/impeccable craft`, etc.) for targeted design work
