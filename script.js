const categories = [
  {
    name: "Tops",
    slot: "top",
    items: [
      { name: "shirt", price: 12, colors: ["#3b82f6", "#ffffff", "#f97316"], shape: "shirt" },
      { name: "t-shirt", price: 10, colors: ["#22c55e", "#ef4444", "#facc15"], shape: "tshirt" },
      { name: "blouse", price: 14, colors: ["#f9a8d4", "#a78bfa", "#38bdf8"], shape: "blouse" },
      { name: "jumper", price: 18, colors: ["#8b5cf6", "#14b8a6", "#fb7185"], shape: "jumper" },
      { name: "jacket", price: 22, colors: ["#1f2937", "#0ea5e9", "#b45309"], shape: "jacket" }
    ]
  },
  {
    name: "Bottoms",
    slot: "bottom",
    items: [
      { name: "skirt", price: 13, colors: ["#ec4899", "#6366f1", "#f59e0b"], shape: "skirt" },
      { name: "trousers", price: 17, colors: ["#334155", "#2563eb", "#78716c"], shape: "trousers" },
      { name: "shorts", price: 11, colors: ["#16a34a", "#f97316", "#0891b2"], shape: "shorts" }
    ]
  },
  {
    name: "Accessories",
    slot: "hat",
    items: [
      { name: "hat", price: 8, colors: ["#ef4444", "#facc15", "#0ea5e9"], shape: "hat", slot: "hat" },
      { name: "belt", price: 6, colors: ["#78350f", "#111827", "#dc2626"], shape: "belt", slot: "belt" },
      { name: "socks", price: 5, colors: ["#ffffff", "#a7f3d0", "#f0abfc"], shape: "socks", slot: "socks" }
    ]
  },
  {
    name: "Shoes",
    slot: "shoes",
    items: [
      { name: "shoes", price: 16, colors: ["#111827", "#92400e", "#ffffff"], shape: "shoes" },
      { name: "sandals", price: 12, colors: ["#f59e0b", "#06b6d4", "#ef4444"], shape: "sandals" },
      { name: "trainers", price: 20, colors: ["#22c55e", "#3b82f6", "#f43f5e"], shape: "trainers" }
    ]
  },
  {
    name: "Special",
    slot: "dress",
    items: [
      { name: "dress", price: 25, colors: ["#f472b6", "#8b5cf6", "#22c55e"], shape: "dress" },
      { name: "swimsuit", price: 19, colors: ["#06b6d4", "#fb7185", "#facc15"], shape: "swimsuit" }
    ]
  }
];

