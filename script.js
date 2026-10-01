const menu = [
  {
    category: "Menu du jour",
    items: [
      {
        name: "Attiéké demi poulet",
        description: "Demi-poulet servi avec attiéké et condiments maison.",
        price: "5 000",
        image: "assets/attiéképoulet.jpeg",
        position: "50% 50%",
      },
      {
        name: "Attiéké poisson",
        description: "Poisson servi avec attiéké, légumes frais et piment.",
        price: "à partir de 5 000",
        image: "assets/Attiéké Poisson.jpeg",
        position: "50% 50%",
      },
      {
        name: "Croupillon de dinde attiéké",
        description: "Croupillon de dinde accompagné d'attiéké et sauce maison.",
        price: "6 500",
        image: "assets/Attieke croupion de dinde_.jpeg",
        position: "50% 50%",
      },
      {
        name: "Foutou graine",
        description: "Foutou servi avec sauce graine onctueuse.",
        price: "5 000",
        image: "assets/foutou graine.jpeg",
        position: "50% 50%",
      },
      {
        name: "Foutou gombo",
        description: "Foutou accompagné d'une sauce gombo généreuse.",
        price: "5 000",
        image: "assets/foutou gombo.jpeg",
        position: "50% 50%",
      },
      {
        name: "Placali gombo",
        description: "Placali frais servi avec sauce gombo.",
        price: "5 000",
        image: "assets/placali gombo.jpeg",
        position: "50% 50%",
      },
      {
        name: "Placali graine",
        description: "Placali frais servi avec sauce graine.",
        price: "5 000",
        image: "assets/placali graine.jpeg",
        position: "50% 50%",
      },
      {
        name: "Riz gombo",
        description: "Riz accompagné d'une sauce gombo savoureuse.",
        price: "5 000",
        image: "assets/riz gombo.webp",
        position: "50% 50%",
      },
      {
        name: "Riz graine",
        description: "Riz servi avec sauce graine parfumée.",
        price: "5 000",
        image: "assets/riz graine.jpeg",
        position: "50% 50%",
      },
      {
        name: "Alloco",
        description: "Bananes plantain dorées avec piment doux.",
        price: "2 000",
        image: "assets/alloco.jpeg",
        position: "50% 52%",
      },
      {
        name: "Poisson frit",
        description: "Poisson frit servi avec accompagnement et condiments.",
        price: "à partir de 5 000",
        image: "assets/poisson frit.jpeg",
        position: "50% 50%",
      },
      {
        name: "Choukouya attiéké demi",
        description: "Choukouya servi avec attiéké et sauce maison.",
        price: "5 000",
        image: "assets/choukouya.jpeg",
        position: "50% 50%",
      },
      {
        name: "Garba",
        description: "Attiéké, thon, oignons et piment.",
        price: "4 000",
        image: "assets/garba attiéké.jpeg",
        position: "50% 50%",
      },
    ],
  },
  {
    category: "Boissons",
    items: [
      {
        name: "Jus de bissap",
        description: "Bissap frais, menthe et gingembre doux.",
        price: "1 000",
        image: "assets/Jus de bissap.jpeg",
        position: "50% 50%",
      },
      {
        name: "Gnamakoudji",
        description: "Gingembre pressé, citron et sucre équilibré.",
        price: "1 000",
        image: "assets/Gnamakoudji.jpeg",
        position: "50% 50%",
      },
    ],
  },
];

const tabs = document.querySelector("#categoryTabs");
const list = document.querySelector("#menuList");
const menuToggle = document.querySelector("#menuToggle");
const burgerMenu = document.querySelector("#burgerMenu");

let activeCategory = "Tout";

function getFilteredMenu() {
  return menu.filter((section) => activeCategory === "Tout" || section.category === activeCategory);
}

function renderTabs() {
  const categories = ["Tout", ...menu.map((section) => section.category)];
  const buttons = categories
    .map(
      (category) => `
        <button class="tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  tabs.innerHTML = buttons;
  burgerMenu.innerHTML = categories
    .map(
      (category) => `
        <button class="burger-link ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}
function renderMenu() {
  const filtered = getFilteredMenu();

  if (!filtered.length) {
    list.innerHTML = '<p class="empty-state">Aucun plat disponible dans cette catégorie.</p>';
    return;
  }

  list.innerHTML = filtered
    .map(
      (section) => `
        <section class="category-section" aria-labelledby="${section.category}">
          <h3 class="category-title" id="${section.category}">${section.category}</h3>
          <div class="items-grid">
            ${section.items
              .map(
                (item) => `
                  <article class="menu-card">
                    <div class="dish-photo" style="${item.image ? `--image: url('${item.image}');` : ""} --pos: ${item.position}"></div>
                    <div class="menu-card-content">
                      <strong class="price">${item.price}<small>FCFA</small></strong>
                      <h3 class="${["Placali gombo", "Choukouya attiéké demi"].includes(item.name) ? "text-white" : ""}">${item.name}</h3>
                      <p class="${["Placali gombo", "Choukouya attiéké demi"].includes(item.name) ? "text-white" : ""}">${item.description}</p>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function selectCategory(category) {
  activeCategory = category;
  renderTabs();
  renderMenu();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
}

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  selectCategory(tab.dataset.category);
});

menuToggle.addEventListener("click", () => {
  const isOpen = burgerMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

burgerMenu.addEventListener("click", (event) => {
  const link = event.target.closest(".burger-link");
  if (!link) return;
  burgerMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  selectCategory(link.dataset.category);
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".topbar")) return;
  burgerMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});


renderTabs();
renderMenu();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // Offline support is optional; the menu still works online if registration fails.
    });
  });
}
