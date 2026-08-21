/**
 * Ember & Bite — Digital Menu App
 */

// ─── Language ─────────────────────────────────────────────────────────────────
let currentLanguage = localStorage.getItem("language") || "en";

const TRANSLATIONS = {
  en: {
    welcome: "Welcome",
    viewMenu: "View Menu",
    menu: "Menu",
    categories: "Categories",
    visitUs: "Visit Us",
    connect: "Connect",

    yourOrder: "Your Order",
    total: "Total",
    item: "Item",
    items: "Items",
    emptyOrder: "Your order is empty",

    add: "Add",
    addToOrder: "Add to Order",
    addExtras: "Add extras",
    remove: "Remove",
    decrease: "Decrease",
    increase: "Increase",

    optionalDetails: "Optional details",
    yourName: "Your name",
    phoneNumber: "Phone number",
    orderType: "Order type",
    pickup: "Pickup",
    delivery: "Delivery",
    deliveryAddress: "Delivery address",
    additionalNotes: "Additional notes",
    orderViaWhatsApp: "Order via WhatsApp",

    orderAdded: "added to order",

    customerName: "Customer Name",
    phone: "Phone",
    address: "Address",
    notes: "Notes",

    orderQuestion: "Hello! I'd like to ask a question.",
    orderMessage: "Hello, I would like to place an order:"
  },

  ar: {
    welcome: "أهلًا وسهلًا",
    viewMenu: "عرض المنيو",
    menu: "المنيو",
    categories: "التصنيفات",
    visitUs: "زورونا",
    connect: "تواصل معنا",

    yourOrder: "طلبك",
    total: "المجموع",
    item: "عنصر",
    items: "عناصر",
    emptyOrder: "طلبك فارغ",

    add: "إضافة",
    addToOrder: "إضافة إلى الطلب",
    addExtras: "إضافات",
    remove: "حذف",
    decrease: "تقليل",
    increase: "زيادة",

    optionalDetails: "بيانات اختيارية",
    yourName: "اسمك",
    phoneNumber: "رقم الهاتف",
    orderType: "نوع الطلب",
    pickup: "استلام من المطعم",
    delivery: "توصيل",
    deliveryAddress: "عنوان التوصيل",
    additionalNotes: "ملاحظات إضافية",
    orderViaWhatsApp: "الطلب عبر واتساب",

    orderAdded: "تمت إضافته إلى الطلب",

    customerName: "اسم العميل",
    phone: "رقم الهاتف",
    address: "العنوان",
    notes: "ملاحظات",

    orderQuestion: "مرحبًا! أود الاستفسار عن شيء.",
    orderMessage: "مرحبًا، أود إجراء طلب:"
  }
};

function t(key) {
  return TRANSLATIONS[currentLanguage][key] || TRANSLATIONS.en[key] || key;
}

function getLocalized(value) {
  if (value && typeof value === "object") {
    return value[currentLanguage] || value.en || "";
  }

  return value || "";
}

function setLanguage(language) {
  currentLanguage = language === "ar" ? "ar" : "en";

  localStorage.setItem("language", currentLanguage);

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  updateStaticTranslations();

  applyConfig();
  renderCategoryNav();
  renderMenuSections();
  renderCartBar();

  if (activeModalProduct) {
    openProductModal(activeModalProduct.id);
  }

  if (!document.getElementById("order-modal")?.classList.contains("hidden")) {
    renderOrderSummary();
  }

  updateLanguageButton();
}

function updateLanguageButton() {
  const button = document.getElementById("language-toggle");

  if (!button) return;

  button.textContent =
    currentLanguage === "en" ? "العربية" : "English";
}

function updateStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (TRANSLATIONS[currentLanguage][key]) {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;

    if (TRANSLATIONS[currentLanguage][key]) {
      el.placeholder = t(key);
    }
  });
}


// ─── State ───────────────────────────────────────────────────────────────────
let cart = loadCart();
let activeModalProduct = null;
let modalQuantity = 1;
let selectedExtras = new Set();


