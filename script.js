document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    if (!name || !email || !message) {
        formMessage.textContent = "გთხოვთ შეავსოთ ყველა ველი.";
        formMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "გთხოვთ მიუთითოთ ვალიდური მეილი";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "მადლობა შეტყობინებისთვის!";
    formMessage.style.color = "green";

   
    document.getElementById("contact-form").reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
