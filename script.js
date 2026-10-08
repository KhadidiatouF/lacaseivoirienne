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
    category: "Brochettes",
    items: [
      { name: "Brochettes de viande de bœuf", description: "Brochettes grillées et assaisonnées maison.", price: "5 000", image: "assets/Brochettes/brochettes de viande de boeuf.jpeg" },
      { name: "Brochettes de blanc de poulet", description: "Morceaux de poulet tendres, grillés à la braise.", price: "5 000", image: "assets/Brochettes/brochettes de blanc de poulet.jpeg" },
      { name: "Brochettes de lotte", description: "Brochettes de lotte marinées et grillées.", price: "5 000", image: "assets/Brochettes/brochettes de lotte.jpeg" },
      { name: "Brochettes de gambas", description: "Gambas grillées et parfumées aux épices maison.", price: "6 000", image: "assets/Brochettes/brochettes gambas.jpeg" },
    ],
  },
  {
    category: "Nos volailles",
    items: [
      { name: "Poulet braisé - le demi", description: "Poulet braisé à la ivoirienne, tendre et fumé.", price: "5 000", image: "assets/Volailles/poulet braisé.jpeg" },
      { name: "Dinde braisée", description: "Dinde braisée aux épices maison.", price: "7 000", image: "assets/Volailles/dinde braisé.jpg" },
      { name: "Caille braisée", description: "Caille braisée, parfumée et généreuse.", price: "12 000", image: "assets/Volailles/caille braisé.jpeg" },
      { name: "Pigeon braisé", description: "Pigeon braisé aux saveurs de la maison.", price: "15 000", image: "assets/Volailles/pigeon braisé.jpeg" },
    ],
  },
  {
    category: "Nos poissons",
    items: [
      { name: "Poisson carpe braisé / frit", description: "Carpe préparée braisée ou frite.", price: "à partir de 5 000", image: "assets/poissons /carpe braisé.jpeg" },
      { name: "Poisson thon frit", description: "Thon frit, croustillant et généreux.", price: "4 000", image: "assets/poissons /thon frit.jpeg" },
      { name: "Sol braisé ou frit", description: "Poisson sol préparé braisé ou frit.", price: "10 000", image: "assets/poissons /sol.jpeg" },
      { name: "Dorade frite ou braisée", description: "Dorade préparée selon votre choix.", price: "à partir de 6 000", image: "assets/poissons /dorade braisé.jpeg" },
    ],
  },
  {
    category: "Nos sauces quotidiennes",
    items: [
      { name: "Sauce graine", description: "Sauce graine ivoirienne préparée maison.", price: "5 000", image: "assets/Sauces/Sauce Graine.jpeg" },
      { name: "Sauce gombo", description: "Sauce gombo généreuse et parfumée.", price: "5 000", image: "assets/Sauces/Sauce Gombo avec du gari.jpeg" },
      { name: "Sauce aubergines", description: "Sauce aux aubergines préparée maison.", price: "5 000", image: "assets/Sauces/sauce aubergine.avif" },
      { name: "Sauce arachide", description: "Sauce arachide onctueuse et savoureuse.", price: "5 000", image: "assets/Sauces/sauce arachide.jpg" },
    ],
  },
  {
    category: "Choukouya (Dibi à l’ivoirienne)",
    items: [
      { name: "Choukouya poulet - le demi", description: "Poulet grillé façon choukouya, avec oignons et épices.", price: "5 000", image: "assets/Choukouya/Choukouya Poulet.jpeg" },
      { name: "Choukouya mouton", description: "Mouton grillé façon choukouya.", price: "5 000", image: "assets/Choukouya/Choukouya mouton.jpeg" },
    ],
  },
  {
    category: "Nos soupes",
    items: [
      { name: "Kedjenou de poulet - le demi", description: "Poulet mijoté dans une sauce kedjenou parfumée.", price: "6 000", image: "assets/Soupes/kedjenou poulet.jpeg" },
      { name: "Kedjenou de poisson", description: "Poisson mijoté aux légumes et épices ivoiriennes.", price: "6 000", image: "assets/Soupes/kedjenou de poisson.jpeg" },
      { name: "Kedjenou de cabri (chèvre)", description: "Cabri mijoté façon kedjenou.", price: "7 000", image: "assets/Soupes/kedjenou de cabri.jpeg" },
      { name: "Kedjenou de mouton", description: "Mouton mijoté dans une sauce relevée.", price: "7 000", image: "assets/Soupes/kedjenou de mouton.avif" },
      { name: "Kedjenou de pattes de bœuf", description: "Pattes de bœuf mijotées et fondantes.", price: "6 000", image: "assets/Soupes/kedjenou pate de boeuf.jpeg" },
      { name: "Soupe de pattes de bœuf", description: "Soupe généreuse aux pattes de bœuf.", price: "5 000", image: "assets/Soupes/soupe pate de boeuf.jpeg" },
    ],
  },
  {
    category: "Nos accompagnements",
    items: [
      { name: "Foutou banane", description: "Accompagnement traditionnel ivoirien.", price: "2 000", image: "assets/accompagnements/foutou banane.jpeg" },
      { name: "Foutou igname", description: "Foutou d’igname préparé maison.", price: "2 000", image: "assets/accompagnements/foutou igname.jpeg" },
      { name: "Attiéké", description: "Semoule de manioc légèrement citronnée.", price: "1 000", image: "assets/accompagnements/attiéké.jpg" },
      { name: "Alloco", description: "Bananes plantain dorées et fondantes.", price: "2 000", image: "assets/accompagnements/alloco.jpeg" },
      { name: "Frites de pommes de terre", description: "Frites croustillantes préparées à la commande.", price: "1 000", image: "assets/accompagnements/frites de pomme de terres.jpeg" },
      { name: "Frites de patates douces", description: "Patates douces dorées et croustillantes.", price: "1 000", image: "assets/accompagnements/frites de patates douces.jpeg" },
      { name: "Frites d’igname", description: "Bâtonnets d’igname frits à la perfection.", price: "1 500", image: "assets/accompagnements/frites d'ignames.jpg" },
      { name: "Bâtons de manioc", description: "Accompagnement de manioc traditionnel.", price: "1 000", image: "assets/accompagnements/baton de manioc.jpeg" },
      { name: "Abolo", description: "Gâteau de maïs moelleux et légèrement sucré.", price: "1 000", image: "assets/accompagnements/abolo.jpeg" },
      { name: "Akassa", description: "Pâte de maïs douce et légère.", price: "1 000", image: "assets/accompagnements/akassa.jpeg" },
    ],
  },
  {
    category: "Boissons",
    items: [
      {
        name: "Coca-Cola",
        description: "Boisson fraîche.",
        price: "1 000",
        image: "assets/boissons/coca.jpeg",
      },
      {
        name: "Fanta",
        description: "Boisson fraîche.",
        price: "1 000",
        image: "assets/boissons/fanta.jpeg",
      },
      {
        name: "Sprite",
        description: "Boisson fraîche.",
        price: "1 000",
        image: "assets/boissons/sprite.jpeg",
      },
      {
        name: "Bissap",
        description: "Jus de bissap frais préparé maison.",
        price: "1 000",
        image: "assets/boissons/Jus de bissap.jpeg",
      },
      {
        name: "Gingembre",
        description: "Jus de gingembre frais et parfumé.",
        price: "1 000",
        image: "assets/boissons/jus de gingembre.jpeg",
      },
      {
        name: "Passion",
        description: "Jus de fruit de la passion frais.",
        price: "1 500",
        image: "assets/boissons/jus de passion.jpeg",
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
                    <div class="dish-photo" style="${item.image ? `--image: url('${item.image.replaceAll("'", "\\27 ")}');` : ""} --pos: ${item.position || "50% 50%"}"></div>
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
