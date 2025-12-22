# AI Stats Hero - Color Palette Reference

## Quick Visual Guide

```
╔══════════════════════════════════════════════════════════════╗
║           AI ADOPTION STATISTICS - COLOR SCHEME              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  📊 Chart 1 (70% - Knowledge Workers)                       ║
║     Light: #2C64B9 ████ Brand Blue                          ║
║     Dark:  #4A90E2 ████ Lighter Blue                        ║
║                                                              ║
║  📊 Chart 2 (71% - Stuck in Pilot/Planning)                 ║
║     Light: #00BCD4 ████ Vibrant Cyan                        ║
║     Dark:  #26C6DA ████ Lighter Cyan                        ║
║                                                              ║
║  📊 Chart 3 (46% - Hiding AI Usage)                         ║
║     Light: #7B68EE ████ Medium Slate Blue/Purple            ║
║     Dark:  #9575CD ████ Lighter Purple                      ║
║                                                              ║
║  📊 Chart 4 (31% - No AI Policy)                            ║
║     Light: #4A90E2 ████ Light Blue                          ║
║     Dark:  #64B5F6 ████ Even Lighter Blue                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

## Design Rationale

### Color Selection Strategy

1. **Chart 1 - Brand Blue (#2C64B9)**
   - Position: Top-left (primary position)
   - Statistic: Most positive (70% adoption)
   - Reasoning: Your signature brand color for the most impactful stat

2. **Chart 2 - Vibrant Cyan (#00BCD4)**
   - Position: Top-right
   - Statistic: Organizations stuck in planning (71%)
   - Reasoning: High contrast with blue, energetic but cautionary

3. **Chart 3 - Purple (#7B68EE)**
   - Position: Bottom-left
   - Statistic: Workers hiding AI usage (46%)
   - Reasoning: Adds sophistication, complements blues without clashing

4. **Chart 4 - Light Blue (#4A90E2)**
   - Position: Bottom-right
   - Statistic: Organizations lacking policy (31%)
   - Reasoning: Ties back to brand family, creates cohesive palette

### Color Harmony

The palette creates a **cool color harmony** that:
- ✅ Maintains brand consistency (blue family dominant)
- ✅ Provides visual variety (cyan and purple accents)
- ✅ Ensures accessibility (good contrast in both themes)
- ✅ Looks professional and trustworthy
- ✅ Doesn't overwhelm with too many competing colors

### Dark Mode Adjustments

Each color is lightened in dark mode by approximately 15-20% to ensure:
- Sufficient contrast against dark backgrounds
- Reduced eye strain
- Maintained color relationships and harmony
- Consistent brand feel across both themes

## CSS Classes

```css
/* Light Mode */
.stat-color-blue        { stroke: #2C64B9; }
.stat-color-cyan        { stroke: #00BCD4; }
.stat-color-purple      { stroke: #7B68EE; }
.stat-color-light-blue  { stroke: #4A90E2; }

/* Dark Mode */
[data-theme="dark"] .stat-color-blue       { stroke: #4A90E2; }
[data-theme="dark"] .stat-color-cyan       { stroke: #26C6DA; }
[data-theme="dark"] .stat-color-purple     { stroke: #9575CD; }
[data-theme="dark"] .stat-color-light-blue { stroke: #64B5F6; }
```

## Alternative Color Schemes (Future Reference)

If you want to experiment with different moods:

### Warm Variant (Energy & Urgency)
- Chart 1: #E74C3C (Red) - Urgency
- Chart 2: #F39C12 (Orange) - Warning
- Chart 3: #3498DB (Blue) - Trust
- Chart 4: #9B59B6 (Purple) - Innovation

### Corporate Variant (Professional)
- Chart 1: #2C64B9 (Your brand blue)
- Chart 2: #34495E (Slate gray)
- Chart 3: #16A085 (Teal)
- Chart 4: #8E44AD (Purple)

### Monochrome Variant (Subtle)
- Chart 1: #1E3A8A (Dark blue)
- Chart 2: #2563EB (Medium blue)
- Chart 3: #60A5FA (Light blue)
- Chart 4: #93C5FD (Lighter blue)

## Testing Colors

To test different colors quickly, edit `assets/css/stats-hero.css` and modify the hex values in the color class definitions. The changes will be reflected immediately on page refresh.
