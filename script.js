const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

function setStatus(message, ok = true) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.style.color = ok ? "#0f7a2a" : "#b42318";
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.", false);
      return;
    }

    // Demo-only: show success. (No backend yet.)
    setStatus("Thanks! Your message is ready. (Demo: no backend connected yet.)", true);
    form.reset();
  });
}
