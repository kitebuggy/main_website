# CSS Variable Quick Reference

Quick reference for all available CSS custom properties in the QL Security theme system.

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
var(--color-text-primary)    /* Primary text */
var(--color-text-secondary)  /* Secondary text */
var(--color-text-tertiary)   /* Tertiary text */
var(--color-text-inverse)    /* Inverse text (on dark backgrounds) */
```

## Brand Colors

```css
var(--color-accent)       /* Primary brand blue #2C64B9 */
var(--color-accent-light) /* Lighter accent */
var(--color-accent-dark)  /* Darker accent */
var(--color-accent-hover) /* Hover state */
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

## Footer

```css
var(--color-footer-bg)              /* Footer background */
var(--color-footer-text)            /* Footer primary text */
var(--color-footer-text-secondary)  /* Footer secondary text */
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
