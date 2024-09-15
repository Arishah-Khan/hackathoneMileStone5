function addMoreSkills(): void {
    const skillsContainer = document.getElementById("skillsContainer") as HTMLDivElement;

    const skillField = document.createElement("div");
    skillField.classList.add("skillField");

    // Add HTML directly for the new skill input field
    skillField.innerHTML = `
        <input type="text" class="skill" placeholder="Skill Name (e.g., JavaScript)" required>
    `;

    // Append the newly created skill field to the skills container
    skillsContainer.appendChild(skillField);
}

// Attach the event listener to the "Add Skill" button
const addSkillButton = document.getElementById("addSkill") as HTMLButtonElement;
if (addSkillButton) {
    addSkillButton.addEventListener("click", addMoreSkills);
}



// Function to add more education fields
function addMoreEducation(): void {
    const educationContainer = document.getElementById("educationContainer") as HTMLDivElement;

    const educationField = document.createElement("div");
    educationField.classList.add("educationField");

    educationField.innerHTML = `
        <input type="text" class="degree" placeholder="Degree (e.g., B.Sc. Computer Science)" required>
        <input type="text" class="institution" placeholder="Institution (e.g., XYZ University)" required>
        <input type="number" class="gradeYear" placeholder="Graduation Year (e.g., 2024)" required>
    `;

    educationContainer.appendChild(educationField);
}

// Function to add more work experience fields
function addMoreExperience(): void {
    const experienceContainer = document.getElementById("experienceContainer") as HTMLDivElement;

    const experienceField = document.createElement("div");
    experienceField.classList.add("experienceField");

    experienceField.innerHTML = `
    
        <input type="text" class="company" placeholder="Company Name (e.g., ABC Crop)" required>
        <input type="text" class="role" placeholder="Role/Position (e.g., Software Developer)" required>
        <input type="number" class="experienceYears" placeholder="Years Worked (e.g., 2019-2022)" required>
    `;

    experienceContainer.appendChild(experienceField);
}

const addEduButton = document.getElementById("addMoreEducation") as HTMLButtonElement;
addEduButton?.addEventListener("click", addMoreEducation);

const addExperienceButton = document.getElementById("addExperience") as HTMLButtonElement;
addExperienceButton?.addEventListener("click", addMoreExperience);


function collectSkills(): { skillName: string }[] {
    const skillFields = document.querySelectorAll("#skillsContainer .skillField"); // Update the selector
    return Array.from(skillFields).map(field => {
        const skillName = (field.querySelector(".skill") as HTMLInputElement)?.value || 'Not provided';
        return { skillName };
    });
}


function updateSkillsDisplay(): void {
    const skillsContainer = document.getElementById("skillsContainer") as HTMLDivElement;
    const skills = collectSkills();

    skillsContainer.innerHTML = skills.map(skill => `
         <div id="skillsContainer">
            <div class="skillField name">
            <input type="text" class="skill"  value="${skill.skillName}" placeholder="Skill Name (e.g., JavaScript)" id="skills">
        </div>
    `).join('');
}
// Function to update experience display (for editing resume)
function updateExperienceDisplay(): void {
    const experienceContainer = document.getElementById("experienceContainer") as HTMLDivElement;
    const experiences = collectExperience(); // Collect experience data as an array of objects

    experienceContainer.innerHTML = experiences.map(exp => `

    <div class="experienceField">
                <label for="company">Company Name:</label>
                <input type="text" class="company" value="${exp.company}" placeholder="Company Name (e.g., ABC Crop)" required>
                <label for="role">Role/Position:</label>
                <input type="text" class="role" value="${exp.role}" placeholder="Role/Position (e.g., Software Developer)" required>
                <label for="experienceYears">Years Worked:</label>
                <input type="number" class="experienceYears"  value="${exp.experienceYears}" placeholder="Years Worked (e.g., 2019-2022)" required>
            </div>


    `).join('');
}


function collectExperience(): { company: string; role: string; experienceYears: string }[] {
    const experienceFields = document.querySelectorAll("#experienceContainer .experienceField");
    return Array.from(experienceFields).map(field => {
        const company = (field.querySelector(".company") as HTMLInputElement)?.value || 'Not provided';
        const role = (field.querySelector(".role") as HTMLInputElement)?.value || 'Not provided';
        const experienceYears = (field.querySelector(".experienceYears") as HTMLInputElement)?.value || 'Not provided';
        return { company, role, experienceYears };
    });
}

// Function to collect education details
function collectEducation(): { degree: string; institution: string; gradeYear: string }[] {
    const educationFields = document.querySelectorAll("#educationContainer .educationField");
    return Array.from(educationFields).map(field => {
        const degree = (field.querySelector(".degree") as HTMLInputElement)?.value || 'Not provided';
        const institution = (field.querySelector(".institution") as HTMLInputElement)?.value || 'Not provided';
        const gradeYear = (field.querySelector(".gradeYear") as HTMLInputElement)?.value || 'Not provided';
        return { degree, institution, gradeYear };
    });
}

function updateEducationDisplay(): void {
    const educationContainer = document.getElementById("educationContainer") as HTMLDivElement;
    const education = collectEducation();
    educationContainer.innerHTML = education.map(item => `
      <div class="educationField">
                <label for="degree">Degree:</label>
                <input type="text" class="degree"  value="${item.degree}" placeholder="Degree (e.g., B.Sc. Computer Science)" required>
                <label for="institution">Institution:</label>
                <input type="text" class="institution" value="${item.institution}" placeholder="Institution (e.g., XYZ University)" required>
                <label for="gradYear">Graduation Year:</label>
                <input type="number" class="gradeYear" value="${item.gradeYear}" placeholder="Graduation Year (e.g., 2024)" required>
            </div>`).join('');
}

