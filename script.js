const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.textContent = "☰";
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fields = this.querySelectorAll("input, textarea");
  const name = fields[0].value.trim();
  const email = fields[1].value.trim();
  const subject = fields[2].value.trim();
  const message = fields[3].value.trim();

  const mailto = `mailto:hardikdhamija676@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+message)}`;

  window.location.href = mailto;
  this.reset();
});
