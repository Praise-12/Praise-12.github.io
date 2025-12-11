document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.section-animate, #banner .hero-inner');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(function (el) {
        observer.observe(el);
    });
});
