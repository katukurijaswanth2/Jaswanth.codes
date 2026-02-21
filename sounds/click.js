document.addEventListener("DOMContentLoaded", () => {
    const clickSound = document.getElementById("clickSound");

    if (!clickSound) {
        console.warn("clickSound not found");
        return;
    }

    clickSound.volume = 0.2;

    function playClick() {
        clickSound.currentTime = 0;
        clickSound.play().catch(err => console.log("Playback blocked:", err));
    }

    document.addEventListener("click", playClick);
});