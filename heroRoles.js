
    // List of roles to display
    const roles = [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer"
    ];

    // Get the span where text will appear
    const roleText = document.getElementById("role-text");

    // Variables to control typing
    let roleIndex = 0;      // which role we are showing
    let letterIndex = 0;   // which letter we are typing
    let deleting = false;  // typing or deleting

    function typeText() {
        // Current role text
        const currentRole = roles[roleIndex];

        if (deleting === false) {
            // Typing letters one by one
            roleText.innerHTML = currentRole.slice(0, letterIndex + 1);
            letterIndex++;

            // When full word is typed
            if (letterIndex === currentRole.length) {
                setTimeout(() => {
                    deleting = true;
                }, 1500); // pause before deleting
            }
        } else {
            // Deleting letters one by one
            roleText.innerHTML = currentRole.slice(0, letterIndex - 1);
            letterIndex--;

            // When word is fully deleted
            if (letterIndex === 0) {
                deleting = false;
                roleIndex = roleIndex + 1;

                // Go back to first role after last
                if (roleIndex === roles.length) {
                    roleIndex = 0;
                }
            }
        }

        // Control typing speed
        let typingSpeed = deleting ? 60 : 120;

        // Call function again
        setTimeout(typeText, typingSpeed);
    }

    // Start typing effect
    typeText();