const svgShapes = {
  shirt: `<svg viewBox="0 0 1000 1000" class="cloth-shape" aria-hidden="true"><path d="M370 90 C400 145 600 145 630 90 L770 165 C825 195 858 255 880 330 L920 510 L805 570 L745 430 L745 895 C650 925 565 940 500 940 C435 940 350 925 255 895 L255 430 L195 570 L80 510 L120 330 C142 255 175 195 230 165 Z" fill="currentColor" stroke="#000" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/><path d="M392 105 C420 185 580 185 608 105" fill="none" stroke="#000" stroke-width="24" stroke-linecap="round"/><path d="M255 430 L255 895 M745 430 L745 895" fill="none" stroke="#000" stroke-width="18" stroke-linecap="round" opacity=".45"/><path d="M500 188 L500 910" fill="none" stroke="#000" stroke-width="18" stroke-linecap="round" opacity=".35"/><circle cx="500" cy="360" r="20" fill="#000"/><circle cx="500" cy="500" r="20" fill="#000"/><path d="M690 410 L790 550 M310 410 L210 550" fill="none" stroke="#000" stroke-width="18" stroke-linecap="round" opacity=".45"/></svg>`,
  tshirt: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M38 20 22 28l6 16 7-4v39h34V40l7 4 6-16-16-8-8 5H45z"/></svg>`,
  blouse: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M35 22 22 29l8 15 5-3c-3 18 0 30 15 37 15-7 18-19 15-37l5 3 8-15-13-9-11 5H44z"/><circle cx="50" cy="40" r="3" fill="#fff"/><circle cx="50" cy="52" r="3" fill="#fff"/></svg>`,
  jumper: `<svg viewBox="0 0 512 512" class="cloth-shape" aria-hidden="true"><path d="M120 40 L75 180 L55 430 Q52 445 67 447 L115 455 Q130 458 132 442 L140 300 L372 300 L380 442 Q382 458 397 455 L445 447 Q460 445 457 430 L437 180 L392 40 Q332 10 322 20 C307 70 205 70 190 20 Q180 10 120 40 Z" fill="currentColor" stroke="#000" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M140 300 L372 300 L380 442 Q382 458 397 455 L357 470 L155 470 L115 455 Q130 458 132 442 Z" fill="currentColor"/><path d="M132 442 Q130 470 155 470 L357 470 Q382 470 380 442 Z" fill="currentColor" stroke="#000" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><g fill="none" stroke="#000" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M190 20 C205 70, 307 70, 322 20"/><path d="M220 20 C230 50, 282 50, 292 20"/><path d="M75 180 L140 195"/><path d="M437 180 L372 195"/><path d="M140 195 L140 315"/><path d="M372 195 L372 315"/><path d="M65 300 L140 315"/><path d="M447 300 L372 315"/><path d="M145 200 L220 200"/><path d="M292 200 L367 200"/><path d="M140 300 L372 300"/><path d="M132 442 Q130 470 155 470 L357 470 Q382 470 380 442"/></g></svg>`,
  jacket: `<svg viewBox="0 0 512 512" class="cloth-shape" aria-hidden="true"><g stroke="#000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M165 130 L95 175 Q65 195 58 235 L42 380 Q40 405 58 412 L95 425 Q115 432 122 410 L145 300 L170 200 Z"/><path fill="currentColor" d="M347 130 L417 175 Q447 195 454 235 L470 380 Q472 405 454 412 L417 425 Q397 432 390 410 L367 300 L342 200 Z"/><path fill="currentColor" d="M165 105 L140 450 L372 450 L347 105 Q300 135 256 110 Q212 135 165 105 Z"/><path fill="rgba(255,255,255,.28)" d="M205 85 L256 145 L230 190 L180 120 Z"/><path fill="rgba(255,255,255,.28)" d="M307 85 L332 120 L282 190 L256 145 Z"/><path fill="none" d="M256 145 L245 450"/><path fill="none" d="M256 145 L267 450"/><circle cx="250" cy="220" r="7" fill="#000"/><circle cx="250" cy="270" r="7" fill="#000"/><circle cx="250" cy="320" r="7" fill="#000"/><circle cx="262" cy="220" r="7" fill="#000"/><circle cx="262" cy="270" r="7" fill="#000"/><circle cx="262" cy="320" r="7" fill="#000"/><path fill="currentColor" d="M170 210 L225 210 L215 255 L160 255 Z"/><path fill="currentColor" d="M287 210 L342 210 L352 255 L297 255 Z"/><path fill="currentColor" d="M165 315 L225 315 L215 370 L155 370 Z"/><path fill="currentColor" d="M287 315 L347 315 L357 370 L297 370 Z"/><path fill="none" d="M50 392 L100 408"/><path fill="none" d="M462 392 L412 408"/></g></svg>`,
  skirt: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M30 22h40l10 58H20z"/><path stroke="#fff" stroke-width="3" d="M40 27 34 76M50 27v49M60 27l6 49" opacity=".65"/></svg>`,
  trousers: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M28 18h44l-6 64H53l-3-38-3 38H34z"/><path stroke="#fff" stroke-width="3" d="M50 20v25" opacity=".7"/></svg>`,
  shorts: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M25 24h50l-4 43H55l-5-20-5 20H29z"/><path stroke="#fff" stroke-width="3" d="M50 26v21" opacity=".75"/></svg>`,
  hat: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M28 52c1-28 10-40 20-40s19 12 22 40z"/><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M12 52h76c5 0 8 4 8 9H4c0-5 3-9 8-9z"/></svg>`,
  belt: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><rect x="20" y="40" width="120" height="20" rx="5" fill="currentColor" stroke="#17202a" stroke-width="3"/><rect x="65" y="36" width="30" height="28" rx="3" fill="none" stroke="#ffd166" stroke-width="5"/></svg>`,
  socks: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="2" d="M24 16h20v50H24zM58 16h20v50H58z"/><path stroke="#17202a" stroke-width="3" d="M24 28h20M58 28h20"/></svg>`,
  shoes: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M8 57c16 2 22-7 31-12 8 4 12 11 10 28H5zM51 57c16 2 22-7 31-12 8 4 12 11 10 28H48z"/></svg>`,
  sandals: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M6 61h39c2 10-1 16-8 20H5zM48 61h39c2 10-1 16-8 20H47z"/><path fill="none" stroke="#17202a" stroke-width="4" d="M22 61l14-18M65 61l14-18"/></svg>`,
  trainers: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M7 56c17 0 23-9 33-13 7 4 13 10 11 28H6zM51 56c17 0 23-9 33-13 7 4 13 10 11 28H50z"/><path stroke="#fff" stroke-width="3" d="M31 52h15M75 52h15"/></svg>`,
  dress: `<svg viewBox="0 0 100 100" class="cloth-shape" aria-hidden="true"><path fill="currentColor" stroke="#17202a" stroke-width="3" d="M37 14h26l8 22-9 6 20 43H18l20-43-9-6z"/><path fill="#fff" d="M42 18h16l-8 14z" opacity=".8"/></svg>`,
  swimsuit: `<svg viewBox="0 0 300 400" class="cloth-shape" aria-hidden="true"><path d="M106,62 C106,62 104,115 102,130 C100,145 115,180 110,210 C105,240 98,255 140,335 C145,345 155,345 160,335 C202,255 195,240 190,210 C185,180 200,145 198,130 C196,115 194,62 194,62 L175,62 C175,62 178,110 150,110 C122,110 125,62 125,62 Z" fill="currentColor" stroke="#333" stroke-width="1.5"/><g stroke="#333" stroke-width="1" fill="none"><path d="M115,190 Q125,195 135,192"/><path d="M116,200 Q126,205 136,202"/><path d="M185,190 Q175,195 165,192"/><path d="M184,200 Q174,205 164,202"/><path d="M140,245 L170,215"/></g></svg>`
};

