// Code For Form Animation
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)"
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: .1,
});

const container = document.querySelector(".container");

observer.observe(container);
// End of Animation Code Here


function displayThankYouModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
}

// Code for storing form data to the browser's local storage

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission.

    // Get form data using FormData
    const formData = new FormData(event.target);

    // Access form fields by their "name" attribute
    const fullname = formData.get("fullname");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // Store data to an object
    const userData = {
        fullname,
        username,
        email,
        password,
    }

    // Store Data to the Browser's Local Storage
    localStorage.setItem("User Data", JSON.stringify(userData));

    // Reset the form.
    event.target.reset();
    // Display the modal for notification.
    displayThankYouModal();
});



document.getElementById("closeModal").addEventListener("click", function () {
    closeModal();
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("thankYouModal");
    if (event.target === modal) {
        closeModal();
    }
});
