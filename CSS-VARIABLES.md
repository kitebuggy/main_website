# CSS Variable Quick Reference

Complete reference for all available CSS custom properties in the QL Security theme system.

## Background Colors

```css
var(--color-bg-primary)         /* Main background */
var(--color-bg-secondary)       /* Secondary background */
var(--color-bg-tertiary)        /* Tertiary background */
var(--color-bg-gradient-start)  /* Gradient start */
var(--color-bg-gradient-middle) /* Gradient middle */
var(--color-bg-gradient-end)    /* Gradient end */
```

## Text Colors

```css
var(--color-text-primary)    /* Primary text - highest contrast */
var(--color-text-secondary)  /* Secondary text - body copy */
var(--color-text-tertiary)   /* Tertiary text - less important */
var(--color-text-inverse)    /* Inverse text (on dark backgrounds) */
```

## Brand Colors

```css
var(--color-accent)       /* Primary brand blue #2C64B9 */
var(--color-accent-light) /* Lighter accent */
var(--color-accent-dark)  /* Darker accent */
var(--color-accent-hover) /* Hover state */
var(--color-accent-10)    /* 10% opacity accent */
var(--color-accent-20)    /* 20% opacity accent */
var(--color-accent-30)    /* 30% opacity accent */
```

## UI Elements

```css
var(--color-border)        /* Standard borders */
var(--color-border-light)  /* Lighter borders */
var(--color-border-accent) /* Accent-colored borders */
```

## Cards

```css
var(--color-card-bg)       /* Card background */
var(--color-card-border)   /* Card border */
var(--color-card-shadow)   /* Card shadow */
var(--color-card-hover-bg) /* Card hover background */
```

## Header

```css
var(--color-header-bg)          /* Header background */
var(--color-header-border)      /* Header border */
var(--color-header-text)        /* Header text */
var(--color-header-text-hover)  /* Header text hover */
```

## Hero Section (with background)

```css
var(--color-hero-bg)                  /* Hero background */
var(--color-hero-bg-gradient-start)   /* Hero gradient start */
var(--color-hero-bg-gradient-end)     /* Hero gradient end */
var(--color-hero-text)                /* Hero primary text */
var(--color-hero-text-secondary)      /* Hero secondary text */
var(--color-hero-badge-bg)            /* Hero badge background */
var(--color-hero-badge-border)        /* Hero badge border */
var(--color-hero-badge-text)          /* Hero badge text */
var(--color-hero-accent)              /* Hero accent color */
```

## Inverted Hero Box (Jason's signature style!)

```css
var(--hero-box-bg)                 /* Box background (inverts per theme) */
var(--hero-box-bg-gradient-start)  /* Box gradient start */
var(--hero-box-bg-gradient-end)    /* Box gradient end */
var(--hero-box-text)               /* Box primary text */
var(--hero-box-text-secondary)     /* Box secondary text */
var(--hero-box-border)             /* Box border */
var(--hero-box-shadow)             /* Box shadow */
```

## Footer

```css
var(--color-footer-bg)              /* Footer background */
var(--color-footer-text)            /* Footer primary text */
var(--color-footer-text-secondary)  /* Footer secondary text */
var(--color-footer-link)            /* Footer link color */
var(--color-footer-link-hover)      /* Footer link hover */
```

## Interactive Elements

```css
var(--color-link)                    /* Link color */
var(--color-link-hover)              /* Link hover */
var(--color-button-primary-bg)       /* Primary button background */
var(--color-button-primary-text)     /* Primary button text */
var(--color-button-primary-hover)    /* Primary button hover */
var(--color-button-secondary-bg)     /* Secondary button background */
var(--color-button-secondary-text)   /* Secondary button text */
var(--color-button-secondary-hover)  /* Secondary button hover */
```

## Special Effects

```css
var(--color-glow)         /* Subtle glow effect */
var(--color-glow-strong)  /* Strong glow effect */
var(--color-overlay)      /* Overlay color */
var(--color-glass-bg)     /* Glassmorphic background */
var(--color-glass-border) /* Glassmorphic border */
var(--color-orb-1)        /* Background orb 1 */
var(--color-orb-2)        /* Background orb 2 */
```

