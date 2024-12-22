document.addEventListener('DOMContentLoaded', () => {
    const resumeSection = document.querySelector('.resume-card');
    const editButton = document.getElementById('editDetails');

    // Load saved data from localStorage
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('resume')) || {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+123 456 7890",
            linkedin: "linkedin.com/in/johndoe",
            github: "github.com/johndoe",
            summary: "A highly motivated software engineer...",
            experience: "Software Engineer - ABC Corporation...",
            education: "Bachelor of Science in Computer Science...",
            skills: "Programming: JavaScript, Python...",
            projects: "E-Commerce Platform...",
            certifications: "AWS Certified Solutions Architect...",
            achievements: "Winner of the National Hackathon...",
            references: "Jane Smith - Senior Manager..."
        };

        renderViewMode(savedData);
    }

    // Render view mode
    function renderViewMode(data) {
        const viewContent = `
            <h1>Resume</h1>
            <h2>Personal Details</h2>
            <p><strong>Name:</strong> <span id="name-display">${data.name}</span></p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${data.github}" target="_blank">${data.github}</a></p>

            <h2>Professional Summary</h2>
            <p id="summary-display">${data.summary}</p>

            <h2>Work Experience</h2>
            <p id="experience-display">${data.experience}</p>

            <h2>Education</h2>
            <p id="education-display">${data.education}</p>

            <h2>Skills</h2>
            <p id="skills-display">${data.skills}</p>

            <h2>Projects</h2>
            <p id="projects-display">${data.projects}</p>

            <h2>Certifications</h2>
            <p id="certifications-display">${data.certifications}</p>

            <h2>Achievements</h2>
            <p id="achievements-display">${data.achievements}</p>

            <h2>References</h2>
            <p id="references-display">${data.references}</p>

            <button id="editDetails" class="button">Edit Resume</button>
        `;
        resumeSection.innerHTML = viewContent;

        const editButton = document.getElementById('editDetails');
        editButton.addEventListener('click', () => switchToEditMode(data));
    }

    // Switch to edit mode
    function switchToEditMode(data) {
        const editableContent = `
            <h1>Resume</h1>

            <h2>Personal Details</h2>
            <label>Name:</label>
            <input type="text" value="${data.name}" id="name" /><br>

            <label>Email:</label>
            <input type="email" value="${data.email}" id="email" /><br>

            <label>Phone:</label>
            <input type="tel" value="${data.phone}" id="phone" /><br>

            <label>LinkedIn:</label>
            <input type="url" value="${data.linkedin}" id="linkedin" /><br>

            <label>GitHub:</label>
            <input type="url" value="${data.github}" id="github" /><br>

            <h2>Professional Summary</h2>
            <textarea id="summary">${data.summary}</textarea>

            <h2>Work Experience</h2>
            <textarea id="experience">${data.experience}</textarea>

            <h2>Education</h2>
            <textarea id="education">${data.education}</textarea>

            <h2>Skills</h2>
            <textarea id="skills">${data.skills}</textarea>

            <h2>Projects</h2>
            <textarea id="projects">${data.projects}</textarea>

            <h2>Certifications</h2>
            <textarea id="certifications">${data.certifications}</textarea>

            <h2>Achievements</h2>
            <textarea id="achievements">${data.achievements}</textarea>

            <h2>References</h2>
            <textarea id="references">${data.references}</textarea>

            <button id="saveDetails" class="button">Save Resume</button>
        `;
        resumeSection.innerHTML = editableContent;

        const saveButton = document.getElementById('saveDetails');
        saveButton.addEventListener('click', saveDetails);
    }

    // Save details and update view mode
    function saveDetails() {
        const updatedData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value,
            summary: document.getElementById('summary').value,
            experience: document.getElementById('experience').value,
            education: document.getElementById('education').value,
            skills: document.getElementById('skills').value,
            projects: document.getElementById('projects').value,
            certifications: document.getElementById('certifications').value,
            achievements: document.getElementById('achievements').value,
            references: document.getElementById('references').value
        };

        // Save to localStorage
        localStorage.setItem('resume', JSON.stringify(updatedData));

        renderViewMode(updatedData);
    }

    // Load saved data on page load
    loadSavedData();
});
