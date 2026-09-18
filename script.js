// ---------- дата начала отношений ----------
// Если нужно поменять время (не только дату), меняй строку ниже.
const START_DATE = new Date("2025-10-03T00:00:00");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function updateTimer() {
  const yearsEl = document.getElementById("t-years");
  if (!yearsEl) return; // на этой странице таймера нет

  const now = new Date();

  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();
  let hours = now.getHours() - START_DATE.getHours();
  let minutes = now.getMinutes() - START_DATE.getMinutes();
  let seconds = now.getSeconds() - START_DATE.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLastDay;
    months--;
  }
  if (months < 0) { months += 12; years--; }

  document.getElementById("t-years").textContent = years;
  document.getElementById("t-months").textContent = months;
  document.getElementById("t-days").textContent = days;
  document.getElementById("t-hours").textContent = pad(hours);
  document.getElementById("t-minutes").textContent = pad(minutes);
  document.getElementById("t-seconds").textContent = pad(seconds);
}

updateTimer();
setInterval(updateTimer, 1000);

// ---------- разбросанные по странице слова-обращения ----------
const NICKNAMES = ["Жанм", "Журек", "Ботам", "Жалгызым", "Жарм", "Любовь", "Тормоз", "Любимый/ая"];

function scatterWords() {
  const field = document.querySelector(".word-field");
  if (!field) return;

  const count = window.innerWidth < 700 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = NICKNAMES[i % NICKNAMES.length];
    span.style.top = Math.random() * 92 + "%";
    span.style.left = Math.random() * 90 + "%";
    span.style.fontSize = 0.9 + Math.random() * 1.6 + "rem";
    span.style.transform = `rotate(${(Math.random() * 30 - 15).toFixed(1)}deg)`;
    field.appendChild(span);
  }
}

scatterWords();
