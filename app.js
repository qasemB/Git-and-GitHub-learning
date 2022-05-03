const gitImageElem = document.getElementById("git_image");
const gitDescElem = document.getElementById("git_desc");
gitImageElem.addEventListener("mouseover", () => {
  gitDescElem.classList.remove("d_none");
});
gitImageElem.addEventListener("mouseleave", () => {
  gitDescElem.classList.add("d_none");
});

const gitHubImageElem = document.getElementById("github_image");
const gitHubDescElem = document.getElementById("github_desc");
gitHubImageElem.addEventListener("mouseover", () => {
  gitHubDescElem.classList.remove("d_none");
});
gitHubImageElem.addEventListener("mouseleave", () => {
  gitHubDescElem.classList.add("d_none");
});