// ─── DOM Ready ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);

  setupEventListeners();
  setupScrollSpy();
  setupMobileMenu();
  toggleAddressField();
});


// ─── Config ──────────────────────────────────────────────────────────────────
function applyConfig() {
  const {
    name,
    tagline,
    logo,
    heroImage,
    phone,
    location,
    instagram,
    hours
  } = RESTAURANT_CONFIG;

  document.title = `${name} — Menu`;

  setText("[data-config='name']", name);

  setText(
    "[data-config='tagline']",
    getLocalized(tagline)
  );

  setText("[data-config='phone']", phone);

  setText(
    "[data-config='location']",
    getLocalized(location)
  );

  setText(
    "[data-config='hours-weekdays']",
    getLocalized(hours.weekdays)
  );

  setText(
    "[data-config='hours-weekend']",
    getLocalized(hours.weekend)
  );

  setText(
    "[data-config='year']",
    new Date().getFullYear()
  );

  document.querySelectorAll("[data-config='logo']").forEach((el) => {
    el.textContent = logo.length <= 2 ? logo : "";

    if (logo.length > 2) {
      el.innerHTML = `
        <img
          src="${logo}"
          alt="${name}"
          class="h-8 w-auto"
        >
      `;
    }
  });

  const heroImg = document.getElementById("hero-image");

  if (heroImg) {
    heroImg.src = heroImage;
    heroImg.alt = `${name} — Hero`;
  }

  const igLink = document.getElementById("instagram-link");

  if (igLink) {
    igLink.href = instagram;
  }

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${phone.replace(/\D/g, "")}`;
  });

  const waLink = document.getElementById("header-whatsapp");

  if (waLink) {
    waLink.href = buildWhatsAppUrl(t("orderQuestion"));
  }
}

function setText(selector, value) {
  document
    .querySelectorAll(selector)
    .forEach((el) => (el.textContent = value));
}

function formatPrice(amount) {
  return `${RESTAURANT_CONFIG.currency}${amount}`;
}


// ─── Render Category Nav ─────────────────────────────────────────────────────
function renderCategoryNav() {
  const nav = document.getElementById("category-nav");
  const mobileNav = document.getElementById("mobile-category-nav");

  if (!nav) return;

  const buttons = MENU_CATEGORIES.map(
    (cat) => `
    <button
      type="button"
      data-category="${cat.id}"
      class="category-btn shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap
             text-stone-600 hover:bg-amber-50 hover:text-amber-800
             aria-selected:bg-amber-600 aria-selected:text-white aria-selected:shadow-md"
      aria-selected="false"
    >${cat.icon} ${getLocalized(cat.name)}</button>`
  ).join("");

  nav.innerHTML = buttons;

  if (mobileNav) {
    mobileNav.innerHTML = buttons;
  }
}


// ─── Render Menu Sections ────────────────────────────────────────────────────
function renderMenuSections() {
  const container = document.getElementById("menu-sections");

  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map((cat) => {
    const items = MENU_ITEMS.filter(
      (item) => item.category === cat.id
    );

    return `
    <section
      id="category-${cat.id}"
      class="menu-section scroll-mt-36 md:scroll-mt-40"
    >
      <div class="mb-6 flex items-center gap-3">
        <span class="text-2xl">${cat.icon}</span>

        <h2
          class="font-display text-2xl font-bold tracking-tight text-stone-900 md:text-3xl"
        >
          ${getLocalized(cat.name).toUpperCase()}
        </h2>

        <div class="h-px flex-1 bg-gradient-to-r from-amber-200 to-transparent"></div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        ${items.map((item) => renderProductCard(item)).join("")}
      </div>
    </section>`;
  }).join("");
}


function renderProductCard(item) {
  const productName = getLocalized(item.name);
  const productDescription = getLocalized(item.description);

  return `
  <article
    class="product-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    data-product-id="${item.id}"
  >
    <button
      type="button"
      class="product-open relative aspect-[4/3] w-full overflow-hidden"
      data-product-id="${item.id}"
      aria-label="${productName}"
    >
      <img
        src="${item.image}"
        alt="${productName}"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      ></div>
    </button>

    <div class="flex flex-1 flex-col p-4">

      <button
        type="button"
        class="product-open text-left"
        data-product-id="${item.id}"
      >
        <h3 class="font-display text-lg font-semibold text-stone-900">
          ${productName}
        </h3>

        <p class="mt-1 line-clamp-2 text-sm leading-relaxed text-stone-500">
          ${productDescription}
        </p>
      </button>

      <div class="mt-auto flex items-center justify-between pt-4">

        <span class="text-lg font-bold text-amber-700">
          ${formatPrice(item.price)}
        </span>

        <button
          type="button"
          class="add-btn flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600 active:scale-95"
          data-product-id="${item.id}"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>

          ${t("add")}
        </button>

      </div>
    </div>
  </article>`;
}


// ─── Cart ────────────────────────────────────────────────────────────────────
function loadCart() {
  try {
    const saved = localStorage.getItem("ember-bite-cart");

    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(
    "ember-bite-cart",
    JSON.stringify(cart)
  );
}

function getProductById(id) {
  return MENU_ITEMS.find(
    (item) => item.id === id
  );
}

function getCartItemKey(productId, extras) {
  const sortedExtras = [...extras]
    .sort()
    .join(",");

  return `${productId}::${sortedExtras}`;
}

function getCartTotals() {
  let totalQty = 0;
  let totalPrice = 0;

  cart.forEach((entry) => {
    totalQty += entry.quantity;
    totalPrice += entry.lineTotal;
  });

  return {
    totalQty,
    totalPrice
  };
}

function addToCart(
  productId,
  quantity = 1,
  extras = []
) {
  const product = getProductById(productId);

  if (!product) return;

  const extrasTotal = extras.reduce(
    (sum, extraId) => {
      const extra = product.extras?.find(
        (e) => e.id === extraId
      );

      return sum + (extra?.price || 0);
    },
    0
  );

  const unitPrice =
    product.price + extrasTotal;

  const key = getCartItemKey(
    productId,
    extras
  );

  const existing = cart.find(
    (e) => e.key === key
  );

  if (existing) {
    existing.quantity += quantity;

    existing.lineTotal =
      existing.quantity *
      existing.unitPrice;
  } else {
    cart.push({
      key,
      productId,
      quantity,
      extras,
      unitPrice,
      lineTotal:
        unitPrice * quantity
    });
  }

  saveCart();
  renderCartBar();

  showToast(
    `${getLocalized(product.name)} ${t("orderAdded")}`
  );
}

function updateCartQuantity(key, delta) {
  const entry = cart.find(
    (e) => e.key === key
  );

  if (!entry) return;

  entry.quantity += delta;

  if (entry.quantity <= 0) {
    cart = cart.filter(
      (e) => e.key !== key
    );
  } else {
    entry.lineTotal =
      entry.quantity *
      entry.unitPrice;
  }

  saveCart();
  renderCartBar();
  renderOrderSummary();
}

function removeFromCart(key) {
  cart = cart.filter(
    (e) => e.key !== key
  );

  saveCart();

  renderCartBar();
  renderOrderSummary();
}


function renderCartBar() {
  const bar =
    document.getElementById("cart-bar");

  const {
    totalQty,
    totalPrice
  } = getCartTotals();

  if (!bar) return;

  if (totalQty === 0) {
    bar.classList.add(
      "translate-y-full",
      "opacity-0",
      "pointer-events-none"
    );

    bar.classList.remove(
      "translate-y-0",
      "opacity-100"
    );

    bar.setAttribute(
      "aria-hidden",
      "true"
    );

    return;
  }

  bar.classList.remove(
    "translate-y-full",
    "opacity-0",
    "pointer-events-none"
  );

  bar.classList.add(
    "translate-y-0",
    "opacity-100"
  );

  bar.setAttribute(
    "aria-hidden",
    "false"
  );

  const qtyLabel =
    document.getElementById(
      "cart-qty-label"
    );

  if (qtyLabel) {
    qtyLabel.textContent =
      totalQty === 1
        ? `1 ${t("item")}`
        : `${totalQty} ${t("items")}`;
  }

  const totalLabel =
    document.getElementById(
      "cart-total-label"
    );

  if (totalLabel) {
    totalLabel.textContent =
      formatPrice(totalPrice);
  }

  document
    .querySelectorAll(
      "#cart-count-badge, .cart-count-badge"
    )
    .forEach((badge) => {
      badge.textContent = totalQty;

      badge.classList.toggle(
        "hidden",
        totalQty === 0
      );
    });
}


// ─── Order Summary ───────────────────────────────────────────────────────────
function renderOrderSummary() {
  const list =
    document.getElementById(
      "order-items-list"
    );

  const totalEl =
    document.getElementById(
      "order-total"
    );

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <p class="py-8 text-center text-stone-400">
        ${t("emptyOrder")}
      </p>
    `;

    if (totalEl) {
      totalEl.textContent =
        formatPrice(0);
    }

    return;
  }

  list.innerHTML = cart
    .map((entry) => {
      const product =
        getProductById(
          entry.productId
        );

      const extrasLabel =
        entry.extras.length > 0
          ? `
            <span class="block text-xs text-stone-400">
              + ${entry.extras
                .map((id) =>
                  getLocalized(
                    product.extras.find(
                      (e) => e.id === id
                    )?.name
                  )
                )
                .filter(Boolean)
                .join(", ")}
            </span>
          `
          : "";

      return `
      <div class="flex items-start justify-between gap-3 border-b border-stone-100 py-3">

        <div class="flex-1 min-w-0">

          <p class="font-medium text-stone-900">
            ${getLocalized(product.name)}
            ${extrasLabel}
          </p>

          <div class="mt-2 flex items-center gap-2">

            <button
              type="button"
              class="qty-btn flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200"
              data-key="${entry.key}"
              data-delta="-1"
              aria-label="${t("decrease")}"
            >
              −
            </button>

            <span class="w-6 text-center text-sm font-medium">
              ${entry.quantity}
            </span>

            <button
              type="button"
              class="qty-btn flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200"
              data-key="${entry.key}"
              data-delta="1"
              aria-label="${t("increase")}"
            >
              +
            </button>

            <button
              type="button"
              class="remove-btn ml-2 text-xs text-red-500 hover:text-red-700"
              data-key="${entry.key}"
            >
              ${t("remove")}
            </button>

          </div>
        </div>

        <span class="shrink-0 font-semibold text-stone-900">
          ${formatPrice(entry.lineTotal)}
        </span>

      </div>`;
    })
    .join("");

  const {
    totalPrice
  } = getCartTotals();

  if (totalEl) {
    totalEl.textContent =
      formatPrice(totalPrice);
  }
}