// Function to collect contact details
function collectContactDetails(): { email: string; phone: string; linkedin: string; github: string; website: string } {
    return {
        email: (document.getElementById("contactEmail") as HTMLInputElement).value,
        phone: (document.getElementById("contactPhone") as HTMLInputElement).value,
        linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
        github: (document.getElementById("github") as HTMLInputElement).value,
        website: (document.getElementById("website") as HTMLInputElement).value
    };
}

// Function to handle file input change
function handleFileInputChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            const imageUrl = reader.result as string;
            const imgPreview = document.getElementById("profileImagePreview") as HTMLImageElement;
            imgPreview.src = imageUrl;
        };

        reader.readAsDataURL(file);
    }
}

// Attach event listener to the file input
const profileImageInput = document.getElementById("profileImage") as HTMLInputElement;
profileImageInput?.addEventListener("change", handleFileInputChange);


let sanitizedUsername = ""

function generatedResume(event: Event): void {
    event.preventDefault();

    const profileImage = (document.getElementById("profileImagePreview") as HTMLImageElement).src;
    const username = (document.getElementById("name") as HTMLInputElement).value; // Now updating username here
    const subheading = (document.getElementById("subheading") as HTMLInputElement).value;
    const profileSummary = (document.getElementById("profileSummary") as HTMLTextAreaElement).value;

    const skills = collectSkills();
    const education = collectEducation();
    const experience = collectExperience();
    const contact = collectContactDetails();

    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    resumeOutput.innerHTML = `
        <div>
            <h1 class="resume changeBg">Resume</h1>
            ${profileImage ? `<div class="resume"><img src="${profileImage}" alt="Profile Image" style="max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;" class="img"></div>` : ''}
            <div class="bgColor">
                <h3 class="javaName">${username}</h3>
                <h5 class="sub">${subheading}</h5>
            </div>
            <h4>Profile Summary</h4>
            <p class="profile">${profileSummary}</p>
            <h4>Skills</h4>
            <p class="profile">${skills.map(skill => skill.skillName).join('<br>')}</p>

            <h4>Education</h4>
            <p class="profile">${education.map(item => `${item.degree} from ${item.institution} in (${item.gradeYear})`).join('<br>')}</p>
            <h4>Work Experience</h4>
            <p class="profile">
                ${experience.map(exp => `I was employed at ${exp.company} as a ${exp.role} during ${exp.experienceYears}.`).join('<br>')}
            </p>

            <h4>Contact Information</h4>
            <p class="profile"><strong>Email:</strong> ${contact.email}</p>
            <p class="profile"><strong>Phone Number:</strong> ${contact.phone}</p>
            <p class="profile"><strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">${contact.linkedin}</a></p>
            <p class="profile"><strong>GitHub:</strong> <a href="${contact.github}" target="_blank">${contact.github}</a></p>
            <p class="profile"><strong>Website:</strong> <a href="${contact.website}" target="_blank">${contact.website}</a></p>

           <p class="anchor"> <a id="shareLink" href="#" target="_blank"></a></p>
            <div class="editBtn">
                <button class="editResume" onclick="editResume()"><i class="fa-solid fa-pen-to-square"></i> Edit Resume</button>
            </div>
            <div class="action-buttons">
                <button class="downloadResume" id="downloadBtn" onclick="downloadResume()"><i class="fa-solid fa-cloud-arrow-down"></i> Download Resume</button>
                <button class="shareResume" id="copyLink" onclick="shareResume()"><i class="fa-solid fa-share"></i> Share Resume</button>
            </div>
        </div>
    `;

     sanitizedUsername = username.replace(/\s+/g, '_').toLowerCase();

    let shareLink = document.getElementById("shareLink") as HTMLAnchorElement;
  

    const baseURL = window.location.href.split('?')[0];
    const uniqueURL = `${baseURL}?username=${encodeURIComponent(username)}`;
    shareLink.href = uniqueURL;
    shareLink.textContent = uniqueURL;

    (document.getElementById("resumeForm") as HTMLFormElement).style.display = 'none';
    resumeOutput.style.display = 'block';

    const generateButton = document.querySelector("button[type='submit']") as HTMLButtonElement;
    if (generateButton) {
        generateButton.textContent = 'Save Resume';
    }
}

function shareResume(): void {
    const shareLink = document.getElementById("shareLink") as HTMLAnchorElement;
    const copyText = shareLink.href;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Link copied successfully to clipboard");
    }, function () {
        alert("Sorry! Failed to copy link to clipboard");
    });
}
// Attach event listener to the form
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
resumeForm?.addEventListener("submit", generatedResume);

function editResume(): void {
    // Show the form and hide the resume output
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

    form.style.display = 'block';
    resumeOutput.style.display = 'none';

    // Reset the form fields with current resume data
    const profileImagePreview = document.getElementById("profileImagePreview") as HTMLImageElement;
    const name = document.querySelector(".javaName")?.textContent || '';
    const subheading = document.querySelector(".sub")?.textContent || '';
    const profileSummary = document.querySelector(".profile")?.textContent || '';

    (document.getElementById("profileImage") as HTMLInputElement).value = '';
    profileImagePreview.src = '';
    (document.getElementById("name") as HTMLInputElement).value = name;
    (document.getElementById("subheading") as HTMLInputElement).value = subheading;
    (document.getElementById("profileSummary") as HTMLTextAreaElement).value = profileSummary;

    // Update the skills, education, and experience fields
    updateSkillsDisplay();
    updateEducationDisplay();
    updateExperienceDisplay();
}

function downloadResume(): void {

    const resumeHTML = document.getElementById("resumeOutput")?.innerHTML;
    const blob = new Blob([resumeHTML || ''], { type: 'text/html' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${sanitizedUsername}_resume.html`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}