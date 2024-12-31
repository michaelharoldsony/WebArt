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

    setTimeout(() => {
      document.querySelectorAll(".DP").forEach(element => {
          element.classList.add("s_pop");
      });
     
      
       
      

  }, 1);
  
  });

  

  