function toggleDropdown() {
    var dropdownContent = document.getElementById("projectDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function showProjectDetails(projectId) {
    var projectDetailsContainer = document.getElementById("projectDetailsContainer");
    projectDetailsContainer.innerHTML = "";

    var projectDetails = {
        "Language Translation Program": {
            technologies: "HTML5, Python, Google Cloud Translate APIs, Flask, Google Cloud Datastore",
            description: "Program that reads unread emails and implements language translation for interlingual communication.",
            githubLink: "https://github.com/Charltont13/Email-reader/tree/main"
        },
        "React Quiz App": {
            technologies: "React, JavaScript, CSS",
            description: "A program that simulates a quiz system with 10 multiple-choice questions. Created functionality and testing with Javascript. Added styling through CSS.",
            githubLink: "https://github.com/Charltont13/ReactQuizApp"
        },
        "Flutter Interview App": {
            technologies: "Flutter, Dart",
            description: "Flutter application made to simulate a job interview. Used Dart to set up different states and functionalities of the program.",
            githubLink: "https://github.com/Charltont13/InterviewApp"
        }
    };

    if (projectDetails[projectId]) {
        var projectTitle = document.createElement("h3");
        projectTitle.textContent = projectId;

        var projectTechnologies = document.createElement("p");
        projectTechnologies.textContent = "Technologies Used: " + projectDetails[projectId].technologies;

        var projectDescription = document.createElement("p");
        projectDescription.textContent = projectDetails[projectId].description;

        var githubLink = document.createElement("a");
        githubLink.textContent = "View on GitHub";
        githubLink.href = projectDetails[projectId].githubLink;
        githubLink.target = "_blank";

        projectDetailsContainer.appendChild(projectTitle);
        projectDetailsContainer.appendChild(projectTechnologies);
        projectDetailsContainer.appendChild(projectDescription);
        projectDetailsContainer.appendChild(githubLink);
    }
    toggleDropdown(); // This will hide the dropdown after selection
}
