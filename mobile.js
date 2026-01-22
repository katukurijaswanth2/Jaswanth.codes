 const hamburger = document.querySelector(".hamburger");
        const contactParent = document.querySelector(".contact-parent");
        const closeIcon = document.querySelector(".contact i.fa-x");

        // Open menu
        hamburger.addEventListener("click", () => {
            contactParent.style.display = "block";
            // contactParent.style.display="flex";
            hamburger.style.display = "none";
        });

        // Close menu
        closeIcon.addEventListener("click", () => {
            contactParent.style.display = "none";
            hamburger.style.display = "flex";
        });