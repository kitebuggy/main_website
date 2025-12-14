// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('site-header');
  const topbar = document.getElementById('header-topbar');
  
  if (window.scrollY > 50) {
    header.classList.add('bg-[#2C64B9]', 'shadow-lg', 'shadow-black/20');
    header.classList.remove('bg-[#2C64B9]/95');
    topbar.classList.add('h-0', 'opacity-0');
    topbar.classList.remove('h-12', 'opacity-100');
  } else {
    header.classList.remove('bg-[#2C64B9]', 'shadow-lg', 'shadow-black/20');
    header.classList.add('bg-[#2C64B9]/95');
    topbar.classList.remove('h-0', 'opacity-0');
    topbar.classList.add('h-12', 'opacity-100');
  }
});

// Mobile menu toggle
document.getElementById('mobile-menu-toggle')?.addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});
