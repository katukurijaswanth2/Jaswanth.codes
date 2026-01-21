document.addEventListener("DOMContentLoaded", () => {

    const upArrow = document.getElementById("uparrow");
    if (!upArrow) return;

    let isAnimating = false; // lock to prevent multiple scrolls

    // ------------------ Scroll progress ------------------
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
        const degree = scrollPercent * 360;

        upArrow.style.background = `conic-gradient(greenyellow ${degree}deg, #222 ${degree}deg)`;
    });

    // ------------------ Ultra smooth scroll to top ------------------
    function scrollToTop() {
        if (isAnimating) return; // ignore clicks while scrolling
        isAnimating = true;

        let currentScroll = window.pageYOffset;
        let velocity = Math.max(currentScroll * 0.08, 20); // minimum speed for very short pages

        function animate() {
            if (currentScroll <= 0) {
                window.scrollTo(0, 0);
                isAnimating = false;
                return;
            }

            currentScroll -= velocity;
            velocity *= 0.92; // friction slows it down gradually

            window.scrollTo(0, currentScroll);
            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    // ------------------ Click ONLY ------------------
    upArrow.addEventListener("click", scrollToTop);

    // Optional: make hover just a visual effect (no JS)
    upArrow.onmouseenter = null;
    upArrow.onmouseover = null;

});

// header scroll
    function smoothScrollTo(target, duration = 1200) {
            const start = window.pageYOffset;
            const end = target.getBoundingClientRect().top + start;
            const distance = end - start;
            let startTime = null;

            function easeInOutCubic(t) {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            function animation(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutCubic(progress);

                window.scrollTo(0, start + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) smoothScrollTo(target);
            });
        });