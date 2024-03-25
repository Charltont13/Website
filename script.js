
function toggleDropdown() {
    var dropdownContent = document.getElementById("projectDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}


function showProjectDetails(projectId) {
    //get the project details container
    var projectDetailsContainer = document.getElementById("projectDetailsContainer");

    //clear previous details
    projectDetailsContainer.innerHTML = "";

    //define project details
    var projectDetails = {
        "Language Translation Program": {
            technologies: "HTML5, Python, Google Cloud Translate API, Flask, Google Cloud Datastore, Sendgrid Account",
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

    //check if the selected project exists in projectDetails
    if (projectDetails.hasOwnProperty(projectId)) {
        
        var projectTitle = document.createElement("h3");
        projectTitle.textContent = projectId;

        var projectTechnologies = document.createElement("p");
        projectTechnologies.innerHTML = "<strong>Technologies:</strong> " + projectDetails[projectId].technologies;

        var projectDescription = document.createElement("p");
        projectDescription.textContent = projectDetails[projectId].description;

        
        var githubLink = document.createElement("a");
        githubLink.textContent = "GitHub Repository";
        githubLink.href = projectDetails[projectId].githubLink;
        githubLink.target = "_blank"; 

        
        projectDetailsContainer.appendChild(projectTitle);
        projectDetailsContainer.appendChild(projectTechnologies);
        projectDetailsContainer.appendChild(projectDescription);
        projectDetailsContainer.appendChild(githubLink);
    }

    //hide dropdown after selecting a project
    toggleDropdown();
}
