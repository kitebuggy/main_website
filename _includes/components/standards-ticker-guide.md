# Standards Ticker Component - Usage Guide

## Overview
The standards ticker component displays a continuously scrolling list of standards, regulations, and frameworks that QL Security works with. Text appears in grey and transitions to QL Security blue on hover.

## Files Created
- `_includes/components/standards-ticker.html` - The ticker component
- `_data/standards.yml` - Standards data file (optional)
- `assets/css/layouts.css` - CSS styles added for `.standards-badge`

## Basic Usage

### 1. Using Data File (Recommended)
The simplest way to use the component:

```liquid
{% include components/standards-ticker.html %}
```

This automatically pulls standards from `_data/standards.yml`.

### 2. Custom Title and Subtitle

```liquid
{% include components/standards-ticker.html 
   title="Regulatory Expertise"
   subtitle="Comprehensive coverage across global standards"
%}
```

### 3. Custom Speed

```liquid
{% include components/standards-ticker.html 
   speed="30"
%}
```
Speed is in seconds (default: 45). Lower = faster.

### 4. Inline Standards List

```liquid
{% assign my_standards = "ISO 9001,ISO 27001,GDPR,SOC 2" | split: "," %}
{% for std in my_standards %}
  {% assign standard_obj = standard_obj | push: {"name": std} %}
{% endfor %}

{% include components/standards-ticker.html 
   standards=standard_obj
%}
```

## Managing Standards

### Edit the Data File
To add, remove, or reorder standards, edit `_data/standards.yml`:

```yaml
- name: "ISO 9001"
  category: "Quality Management"
  
- name: "New Standard"
  category: "Category Name"
```

The `category` field is optional metadata (not currently displayed but available for future use).

## Styling Details

### Colors
- **Light Mode**: Grey text (`#64748b`) → QL Blue (`#2C64B9`) on hover
- **Dark Mode**: Lighter grey (`#94a3b8`) → Lighter blue (`#4080d9`) on hover

### Typography
- Font size: 1.125rem (18px)
- Font weight: 600 (semibold)
- Smooth 0.3s color transition

### Accessibility
- Respects `prefers-reduced-motion` - disables transitions for users who prefer less motion
- Ticker pauses on hover (inherited from `.ticker-track` styles)
- Semantic HTML with proper headings

## Component Structure

```
.container
  └── .max-w-6xl (white box, rounded)
      ├── <h3> Title
      ├── <p> Subtitle
      └── .overflow-hidden
          └── .ticker-track (animated)
              └── .ticker-item × 20 (duplicated for seamless loop)
                  └── .standards-badge (text span)
```

## Integration Examples

### On Homepage
```liquid
{% include components/standards-ticker.html 
   title="Standards & Frameworks"
   subtitle="Expert guidance across industry-leading standards"
%}
```

### On Services Page
```liquid
{% include components/standards-ticker.html 
   title="Regulatory Compliance"
   subtitle="Helping you navigate complex requirements"
   speed="35"
%}
```

### On About Page
```liquid
{% include components/standards-ticker.html 
   title="Our Expertise"
   subtitle="Certified professionals with deep regulatory knowledge"
%}
```

## Customization Options

### Change Animation Speed
Edit the `speed` parameter (in seconds):
- Fast: 25-30s
- Medium: 35-45s (default: 45)
- Slow: 50-60s

### Modify Badge Styling
Edit `.standards-badge` in `assets/css/layouts.css`:
- Change font size: `font-size: 1.125rem;`
- Change font weight: `font-weight: 600;`
- Change hover color: `color: #2C64B9;`
- Change transition speed: `transition: color 0.3s ease;`

### White Box Styling
The component uses your existing theme classes:
- `bg-white dark:bg-slate-800` - Background color
- `rounded-2xl` - Border radius
- `shadow-lg` - Box shadow
- `p-8 lg:p-12` - Padding

All theme colors are inherited from your `theme.css` custom properties.

## Maintenance

### Adding New Standards
1. Edit `_data/standards.yml`
2. Add new entry with `name` and optional `category`
3. Jekyll will rebuild automatically (if using watch mode)

### Removing Standards
1. Delete the entry from `_data/standards.yml`
2. Rebuild site

### Reordering Standards
Simply reorder the entries in `_data/standards.yml` - they display in file order.

## Browser Compatibility
- Modern browsers: Full support
- Hover effects: Desktop/mouse devices
- Touch devices: Show hover state on tap
- Reduced motion: Respects system preferences

## Performance
- Pure CSS animation (hardware accelerated)
- No JavaScript required for animation (JS only sets speed variable)
- Lightweight: ~10 duplicated text elements
- No images, no external dependencies
