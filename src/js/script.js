const data = window.homePlannerData;
const navLinks = document.querySelectorAll(".site-header nav a");

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
  });
});

if (data) {
  Object.entries(data.summary).forEach(([key, value]) => {
    setText(`[data-summary="${key}"]`, value);
  });

  const rooms = document.querySelector('[data-render="rooms"]');
  data.rooms.forEach((room) => {
    const card = createElement("article", "room-card");
    card.innerHTML = `
      <div>
        <p class="status">${room.status}</p>
        <h3>${room.name}</h3>
        <p>${room.focus}</p>
      </div>
      <dl>
        <div><dt>Budget</dt><dd>${room.budget}</dd></div>
      </dl>
    `;
    rooms.append(card);
  });

  const renderings = document.querySelector('[data-render="renderings"]');
  data.renderings.forEach((item) => {
    const card = createElement("article", "rendering-card");
    card.innerHTML = `
      <div class="rendering-preview" aria-hidden="true">
        <span>${item.room}</span>
      </div>
      <div class="rendering-body">
        <p class="status">${item.status}</p>
        <h3>${item.title}</h3>
        <p>${item.prompt}</p>
        <dl>
          <div><dt>Source</dt><dd>${item.source}</dd></div>
        </dl>
      </div>
    `;
    renderings.append(card);
  });

  const actions = document.querySelector('[data-render="actions"]');
  data.actions.forEach((item) => {
    const card = createElement("article", "action-card");
    card.innerHTML = `
      <div>
        <p class="status">${item.status} - ${item.room}</p>
        <h3>${item.task}</h3>
        <p>${item.detail}</p>
      </div>
      <dl>
        <div><dt>Owner</dt><dd>${item.owner}</dd></div>
        <div><dt>Due</dt><dd>${item.due}</dd></div>
      </dl>
    `;
    actions.append(card);
  });

  const projects = document.querySelector('[data-render="projects"]');
  data.projects.forEach((project) => {
    const card = createElement("article", "project-card");
    card.innerHTML = `
      <div>
        <p class="status">${project.status} - ${project.room}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="next-step"><strong>Next:</strong> ${project.nextStep}</p>
      </div>
      <dl>
        <div><dt>Budget</dt><dd>${project.budget}</dd></div>
        <div><dt>Window</dt><dd>${project.window}</dd></div>
      </dl>
    `;
    projects.append(card);
  });

  const budget = document.querySelector('[data-render="budget"]');
  const total = data.budget.reduce((sum, row) => sum + row.value, 0);
  data.budget.forEach((row) => {
    const line = createElement("div", "budget-row");
    line.innerHTML = `
      <span>${row.label}</span>
      <meter min="0" max="${row.max}" value="${row.value}">${row.amount} of $${formatNumber(row.max)}</meter>
      <strong>${row.amount}</strong>
    `;
    budget.append(line);
  });
  const totalLine = createElement("div", "budget-total");
  totalLine.innerHTML = `<span>Tracked total</span><strong>$${formatNumber(total)}</strong>`;
  budget.append(totalLine);

  const timeline = document.querySelector('[data-render="timeline"]');
  data.timeline.forEach((item) => {
    const row = createElement("li");
    row.innerHTML = `
      <span>${item.month}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    timeline.append(row);
  });

  const materials = document.querySelector('[data-render="materials"]');
  data.materials.forEach((item) => {
    const line = createElement("li");
    line.innerHTML = `<span></span>${item}`;
    materials.append(line);
  });
}
