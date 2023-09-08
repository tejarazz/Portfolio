var tl = gsap.timeline();

tl.from("nav", {
    duration: 0.8,
    delay: 0.8,
    opacity: 0,
    y: -100,
});

tl.from(".text", {
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    x: -100,
});

tl.from(".img", {
    scale: 0,
    opacity: 0,
});

gsap.from("#projects", {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#projects",
        start: "5% center",
        end: "50% center",
        scrub: 1,
    },
});

gsap.from("#certificates", {
    duration: 1,
    delay: 0.5,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#certificates",
        start: "5% center",
        end: "50% center",
        scrub: 1,
    },
});

gsap.from("#contact", {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#contact",
        start: "5% center",
        end: "50% center",
        scrub: 1,
    },
});


var menu = document.querySelector("header nav .nav-links");
var icon = document.querySelector(".ic");

icon.addEventListener("click", () => {
    menu.classList.toggle("open");
});