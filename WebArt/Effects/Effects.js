document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelectorAll(".content").forEach(element => {
            element.classList.add("content-slidein");
        });

        document.querySelectorAll(".hover1").forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.classList.add("hover-effect1_in");
                element.classList.remove("hover-effect1_out");
                
            });
            element.addEventListener("mouseleave", () => {
                element.classList.add("hover-effect1_out");
                element.classList.remove("hover-effect1_in");
                
            });
        });
        document.querySelectorAll(".hover2").forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.classList.add("hover-effect2_in");
                element.classList.remove("hover-effect2_out");
                
            });
            element.addEventListener("mouseleave", () => {
                element.classList.add("hover-effect2_out");
                element.classList.remove("hover-effect2_in");
                
            });
        });

        document.querySelectorAll(".hover3").forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.classList.add("hover-effect3_in");
                element.classList.remove("hover-effect3_out");
                
            });
            element.addEventListener("mouseleave", () => {
                element.classList.add("hover-effect3_out");
                element.classList.remove("hover-effect3_in");
                
            });
        });


        document.querySelectorAll(".b_hover").forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.classList.add("hover-effectb_in");
                element.classList.remove("hover-effectb_out");
                
            });
            element.addEventListener("mouseleave", () => {
                element.classList.add("hover-effectb_out");
                element.classList.remove("hover-effectb_in");
                
            });
        });

        document.querySelector(".header").classList.add("animate-fadein");
        document.querySelector("footer").classList.add("animate-slidein");
    }, 1);
});
