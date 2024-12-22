document.addEventListener('DOMContentLoaded', () => {
    const biodataSection = document.querySelector('.biodata-card');
    const footerName = document.getElementById('footer-name'); // Reference to the footer name
    const editButton = document.getElementById('editDetails'); // Reference to the Edit button

    // Load saved data from localStorage
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('biodata')) || {
            name: "John Doe",
            dob: "1990-01-01",
            gender: "Male",
            status: "Single",
            email: "john.doe@example.com",
            phone: "+123 456 7890",
            address: "123 Main Street, Cityville, Country",
            languages: "English, Spanish, French"
        };

        // Populate the footer and biodata section with saved data
        footerName.textContent = savedData.name;
        renderViewMode(savedData);
    }

    // Render view mode with given data
    function renderViewMode(data) {
        const viewContent = `
            <h1>Bio-Data</h1>
            <h2>Personal Details</h2>
            <p><strong>Name:</strong> <span id="name-display">${data.name}</span></p>
            <p><strong>Date of Birth:</strong> ${data.dob}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Marital Status:</strong> ${data.status}</p>

            <h2>Contact Information</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Address:</strong> ${data.address}</p>

            <h2>Languages Known</h2>
            <p>${data.languages}</p>

            <button id="editDetails" class="button">Edit Details</button>
        `;
        biodataSection.innerHTML = viewContent;

        // Re-attach the event listener for the Edit button
        const editButton = document.getElementById('editDetails');
        editButton.addEventListener('click', () => switchToEditMode(data));
    }

    // Switch to edit mode
    function switchToEditMode(data) {
        const editableContent = `
            <h1>Bio-Data</h1>
            <h2>Personal Details</h2>
            <label>Name:</label>
            <input type="text" value="${data.name}" id="name" /><br>

            <label>Date of Birth:</label>
            <input type="date" value="${data.dob}" id="dob" /><br>

            <label>Gender:</label>
            <input type="text" value="${data.gender}" id="gender" /><br>

            <label>Marital Status:</label>
            <input type="text" value="${data.status}" id="status" /><br>

            <h2>Contact Information</h2>
            <label>Email:</label>
            <input type="email" value="${data.email}" id="email" /><br>

            <label>Phone:</label>
            <input type="tel" value="${data.phone}" id="phone" /><br>

            <label>Address:</label>
            <input type="text" value="${data.address}" id="address" /><br>

            <h2>Languages Known</h2>
            <input type="text" value="${data.languages}" id="languages" /><br>

            <button id="saveDetails" class="button">Save Details</button>
        `;
        biodataSection.innerHTML = editableContent;

        // Add event listener to the Save button
        const saveButton = document.getElementById('saveDetails');
        saveButton.addEventListener('click', saveDetails);

        // Add real-time listener to update the footer as the name is edited
        const nameInput = document.getElementById('name');
        nameInput.addEventListener('input', function () {
            footerName.textContent = nameInput.value; // Update footer with the name input in real-time
        });
    }

    // Save details and update view mode
    function saveDetails() {
        const updatedData = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            status: document.getElementById('status').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            languages: document.getElementById('languages').value
        };

        // Save updated data to localStorage
        localStorage.setItem('biodata', JSON.stringify(updatedData));

        // Update the footer and switch to view mode
        footerName.textContent = updatedData.name;
        renderViewMode(updatedData);
    }

    // Initialize by loading saved data
    loadSavedData();
});
