const nav = document.getElementById("nav");
const trigger = document.getElementById("nav-trigger");

const observer = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            nav.classList.add("is-visible");
        } else {
            nav.classList.remove("is-visible");
        }
    },
    {
        rootMargin: "0px",
        threshold: 0
    }
);

observer.observe(trigger);
