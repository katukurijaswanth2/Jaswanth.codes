const upArrow = document.getElementById("uparrow");

// Scroll progress indicator
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = totalHeight > 0 ? scrollTop / totalHeight : 0;
    const angle = percent * 360;

    upArrow.style.background =
        `conic-gradient(greenyellow ${angle}deg, #222 ${angle}deg)`;
});

// Scroll to top on click (smooth)
upArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
