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
  const queryParams = getQueryParams();
  const headElement = document.getElementById("head");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  const screenshot1Element = document.getElementById(`screenshot1`);
  const screenshot2Element = document.getElementById(`screenshot2`);
  const screenshot3Element = document.getElementById(`screenshot3`);
  const screenshot4Element = document.getElementById(`screenshot4`);
  const dateElement = document.getElementById("date");
  const myRoleElement = document.getElementById("myRole");
  const technologiesElement = document.getElementById("technologies");
  const linkElement = document.getElementById("link");

  if (queryParams.id) {
    const id = parseInt(queryParams.id);
    const project = projects.find((project) => project.id == id);

    if (project) {
      headElement.innerText = "Kitti's Portfolio : " + project.title;
      titleElement.innerText = project.title;
      descriptionElement.innerText = project.description;

      const path = "images/projects/" + project.id + "/";
      screenshot1Element.src = path + project.screenshots[0];
      screenshot2Element.src = path + project.screenshots[1];
      screenshot3Element.src = path + project.screenshots[2];
      screenshot4Element.src = path + project.screenshots[3];

      dateElement.innerText = project.date;
      myRoleElement.innerText = project.myRole;
      technologiesElement.innerText = project.technologies;

      if (project.link) {
        linkElement.href = project.link;
      } else {
        linkElement.classList.add("disabled");
      }
    } else {
      titleElement.innerText = "ID Not Found";
      descriptionElement.innerText = "The provided ID does not exist.";
    }
  }
}