## Form Elements

```css
var(--color-input-bg)     /* Input background */
var(--color-input-border) /* Input border */
var(--color-input-focus)  /* Input focus state */
var(--color-input-text)   /* Input text */
```

## Status Colors

```css
var(--color-success)  /* Success/green */
var(--color-warning)  /* Warning/amber */
var(--color-error)    /* Error/red */
var(--color-info)     /* Info/blue */
```

---

## Common Usage Examples

### Basic Card
```css
.card {
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  color: var(--color-text-primary);
}
```

### Button
```css
.btn {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  border: 1px solid var(--color-border);
}

.btn:hover {
  background-color: var(--color-button-primary-hover);
}
```

### Form Input
```css
input {
  background: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  color: var(--color-input-text);
}

input:focus {
  border-color: var(--color-input-focus);
}
```

### Glassmorphic Container
```css
.glass-container {
  background-color: var(--color-glass-bg);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(10px);
}
```

### Section with Gradient
```css
.hero-section {
  background: linear-gradient(
    to bottom right,
    var(--color-bg-gradient-start),
    var(--color-bg-gradient-middle),
    var(--color-bg-gradient-end)
  );
}
```

### Link Styling
```css
a {
  color: var(--color-link);
}

a:hover {
  color: var(--color-link-hover);
}
```

### Prose/Markdown Content
```css
.prose {
  color: var(--color-text-secondary);
}

.prose h1,
.prose h2,
.prose h3 {
  color: var(--color-text-primary);
}

.prose a {
  color: var(--color-link);
}

.prose code {
  color: var(--color-accent-light);
  background: var(--color-accent-10);
}
```

---

## DRY Principles

### ✅ DO: Use CSS Variables
```css
/* Good - adapts to both themes automatically */
.my-component {
  background: var(--color-card-bg);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

### ❌ DON'T: Hardcode Colors
```css
/* Bad - only works in one theme */
.my-component {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
}
```

### ✅ DO: Define Once, Use Everywhere
All theme colors are defined in `theme.css` in two places:
- `:root { }` for light mode (default)
- `[data-theme="dark"] { }` for dark mode

This makes theme changes as simple as updating one file!

### ❌ DON'T: Duplicate Color Definitions
Never define the same color in multiple files. If you find yourself writing colors in:
- `main.css` - move to `theme.css`
- `layouts.css` - move to `theme.css`
- Component files - use variables instead

---

## How Themes Work

1. **Default State (Light Mode)**
   - CSS variables defined in `:root`
   - Applied when no `data-theme` attribute is set

2. **Dark Mode**
   - CSS variables redefined in `[data-theme="dark"]`
   - Applied when `<html data-theme="dark">` is set
   - JavaScript toggles this attribute

3. **Automatic Updates**
   - All components using variables update instantly
   - Smooth 200ms transitions between themes
   - `prefers-reduced-motion` support built-in

---

## Adding New Colors

When you need a new color:

1. **Add to both theme blocks in `theme.css`:**
   ```css
   :root {
     --color-my-new-color: #value-for-light;
   }
   
   [data-theme="dark"] {
     --color-my-new-color: #value-for-dark;
   }
   ```

2. **Use in your CSS:**
   ```css
   .my-component {
     color: var(--color-my-new-color);
   }
   ```

3. **Document here in this file!**

---

## Architecture Benefits

This CSS variable system provides:

- ✅ **DRY Code** - Colors defined once, used everywhere
- ✅ **Easy Theme Changes** - Update one file, entire site updates
- ✅ **Maintainability** - Clear separation of concerns
- ✅ **Flexibility** - Easy to add new themes or color schemes
- ✅ **Consistency** - Impossible to have stray hardcoded colors
- ✅ **Accessibility** - Proper contrast ratios baked into variables
- ✅ **Performance** - CSS variables are fast and native