const colorNames = {
  "#3b82f6": "blue",
  "#ffffff": "white",
  "#f97316": "orange",
  "#22c55e": "green",
  "#ef4444": "red",
  "#facc15": "yellow",
  "#f9a8d4": "pink",
  "#a78bfa": "purple",
  "#38bdf8": "sky blue",
  "#8b5cf6": "violet",
  "#14b8a6": "teal",
  "#fb7185": "rose",
  "#1f2937": "black",
  "#0ea5e9": "light blue",
  "#b45309": "brown",
  "#ec4899": "hot pink",
  "#6366f1": "indigo",
  "#f59e0b": "gold",
  "#334155": "navy",
  "#2563eb": "royal blue",
  "#78716c": "gray",
  "#16a34a": "dark green",
  "#0891b2": "cyan",
  "#78350f": "dark brown",
  "#111827": "black",
  "#dc2626": "dark red",
  "#a7f3d0": "mint",
  "#f0abfc": "lilac",
  "#92400e": "brown",
  "#06b6d4": "turquoise",
  "#f43f5e": "raspberry",
  "#f472b6": "pink"
};

const categoryTabs = document.querySelector("#categoryTabs");
const categoryTitle = document.querySelector("#categoryTitle");
const itemsGrid = document.querySelector("#itemsGrid");
const avatarDropZone = document.querySelector("#avatarDropZone");
const avatar = document.querySelector("#avatar");
const cartList = document.querySelector("#cartList");
const totalPrice = document.querySelector("#totalPrice");
const trashZone = document.querySelector("#trashZone");
const noneButton = document.querySelector("#noneButton");
const buyButton = document.querySelector("#buyButton");
const resetButton = document.querySelector("#resetButton");
const finalScreen = document.querySelector("#finalScreen");
const finalAvatarWrap = document.querySelector("#finalAvatarWrap");
const finalMessage = document.querySelector("#finalMessage");
const finalTotal = document.querySelector("#finalTotal");
const closeFinal = document.querySelector("#closeFinal");
const playAgainButton = document.querySelector("#playAgainButton");

let activeCategory = categories[0];
let outfit = {};
let draggedItem = null;
let draggedSlot = null;

function formatPrice(price) {
  return `$${price}`;
}

function makeItemId(item, color) {
  return `${item.name}-${color.replace("#", "")}`;
}

function getColorName(color) {
  return colorNames[color] || color;
}

function renderShape(shape, color, extraClass = "") {
  return `<div class="${extraClass} shape-${shape}" style="--cloth: ${color}">${svgShapes[shape]}</div>`;
}

function getSlot(item) {
  return item.slot || activeCategory.slot;
}

