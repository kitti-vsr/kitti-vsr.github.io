window.onload = renderContent;

function renderContent() {
  const professionalProjects = document.getElementById("professionalProjects");
  const personalProjects = document.getElementById("personalProjects");

  function generateProjectHTML(project, container) {
    const projectHTML = `
    <article style="background-image: url(${project.image_path});">
      <span class="image" style="display: none;">
        <img src=${project.image_path} alt="">
      </span>
      <header class="major">
        <h3><a href="project.html?id=${project.id}" class="link">${project.title}</a></h3>
        <p>${project.short_description}</p>
      </header>
    <a href="project.html?id=${project.id}" class="link primary"></a></article>`;
    container.innerHTML += projectHTML;
  }

  projects.sort((a, b) => b.id - a.id);
  projects.forEach((project, index) => {
    if (project.type == "professional") {
      generateProjectHTML(project, professionalProjects);
    } else if (project.type == "personal") {
      generateProjectHTML(project, personalProjects);
    } else {
    }
  });
}
