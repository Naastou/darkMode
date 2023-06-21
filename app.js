const btn = document.querySelector(".btn");
const container = document.querySelector(".articles");
// toggle to dark mode
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);

    return `<article class="article">
            <h2 class="title">${title}</h2>
            <div class="info">
              <span class="date">${formatDate}</span>
              <span class="time">${length} read time</span>
            </div>
            <p>
              ${snippet}
            </p>
          </article>`;
  })
  .join("");

container.innerHTML = articlesData;
