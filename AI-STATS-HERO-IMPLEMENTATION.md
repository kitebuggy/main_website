# AI Stats Hero Implementation Guide

## Overview
This document describes the implementation of the animated AI adoption statistics hero section for the QL Security website home page.

## What Was Created

### 1. Component File: `_includes/components/hero-ai-stats.html`
A reusable Jekyll component that displays a 2x2 grid of animated doughnut charts with the following statistics:
- **70%** - "70% of knowledge workers now use AI weekly (up from 52% last year)"
- **71%** - "71% of organisations remain stuck in pilot or planning phases"
- **46%** - "46% of workers hide the fact that AI helped them complete work"
- **31%** - "Only 31% of organisations have any AI usage policy in place"

### 2. CSS File: `assets/css/stats-hero.css`
Comprehensive styling for the doughnut charts including:
- Grid layout for 2x2 statistics display
- SVG circle styling for the doughnut chart effect
- Responsive design (desktop, tablet, mobile)
- Theme support (light/dark mode) using CSS custom properties
- Accessibility considerations (prefers-reduced-motion support)
- No inline styles (follows DRY principles)

### 3. JavaScript File: `assets/js/stats-hero.js`
Animation logic that:
- Uses Intersection Observer API to trigger animations when charts scroll into view
- Animates circular progress from 0% to target percentage over 2 seconds
- Counts up the percentage numbers from 0 to target value
- Uses requestAnimationFrame for smooth 60fps animations
- Includes fallback for browsers without Intersection Observer
- Respects user's motion preferences

## Technical Implementation

### Doughnut Chart Structure
Each chart consists of:
```html
<svg viewBox="0 0 200 200">
  <!-- Background circle (light gray) -->
  <circle class="stat-circle-bg" cx="100" cy="100" r="80"></circle>
  
  <!-- Animated progress circle (brand blue) -->
  <circle class="stat-circle-progress" cx="100" cy="100" r="80"></circle>
</svg>

<!-- Centered percentage label -->
<div class="stat-percentage">
  <span class="stat-percentage-number">0</span>
  <span class="stat-percentage-symbol">%</span>
</div>
```

### Animation Technique
- **Circle Animation**: Uses `stroke-dasharray` and `stroke-dashoffset` to create the drawing effect
- **Number Animation**: Uses `requestAnimationFrame` with cubic easing for smooth counting
- **Timing**: Both animations run for 2 seconds with synchronized easing
- **Trigger**: Animations start when 30% of the section is visible in viewport

### Color Scheme
- **Progress Circle**: `#2C64B9` (brand blue) in light mode, `#4A90E2` (lighter blue) in dark mode
- **Background Circle**: Uses theme's border color at 20% opacity
- **Text**: Uses theme's text color variables for proper light/dark mode support

## Files Modified

1. **`_layouts/default.html`**
   - Added `stats-hero.css` to the CSS includes
   - Added `stats-hero.js` to the JavaScript includes

2. **`index.html`**
   - Added `{% include components/hero-ai-stats.html %}` between the main hero and services section

## Responsive Breakpoints

- **Desktop (>768px)**: Full-size charts (200px diameter), large text
- **Tablet (480px-768px)**: Medium charts (160px diameter), medium text
- **Mobile (<480px)**: Compact charts (140px diameter), smaller text

## Accessibility Features

1. **Semantic HTML**: Proper section and heading structure
2. **ARIA Labels**: Charts marked as `aria-hidden="true"` (decorative)
3. **Reduced Motion**: Respects `prefers-reduced-motion` preference
4. **Color Contrast**: Ensures sufficient contrast in both themes
5. **Focus Management**: Charts are non-interactive (no focus traps)

## Browser Support

- **Modern Browsers**: Full functionality with Intersection Observer and requestAnimationFrame
- **Legacy Browsers**: Graceful degradation (charts animate immediately on page load)
- **No JavaScript**: Charts display static at 0% (progressive enhancement)

## Testing Checklist

- [ ] Charts animate smoothly when scrolling into view
- [ ] Numbers count up from 0 to target percentage
- [ ] Animations respect prefers-reduced-motion setting
- [ ] Charts display correctly in light mode
- [ ] Charts display correctly in dark mode
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] No console errors in browser
- [ ] Page loads quickly (no blocking scripts)

## Customization Options

To modify the statistics in the future:

1. **Edit the component file**: `_includes/components/hero-ai-stats.html`
2. **Update data attributes**: Change `data-percentage` values
3. **Modify captions**: Update the `<p class="stat-caption">` text
4. **Adjust timing**: Change `ANIMATION_DURATION` and `COUNT_DURATION` in `stats-hero.js`
5. **Customize colors**: Modify CSS variables in `stats-hero.css`

## Performance Considerations

- **Lazy Loading**: Animations only trigger when visible (saves CPU)
- **RequestAnimationFrame**: Uses browser's optimal timing for 60fps
- **CSS Transforms**: Hardware-accelerated animations
- **Single Observation**: Each chart animates only once
- **Lightweight**: Total addition is <5KB gzipped

## Next Steps

1. Test the implementation in local development
2. Verify animations in different browsers
3. Check responsive behavior on various devices
4. Ensure theme toggle works correctly with the new section
5. Deploy to production when satisfied

## Support

If you need to modify or troubleshoot:
- Check browser console for JavaScript errors
- Verify CSS is loading (inspect network tab)
- Ensure JavaScript is enabled
- Test with browser DevTools' responsive mode
