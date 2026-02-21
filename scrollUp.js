const upArrow = document.getElementById("uparrow");

window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const progress = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    upArrow.style.background = `conic-gradient(greenyellow ${progress * 360}deg, #222 0)`;
});

upArrow.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
);