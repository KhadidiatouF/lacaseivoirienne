const menu = [
  {
    category: "Entrées",
    items: [
      {
        name: "Alloco piment doux",
        description: "Bananes plantain dorées, oignons croquants, piment maison.",
        price: "2 000",
        image: "assets/aloco.jpeg",
        position: "50% 52%",
      },
      {
        name: "Wings braisés",
        description: "Ailes marinées aux épices, sauce verte et citron.",
        price: "3 000",
        image: "assets/Wings braisés.jpeg",
        position: "50% 48%",
      },
    ],
  },
  {
    category: "Plats",
    items: [
      {
        name: "Attiéké poisson",
        description: "Poisson braisé, attiéké moelleux, légumes frais.",
        price: "5 000",
        image: "assets/atieke poisson.jpeg",
        position: "50% 46%",
      },
      {
        name: "Garba complet",
        description: "Attiéké, thon, oignons, piment et cube signature.",
        price: "3 500",
        image: "assets/garba.jpeg",
        position: "50% 50%",
      },
      {
        name: "Foutou sauce graine",
        description: "Foutou souple, sauce graine onctueuse et viande tendre.",
        price: "5 500",
        image: "assets/Foutou.jpeg",
        position: "50% 50%",
      },
      {
        name: "Placali sauce rouge",
        description: "Placali frais, sauce tomate épicée et poisson fumé.",
        price: "4 500",
        image: "assets/placali.jpeg",
        position: "50% 48%",
      },
      {
        name: "Sauce graine",
        description: "Sauce graine parfumée, riz ou foutou au choix.",
        price: "4 000",
        image: "assets/saucegraine.jpeg",
        position: "50% 48%",
      },
      {
        name: "Sauce rouge",
        description: "Sauce tomate relevée, légumes et accompagnement au choix.",
        price: "3 500",
        image: "assets/saucerouge.jpeg",
        position: "50% 50%",
      },
      {
        name: "Kedjenou",
        description: "Poulet mijoté doucement avec tomate, oignons et épices.",
        price: "4 500",
        image: "assets/Kedjenou.jpeg",
        position: "50% 50%",
      },
    ],
  },
  {
    category: "Grillades",
    items: [
      {
        name: "Poulet braisé",
        description: "Demi-poulet grillé, frites ou attiéké, sauce maison.",
        price: "4 000",
        image: "assets/Poulet braisé.jpeg",
        position: "50% 50%",
      },
      {
        name: "Poisson braisé",
        description: "Poisson entier braisé, légumes croquants et piment vert.",
        price: "6 000",
        image: "assets/poisson braisé.jpeg",
        position: "50% 48%",
      },
      {
        name: "Poisson braisé spécial",
        description: "Poisson braisé, garniture généreuse et sauce signature.",
        price: "6 500",
        image: "assets/poissonbraisé.jpeg",
        position: "50% 48%",
      },
      {
        name: "Brochettes de boeuf",
        description: "Viande marinée, légumes grillés, piment vert.",
        price: "3 500",
        image: "assets/Brochettes de boeuf.jpeg",
        position: "50% 50%",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Dégué frais",
        description: "Yaourt onctueux, mil, vanille et noix de muscade.",
        price: "1 500",
        image: "assets/Dégué frais.jpeg",
        position: "50% 50%",
      },
    ],
  },
  {
    category: "Boissons",
    items: [
      {
        name: "Jus de bissap",
        description: "Bissap frais, menthe, gingembre doux.",
        price: "1 000",
        image: "assets/Jus de bissap.jpeg",
        position: "50% 50%",
      },
      {
        name: "Gnamakoudji",
        description: "Gingembre pressé, citron, sucre équilibré.",
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
                      <h3>${item.name}</h3>
                      <p class="${item.name === "Sauce rouge" ? "text-white" : ""}">${item.description}</p>
                      <strong class="price">${item.price}<small>FCFA</small></strong>
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
