const galleryImages = document.querySelectorAll(".gallery img");

const featuredImage = document.getElementById("featured-image");

const imageInfo = document.getElementById("image-info");

// Add tabindex using JavaScript iteration
for (let i = 0; i < galleryImages.length; i++) {

    galleryImages[i].setAttribute("tabindex", "0");

    // Mouse events
    galleryImages[i].addEventListener("mouseover", updatePreview);
    galleryImages[i].addEventListener("mouseout", resetPreview);

    // Keyboard events
    galleryImages[i].addEventListener("focus", updatePreview);
    galleryImages[i].addEventListener("blur", resetPreview);
}

// Display selected image
function updatePreview(event) {

    const selectedImage = event.currentTarget;

    featuredImage.src = selectedImage.src;

    featuredImage.alt = selectedImage.alt;

    imageInfo.textContent =
        "Source: " + selectedImage.getAttribute("src") +
        " | Alt: " + selectedImage.getAttribute("alt");
}

// Reset the preview
function resetPreview() {

    featuredImage.src = "cat1.jpg";

    featuredImage.alt = "A cat in the first gallery photo";

    imageInfo.textContent =
        "Choose a photo to see its information.";
}