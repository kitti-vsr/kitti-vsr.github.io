window.onload = renderContent;

function renderContent() {
  const projectTilesContainer = document.getElementById("projectTiles");
  const projectTilesContainer2 = document.getElementById("clientProjectTiles");

  function generateProjectHTML(project, index, container) {
    const styleIndex = (index % 6) + 1; // Cycle through styles 1 to 6
    const projectHTML = `
      <article class="style${styleIndex}">
        <span class="image">
          <img src="${project.image}" alt="" />
        </span>
        <a href="project.html?id=${project.id}">
          <h2>${project.title}</h2>
          <div class="content">
            <p>${project.shortDescription}</p>
          </div>
        </a>
      </article>
    `;
    container.innerHTML += projectHTML;
  }

  projects.sort((a, b) => b.id - a.id);
  projects.forEach((project, index) => {
    if (project.projectType === "personal") {
      generateProjectHTML(project, index, projectTilesContainer);
    } else if (project.projectType === "company") {
      generateProjectHTML(project, index, projectTilesContainer2);
    }
  });
}
