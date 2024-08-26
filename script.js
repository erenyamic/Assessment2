
document.addEventListener("DOMContentLoaded", function() {
    // Replace with Full Name
    const fullNamePlaceholder = document.querySelector('span.text-danger');
    if (fullNamePlaceholder) {
        fullNamePlaceholder.textContent = "Your Full Name";
    }

    // Replace with Current Date
    const currentDatePlaceholder = document.querySelector('h2');
    if (currentDatePlaceholder) {
        const currentDate = new Date().toLocaleDateString();
        currentDatePlaceholder.textContent = currentDate;
    }

    // Replace with Your Email
    const emailPlaceholder = currentDatePlaceholder.nextElementSibling;
    if (emailPlaceholder) {
        emailPlaceholder.textContent = "your.email@example.com";
    }

    // Change Name Button
    const changeNameButton = document.querySelector('.btn-primary.btn-pill');
    changeNameButton.addEventListener('click', function() {
        let userName = prompt("Please enter your name:");
        while (!userName || !isNaN(userName)) {
            alert("Invalid name. Please enter a valid string.");
            userName = prompt("Please enter your name:");
        }
        if (userName && fullNamePlaceholder) {
            fullNamePlaceholder.textContent = userName;
        }
    });

    // Protocols Section
    const protocols = document.querySelectorAll('.col-6.col-md-3 p');
    const ports = ["80", "443", "22", "53"];
    protocols.forEach((protocol, index) => {
        protocol.textContent = protocol.textContent.replace('xx', ports[index]);
    });

    // Dynamic List of Items
    const listButton = document.querySelector('.btn-primary.btn-soft');
    listButton.addEventListener('click', function() {
        let itemCount = prompt("How many items would you like in the list? (Max 10)");
        itemCount = parseInt(itemCount);
        while (isNaN(itemCount) || itemCount <= 0 || itemCount > 10) {
            alert("Invalid number. Please enter a number between 1 and 10.");
            itemCount = parseInt(prompt("How many items would you like in the list? (Max 10)"));
        }
        const listContainer = document.querySelector('.col-12.col-lg-6.mb-5 .row');
        listContainer.innerHTML = ''; // Clear previous items
        for (let i = 1; i <= itemCount; i++) {
            const itemHtml = `
                <div class="d-flex mb-4">
                    <div class="text-primary">
                        <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                    </div>
                    <div class="mx-2">
                        <h3 class="h5 fw-bold mb-1">Item #${i}</h3>
                        <p>This is item #${i}.</p>
                    </div>
                </div>`;
            listContainer.innerHTML += itemHtml;
        }
    });
});