// ─── Product Modal ───────────────────────────────────────────────────────────
function openProductModal(productId) {
  const product =
    getProductById(productId);

  if (!product) return;

  activeModalProduct = product;
  modalQuantity = 1;
  selectedExtras = new Set();

  const modal =
    document.getElementById(
      "product-modal"
    );

  const productName =
    getLocalized(product.name);

  const productDescription =
    getLocalized(product.description);

  document.getElementById(
    "modal-image"
  ).src = product.image;

  document.getElementById(
    "modal-image"
  ).alt = productName;

  document.getElementById(
    "modal-name"
  ).textContent = productName;

  document.getElementById(
    "modal-description"
  ).textContent =
    productDescription;

  document.getElementById(
    "modal-price"
  ).textContent =
    formatPrice(product.price);

  document.getElementById(
    "modal-qty"
  ).textContent =
    modalQuantity;

  const extrasContainer =
    document.getElementById(
      "modal-extras"
    );

  if (
    product.extras &&
    product.extras.length > 0
  ) {
    extrasContainer.classList.remove(
      "hidden"
    );

    extrasContainer.innerHTML = `
      <p class="mb-2 text-sm font-medium text-stone-700">
        ${t("addExtras")}
      </p>

      <div class="space-y-2">

        ${product.extras
          .map(
            (extra) => `
          <label
            class="flex cursor-pointer items-center justify-between rounded-xl border border-stone-200 px-3 py-2.5 transition-colors hover:border-amber-300 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50"
          >

            <span class="flex items-center gap-2 text-sm text-stone-700">

              <input
                type="checkbox"
                class="extra-checkbox h-4 w-4 rounded accent-amber-600"
                value="${extra.id}"
              />

              ${getLocalized(extra.name)}

            </span>

            <span class="text-sm font-medium text-amber-700">
              +${formatPrice(extra.price)}
            </span>

          </label>`
          )
          .join("")}

      </div>
    `;
  } else {
    extrasContainer.classList.add(
      "hidden"
    );

    extrasContainer.innerHTML = "";
  }

  updateModalTotal();

  modal.classList.remove("hidden");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "overflow-hidden"
  );
}

