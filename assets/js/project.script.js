window.onload = renderContent;

// Function to parse query parameters from URL
function getQueryParams() {
  var params = {};
  var queryString = window.location.search;
  if (queryString) {
    queryString = queryString.substring(1);
    var paramArr = queryString.split("&");
    for (var i = 0; i < paramArr.length; i++) {
      var pair = paramArr[i].split("=");
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
  }
  return params;
}

// Function to render content based on query parameters
function renderContent() {
  const headElement = document.getElementById("head");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  const screenshotsElement = document.getElementById(`screenshots`);
  const dateElement = document.getElementById("date");
  const myRoleElement = document.getElementById("myRole");
  const technologiesElement = document.getElementById("technologies");
  const linkElement = document.getElementById("link");

  const queryParams = getQueryParams();
  if (queryParams.id) {
    const id = parseInt(queryParams.id);
    const project = projects.find((project) => project.id == id);
    if (project) {
      headElement.innerText = "Kitti's Portfolio : " + project.title;
      titleElement.innerText = project.title;
      descriptionElement.innerText = project.description;

      const screenshots = [];
      for (let i = 0; i < project.screenshots.length; i++) {
        screenshots.push(project.screenshots[i]);
      }

      let col = 12 / project.screenshots_column;
      let screenshotHtml = "";
      for (let i = 0; i < screenshots.length; i++) {
        screenshotHtml += `<div class="col-${col}"><span class="image fit"><img src="${screenshots[i]}" alt="" /></span></div>`;
      }

      const screenshotContainer = `<div class="row gtr-uniform">${screenshotHtml}</div>`;
      screenshotsElement.innerHTML = screenshotContainer;

      dateElement.innerText = project.date;
      myRoleElement.innerText = project.my_role;
      technologiesElement.innerText = project.technologies;
      if (project.link) {
        linkElement.href = project.link;
      } else {
        linkElement.classList.add("disabled");
      }
    }
  }
}
