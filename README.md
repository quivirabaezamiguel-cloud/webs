# 🥪 Fuente & Sabor - Sanguchería & Comida Rápida Tradicional Chilena

Sitio web interactivo y moderno para restaurante de comida rápida tradicional chilena (fuente de soda), especializado en clásicos de la gastronomía nacional: completos italianos monumentales, churrascos criollos, especialidades con palta Hass, sándwiches Barros Luco con queso fundido hirviendo, pastas caseras artesanales y refrescantes jugos naturales.

---

## 📸 Capturas de Pantalla y Menú

- **Completos Italianos:** Vienesa premium, tomate fresco picado en cubitos, abundante palta Hass cremosa y mayonesa casera artesanal.
- **Churrascos:** Posta de vacuno tierna sellada a la plancha en pan frica artesanal (Italiano, Chacarero con porotos verdes y ají verde suave, y a lo Pobre con cebolla caramelizada y huevos fritos).
- **Línea Hass:** Abundante palta Hass fresca seleccionada (Churrasco Hass Supremo, Lomito Hass y Ave Hass).
- **Barros Luco:** Lomo de vacuno a la plancha con una cascada de queso chanco fundido elástico.
- **Pastas Caseras:** Lasaña Boloñesa gratinada al horno con salsa bechamel y costra de queso dorado, Fettuccine Alfredo con pollo y Ravioles campesinos.
- **Bebidas & Jugos:** Jugos naturales de 500ml (Frambuesa con menta, Mango - Maracuyá, Frutilla - Naranja) y bebidas tradicionales (Coca-Cola, Bilz, Pap).

---

## ✨ Características Principales

- 🔍 **Buscador en Vivo y Filtros por Categoría:** Encuentra platos al instante por nombre o ingrediente.
- ⚙️ **Personalización de Sándwiches:** Modal interactivo para seleccionar tipo de pan (*Pan Frica, Marraqueta, Amasado, Pan de Completo*) y añadir extras con cálculo dinámico del precio total.
- 🛒 **Carrito de Compras Persistente:** Slide-over drawer con control de cantidades (+/-), subtotal, costo de envío y almacenamiento automático en `localStorage`.
- 💬 **Checkout Directo a WhatsApp:** Genera un mensaje formateado y estructurado con todos los detalles del pedido, dirección de entrega y método de pago listo para enviar al restaurante con un solo clic.
- 📱 **Diseño 100% Responsive:** Optimizado con Vanilla CSS y estética *Dark-Gourmet* para smartphones, tablets y pantallas de escritorio.

---

## 🚀 Cómo Ejecutar Localmente

No requiere instalación de librerías ni compilación previa.

1. Clona este repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/fuente-y-sabor.git
   ```
2. Abre el archivo `index.html` en tu navegador web favorito:
   - Doble clic sobre `index.html`, o
   - Con un servidor local:
     ```bash
     npx serve .
     # o
     python -m http.server 8000
     ```

---

## 📂 Estructura del Proyecto

```
claude/
├── index.html              # Estructura semántica, accesibilidad y modales
├── css/
│   └── styles.css          # Sistema de diseño, temas dark gourmet y responsive
├── js/
│   ├── menuData.js         # Base de datos del menú con precios CLP e imágenes
│   └── app.js              # Lógica del carrito, filtros y checkout WhatsApp
├── assets/
│   └── images/             # Fotografías gastronómicas de alta resolución
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Documentación general
```

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.