function closeProductModal() {
  const modal =
    document.getElementById(
      "product-modal"
    );

  modal.classList.add("hidden");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "overflow-hidden"
  );

  activeModalProduct = null;
}

function updateModalTotal() {
  if (!activeModalProduct) return;

  const extrasTotal =
    [...selectedExtras].reduce(
      (sum, id) => {
        const extra =
          activeModalProduct.extras?.find(
            (e) => e.id === id
          );

        return sum + (extra?.price || 0);
      },
      0
    );

  const total =
    (
      activeModalProduct.price +
      extrasTotal
    ) * modalQuantity;

  document.getElementById(
    "modal-total"
  ).textContent =
    formatPrice(total);
}


// ─── Order Modal ─────────────────────────────────────────────────────────────
function openOrderModal() {
  if (cart.length === 0) return;

  renderOrderSummary();

  const modal =
    document.getElementById(
      "order-modal"
    );

  modal.classList.remove(
    "hidden"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "overflow-hidden"
  );
}

function closeOrderModal() {
  const modal =
    document.getElementById(
      "order-modal"
    );

  modal.classList.add(
    "hidden"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "overflow-hidden"
  );
}

function toggleAddressField() {
  const type =
    document.querySelector(
      'input[name="order-type"]:checked'
    )?.value;

  const addressField =
    document.getElementById(
      "address-field"
    );

  if (addressField) {
    addressField.classList.toggle(
      "hidden",
      type !== "delivery"
    );
  }
}


