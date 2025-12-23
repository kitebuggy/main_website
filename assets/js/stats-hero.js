/**
 * AI Stats Hero - Doughnut Chart Animations
 * Animates circular progress charts when they come into view
 */

(function() {
  'use strict';

  // Configuration
  const ANIMATION_DURATION = 1500; // milliseconds
  const STAGGER_DELAY = 1800; // milliseconds between each chart starting
  const CIRCLE_CIRCUMFERENCE = 502.65; // 2 * PI * 80 (radius)

  /**
   * Initialize stats animations when DOM is ready
   */
  function initStatsAnimations() {
    const statItems = document.querySelectorAll('.stat-item');
    
    if (statItems.length === 0) return;

    // Check for Intersection Observer support
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
              // Find the index of this stat item for staggered animation
              const allItems = document.querySelectorAll('.stat-item');
              const index = Array.from(allItems).indexOf(entry.target);
              const delay = index * STAGGER_DELAY;
              
              // Animate with delay
              setTimeout(() => {
                animateStatItem(entry.target);
                entry.target.classList.add('animated');
              }, delay);
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the element is visible
          rootMargin: '0px'
        }
      );

      statItems.forEach(item => observer.observe(item));
    } else {
      // Fallback for browsers without Intersection Observer - still stagger them
      statItems.forEach((item, index) => {
        const delay = index * STAGGER_DELAY;
        setTimeout(() => animateStatItem(item), delay);
      });
    }
  }

  /**
   * Animate a single stat item (chart + number) in perfect sync
   */
  function animateStatItem(item) {
    const progressCircle = item.querySelector('.stat-circle-progress');
    const percentageElement = item.querySelector('.stat-percentage');
    const numberElement = item.querySelector('.stat-percentage-number');
    const targetPercentage = parseInt(item.dataset.percentage) || 0;

    if (!progressCircle || !numberElement || !percentageElement) return;

    percentageElement.classList.add('counting');
    
    const startTime = performance.now();

    // Single animation loop for both circle and number
    function updateAnimation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      
      // Easing function (ease-out cubic) - same for both animations
      const eased = 1 - Math.pow(1 - progress, 3);
      
      // Calculate current percentage (this is the SAME value for both)
      const currentPercentage = targetPercentage * eased;
      
      // Update number - round for display
      numberElement.textContent = Math.round(currentPercentage);
      
      // Update circle - use exact percentage (not rounded)
      // The circle starts "full hidden" at circumference, and reduces toward 0
      // To show X%, we need offset = circumference * (100 - X) / 100
      const percentToHide = 100 - currentPercentage;
      const currentOffset = CIRCLE_CIRCUMFERENCE * (percentToHide / 100);
      progressCircle.style.strokeDashoffset = currentOffset;

      if (progress < 1) {
        requestAnimationFrame(updateAnimation);
      } else {
        // Ensure final values are exact
        const finalOffset = CIRCLE_CIRCUMFERENCE * (100 - targetPercentage) / 100;
        progressCircle.style.strokeDashoffset = finalOffset;
        numberElement.textContent = targetPercentage;
        progressCircle.classList.add('animated');
      }
    }

    requestAnimationFrame(updateAnimation);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStatsAnimations);
  } else {
    initStatsAnimations();
  }

  // Re-initialize on page transitions (for SPAs or dynamic content)
  window.addEventListener('load', initStatsAnimations);

})();
