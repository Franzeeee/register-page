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

 $(document).ready(function() {
            $("#registerForm").submit(function(e) {
                e.preventDefault();

                var formData = $(this).serialize();

                $.ajax({
                    type: "POST",
                    url: "register.php",
                    data: formData,
                    success: function(response) {
                        displayThankYouModal();
                        $("#registerForm")[0].reset();
                    }
                });
            });
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
