document.addEventListener('DOMContentLoaded', () => {
    const biodataSection = document.querySelector('.biodata-card');
    const footerName = document.getElementById('footer-name'); // Reference to the footer name
    const nameDisplay = document.getElementById('name-display'); // Reference to the name display in Bio-Data
    const editButton = document.getElementById('editDetails'); // Reference to the Edit button

    // Function to switch to edit mode
    function switchToEditMode() {
        const editableContent = `
            <h1>Bio-Data</h1>
            <h2>Personal Details</h2>
            <label>Name:</label>
            <input type="text" value="${nameDisplay.textContent}" id="name" /><br>

            <label>Date of Birth:</label>
            <input type="date" value="1990-01-01" id="dob" /><br>

            <label>Gender:</label>
            <input type="text" value="Male" id="gender" /><br>

            <label>Marital Status:</label>
            <input type="text" value="Single" id="status" /><br>

            <h2>Contact Information</h2>
            <label>Email:</label>
            <input type="email" value="john.doe@example.com" id="email" /><br>

            <label>Phone:</label>
            <input type="tel" value="+123 456 7890" id="phone" /><br>

            <label>Address:</label>
            <input type="text" value="123 Main Street, Cityville, Country" id="address" /><br>

            <h2>Languages Known</h2>
            <input type="text" value="English, Spanish, French" id="languages" /><br>

            <button id="saveDetails" class="button">Save Details</button>
        `;
        biodataSection.innerHTML = editableContent;

        // Add event listener to the Save button
        const saveButton = document.getElementById('saveDetails');
        saveButton.addEventListener('click', switchToViewMode);

        // Add real-time listener to update the footer as the name is edited
        const nameInput = document.getElementById('name');
        nameInput.addEventListener('input', function() {
            footerName.textContent = nameInput.value; // Update footer with the name input in real-time
        });
    }

    // Function to switch back to view mode and save updated details
    function switchToViewMode() {
        const updatedContent = `
            <h1>Bio-Data</h1>
            <h2>Personal Details</h2>
            <p><strong>Name:</strong> <span id="name-display">${document.getElementById('name').value}</span></p>
            <p><strong>Date of Birth:</strong> ${document.getElementById('dob').value}</p>
            <p><strong>Gender:</strong> ${document.getElementById('gender').value}</p>
            <p><strong>Marital Status:</strong> ${document.getElementById('status').value}</p>

            <h2>Contact Information</h2>
            <p><strong>Email:</strong> ${document.getElementById('email').value}</p>
            <p><strong>Phone:</strong> ${document.getElementById('phone').value}</p>
            <p><strong>Address:</strong> ${document.getElementById('address').value}</p>

            <h2>Languages Known</h2>
            <p>${document.getElementById('languages').value}</p>

            <button id="editDetails" class="button">Edit Details</button>
        `;
        biodataSection.innerHTML = updatedContent;

        // Update the footer name with the new name
        footerName.textContent = document.getElementById('name').value;

        // Re-attach the event listener for the Edit button after saving
        const editButton = document.getElementById('editDetails');
        editButton.addEventListener('click', switchToEditMode);
    }

    // Ensure the Edit button is set to trigger edit mode on initial load
        editButton.addEventListener('click', switchToEditMode);
});