function renderTabs() {
  categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-tab ${category.name === activeCategory.name ? "active" : ""}"
          type="button"
          data-category="${category.name}">
          ${category.name}
        </button>
      `
    )
    .join("");
}

function renderItems() {
  categoryTitle.textContent = activeCategory.name;
  noneButton.textContent = `No ${activeCategory.name}`;
  itemsGrid.innerHTML = activeCategory.items
    .flatMap((item) =>
      item.colors.map((color) => {
        const slot = item.slot || activeCategory.slot;
        const id = makeItemId(item, color);
        return `
          <article class="item-card"
            draggable="true"
            data-id="${id}"
            data-name="${item.name}"
            data-price="${item.price}"
            data-color="${color}"
            data-color-name="${getColorName(color)}"
            data-shape="${item.shape}"
            data-slot="${slot}">
            ${renderShape(item.shape, color, "mini-cloth")}
            <span>
              <span class="item-name">${item.name}</span>
              <span class="item-color">${getColorName(color)}</span>
            </span>
            <span class="price-pill">${formatPrice(item.price)}</span>
          </article>
        `;
      })
    )
    .join("");
}

function renderOutfit() {
  document.querySelectorAll(".wearable").forEach((slotEl) => {
    const slot = slotEl.dataset.slot;
    const item = outfit[slot];
    slotEl.innerHTML = item ? renderShape(item.shape, item.color, "worn-piece") : "";
    slotEl.draggable = Boolean(item);
    if (item) {
      slotEl.dataset.name = item.name;
      slotEl.dataset.price = item.price;
    } else {
      delete slotEl.dataset.name;
      delete slotEl.dataset.price;
    }
  });

  renderCart();
}

function renderCart() {
  const items = Object.values(outfit);
  if (!items.length) {
    cartList.innerHTML = `<li><span class="cart-item-name">No items yet</span><span>$0</span></li>`;
  } else {
    cartList.innerHTML = items
      .map(
        (item) => `
          <li>
            <span>
              <span class="cart-item-name">${item.name}</span>
              <span class="item-color">${item.colorName}</span>
            </span>
            <strong>${formatPrice(item.price)}</strong>
          </li>
        `
      )
      .join("");
  }
  totalPrice.textContent = formatPrice(items.reduce((sum, item) => sum + Number(item.price), 0));
}

function addToOutfit(item) {
  if (item.slot === "dress") {
    delete outfit.top;
    delete outfit.bottom;
  }

  if (item.slot === "top" || item.slot === "bottom") {
    delete outfit.dress;
  }

  outfit[item.slot] = item;
  renderOutfit();
}

function removeSlot(slot) {
  delete outfit[slot];
  renderOutfit();
}

function removeActiveCategoryItems() {
  const slots = [...new Set(activeCategory.items.map((item) => item.slot || activeCategory.slot))];
  slots.forEach((slot) => removeSlot(slot));
}

function itemFromElement(element) {
  return {
    id: element.dataset.id,
    name: element.dataset.name,
    price: Number(element.dataset.price),
    color: element.dataset.color,
    colorName: element.dataset.colorName,
    shape: element.dataset.shape,
    slot: element.dataset.slot
  };
}

function resetOutfit() {
  outfit = {};
  renderOutfit();
}

function getAvatarAsset(type) {
  const map = {
    boy: "assets/avatars/avatarBoy.png",
    girl: "assets/avatars/avatarGirl.png"
  };
  return map[type] || null;
}

function setAvatar(type) {
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.avatar === type);
  });

  const hair = document.querySelector('[data-avatar-part="hair"]');
  hair.className = `hair hair-${type}`;

  const avatarEl = document.querySelector("#avatar");
  const asset = getAvatarAsset(type);
  if (asset) {
    let img = avatarEl.querySelector(".avatar-img");
    if (!img) {
      img = document.createElement("img");
      img.className = "avatar-img";
      img.alt = type;
      img.draggable = false;
      avatarEl.insertBefore(img, avatarEl.firstChild);
    }
    img.src = asset;
    avatarEl.classList.add("use-image-avatar");
  } else {
    const img = avatarEl.querySelector(".avatar-img");
    if (img) img.remove();
    avatarEl.classList.remove("use-image-avatar");
  }
}

function showFinalScreen() {
  const messages = [
    { m: "🌟 Fabulous Outfit! 🌟", s: "You are a total fashionista!" },
    { m: "✨ Great Combo! ✨", s: "Mixing colours like a pro!" },
    { m: "🔥 Totally Trendy! 🔥", s: "Watch out — the runway is calling!" },
    { m: "💅 Style Queen/King! 💅", s: "That outfit is absolutely on fire!" },
    { m: "🎀 Fashion Forward! 🎀", s: "You have amazing taste!" },
    { m: "⭐ Look of the Day! ⭐", s: "Everyone's talking about your style!" }
  ];
  const pick = messages[Math.floor(Math.random() * messages.length)];
  const total = Object.values(outfit).reduce((sum, item) => sum + Number(item.price), 0);
  document.querySelector(".spark").textContent = pick.s;
  finalMessage.textContent = pick.m;
  finalTotal.textContent = `Total: ${formatPrice(total)}`;
  finalAvatarWrap.innerHTML = "";
  finalAvatarWrap.appendChild(avatar.cloneNode(true));
  finalScreen.classList.add("show");
  finalScreen.setAttribute("aria-hidden", "false");
  renderFinalSparks();
}

function clearFinalSparks() {
  finalScreen.querySelectorAll(".confetti, .final-sparkle").forEach((effect) => effect.remove());
}

function renderFinalSparks() {
  clearFinalSparks();
  const confettiColors = ["#ffd700", "#ff6b9d", "#9b59b6", "#00bcd4", "#ff5722", "#4caf50", "#ff9800"];

  for (let index = 0; index < 55; index += 1) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    confetti.style.width = `${7 + Math.random() * 8}px`;
    confetti.style.height = `${7 + Math.random() * 8}px`;
    finalScreen.appendChild(confetti);
  }

  [
    ["10%", "10%"],
    ["85%", "12%"],
    ["5%", "55%"],
    ["90%", "60%"],
    ["15%", "85%"],
    ["80%", "80%"]
  ].forEach(([left, top], index) => {
    const sparkle = document.createElement("div");
    sparkle.className = "final-sparkle";
    sparkle.style.left = left;
    sparkle.style.top = top;
    sparkle.style.animationDelay = `${index * 0.3}s`;
    sparkle.textContent = "*";
    finalScreen.appendChild(sparkle);
  });
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".category-tab");
  if (!button) return;
  activeCategory = categories.find((category) => category.name === button.dataset.category);
  renderTabs();
  renderItems();
});

itemsGrid.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".item-card");
  if (!card) return;
  draggedItem = itemFromElement(card);
  draggedSlot = null;
  event.dataTransfer.setData("text/plain", JSON.stringify(draggedItem));
  event.dataTransfer.effectAllowed = "copy";
});

itemsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".item-card");
  if (!card) return;
  addToOutfit(itemFromElement(card));
});

avatar.addEventListener("dragstart", (event) => {
  const worn = event.target.closest(".wearable");
  if (!worn || !outfit[worn.dataset.slot]) return;
  draggedSlot = worn.dataset.slot;
  draggedItem = null;
  event.dataTransfer.setData("text/plain", draggedSlot);
  event.dataTransfer.effectAllowed = "move";
});

avatarDropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  avatarDropZone.classList.add("drag-over");
});

avatarDropZone.addEventListener("dragleave", () => {
  avatarDropZone.classList.remove("drag-over");
});

avatarDropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  avatarDropZone.classList.remove("drag-over");
  if (draggedItem) {
    addToOutfit(draggedItem);
  }
});

trashZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  trashZone.classList.add("drag-over");
});

trashZone.addEventListener("dragleave", () => {
  trashZone.classList.remove("drag-over");
});

trashZone.addEventListener("drop", (event) => {
  event.preventDefault();
  trashZone.classList.remove("drag-over");
  if (draggedSlot) {
    removeSlot(draggedSlot);
  }
});

noneButton.addEventListener("click", removeActiveCategoryItems);
resetButton.addEventListener("click", resetOutfit);
buyButton.addEventListener("click", showFinalScreen);

document.querySelector(".segmented").addEventListener("click", (event) => {
  const button = event.target.closest(".segment");
  if (!button) return;
  setAvatar(button.dataset.avatar);
});

closeFinal.addEventListener("click", () => {
  finalScreen.classList.remove("show");
  finalScreen.setAttribute("aria-hidden", "true");
  clearFinalSparks();
});

playAgainButton.addEventListener("click", () => {
  finalScreen.classList.remove("show");
  finalScreen.setAttribute("aria-hidden", "true");
  clearFinalSparks();
  resetOutfit();
});

renderTabs();
renderItems();
renderOutfit();
setAvatar('boy');
