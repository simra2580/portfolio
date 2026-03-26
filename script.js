document.addEventListener("DOMContentLoaded", function(){

    // 🔥 TYPING EFFECT (More Professional)
    const text = "Information Science Engineering Student | Java | Data Structures | Web Developer";
    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 40);
        }
    }
    typingEffect();

    // 🔥 SKILLS (Better Order for Recruiters)
    const skills = [
        "Java",
        "Data Structures (Learning)",
        "HTML",
        "CSS",
        "Git & GitHub"
    ];

    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // 🔥 PROJECTS (Improved Description + GitHub Link)
    const projects = [
        {
            title: "Elder Dashboard",
            desc: "A web-based dashboard designed to assist elderly users in managing daily activities such as reminders and accessing essential information through a simple and user-friendly interface.",
            link: "https://github.com/simra2580"
        }
    ];

    const projectContainer = document.getElementById("projects");

    projects.forEach(p => {
        let div = document.createElement("div");
        div.classList.add("project-card");

        div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a href="${p.link}" target="_blank" class="btn">View on GitHub</a>
        `;

        projectContainer.appendChild(div);
    });

});

// 🌙 DARK MODE
function toggleTheme(){
    document.body.classList.toggle("dark");
}