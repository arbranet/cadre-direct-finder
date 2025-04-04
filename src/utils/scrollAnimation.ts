
export const initScrollAnimation = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  };

  // Run on initial load
  setTimeout(() => {
    animateOnScroll();
  }, 100);

  // Add event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Clean up function
  return () => window.removeEventListener('scroll', animateOnScroll);
};
