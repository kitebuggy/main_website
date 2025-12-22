/**
 * AI Stats Hero - Doughnut Chart Animations
 * Animates circular progress charts when they come into view
 */

(function() {
  'use strict';

  // Configuration
  const ANIMATION_DURATION = 2000; // milliseconds
  const COUNT_DURATION = 2000; // milliseconds
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
              animateStatItem(entry.target);
              entry.target.classList.add('animated');
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
      // Fallback for browsers without Intersection Observer
      statItems.forEach(item => animateStatItem(item));
    }
  }

  /**
   * Animate a single stat item (chart + number)
   */
  function animateStatItem(item) {
    const progressCircle = item.querySelector('.stat-circle-progress');
    const percentageElement = item.querySelector('.stat-percentage');
    const numberElement = item.querySelector('.stat-percentage-number');
    const targetPercentage = parseInt(item.dataset.percentage) || 0;

    // Animate the circular progress
    animateCircle(progressCircle, targetPercentage);

    // Animate the number count-up
    animateNumber(numberElement, percentageElement, targetPercentage);
  }

  /**
   * Animate the circular progress from 0 to target percentage
   */
  function animateCircle(circle, targetPercentage) {
    if (!circle) return;

    // Calculate the stroke-dashoffset for the target percentage
    // Formula: circumference - (circumference * percentage / 100)
    const targetOffset = CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * targetPercentage / 100);

    // Use requestAnimationFrame for smooth animation
    const startTime = performance.now();
    const startOffset = CIRCLE_CIRCUMFERENCE;

    function updateCircle(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      const currentOffset = startOffset - ((startOffset - targetOffset) * eased);
      circle.style.strokeDashoffset = currentOffset;

      if (progress < 1) {
        requestAnimationFrame(updateCircle);
      } else {
        circle.classList.add('animated');
      }
    }

    requestAnimationFrame(updateCircle);
  }

  /**
   * Animate the number counting from 0 to target percentage
   */
  function animateNumber(numberElement, percentageElement, targetPercentage) {
    if (!numberElement || !percentageElement) return;

    percentageElement.classList.add('counting');
    
    const startTime = performance.now();
    const startValue = 0;

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / COUNT_DURATION, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.round(startValue + (targetPercentage - startValue) * eased);
      numberElement.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        numberElement.textContent = targetPercentage;
      }
    }

    requestAnimationFrame(updateNumber);
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
