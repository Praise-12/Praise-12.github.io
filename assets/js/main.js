/* ===============================
   REMOVE PRELOAD CLASS ON LOAD
=============================== */

window.addEventListener("load", () => {
    document.body.classList.remove("is-preload");
});


/* ===============================
   SCROLL REVEAL ANIMATIONS
=============================== */

const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

document.querySelectorAll("section, .project").forEach(el => {
    el.classList.add("reveal");   // hidden state
    revealObserver.observe(el);   // track it
});


/* ===============================
   SMOOTH SCROLL FOR INTERNAL LINKS
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetID = this.getAttribute("href");

        if (targetID.length > 1) {  // prevent "#"
            e.preventDefault();
            document.querySelector(targetID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
