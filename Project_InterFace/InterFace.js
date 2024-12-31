document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const mouth = document.querySelector(".mouth");
  const face = document.querySelector(".face");
  const eyes = document.querySelectorAll(".whiteye");
  
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => link.classList.add("active"));
    link.addEventListener("mouseleave", () => link.classList.remove("active"));
  });

  eyes.forEach(eye => {
    eye.addEventListener("mouseenter", () => {
     
    
      eye.addEventListener("click", () => {
      eye.classList.replace("eye_out","a_eye");
      mouth.classList.replace("mouth1", "mouth2");
      face.classList.replace("n_face", "a_face");
      
    });

  });
    eye.addEventListener("mouseleave", () => {
      mouth.classList.replace("mouth2", "mouth1");
      face.classList.replace("a_face", "n_face");
      eye.classList.replace("a_eye","eye_out");
    });
  });
});
