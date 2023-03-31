const htmlTag = document.getElementById("html");

// check if dark mode is on

if (localStorage.getItem("theme") === "dark") {
  htmlTag.classList.add("dark");
}
if (localStorage.getItem("theme") === "light") {
  htmlTag.classList.remove("dark");
}

console.log(document.baseURI);

toggleTheme = () => {
  if (htmlTag.classList == "dark") {
    htmlTag.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlTag.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  console.log(localStorage.getItem("theme"));
};
