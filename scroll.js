document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    );

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) return;

            const start = window.pageYOffset;
            const end = target.offsetTop;
            const distance = end - start;
            const duration = 1000;
            let startTime = null;

            function animateScroll(time) {
                if (!startTime) startTime = time;

                const progress = Math.min(
                    (time - startTime) / duration,
                    1
                );

                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, start + distance * ease);

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        });
    });

});
