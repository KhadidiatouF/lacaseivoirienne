const menu = [
  {
    category: "Entrées",
    items: [
      {
        name: "Alloco piment doux",
        description: "Bananes plantain dorées, oignons croquants, piment maison.",
        price: "2 000",
        image: "assets/aloco.jpeg",
        position: "50% 58%",
      },
      {
        name: "Wings braisés",
        description: "Ailes marinées aux épices, sauce verte et citron.",
        price: "3 000",
        position: "8% 12%",
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
        position: "50% 45%",
      },
      {
        name: "Poulet kedjenou",
        description: "Poulet mijoté, tomate, oignons, riz parfumé.",
        price: "4 500",
        image: "assets/saucegraine.jpeg",
        position: "50% 52%",
      },
      {
        name: "Garba complet",
        description: "Attiéké, thon, oignons, piment et cube signature.",
        price: "3 500",
        position: "12% 54%",
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
        position: "4% 52%",
      },
      {
        name: "Brochettes de boeuf",
        description: "Viande marinée, légumes grillés, piment vert.",
        price: "3 500",
        position: "86% 68%",
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
        position: "74% 18%",
      },
      {
        name: "Crêpes coco",
        description: "Crêpes moelleuses, coco râpée, caramel léger.",
        price: "2 000",
        position: "72% 78%",
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
        position: "83% 17%",
      },
      {
        name: "Gnamakoudji",
        description: "Gingembre pressé, citron, sucre équilibré.",
        price: "1 000",
        position: "78% 44%",
      },
    ],
  },
];

const tabs = document.querySelector("#categoryTabs");
const list = document.querySelector("#menuList");
const searchInput = document.querySelector("#searchInput");
const qrDialog = document.querySelector("#qrDialog");
const qrImage = document.querySelector("#qrImage");
const qrUrl = document.querySelector("#qrUrl");

let activeCategory = "Tout";

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getFilteredMenu() {
  const query = normalize(searchInput.value.trim());

  return menu
    .filter((section) => activeCategory === "Tout" || section.category === activeCategory)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        const searchable = normalize(`${item.name} ${item.description} ${section.category}`);
        return searchable.includes(query);
      }),
    }))
    .filter((section) => section.items.length > 0);
}

function renderTabs() {
  const categories = ["Tout", ...menu.map((section) => section.category)];
  tabs.innerHTML = categories
    .map(
      (category) => `
        <button class="tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderMenu() {
  const filtered = getFilteredMenu();

  if (!filtered.length) {
    list.innerHTML = '<p class="empty-state">Aucun plat ne correspond à cette recherche.</p>';
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
                      <p>${item.description}</p>
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

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;

  activeCategory = tab.dataset.category;
  renderTabs();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

document.querySelector("#openQr").addEventListener("click", () => {
  const url = window.location.href.split("#")[0];
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(url)}`;
  qrUrl.textContent = url;
  qrDialog.showModal();
});

document.querySelector("#closeQr").addEventListener("click", () => qrDialog.close());
document.querySelector("#printQr").addEventListener("click", () => window.print());

renderTabs();
renderMenu();
