const THEME_STORAGE_KEY = "theme";

function getCurrentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function setTheme(nextTheme) {
  const theme = nextTheme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
  updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initTheme() {
  updateThemeToggle(getCurrentTheme());
}

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener(
    "click",
    () => setTheme(getCurrentTheme() === "dark" ? "light" : "dark"),
    { passive: true },
  );
}

setYear();
initTheme();
initThemeToggle();
