# Fuente & Sabor - Sanguchería Tradicional (CLAUDE.md)

Este repositorio contiene la aplicación web para **Fuente & Sabor**, una sanguchería y restaurante de comida rápida tradicional chilena (fuente de soda) especializado en completos italianos, churrascos criollos, especialidades con palta Hass, barros luco con queso fundido, pastas artesanales caseras, bebidas y jugos naturales.

---

## 1. Visión del Proyecto y Stack Tecnológico

- **Tipo de Aplicación:** Web App estática interactiva (Single Page Application).
- **Tecnologías:**
  - **HTML5:** Estructura semántica, accesibilidad y metaetiquetas Open Graph / SEO.
  - **CSS3 Moderno:** Vanilla CSS con custom properties (Design System dark-gourmet, glassmorphism, micro-animaciones, 100% responsive).
  - **JavaScript ES6+:** Manejo de estado reactivo en cliente, filtros en vivo por categoría y texto, carrito con `localStorage`, modal de personalización y generador de pedidos directos a WhatsApp.
- **Moneda:** Pesos Chilenos (CLP `$`), formateado mediante `Intl.NumberFormat('es-CL')`.

---

## 2. Estructura del Proyecto

```
claude/
├── index.html                   # Página principal, hero, catálogo, modales y footer
├── css/
│   └── styles.css               # Sistema de diseño, temas, tarjetas, carrito y animaciones
├── js/
│   ├── menuData.js              # Base de datos local de platos, categorías, precios e imágenes
│   └── app.js                   # Lógica de renderizado, búsqueda, carrito, personalización y checkout
├── assets/
│   └── images/                  # Fotografías gastronómicas de alta calidad (hero, completos, churrascos, luco, pastas, jugos)
└── CLAUDE.md                    # Documentación del proyecto y guía de desarrollo
```

---

## 3. Características Principales

1. **Catálogo Gastronómico Completo:**
   - **Completos Italianos:** Vienesa premium, tomate en cubos, palta Hass molida y mayonesa casera (más versiones Dinámico y As Italiano).
   - **Churrascos:** Italiano en pan frica, Chacarero criollo (porotos verdes y ají verde suave), y a lo Pobre.
   - **Línea Hass:** Churrasco Hass supremo con doble palta, Lomito Hass y Ave Hass.
   - **Barros Luco:** Clásico fundido con abundante queso chanco elástico, Doble Carne & Doble Queso y Fusión Chacarero.
   - **Pastas Caseras:** Lasaña Boloñesa gratinada artesanal, Fettuccine Alfredo con pollo y Ravioles de Ricotta y Espinaca.
   - **Bebidas y Jugos:** Jugos naturales de 500ml (Frambuesa, Mango-Maracuyá, Frutilla-Naranja) y bebidas clásicas (Coca-Cola, Bilz, Pap).

2. **Carrito de Compras y Personalización:**
   - Drawer deslizante lateral con cálculo dinámico de subtotales, costo de envío y total.
   - Modal de personalización: selección de tipo de pan (Frica, Marraqueta, Amasado) y extras (extra palta Hass, queso derretido, mayonesa casera, ají verde, pebre, papas fritas).
   - Persistencia local mediante `localStorage`.

3. **Checkout Directo a WhatsApp:**
   - Formulario ágil con nombre, teléfono, modalidad (Despacho a Domicilio o Retiro) y método de pago.
   - Generación de mensaje codificado para la API de WhatsApp con el detalle completo del pedido listo para enviar.

---

## 4. Ejecución Local

Para visualizar el sitio:
1. Abrir directamente [index.html](file:///c:/Users/quivi/Desktop/claude/index.html) en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
2. O servir con cualquier servidor HTTP local:
   ```bash
   npx serve .
   # o
   python -m http.server 8000
   ```
