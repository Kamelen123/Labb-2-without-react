
//Easter egg 
document.addEventListener('DOMContentLoaded', function() {
    var cvCol2 = document.querySelector('.CV-col-2');

    cvCol2.addEventListener('click', function(event) {
        if (event.target === cvCol2) {
            cvCol2.style.backgroundImage = "url('images/Cabin.png')";
        }
    });
});

//Generate CV
fetch('info.json')
        .then(response => response.json())
        .then(data => {
            getCV(data);
        })
        .catch(error => console.error('Error fetching CV data:', error));

    function getCV(data) {
        const skills = data.skills;
        const education = data.education;
        const experience = data.experience;

        const skillsList = document.getElementById('skill-list');
        skills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${skill.tools}</span><br>${skill.field}`;
            skillsList.appendChild(listItem);
        });

        const educationList = document.getElementById('education-list');
        education.forEach(edu => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${edu.period}</span><br><br>${edu.degree}, ${edu.institution}`;
            educationList.appendChild(listItem);
        });

        const experienceList = document.getElementById('experience-list');
        experience.forEach(exp => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${exp.position}</span><br><br>${exp.employer}`;
            experienceList.appendChild(listItem);
        });
    }

// Tab function
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }



// Easter egg key event
let enteredSequence = "";

// Listen for keydown events on the document
document.addEventListener("keydown", function(event) {
    enteredSequence += event.key;
    
    if (enteredSequence === "1337") {
        console.log("Entered sequence: 1337");
        alert("You entered 1337!");
        
        enteredSequence = "";
    }
});