// ─── WhatsApp ────────────────────────────────────────────────────────────────
function buildWhatsAppUrl(message) {
  const encoded =
    encodeURIComponent(message);

  return `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`;
}

function sendWhatsAppOrder() {
  if (cart.length === 0) return;

  const name =
    document
      .getElementById(
        "customer-name"
      )
      ?.value.trim();

  const phone =
    document
      .getElementById(
        "customer-phone"
      )
      ?.value.trim();

  const orderType =
    document.querySelector(
      'input[name="order-type"]:checked'
    )?.value ||
    "Pickup";

  const address =
    document
      .getElementById(
        "customer-address"
      )
      ?.value.trim();

  const notes =
    document
      .getElementById(
        "customer-notes"
      )
      ?.value.trim();

  let message =
    `${t("orderMessage")}\n\n`;

  cart.forEach((entry) => {
    const product =
      getProductById(
        entry.productId
      );

    const extrasText =
      entry.extras.length > 0
        ? ` (${entry.extras
            .map((id) =>
              getLocalized(
                product.extras.find(
                  (e) => e.id === id
                )?.name
              )
            )
            .filter(Boolean)
            .join(", ")})`
        : "";

    message +=
      `${entry.quantity} × ` +
      `${getLocalized(product.name)}` +
      `${extrasText} - ` +
      `${formatPrice(entry.lineTotal)}\n`;
  });

  const {
    totalPrice
  } = getCartTotals();

  message +=
    `\n${t("total")}: ` +
    `${formatPrice(totalPrice)}\n`;

  if (name) {
    message +=
      `\n${t("customerName")}: ${name}`;
  }

  if (phone) {
    message +=
      `\n${t("phone")}: ${phone}`;
  }

  const localizedOrderType =
    orderType === "Delivery"
      ? t("delivery")
      : t("pickup");

  message +=
    `\n${t("orderType")}: ${localizedOrderType}`;

  if (
    orderType === "Delivery" &&
    address
  ) {
    message +=
      `\n${t("address")}: ${address}`;
  }

  if (notes) {
    message +=
      `\n${t("notes")}: ${notes}`;
  }

  window.open(
    buildWhatsAppUrl(message),
    "_blank",
    "noopener,noreferrer"
  );
}


