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



