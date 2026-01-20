const themeToggle = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  localStorage.setItem("theme", theme);
  updateButton(theme);
}

function updateButton(theme) {
  if (theme === "light") {
    themeText.textContent = "Dark Mode";
    themeIcon.textContent = "🌙";
  } else {
    themeText.textContent = "Light Mode";
    themeIcon.textContent = "☀️";
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
});
