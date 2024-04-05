function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  const projectVideos = document.querySelectorAll('.project-video');

  projectVideos.forEach(video => {
    const container = video.parentElement; // Get the video container
    container.addEventListener('mouseenter', () => video.play()); // Play video on hover
    container.addEventListener('mouseleave', () => video.pause()); // Pause video on mouseleave
  });

const typedText = document.getElementById('typed-text');
  const textArray = ["Front End Developer", "Software Engineer", "Web Dev", "Dev Ops"]; // Replace with your desired text options
  let currentTextIndex = 0;
  let typingSpeed = 150; // Adjust typing speed (milliseconds)
  let isDeleting = false;
  
  function typeWriter() {
    const currentText = textArray[currentTextIndex];
  
    if (isDeleting) {
      // Backspace functionality
      typedText.textContent = currentText.substring(0, typedText.textContent.length - 1);
      if (typedText.textContent === '') {
        isDeleting = false;
        currentTextIndex++;
        if (currentTextIndex === textArray.length) currentTextIndex = 0;
      }
    } else {
      // Typing functionality
      typedText.textContent += currentText.charAt(typedText.textContent.length);
      if (typedText.textContent === currentText) {
        isDeleting = true;
      }
    }
  
    setTimeout(typeWriter, isDeleting ? typingSpeed / 2 : typingSpeed);
  }
  
  typeWriter();
  



