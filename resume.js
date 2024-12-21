document.addEventListener('DOMContentLoaded', () => {
    const resumeSection = document.querySelector('.resume-card');
    const editButton = document.getElementById('editDetails');

    // Function to switch to edit mode
    function switchToEditMode() {
        const nameDisplay = document.getElementById('name-display').textContent;
        const summaryDisplay = document.getElementById('summary-display').textContent;

        const editableContent = `
            <h1>Resume</h1>

            <h2>Personal Details</h2>
            <label>Name:</label>
            <input type="text" value="${nameDisplay}" id="name" /><br>

            <label>Email:</label>
            <input type="email" value="john.doe@example.com" id="email" /><br>

            <label>Phone:</label>
            <input type="tel" value="+123 456 7890" id="phone" /><br>

            <label>LinkedIn:</label>
            <input type="url" value="linkedin.com/in/johndoe" id="linkedin" /><br>

            <label>GitHub:</label>
            <input type="url" value="github.com/johndoe" id="github" /><br>

            <h2>Professional Summary</h2>
            <textarea id="summary">${summaryDisplay}</textarea>

            <h2>Work Experience</h2>
            <textarea id="experience">Software Engineer - ABC Corporation...</textarea>

            <h2>Education</h2>
            <textarea id="education">Bachelor of Science in Computer Science...</textarea>

            <h2>Skills</h2>
            <textarea id="skills">Programming: JavaScript, Python...</textarea>

            <h2>Projects</h2>
            <textarea id="projects">E-Commerce Platform...</textarea>

            <h2>Certifications</h2>
            <textarea id="certifications">AWS Certified Solutions Architect...</textarea>

            <h2>Achievements</h2>
            <textarea id="achievements">Winner of the National Hackathon...</textarea>

            <h2>References</h2>
            <textarea id="references">Jane Smith - Senior Manager...</textarea>

            <button id="saveDetails" class="button">Save Resume</button>
        `;
        resumeSection.innerHTML = editableContent;

        const saveButton = document.getElementById('saveDetails');
        saveButton.addEventListener('click', switchToViewMode);
    }

    // Function to switch to view mode and save changes
    function switchToViewMode() {
        const updatedContent = `
            <h1>Resume</h1>
            <h2>Personal Details</h2>
            <p><strong>Name:</strong> <span id="name-display">${document.getElementById('name').value}</span></p>
            <p><strong>Email:</strong> ${document.getElementById('email').value}</p>
            <p><strong>Phone:</strong> ${document.getElementById('phone').value}</p>
            <p><strong>LinkedIn:</strong> <a href="${document.getElementById('linkedin').value}" target="_blank">${document.getElementById('linkedin').value}</a></p>
            <p><strong>GitHub:</strong> <a href="${document.getElementById('github').value}" target="_blank">${document.getElementById('github').value}</a></p>

            <h2>Professional Summary</h2>
            <p id="summary-display">${document.getElementById('summary').value}</p>

            <h2>Work Experience</h2>
            <p id="experience-display">${document.getElementById('experience').value}</p>

            <h2>Education</h2>
            <p id="education-display">${document.getElementById('education').value}</p>

            <h2>Skills</h2>
            <p id="skills-display">${document.getElementById('skills').value}</p>

            <h2>Projects</h2>
            <p id="projects-display">${document.getElementById('projects').value}</p>

            <h2>Certifications</h2>
            <p id="certifications-display">${document.getElementById('certifications').value}</p>

            <h2>Achievements</h2>
            <p id="achievements-display">${document.getElementById('achievements').value}</p>

            <h2>References</h2>
            <p id="references-display">${document.getElementById('references').value}</p>

            <button id="editDetails" class="button">Edit Resume</button>
        `;
        resumeSection.innerHTML = updatedContent;
        
        const editButton = document.getElementById('editDetails');
        editButton.addEventListener('click', switchToEditMode);
    }

    editButton.addEventListener('click', switchToEditMode);
});
