document.addEventListener("DOMContentLoaded", function(){

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

    const projects = [
        {
            title: "Elder Dashboard",
            desc: "A web-based dashboard to assist elderly users in managing daily activities with a simple and accessible interface.",
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

function toggleTheme(){
    document.body.classList.toggle("dark");
}
// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if(top < trigger){
            section.classList.add("show");
        }
    });
});