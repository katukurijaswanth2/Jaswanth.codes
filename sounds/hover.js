document.addEventListener("DOMContentLoaded", () => {
    const hoverSound = document.getElementById("hoverSound");

    if (!hoverSound) {
        console.warn("hoverSound element not found");
        return;
    }

    hoverSound.volume = 0.1;

    let lastPlayed = 0;
    const DELAY = 80; // prevents sound spam (tweakable)

    function playHover() {
        const now = Date.now();

        // Throttle rapid triggers
        if (now - lastPlayed < DELAY) return;
        lastPlayed = now;

        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    }

    document.addEventListener("mouseover", (e) => {
        const el = e.target.closest("a, button");

        // Only trigger when entering a new element
        if (!el || el === e.relatedTarget) return;

        playHover();
    });
});