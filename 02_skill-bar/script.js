function addSkill() {

    let name = document.getElementById("skill").value;
    let percent = document.getElementById("percent").value;

    if(name === "" || percent === "") return;

    // Create container
    let box = document.createElement("div");
    box.className = "skill-box";

    // Skill name
    let title = document.createElement("p");
    title.innerText = name;

    // Bar
    let bar = document.createElement("div");
    bar.className = "bar";

    let fill = document.createElement("div");
    fill.className = "fill";
    fill.style.width = percent + "%";
    fill.innerText = percent + "%";

    bar.appendChild(fill);

    box.appendChild(title);
    box.appendChild(bar);

    document.getElementById("skills").appendChild(box);

    // clear input
    document.getElementById("skill").value = "";
    document.getElementById("percent").value = "";
}
