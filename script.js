



document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.getElementById("navbar-links");
    const mobileMenuButton = document.getElementById("mobile-menu-button");

    if (navbarLinks) {
        navbarLinks.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                const sectionId = event.target.dataset.sectionId;
                if (sectionId) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                    // Update active section styling
                    Array.from(navbarLinks.children).forEach(button => {
                        button.classList.remove("bg-secondary", "text-secondary-foreground");
                        button.classList.add("bg-ghost", "text-foreground");
                    });
                    event.target.classList.remove("bg-ghost", "text-foreground");
                    event.target.classList.add("bg-secondary", "text-secondary-foreground");
                }
            }
        });
    }

    // Mobile menu functionality (placeholder for now)
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", () => {
            alert("Mobile menu toggle not yet implemented.");
        });
    }

    // Initial active section highlighting (assuming 'home' is active on load)
    const initialActiveSection = 'home';
    const initialButton = document.querySelector(`[data-section-id="${initialActiveSection}"]`);
    if (initialButton) {
        initialButton.classList.remove("bg-ghost", "text-foreground");
        initialButton.classList.add("bg-secondary", "text-secondary-foreground");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const getInTouchButton = document.getElementById("get-in-touch-button");
    if (getInTouchButton) {
        getInTouchButton.addEventListener("click", () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const profileInput = document.getElementById("profile-input");
    const profileImagePreview = document.getElementById("profile-image-preview");
    const uploadProfileButton = document.getElementById("upload-profile-button");
    const profileUploadMessage = document.getElementById("profile-upload-message");

    if (uploadProfileButton && profileInput && profileImagePreview && profileUploadMessage) {
        uploadProfileButton.addEventListener("click", () => {
            profileInput.click();
        });

        profileInput.addEventListener("change", (event) => {
            const file = event.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImagePreview.style.backgroundImage = `url(${e.target?.result})`;
                    profileImagePreview.style.backgroundSize = "cover";
                    profileImagePreview.style.backgroundPosition = "center";
                    profileImagePreview.innerHTML = ""; // Clear placeholder content
                    profileUploadMessage.classList.remove("hidden");
                    uploadProfileButton.textContent = "Change Picture";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const cvInput = document.getElementById("cv-input");
    const cvPreview = document.getElementById("cv-preview");
    const uploadCvButton = document.getElementById("upload-cv-button");
    const cvUploadMessage = document.getElementById("cv-upload-message");

    if (uploadCvButton && cvInput && cvPreview && cvUploadMessage) {
        uploadCvButton.addEventListener("click", () => {
            cvInput.click();
        });

        cvInput.addEventListener("change", (event) => {
            const file = event.target.files?.[0];
            if (file) {
                cvPreview.innerHTML = `
                    <div class="text-center p-4">
                        <div class="text-4xl mb-2">✅</div>
                        <p class="font-medium">${file.name}</p>
                        <p class="text-sm text-muted-foreground">
                            ${(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                `;
                cvUploadMessage.classList.remove("hidden");
                uploadCvButton.textContent = "Change CV";
            }
        });
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Message sent successfully! (This is a static site, form submission is simulated.)");
            contactForm.reset();
        });
    }
});


