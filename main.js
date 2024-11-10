"use strict";
function addMoreSkills() {
    const skillsContainer = document.getElementById("skillsContainer");
    const skillField = document.createElement("div");
    skillField.classList.add("skillField");
    skillField.innerHTML = `
        <input type="text" class="skill" placeholder="Skill Name (e.g., JavaScript)" required>
    `;
    skillsContainer.appendChild(skillField);
}
function addMoreLanguages() {
    console.log("hello world");
    const languagesContainer = document.getElementById("languagesContainer");
    const languagesField = document.createElement("div");
    languagesField.classList.add("languagesField");
    languagesField.innerHTML = `
        <input type="text" class="languages" placeholder="Enter Languages (e.g., English)" required>
    `;
    languagesContainer.appendChild(languagesField);
}
const addSkillButton = document.getElementById("addSkill");
if (addSkillButton) {
    addSkillButton.addEventListener("click", addMoreSkills);
}
const addLanguagesButton = document.getElementById("addLanguages");
if (addLanguagesButton) {
    addLanguagesButton.addEventListener("click", addMoreLanguages);
}
function addMoreEducation() {
    const educationContainer = document.getElementById("educationContainer");
    const educationField = document.createElement("div");
    educationField.classList.add("educationField");
    educationField.innerHTML = `
    <label for="degree">Degree:</label>
    <input type="text" class="degree" id="degree" placeholder="Degree (e.g., B.Sc. Computer Science)" required>

    <label for="institution">Institution:</label>
    <input type="text" class="institution" id="institution" placeholder="Institution (e.g., XYZ University)" required>

    <label for="gradeYear">Graduation Year:</label>
    <input type="number" class="gradeYear" id="gradeYear" placeholder="Graduation Year (e.g., 2022 or 2022-2023)" pattern="^\d{4}(-\d{4})?$" title="Enter year in format: 2022 or 2022-2023" required>
`;
    educationContainer.appendChild(educationField);
}
function addMoreExperience() {
    const experienceContainer = document.getElementById("experienceContainer");
    const experienceField = document.createElement("div");
    experienceField.classList.add("experienceField");
    experienceField.innerHTML = `
    <label for="company">Company Name:</label>
    <input type="text" class="company" id="company" placeholder="Company Name (e.g., ABC Corp)" required>

    <label for="role">Role/Position:</label>
    <input type="text" class="role" id="role" placeholder="Role/Position (e.g., Software Developer)" required>

    <label for="experienceYears">Years Worked:</label>
    <input type="number" class="experienceYears" id="experienceYears" placeholder="Years Worked (e.g., 2022 or 2022-2023)" pattern="^\d{4}(-\d{4})?$" title="Enter year in format: 2022 or 2022-2023" required>

    <label for="experienceDes">Experience Description:</label>
    <textarea id="experienceDes" placeholder="Summarize your experience at [Company Name] and describe your role." rows="4" required class="experienceDes"></textarea>
`;
    experienceContainer.appendChild(experienceField);
}
const addExperienceButton = document.getElementById("addExperience");
addExperienceButton?.addEventListener("click", addMoreExperience);
function collectSkills() {
    const skillFields = document.querySelectorAll("#skillsContainer .skillField"); // Update the selector
    return Array.from(skillFields).map(field => {
        const skillName = field.querySelector(".skill")?.value || 'Not provided';
        return { skillName };
    });
}
function updateSkillsDisplay() {
    const skillsContainer = document.getElementById("skillsContainer");
    const skills = collectSkills();
    skillsContainer.innerHTML = skills.map(skill => `
         <div id="skillsContainer">
            <div class="skillField name">
            <input type="text" class="skill"  value="${skill.skillName}" placeholder="Skill Name (e.g., JavaScript)" id="skills">
        </div>
    `).join('');
}
function collectLanguages() {
    const languagesFields = document.querySelectorAll("#languagesContainer .languagesField"); // Update the selector
    return Array.from(languagesFields).map(field => {
        const languagesName = field.querySelector(".languages")?.value || 'Not provided';
        return { languagesName };
    });
}
function updateLanguagesDisplay() {
    const languagesContainer = document.getElementById("languagesContainer");
    const languages = collectLanguages();
    languagesContainer.innerHTML = languages.map(languages => `
         <div id="languagesContainer">
            <div class="languagesField name">
            <input type="text" class="languages"  value="${languages.languagesName}" placeholder="Enter Languages (e.g., English)" id="languages">
        </div>
    `).join('');
}
function updateExperienceDisplay() {
    const experienceContainer = document.getElementById("experienceContainer");
    const experiences = collectExperience(); // Collect experience data as an array of objects
    experienceContainer.innerHTML = experiences.map(exp => `

    <div class="experienceField">
    <label for="company">Company Name:</label>
    <input type="text" id="company" class="company" value="${exp.company}" placeholder="Company Name (e.g., ABC Corp)" required>

    <label for="role">Role/Position:</label>
    <input type="text" id="role" class="role" value="${exp.role}" placeholder="Role/Position (e.g., Software Developer)" required>

    <label for="experienceYears">Years Worked:</label>
    <input type="number" id="experienceYears" class="experienceYears" value="${exp.experienceYears}" placeholder="Years Worked (e.g., 2019-2022)" required>

    <label for="experienceDes">Experience Description:</label>
    <textarea id="experienceDes" placeholder="Summarize your experience at [Company Name] and describe your role." rows="4" required class="experienceDes">${exp.experienceDes}</textarea>
</div>



    `).join('');
}
function collectExperience() {
    const experienceFields = document.querySelectorAll("#experienceContainer .experienceField");
    return Array.from(experienceFields).map(field => {
        const company = field.querySelector(".company")?.value || 'Not provided';
        const role = field.querySelector(".role")?.value || 'Not provided';
        const experienceYears = field.querySelector(".experienceYears")?.value || 'Not provided';
        const experienceDes = field.querySelector(".experienceDes")?.value || 'Not provided';
        return { company, role, experienceYears, experienceDes };
    });
}
function updateEducationDisplay() {
    const education = collectEducation();
    const resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = '';
    education.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("educationField");
        div.innerHTML = `
            <span class="degreeStyle">${item.degree}</span><br>
            <span class="instituteStyle">${item.institution}</span><br>
            <span class="instituteStyle">(${item.gradeYear})</span>
            <div class="line"></div> <!-- Optional line separator -->
        `;
        resumeOutput.appendChild(div);
    });
}
function collectEducation() {
    const educationFields = document.querySelectorAll("#educationContainer .educationField");
    return Array.from(educationFields).map(field => {
        const degreeInput = field.querySelector(".degree");
        const institutionInput = field.querySelector(".institution");
        const gradeYearInput = field.querySelector(".gradeYear");
        const degree = degreeInput ? degreeInput.value : 'Not provided';
        const institution = institutionInput ? institutionInput.value : 'Not provided';
        const gradeYear = gradeYearInput ? gradeYearInput.value : 'Not provided';
        return { degree, institution, gradeYear };
    });
}
function collectContactDetails() {
    return {
        email: document.getElementById("contactEmail").value,
        phone: document.getElementById("contactPhone").value,
        address: document.getElementById("address").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        website: document.getElementById("website").value
    };
}
const addEduButton = document.getElementById("addMoreEducation");
addEduButton?.addEventListener("click", () => {
    addMoreEducation();
    updateEducationDisplay();
});
function handleFileInputChange(event) {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result;
            const imgPreview = document.getElementById("profileImagePreview");
            imgPreview.src = imageUrl;
        };
        reader.readAsDataURL(file);
    }
}
const profileImageInput = document.getElementById("profileImage");
profileImageInput?.addEventListener("change", handleFileInputChange);
let sanitizedUsername = "";
function generatedResume(event) {
    event.preventDefault();
    // Collect form values
    const profileImage = document.getElementById("profileImagePreview").src;
    const username = document.getElementById("name").value;
    const subheading = document.getElementById("subheading").value;
    const profileSummary = document.getElementById("profileSummary").value;
    const skills = collectSkills();
    const languages = collectLanguages();
    const education = collectEducation();
    const experience = collectExperience();
    const contact = collectContactDetails();
    const mainHeading = document.getElementById("resume");
    const resumeOutput = document.getElementById("resumeOutput");
    if (mainHeading && resumeOutput) {
        mainHeading.innerHTML = "Your Resume is Ready! Edit, Share, or Download Below";
        resumeOutput.innerHTML = `
        <div class="container">
          <div class="left">
            <div>
              ${profileImage ? `<div class="resume"><img src="${profileImage}" alt="Profile Image" style="max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;" class="img"></div>` : ''}
            </div>
            
            <div>
              <h3 class="setWidth">About Me</h3>
              <p class="sizeChange">${profileSummary}</p>
            </div>
    
            <div>
              <h3 class="setWidth">Contact Information</h3>
              <p class="sizeChange"><strong><i class="fas fa-envelope"></i> Email:</strong> ${contact.email}</p>
              <p class="sizeChange"><strong><i class="fas fa-phone"></i> Phone Number:</strong> ${contact.phone}</p>
              <p class="sizeChange"><strong><i class="fas fa-regular fa-address-card"></i> Address:</strong> ${contact.address}</p>
              <p class="sizeChange"><strong><i class="fab fa-linkedin"></i> LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">${contact.linkedin}</a></p>
              <p class="sizeChange"><strong><i class="fab fa-github"></i> GitHub:</strong> <a href="${contact.github}" target="_blank">${contact.github}</a></p>
              <p class="sizeChange"><strong><i class="fas fa-globe"></i> Website:</strong> <a href="${contact.website}" target="_blank">${contact.website}</a></p>
            </div>
    
            <div>
              <h3 class="setWidth">Skills</h3>
              <p class="setDiv">
                ${skills.map((skill) => `
                  <div class="skill-item">
                    <span class="circle"></span>
                    ${skill.skillName}
                  </div>
                `).join('')}
              </p>
            </div>
    
            <div>
              <h3 class="setWidth">Languages</h3>
              <p class="setDiv">
                ${languages.map((language) => `
                  <div class="skill-item">
                    <span class="circle"></span>
                    ${language.languagesName}
                  </div>
                `).join('')}
              </p>
            </div>
          </div>
    
          <div class="right">
            <div class="bgColor">
              <h3 class="nameHeading">${username}</h3>
              <div class="styleline"></div>
              <h5 class="sub">${subheading}</h5>
            </div>
            
            <div class="paddingSet">
              <div>
                <h3 class="nameHeadingStyle">Education</h3>
                <div class="styleline"></div>
                <div class="educationSection">
                  ${education.map((item) => `
                    <div class="educationField">
                      <span class="diamond"></span>
                      <span class="degreeStyle">${item.degree}</span><br>
                      <span class="instituteStyle">${item.institution}</span><br>
                      <span class="instituteStyle">${item.gradeYear}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
    
              <div>
                <h3 class="nameHeadingStyle">Work Experience</h3>
                <div class="styleline"></div>
                <div class="educationSection">
                  ${experience.map((exp) => `
                    <div class="educationField">
                      <span class="diamond"></span>
                      <span class="degreeStyle">${exp.company}</span><br>
                      <span class="instituteStyle">${exp.role}</span><br>
                      <span class="instituteStyle">${exp.experienceYears}</span><br>
                      <span class="instituteStyle">${exp.experienceDes}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        const actionButtons = `
  <p class="anchor"> <a id="shareLink" href="#" target="_blank"></a></p>
  <div class="editBtn">
    <button class="editResume" onclick="editResume()"><i class="fa-solid fa-pen-to-square"></i> Edit Resume</button>
  </div>
  <div class="action-buttons">
    <button class="downloadResume" id="downloadBtn" onclick="downloadResume()"><i class="fa-solid fa-cloud-arrow-down"></i> Download Resume</button>
    <button class="shareResume" id="copyLink" onclick="shareResume()"><i class="fa-solid fa-share"></i> Share Resume</button>
  </div>
`;
        if (resumeOutput) {
            resumeOutput.innerHTML += actionButtons;
        }
        if (username) {
            const shareLink = document.getElementById("shareLink");
            const baseURL = window.location.href.split('?')[0];
            const uniqueURL = `${baseURL}?username=${encodeURIComponent(username)}`;
            shareLink.href = uniqueURL;
            shareLink.textContent = uniqueURL;
        }
        // Hide the form and display the resume output
        document.getElementById("resumeForm").style.display = 'none';
        resumeOutput.style.display = 'block';
        // Update button text
        const generateButton = document.querySelector("button[type='submit']");
        if (generateButton) {
            generateButton.textContent = 'Save Resume';
        }
    }
}
function shareResume() {
    const shareLink = document.getElementById("shareLink");
    const copyText = shareLink.href;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Link copied successfully to clipboard");
    }, function () {
        alert("Sorry! Failed to copy link to clipboard");
    });
}
const resumeForm = document.getElementById("resumeForm");
resumeForm?.addEventListener("submit", generatedResume);
function editResume() {
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    form.style.display = 'block';
    resumeOutput.style.display = 'none';
    const profileImagePreview = document.getElementById("profileImagePreview");
    const name = document.querySelector(".nameHeading")?.textContent || '';
    const subheading = document.querySelector(".sub")?.textContent || '';
    const profileSummary = document.querySelector(".sizeChange")?.textContent || '';
    document.getElementById("profileImage").value = '';
    profileImagePreview.src = '';
    document.getElementById("name").value = name;
    document.getElementById("subheading").value = subheading;
    document.getElementById("profileSummary").value = profileSummary;
    updateSkillsDisplay();
    updateEducationDisplay();
    updateExperienceDisplay();
}
function downloadResume() {
    const resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput) {
        console.error("Resume output not found");
        return;
    }
    const resumeHTML = resumeOutput.innerHTML;
    const styleSheets = Array.from(document.styleSheets)
        .map((sheet) => {
        try {
            if (sheet instanceof CSSStyleSheet) {
                return Array.from(sheet.cssRules).map(rule => rule.cssText).join(' ');
            }
        }
        catch (error) {
            console.warn("Could not access stylesheet rules:", error);
        }
        return '';
    })
        .join(' ');
    const hideButtonsCSS = `
      .action-buttons, .editBtn, .anchor {
          display: none !important;
      }

      .container {
          width: 1000px; 
          margin: 0 auto; 
          padding: 20px;
          border: 1px solid #ddd; 
      }

      body, .container {
          font-size: 20px; 
          line-height: 1.5;
      }

      @media (max-width:480px){
          body, .container {
              font-size: 16px !important;
          }
      }
  `;
    const fullHTML = `
      <html>
          <head>
              <style>${styleSheets}</style>
              <style>${hideButtonsCSS}</style>
          </head>
          <body>
              <div class="container">${resumeHTML}</div>
          </body>
      </html>
  `;
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const sanitizedUsername = document.getElementById("name")?.value.replace(/\s+/g, '_').toLowerCase() || "resume";
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${sanitizedUsername}_resume.html`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
}
