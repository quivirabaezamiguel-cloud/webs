/**
 * FUENTE & SABOR - Lógica de Aplicación (Diseño Sobrio y Tradicional)
 * Gestión de menú, filtros, carrito y checkout
 */

// Formateador de moneda en Pesos Chilenos (CLP)
const formatCLP = (amount) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(amount);
};

// Estado de la aplicación
const state = {
  activeCategory: 'todos',
  searchQuery: '',
  cart: [],
  selectedItemForCustomization: null,
  deliveryFee: 2000,
  restaurantPhone: '56912345678' // Teléfono de WhatsApp
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initCategoryTabs();
  renderMenuItems();
  renderReviews();
  setupEventListeners();
  updateCartUI();
});

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('fuente_sabor_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error al cargar carrito:', e);
    state.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('fuente_sabor_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Error al guardar carrito:', e);
  }
}

// Renderizado de Categorías
function initCategoryTabs() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="tab-btn ${cat.id === state.activeCategory ? 'active' : ''}" 
            data-category="${cat.id}"
            id="tab-${cat.id}">
      <span>${cat.name}</span>
    </button>
  `).join('');

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const categoryId = e.currentTarget.dataset.category;
      setCategory(categoryId);
    });
  });
}

function setCategory(categoryId) {
  state.activeCategory = categoryId;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  renderMenuItems();
}

// Renderizado de Platos
function renderMenuItems() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const query = state.searchQuery.toLowerCase().trim();

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCategory = state.activeCategory === 'todos' || item.category === state.activeCategory;
    const matchesSearch = query === '' || 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Sin resultados</h3>
        <p>No encontramos platos que coincidan con "${escapeHTML(state.searchQuery)}".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" id="card-${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" />
        ${item.badge ? `<span class="card-badge">${escapeHTML(item.badge)}</span>` : ''}
        <span class="card-price-tag">${formatCLP(item.price)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHTML(item.name)}</h3>
        <p class="card-desc">${escapeHTML(item.description)}</p>
        <div class="card-ingredients">
          ${item.ingredients.slice(0, 4).map(ing => `
            <span class="ingredient-tag">${escapeHTML(ing)}</span>
          `).join('')}
        </div>
        <div class="card-footer">
          <button class="btn-add-cart" onclick="quickAddToCart('${item.id}')">
            Agregar
          </button>
          <button class="btn-customize" onclick="openCustomizeModal('${item.id}')">
            Personalizar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Opiniones sobrias
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container || !CUSTOMER_REVIEWS) return;

  container.innerHTML = CUSTOMER_REVIEWS.map(rev => `
    <div class="review-card">
      <p class="review-comment">"${escapeHTML(rev.comment)}"</p>
      <div class="review-author">
        <span class="author-name">${escapeHTML(rev.name)}</span>
        <span class="review-dish">${escapeHTML(rev.dish)}</span>
      </div>
    </div>
  `).join('');
}

// Carrito
window.quickAddToCart = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const defaultBread = item.category === 'completos' ? 'Pan de Completo tradicional' : 'Pan Frica tostado';

  const cartItem = {
    cartKey: `${item.id}-${Date.now()}`,
    id: item.id,
    name: item.name,
    basePrice: item.price,
    totalPrice: item.price,
    image: item.image,
    quantity: 1,
    bread: defaultBread,
    extras: [],
    notes: ''
  };

  addToCart(cartItem);
  showToast(`${item.name} agregado`);
};

function addToCart(cartItem) {
  const existingIndex = state.cart.findIndex(i => 
    i.id === cartItem.id && 
    i.bread === cartItem.bread && 
    JSON.stringify(i.extras) === JSON.stringify(cartItem.extras) &&
    i.notes === cartItem.notes
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += cartItem.quantity;
  } else {
    state.cart.push(cartItem);
  }

  saveCartToStorage();
  updateCartUI();
}

window.updateCartQuantity = function(cartKey, change) {
  const itemIndex = state.cart.findIndex(i => i.cartKey === cartKey);
  if (itemIndex === -1) return;

  state.cart[itemIndex].quantity += change;

  if (state.cart[itemIndex].quantity <= 0) {
    state.cart.splice(itemIndex, 1);
  }

  saveCartToStorage();
  updateCartUI();
};

window.removeCartItem = function(cartKey) {
  state.cart = state.cart.filter(i => i.cartKey !== cartKey);
  saveCartToStorage();
  updateCartUI();
};

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge');
  const floatingCountBadge = document.getElementById('floating-cart-badge');
  const drawerItems = document.getElementById('cart-items-list');
  const drawerSubtotal = document.getElementById('cart-subtotal-val');
  const drawerTotal = document.getElementById('cart-total-val');

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (floatingCountBadge) floatingCountBadge.textContent = totalItems;

  if (drawerSubtotal) drawerSubtotal.textContent = formatCLP(subtotal);
  if (drawerTotal) drawerTotal.textContent = formatCLP(subtotal);

  if (!drawerItems) return;

  if (state.cart.length === 0) {
    drawerItems.innerHTML = `
      <div class="cart-empty">
        <h4>Tu pedido está vacío</h4>
        <p style="font-size: 0.85rem; color: #71717a;">Selecciona platos de la carta para comenzar.</p>
      </div>
    `;
    const btnCheckout = document.getElementById('btn-checkout-drawer');
    if (btnCheckout) btnCheckout.disabled = true;
    return;
  }

  const btnCheckout = document.getElementById('btn-checkout-drawer');
  if (btnCheckout) btnCheckout.disabled = false;

  drawerItems.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-key="${item.cartKey}">
      <img src="${item.image}" alt="${escapeHTML(item.name)}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-title">${escapeHTML(item.name)}</div>
        ${item.bread ? `<div class="cart-item-extras">${escapeHTML(item.bread)}</div>` : ''}
        ${item.extras && item.extras.length > 0 ? `
          <div class="cart-item-extras">+ ${item.extras.map(e => escapeHTML(e.name)).join(', ')}</div>
        ` : ''}
        ${item.notes ? `<div class="cart-item-extras" style="color: #71717a;">Nota: "${escapeHTML(item.notes)}"</div>` : ''}
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity('${item.cartKey}', -1)">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.cartKey}', 1)">+</button>
          </div>
          <span class="cart-item-price">${formatCLP(item.totalPrice * item.quantity)}</span>
          <button class="btn-remove-item" onclick="removeCartItem('${item.cartKey}')" title="Quitar">Quitar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Personalización
window.openCustomizeModal = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  state.selectedItemForCustomization = item;

  const modal = document.getElementById('customize-modal');
  const preview = document.getElementById('modal-product-preview');
  const breadSection = document.getElementById('modal-bread-section');
  const extrasList = document.getElementById('modal-extras-list');

  preview.innerHTML = `
    <img src="${item.image}" alt="${escapeHTML(item.name)}" class="modal-product-img" />
    <div class="modal-product-info">
      <h4>${escapeHTML(item.name)}</h4>
      <p>${escapeHTML(item.description)}</p>
      <div class="modal-product-price" id="modal-dynamic-price">${formatCLP(item.price)}</div>
    </div>
  `;

  const isSandwich = ['completos', 'churrascos', 'hass', 'barros_luco'].includes(item.category);
  if (isSandwich && breadSection) {
    breadSection.style.display = 'block';
    const breads = item.category === 'completos' 
      ? ['Pan de Completo tradicional', 'Pan de Completo extra grande (+ $400)'] 
      : BREAD_OPTIONS;

    breadSection.innerHTML = `
      <h4 class="custom-section-title">Tipo de Pan:</h4>
      <div class="options-group">
        ${breads.map((b, idx) => `
          <label class="option-checkbox-label">
            <span class="option-name">
              <input type="radio" name="custom_bread" value="${escapeHTML(b)}" ${idx === 0 ? 'checked' : ''} onchange="recalculateModalPrice()" />
              ${escapeHTML(b)}
            </span>
          </label>
        `).join('')}
      </div>
    `;
  } else if (breadSection) {
    breadSection.style.display = 'none';
  }

  if (extrasList) {
    extrasList.innerHTML = CUSTOMIZATION_EXTRAS.map(extra => `
      <label class="option-checkbox-label">
        <span class="option-name">
          <input type="checkbox" name="custom_extra" value="${extra.id}" data-price="${extra.price}" data-name="${escapeHTML(extra.name)}" onchange="recalculateModalPrice()" />
          ${escapeHTML(extra.name)}
        </span>
        <span class="option-extra-price">+ ${formatCLP(extra.price)}</span>
      </label>
    `).join('');
  }

  const notesInput = document.getElementById('custom-notes');
  if (notesInput) notesInput.value = '';

  const qtyInput = document.getElementById('modal-qty');
  if (qtyInput) qtyInput.textContent = '1';

  recalculateModalPrice();
  modal.classList.add('open');
};

window.recalculateModalPrice = function() {
  const item = state.selectedItemForCustomization;
  if (!item) return;

  let unitPrice = item.price;

  const selectedBread = document.querySelector('input[name="custom_bread"]:checked');
  if (selectedBread && selectedBread.value.includes('+ $500')) {
    unitPrice += 500;
  } else if (selectedBread && selectedBread.value.includes('+ $400')) {
    unitPrice += 400;
  }

  const checkedExtras = document.querySelectorAll('input[name="custom_extra"]:checked');
  checkedExtras.forEach(cb => {
    unitPrice += parseInt(cb.dataset.price, 10);
  });

  const qtyEl = document.getElementById('modal-qty');
  const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;

  const total = unitPrice * qty;
  const priceDisplay = document.getElementById('modal-dynamic-price');
  if (priceDisplay) {
    priceDisplay.textContent = `${formatCLP(total)} (${formatCLP(unitPrice)} c/u)`;
  }
};

window.changeModalQty = function(delta) {
  const qtyEl = document.getElementById('modal-qty');
  if (!qtyEl) return;
  let current = parseInt(qtyEl.textContent, 10) + delta;
  if (current < 1) current = 1;
  qtyEl.textContent = current;
  recalculateModalPrice();
};

window.confirmCustomAddToCart = function() {
  const item = state.selectedItemForCustomization;
  if (!item) return;

  let unitPrice = item.price;
  const selectedBread = document.querySelector('input[name="custom_bread"]:checked');
  let breadName = selectedBread ? selectedBread.value : '';

  if (breadName.includes('+ $500')) unitPrice += 500;
  if (breadName.includes('+ $400')) unitPrice += 400;

  const selectedExtras = [];
  document.querySelectorAll('input[name="custom_extra"]:checked').forEach(cb => {
    const extraPrice = parseInt(cb.dataset.price, 10);
    unitPrice += extraPrice;
    selectedExtras.push({
      id: cb.value,
      name: cb.dataset.name,
      price: extraPrice
    });
  });

  const qty = parseInt(document.getElementById('modal-qty').textContent, 10) || 1;
  const notes = document.getElementById('custom-notes').value.trim();

  const cartItem = {
    cartKey: `${item.id}-${Date.now()}`,
    id: item.id,
    name: item.name,
    basePrice: item.price,
    totalPrice: unitPrice,
    image: item.image,
    quantity: qty,
    bread: breadName,
    extras: selectedExtras,
    notes: notes
  };

  addToCart(cartItem);
  closeModal('customize-modal');
  showToast(`${item.name} agregado`);
};

// Checkout & WhatsApp
window.openCheckoutModal = function() {
  if (state.cart.length === 0) return;

  closeDrawer();
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  const summaryEl = document.getElementById('checkout-order-summary');
  updateCheckoutTotals();

  if (summaryEl) {
    summaryEl.innerHTML = state.cart.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
        <span>${item.quantity}x ${escapeHTML(item.name)}</span>
        <span style="font-weight: 600;">${formatCLP(item.totalPrice * item.quantity)}</span>
      </div>
    `).join('');
  }

  modal.classList.add('open');
};