// ─── Toast ───────────────────────────────────────────────────────────────────
function showToast(message) {
  const toast =
    document.getElementById(
      "toast"
    );

  if (!toast) return;

  toast.textContent = message;

  toast.classList.remove(
    "-translate-y-8",
    "opacity-0"
  );

  toast.classList.add(
    "translate-y-0",
    "opacity-100"
  );

  clearTimeout(
    toast._timer
  );

  toast._timer =
    setTimeout(() => {
      toast.classList.add(
        "-translate-y-8",
        "opacity-0"
      );

      toast.classList.remove(
        "translate-y-0",
        "opacity-100"
      );
    }, 2500);
}


// ─── Scroll Spy ──────────────────────────────────────────────────────────────
function setupScrollSpy() {
  const sections =
    MENU_CATEGORIES
      .map((cat) =>
        document.getElementById(
          `category-${cat.id}`
        )
      )
      .filter(Boolean);

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              entry.isIntersecting
            ) {
              const id =
                entry.target.id.replace(
                  "category-",
                  ""
                );

              setActiveCategory(id);
            }
          }
        );
      },
      {
        rootMargin:
          "-40% 0px -50% 0px",
        threshold: 0
      }
    );

  sections.forEach(
    (section) =>
      observer.observe(section)
  );
}

function setActiveCategory(
  categoryId
) {
  document
    .querySelectorAll(
      ".category-btn"
    )
    .forEach((btn) => {
      const isActive =
        btn.dataset.category ===
        categoryId;

      btn.setAttribute(
        "aria-selected",
        isActive
          ? "true"
          : "false"
      );
    });
}

function scrollToCategory(
  categoryId
) {
  const section =
    document.getElementById(
      `category-${categoryId}`
    );

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setActiveCategory(
      categoryId
    );
  }

  closeMobileMenu();
}


// ─── Mobile Menu ─────────────────────────────────────────────────────────────
function setupMobileMenu() {
  const toggle =
    document.getElementById(
      "mobile-menu-toggle"
    );

  const menu =
    document.getElementById(
      "mobile-menu"
    );

  toggle?.addEventListener(
    "click",
    () => {
      const isOpen =
        menu.classList.toggle(
          "hidden"
        ) === false;

      toggle.setAttribute(
        "aria-expanded",
        isOpen
          ? "true"
          : "false"
      );
    }
  );
}

function closeMobileMenu() {
  const menu =
    document.getElementById(
      "mobile-menu"
    );

  const toggle =
    document.getElementById(
      "mobile-menu-toggle"
    );

  menu?.classList.add(
    "hidden"
  );

  toggle?.setAttribute(
    "aria-expanded",
    "false"
  );
}


