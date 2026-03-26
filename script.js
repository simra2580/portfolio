document.addEventListener("DOMContentLoaded", function(){

    // TYPING
    const text = "Future Software Engineer | Java & Web Developer";
    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 40);
        }
    }
    typingEffect();

    // SKILLS
    const skills = ["HTML", "CSS", "Java", "DSA"];
    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // PROJECTS
    const projects = [
        {
            title: "Elder Caregiver Dashboard",
            desc: "A dashboard to help elderly users access essential services easily."
        }
      ];

    const projectContainer = document.getElementById("projects");

    projects.forEach(p => {
        let div = document.createElement("div");
        div.classList.add("project-card");

        div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        `;

        projectContainer.appendChild(div);
    });

});

// DARK MODE
function toggleTheme(){
    document.body.classList.toggle("dark");
}