# Light/Dark Theme System Implementation

## Overview

The QL Security website now supports both light and dark themes with seamless switching, user preference persistence, and system preference detection. The implementation uses CSS custom properties (CSS variables) for maximum flexibility and maintainability.

## Features

✅ **Light and Dark Modes** - Two professionally designed color schemes  
✅ **User Preference Persistence** - Choices saved in localStorage  
✅ **System Preference Detection** - Respects OS-level theme preference  
✅ **Smooth Transitions** - Elegant 200ms color transitions  
✅ **No Flash of Unstyled Content (FOUC)** - Theme loads before render  
✅ **Accessibility** - Maintains WCAG contrast ratios in both modes  
✅ **Brand Consistency** - Corporate blue (#2C64B9) prominent in both themes  

## Architecture

### 1. CSS Variables System (`/assets/css/theme.css`)

The theme system uses CSS custom properties defined at `:root` (light mode) and `[data-theme="dark"]` (dark mode). This provides a single source of truth for all colors.

**Color Categories:**
- Background colors (primary, secondary, tertiary, gradients)
- Text colors (primary, secondary, tertiary, inverse)
- Brand colors (accent, accent-light, accent-dark)
- UI element colors (borders, cards, headers, footers)
- Interactive elements (buttons, links, inputs)
- Special effects (glows, overlays, glass morphism)
- Status colors (success, warning, error, info)

**Example Usage in HTML:**
```html
<div style="background-color: var(--color-card-bg); color: var(--color-text-primary);">
  Content here
</div>
```

**Example Usage in CSS:**
```css
.my-component {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border);
  color: var(--color-text-primary);
}
```

### 2. Theme Toggle JavaScript (`/assets/js/theme-toggle.js`)

Manages theme state and switching functionality.

**Key Functions:**
- `getPreferredTheme()` - Determines initial theme (localStorage → system → default)
- `setTheme(theme)` - Applies theme to document and updates localStorage
- `toggleTheme()` - Switches between light and dark
- `updateToggleIcon(theme)` - Updates sun/moon icon visibility

**Theme Priority:**
1. User's explicit choice (stored in localStorage)
2. System preference (from `prefers-color-scheme`)
3. Default (dark mode)

**Storage:**
- Key: `'ql-theme'`
- Values: `'light'` or `'dark'`

### 3. Header Integration

The theme toggle button is located in the header alongside the Contact Us button.

**Toggle Button Features:**
- Sun icon (☀️) shown in dark mode
- Moon icon (🌙) shown in light mode  
- Smooth icon transitions
- Accessible (ARIA label, keyboard support)
- Responsive hover effects

## Color Palettes

### Light Mode Colors

**Backgrounds:**
- Primary: `#ffffff` (white)
- Secondary: `#f8fafc` (very light blue-gray)
- Tertiary: `#f1f5f9` (light blue-gray)
- Gradient: `#e0e7ff → #dbeafe → #f8fafc`

**Text:**
- Primary: `#1e293b` (dark slate)
- Secondary: `#475569` (medium slate)
- Tertiary: `#64748b` (light slate)

**Brand:**
- Accent: `#2C64B9` (corporate blue - same in both modes)

**Cards/UI:**
- Card background: `#ffffff` with `rgba(44, 100, 185, 0.1)` border
- Borders: `#e2e8f0` (light gray)

### Dark Mode Colors

**Backgrounds:**
- Primary: `#0a0e27` (deep navy)
- Secondary: `#1a1f3a` (dark blue-gray)
- Tertiary: `#252b4a` (medium blue-gray)
- Gradient: `#0f172a → #1e4a7a → #1e293b`

**Text:**
- Primary: `#e2e8f0` (light slate)
- Secondary: `#cbd5e1` (lighter slate)
- Tertiary: `#94a3b8` (medium slate)

**Brand:**
- Accent: `#2C64B9` (corporate blue - same in both modes)

**Cards/UI:**
- Card background: `rgba(255, 255, 255, 0.05)` with `rgba(44, 100, 185, 0.3)` border
- Borders: `rgba(255, 255, 255, 0.1)` (translucent white)

## Implementation Details

### Load Order (Critical for FOUC Prevention)

In `_layouts/default.html`, the load order is:

```html
<head>
  <!-- 1. Theme Toggle Script - FIRST to prevent FOUC -->
  <script src="/assets/js/theme-toggle.js"></script>
  
  <!-- 2. Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- 3. Custom CSS with theme variables -->
  <link rel="stylesheet" href="/assets/css/theme.css">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/layouts.css">
</head>
```

The theme JavaScript runs immediately (not waiting for DOMContentLoaded) to set the theme attribute before any rendering occurs.

### Theme Transitions

All color properties have smooth 200ms transitions:

```css
*,
*::before,
*::after {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
```

Users with `prefers-reduced-motion` have transitions disabled for accessibility.

### System Preference Watching

The JavaScript watches for OS-level theme changes:

```javascript
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only auto-switch if user hasn't set explicit preference
  if (!localStorage.getItem(STORAGE_KEY)) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
```

## How to Use CSS Variables in Components

### In HTML Files (Inline Styles)

```html
<!-- Card component -->
<div style="background-color: var(--color-card-bg); border-color: var(--color-card-border);">
  <h2 style="color: var(--color-text-primary);">Heading</h2>
  <p style="color: var(--color-text-secondary);">Description</p>
  <a href="#" style="color: var(--color-accent);">Learn More</a>
</div>
```

### In CSS Files

```css
.service-card {
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  color: var(--color-text-primary);
  box-shadow: 0 4px 6px var(--color-card-shadow);
}

.service-card:hover {
  background-color: var(--color-card-hover-bg);
}

.service-card h3 {
  color: var(--color-accent);
}

.service-card p {
  color: var(--color-text-secondary);
}
```

### With Tailwind Classes

For simple elements, continue using Tailwind with dark: prefix:

```html
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  Content
</div>
```

## Migration Guide

### Converting Existing Components

**Before (Hardcoded Colors):**
```html
<div style="background: #0a0e27; color: #ffffff;">
  Content
</div>
```

**After (Theme Variables):**
```html
<div style="background-color: var(--color-bg-primary); color: var(--color-text-primary);">
  Content
</div>
```

**Before (Hardcoded CSS):**
```css
.hero {
  background: linear-gradient(to bottom right, #0f172a, #1e4a7a, #1e293b);
  color: #ffffff;
}
```

**After (Theme Variables):**
```css
.hero {
  background: linear-gradient(
    to bottom right, 
    var(--color-bg-gradient-start),
    var(--color-bg-gradient-middle),
    var(--color-bg-gradient-end)
  );
  color: var(--color-text-primary);
}
```

## Testing Checklist

- [ ] Test theme toggle button functionality
- [ ] Verify theme persists across page navigation
- [ ] Check localStorage is saving preference
- [ ] Test with system dark mode enabled
- [ ] Test with system light mode enabled
- [ ] Verify no FOUC on page load
- [ ] Test all pages in both themes
- [ ] Check text contrast ratios (WCAG AA minimum)
- [ ] Test with browser JavaScript disabled (graceful degradation)
- [ ] Verify smooth transitions between themes
- [ ] Test on mobile devices
- [ ] Check accessibility (keyboard navigation, screen readers)

## Browser Support

- ✅ Chrome 49+ (March 2016)
- ✅ Firefox 31+ (July 2014)
- ✅ Safari 9.1+ (March 2016)
- ✅ Edge 15+ (April 2017)

All modern browsers support CSS custom properties and localStorage.

## Troubleshooting

### Theme not persisting
- Check browser localStorage is enabled
- Verify `theme-toggle.js` is loading correctly
- Check browser console for JavaScript errors

### Flash of unstyled content (FOUC)
- Ensure `theme-toggle.js` loads in `<head>` before CSS
- Verify script runs immediately (not waiting for DOMContentLoaded)

### Colors not changing
- Check CSS variable names match in theme.css and usage
- Verify `data-theme` attribute is being set on `<html>` element
- Clear browser cache

### Toggle button not working
- Check button has `id="theme-toggle"`
- Verify icon SVGs have correct IDs (`theme-icon-sun`, `theme-icon-moon`)
- Check browser console for JavaScript errors

## Future Enhancements

Potential improvements for future iterations:

1. **Additional Themes** - Add more theme options (e.g., high contrast, sepia)
2. **Theme Preview** - Live preview before switching
3. **Scheduled Switching** - Auto-switch based on time of day
4. **Per-Section Themes** - Different themes for different site sections
5. **Theme Customization** - Allow users to customize colors
6. **Color Blindness Modes** - Optimized palettes for different types of color blindness

## Files Modified

1. **New:** `/assets/js/theme-toggle.js` - Theme management JavaScript
2. **New:** `/assets/css/theme.css` - CSS custom properties and theme definitions
3. **Modified:** `/_layouts/default.html` - Added theme script and CSS
4. **Modified:** `/_includes/components/header.html` - Added theme toggle button
5. **Modified:** `/assets/css/main.css` - Converted to use CSS variables

## Maintenance

### Adding New Colors

1. Add the variable to both `:root` and `[data-theme="dark"]` in `theme.css`
2. Use descriptive, semantic names (e.g., `--color-card-accent`, not `--color-blue-2`)
3. Document the purpose and usage
4. Test in both light and dark modes

### Updating Existing Colors

1. Modify the value in `theme.css` for the relevant theme(s)
2. Test all components that use that variable
3. Ensure WCAG contrast ratios are maintained

## Support

For questions or issues with the theme system, refer to:
- This documentation
- `theme.css` for available color variables
- `theme-toggle.js` for theme management logic
- ARCHITECTURE.md for overall project structure