// ─── Event Listeners ─────────────────────────────────────────────────────────
function setupEventListeners() {

  // Language
  document
    .getElementById(
      "language-toggle"
    )
    ?.addEventListener(
      "click",
      () => {
        setLanguage(
          currentLanguage === "en"
            ? "ar"
            : "en"
        );
      }
    );


  // Category navigation
  document.addEventListener(
    "click",
    (e) => {
      const catBtn =
        e.target.closest(
          ".category-btn"
        );

      if (catBtn) {
        e.preventDefault();

        scrollToCategory(
          catBtn.dataset.category
        );
      }
    }
  );


  // Add to cart from card
  document.addEventListener(
    "click",
    (e) => {
      const addBtn =
        e.target.closest(
          ".add-btn"
        );

      if (addBtn) {
        e.stopPropagation();

        addToCart(
          addBtn.dataset.productId
        );
      }
    }
  );


  // Open product modal
  document.addEventListener(
    "click",
    (e) => {
      const openBtn =
        e.target.closest(
          ".product-open"
        );

      if (openBtn) {
        openProductModal(
          openBtn.dataset.productId
        );
      }
    }
  );


  // Modal close
  document
    .getElementById(
      "modal-close"
    )
    ?.addEventListener(
      "click",
      closeProductModal
    );

  document
    .getElementById(
      "product-modal"
    )
    ?.addEventListener(
      "click",
      (e) => {
        if (
          e.target.id ===
          "product-modal"
        ) {
          closeProductModal();
        }
      }
    );


  // Modal quantity
  document
    .getElementById(
      "modal-qty-minus"
    )
    ?.addEventListener(
      "click",
      () => {
        if (modalQuantity > 1) {
          modalQuantity--;

          document.getElementById(
            "modal-qty"
          ).textContent =
            modalQuantity;

          updateModalTotal();
        }
      }
    );

  document
    .getElementById(
      "modal-qty-plus"
    )
    ?.addEventListener(
      "click",
      () => {
        modalQuantity++;

        document.getElementById(
          "modal-qty"
        ).textContent =
          modalQuantity;

        updateModalTotal();
      }
    );


  // Modal extras
  document
    .getElementById(
      "modal-extras"
    )
    ?.addEventListener(
      "change",
      (e) => {
        if (
          e.target.classList.contains(
            "extra-checkbox"
          )
        ) {
          if (e.target.checked) {
            selectedExtras.add(
              e.target.value
            );
          } else {
            selectedExtras.delete(
              e.target.value
            );
          }

          updateModalTotal();
        }
      }
    );


  // Modal add to order
  document
    .getElementById(
      "modal-add-btn"
    )
    ?.addEventListener(
      "click",
      () => {
        if (
          activeModalProduct
        ) {
          addToCart(
            activeModalProduct.id,
            modalQuantity,
            [...selectedExtras]
          );

          closeProductModal();
        }
      }
    );


  // Cart bar → order modal
  document
    .getElementById(
      "cart-bar-btn"
    )
    ?.addEventListener(
      "click",
      openOrderModal
    );


  // Order modal
  document
    .getElementById(
      "order-close"
    )
    ?.addEventListener(
      "click",
      closeOrderModal
    );

  document
    .getElementById(
      "order-modal"
    )
    ?.addEventListener(
      "click",
      (e) => {
        if (
          e.target.id ===
          "order-modal"
        ) {
          closeOrderModal();
        }
      }
    );


  // Order type toggle
  document
    .querySelectorAll(
      'input[name="order-type"]'
    )
    .forEach((radio) => {
      radio.addEventListener(
        "change",
        toggleAddressField
      );
    });


  // Cart qty/remove in order modal
  document
    .getElementById(
      "order-items-list"
    )
    ?.addEventListener(
      "click",
      (e) => {
        const qtyBtn =
          e.target.closest(
            ".qty-btn"
          );

        if (qtyBtn) {
          updateCartQuantity(
            qtyBtn.dataset.key,
            parseInt(
              qtyBtn.dataset.delta,
              10
            )
          );

          return;
        }

        const removeBtn =
          e.target.closest(
            ".remove-btn"
          );

        if (removeBtn) {
          removeFromCart(
            removeBtn.dataset.key
          );
        }
      }
    );


  // WhatsApp order
  document
    .getElementById(
      "whatsapp-order-btn"
    )
    ?.addEventListener(
      "click",
      sendWhatsAppOrder
    );


  // View menu button
  document
    .getElementById(
      "view-menu-btn"
    )
    ?.addEventListener(
      "click",
      () => {
        scrollToCategory(
          MENU_CATEGORIES[0].id
        );
      }
    );


  // Escape key closes modals
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        closeProductModal();
        closeOrderModal();
        closeMobileMenu();
      }
    }
  );
}