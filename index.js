document.addEventListener("DOMContentLoaded", function () {  
    const navLinks = document.querySelectorAll(".nav-link");  
    navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        link.classList.add("active");
      });
      link.addEventListener("mouseleave", () => {
        link.classList.remove("active");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".mainlogo").classList.add("animate-pop");
        document.querySelector(".WebArt").classList.add("animate-slidein");
        document.querySelector(".Discover").classList.add("s_pop");
        

    }, 1);
});
  