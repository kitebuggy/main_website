# Theme Color Palettes - Visual Reference

## Light Mode Theme

### Primary Backgrounds
```
┌─────────────────────────────────────┐
│ Primary: #ffffff                    │  ⬜ Pure white
│ Secondary: #f8fafc                  │  🔲 Very light blue-gray
│ Tertiary: #f1f5f9                   │  🔲 Light blue-gray
└─────────────────────────────────────┘
```

### Text Colors
```
┌─────────────────────────────────────┐
│ Primary: #1e293b                    │  ⬛ Dark slate
│ Secondary: #475569                  │  🔲 Medium slate
│ Tertiary: #64748b                   │  🔲 Light slate
└─────────────────────────────────────┘
```

### Gradients
```
┌─────────────────────────────────────┐
│ #e0e7ff → #dbeafe → #f8fafc        │  
│ Light indigo → Light blue → White   │  Soft blue gradient
└─────────────────────────────────────┘
```

### Brand Accent
```
┌─────────────────────────────────────┐
│ Corporate Blue: #2C64B9             │  🔵 Rich, professional blue
└─────────────────────────────────────┘
```

### UI Elements
```
Cards:      #ffffff with rgba(44, 100, 185, 0.1) border
Borders:    #e2e8f0 (light gray)
Buttons:    #2C64B9 background, #ffffff text
Links:      #2C64B9 → #1e4a8a on hover
```

---

## Dark Mode Theme

### Primary Backgrounds
```
┌─────────────────────────────────────┐
│ Primary: #0a0e27                    │  ⬛ Deep navy/black
│ Secondary: #1a1f3a                  │  🔲 Dark blue-gray
│ Tertiary: #252b4a                   │  🔲 Medium blue-gray
└─────────────────────────────────────┘
```

### Text Colors
```
┌─────────────────────────────────────┐
│ Primary: #e2e8f0                    │  ⬜ Light slate
│ Secondary: #cbd5e1                  │  🔲 Lighter slate
│ Tertiary: #94a3b8                   │  🔲 Medium slate
└─────────────────────────────────────┘
```

### Gradients
```
┌─────────────────────────────────────┐
│ #0f172a → #1e4a7a → #1e293b        │  
│ Dark navy → Deep blue → Slate       │  Rich dark gradient
└─────────────────────────────────────┘
```

### Brand Accent
```
┌─────────────────────────────────────┐
│ Corporate Blue: #2C64B9             │  🔵 Same in both modes!
└─────────────────────────────────────┘
```

### UI Elements
```
Cards:      rgba(255, 255, 255, 0.05) with rgba(44, 100, 185, 0.3) border
Borders:    rgba(255, 255, 255, 0.1) (translucent white)
Buttons:    #2C64B9 background, #ffffff text
Links:      #4080d9 → #5b9fd9 on hover (lighter in dark mode)
```

---

## Side-by-Side Comparison

### Hero Section

**Light Mode:**
```
┌─────────────────────────────────────────────────────┐
│  Gradient: Soft blue tones (#e0e7ff → #f8fafc)     │
│                                                     │
│  QL Security                                        │
│  AI-Powered Cybersecurity Solutions                │
│  (#1e293b - dark text on light background)         │
│                                                     │
│  [Contact Us - #2C64B9 button]                     │
└─────────────────────────────────────────────────────┘
```

**Dark Mode:**
```
┌─────────────────────────────────────────────────────┐
│  Gradient: Rich dark blues (#0f172a → #1e293b)     │
│                                                     │
│  QL Security                                        │
│  AI-Powered Cybersecurity Solutions                │
│  (#e2e8f0 - light text on dark background)         │
│                                                     │
│  [Contact Us - #2C64B9 button]                     │
└─────────────────────────────────────────────────────┘
```

### Service Card

**Light Mode:**
```
┌─────────────────────────────────────┐
│ White card (#ffffff)                │
│ Light blue border                   │
│                                     │
│ 🔷 AI Security                      │
│ Dark text (#1e293b)                 │
│                                     │
│ Description in medium slate         │
│ (#475569)                           │
│                                     │
│ Learn More (#2C64B9) →              │
└─────────────────────────────────────┘
```

**Dark Mode:**
```
┌─────────────────────────────────────┐
│ Translucent card (rgba white 5%)    │
│ Blue border (rgba blue 30%)         │
│                                     │
│ 🔷 AI Security                      │
│ Light text (#e2e8f0)                │
│                                     │
│ Description in lighter slate        │
│ (#cbd5e1)                           │
│                                     │
│ Learn More (#4080d9) →              │
└─────────────────────────────────────┘
```

---

## Contrast Ratios (WCAG Compliance)

### Light Mode
```
Primary text on primary bg:    #1e293b on #ffffff = 13.5:1  ✅ AAA
Secondary text on primary bg:  #475569 on #ffffff = 7.2:1   ✅ AAA
Tertiary text on primary bg:   #64748b on #ffffff = 4.8:1   ✅ AA
Button text on accent:         #ffffff on #2C64B9 = 5.1:1   ✅ AA
```

### Dark Mode
```
Primary text on primary bg:    #e2e8f0 on #0a0e27 = 11.8:1  ✅ AAA
Secondary text on primary bg:  #cbd5e1 on #0a0e27 = 9.5:1   ✅ AAA
Tertiary text on primary bg:   #94a3b8 on #0a0e27 = 5.2:1   ✅ AA
Button text on accent:         #ffffff on #2C64B9 = 5.1:1   ✅ AA
```

All combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
Most exceed AAA standards (7:1 for normal text, 4.5:1 for large text).

---

## Common Component Patterns

### Glassmorphic Card

**Light Mode:**
```
Background:  rgba(255, 255, 255, 0.8)
Border:      rgba(44, 100, 185, 0.2)
Backdrop:    blur(10px)
Shadow:      0 4px 6px rgba(15, 23, 42, 0.08)
```

**Dark Mode:**
```
Background:  rgba(255, 255, 255, 0.1)
Border:      rgba(44, 100, 185, 0.4)
Backdrop:    blur(10px)
Shadow:      0 4px 6px rgba(0, 0, 0, 0.3)
```

### Glow Effects

**Light Mode:**
```
Subtle:      rgba(44, 100, 185, 0.08)
Strong:      rgba(44, 100, 185, 0.15)
```

**Dark Mode:**
```
Subtle:      rgba(44, 100, 185, 0.15)
Strong:      rgba(44, 100, 185, 0.3)
```

---

## Design Principles

### Consistency
- Corporate blue (#2C64B9) is the same in both themes
- Header remains blue (#2C64B9) in both themes
- Logo appearance consistent across themes

### Hierarchy
- Primary text most prominent (highest contrast)
- Secondary text for supporting content
- Tertiary text for metadata/less important info

### Depth
- Light mode: shadows for depth
- Dark mode: translucent layers and glows for depth

### Accessibility
- All text meets WCAG AA standards minimum
- Most combinations exceed AAA standards
- Smooth transitions honor prefers-reduced-motion

### Brand Identity
- Professional blue throughout
- Clean, modern aesthetic in both modes
- Quantum/tech feeling with gradients and glows
