/**
 * QL Security Theme Toggle
 * Manages light/dark mode with localStorage persistence and system preference detection
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ql-theme';
  
  // Theme management functions
  const ThemeManager = {
    
    // Get the current theme from storage or system preference
    getPreferredTheme: function() {
      // Check localStorage first
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (stored === 'light' || stored === 'dark')) {
        return stored;
      }
      
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      
      // Default to dark mode (Jason's current beautiful design)
      return 'dark';
    },

    // Set the theme on the document and persist to storage
    setTheme: function(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEY, theme);
      
      // Update toggle button state if it exists
      this.updateToggleIcon(theme);
    },

    // Update the toggle button icon visibility
    updateToggleIcon: function(theme) {
      const sunIcon = document.getElementById('theme-icon-sun');
      const moonIcon = document.getElementById('theme-icon-moon');
      
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
      
      const toggleButton = document.getElementById('theme-toggle');
      if (toggleButton) {
        toggleButton.setAttribute('aria-label', 
          theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
      }
    },

    // Toggle between light and dark modes
    toggle: function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    },

    // Initialize theme on page load
    init: function() {
      const theme = this.getPreferredTheme();
      this.setTheme(theme);
      
      // Listen for system theme changes
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          // Only auto-switch if user hasn't manually set a preference
          if (!localStorage.getItem(STORAGE_KEY)) {
            this.setTheme(e.matches ? 'dark' : 'light');
          }
        });
      }
    }
  };

  // Initialize immediately to prevent flash of wrong theme
  ThemeManager.init();

  // Make toggle function available globally
  window.toggleTheme = function() {
    ThemeManager.toggle();
  };

  // Initialize again when DOM is ready (for toggle button updates)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      ThemeManager.init();
    });
  }
})();