window.handleDeliveryTypeChange = function() {
  const deliveryType = document.querySelector('input[name="delivery_type"]:checked').value;
  const addressGroup = document.getElementById('checkout-address-group');
  if (addressGroup) {
    addressGroup.style.display = deliveryType === 'delivery' ? 'flex' : 'none';
  }
  updateCheckoutTotals();
};

function updateCheckoutTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const deliveryTypeEl = document.querySelector('input[name="delivery_type"]:checked');
  const isDelivery = deliveryTypeEl ? deliveryTypeEl.value === 'delivery' : true;
  
  const fee = isDelivery ? state.deliveryFee : 0;
  const total = subtotal + fee;

  const subtotalEl = document.getElementById('checkout-subtotal-val');
  const feeEl = document.getElementById('checkout-fee-val');
  const totalEl = document.getElementById('checkout-total-val');

  if (subtotalEl) subtotalEl.textContent = formatCLP(subtotal);
  if (feeEl) feeEl.textContent = isDelivery ? formatCLP(fee) : 'Gratis ($0)';
  if (totalEl) totalEl.textContent = formatCLP(total);
}

window.submitOrderToWhatsApp = function(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const deliveryType = document.querySelector('input[name="delivery_type"]:checked').value;
  const address = document.getElementById('order-address').value.trim();
  const paymentMethod = document.getElementById('order-payment').value;
  const comments = document.getElementById('order-comments').value.trim();

  if (!name || !phone) {
    alert('Por favor ingresa tu nombre y teléfono.');
    return;
  }

  if (deliveryType === 'delivery' && !address) {
    alert('Por favor ingresa tu dirección.');
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const fee = deliveryType === 'delivery' ? state.deliveryFee : 0;
  const total = subtotal + fee;

  // Mensaje sobrio y claro
  let message = `*PEDIDO - FUENTE & SABOR*\n\n`;
  message += `*Cliente:* ${name}\n`;
  message += `*Teléfono:* ${phone}\n`;
  message += `*Entrega:* ${deliveryType === 'delivery' ? 'Despacho a Domicilio' : 'Retiro en Local'}\n`;
  
  if (deliveryType === 'delivery') {
    message += `*Dirección:* ${address}\n`;
  }
  
  message += `*Forma de Pago:* ${paymentMethod}\n`;
  if (comments) {
    message += `*Comentarios:* ${comments}\n`;
  }

  message += `\n*DETALLE DEL PEDIDO:*\n`;
  message += `------------------------------\n`;

  state.cart.forEach((item, index) => {
    message += `${index + 1}. ${item.quantity}x ${item.name} (${formatCLP(item.totalPrice * item.quantity)})\n`;
    if (item.bread) {
      message += `   - Pan: ${item.bread}\n`;
    }
    if (item.extras && item.extras.length > 0) {
      message += `   - Extras: ${item.extras.map(e => e.name).join(', ')}\n`;
    }
    if (item.notes) {
      message += `   - Nota: ${item.notes}\n`;
    }
  });

  message += `------------------------------\n`;
  message += `*Subtotal:* ${formatCLP(subtotal)}\n`;
  if (deliveryType === 'delivery') {
    message += `*Envío:* ${formatCLP(fee)}\n`;
  }
  message += `*TOTAL: ${formatCLP(total)}*`;

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${state.restaurantPhone}?text=${encodedMsg}`;

  window.open(whatsappUrl, '_blank');

  state.cart = [];
  saveCartToStorage();
  updateCartUI();
  closeModal('checkout-modal');

  showToast('Abriendo WhatsApp con tu pedido');
};

function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  const openCartBtn = document.getElementById('btn-open-cart');
  const floatingCartBtn = document.getElementById('floating-cart-btn');
  const closeCartBtn = document.getElementById('btn-close-cart');
  const cartBackdrop = document.getElementById('cart-backdrop');

  if (openCartBtn) openCartBtn.addEventListener('click', openDrawer);
  if (floatingCartBtn) floatingCartBtn.addEventListener('click', openDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeDrawer);

  const btnCheckoutDrawer = document.getElementById('btn-checkout-drawer');
  if (btnCheckoutDrawer) {
    btnCheckoutDrawer.addEventListener('click', openCheckoutModal);
  }
}

function openDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.closeDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 2200);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
