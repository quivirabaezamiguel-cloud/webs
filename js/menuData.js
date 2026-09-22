/**
 * Catálogo de Menú - Fuente & Sabor (Sanguchería & Fuente de Soda Tradicional)
 * Precios en Pesos Chilenos (CLP)
 */

const MENU_CATEGORIES = [
  { id: 'todos', name: 'Todos' },
  { id: 'completos', name: 'Completos' },
  { id: 'churrascos', name: 'Churrascos' },
  { id: 'hass', name: 'Línea Hass' },
  { id: 'barros_luco', name: 'Barros Luco' },
  { id: 'pastas', name: 'Pastas' },
  { id: 'bebidas_jugos', name: 'Bebidas y Jugos' }
];

const MENU_ITEMS = [
  // 1. COMPLETOS
  {
    id: 'comp-italiano',
    name: 'Completo Italiano Tradicional',
    category: 'completos',
    price: 3600,
    badge: 'Popular',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Vienesa en pan de completo tostado, tomate en cubos, palta Hass fresca molida y mayonesa casera de la casa.',
    ingredients: ['Vienesa', 'Tomate fresco', 'Palta Hass molida', 'Mayonesa casera', 'Pan artesanal'],
    popular: true
  },
  {
    id: 'comp-dinamico',
    name: 'Completo Dinámico',
    category: 'completos',
    price: 3900,
    badge: 'Clásico',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Vienesa con tomate en cubos, salsa americana, chucrut tibio, palta Hass molida y mayonesa casera.',
    ingredients: ['Vienesa', 'Tomate', 'Salsa americana', 'Chucrut', 'Palta Hass', 'Mayonesa casera'],
    popular: false
  },
  {
    id: 'comp-as-italiano',
    name: 'As Italiano',
    category: 'completos',
    price: 4900,
    badge: 'Recomendado',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Láminas de posta de vacuno a la plancha en pan de completo, con tomate en cubos, palta Hass y mayonesa casera.',
    ingredients: ['Carne de vacuno a la plancha', 'Tomate en cubos', 'Palta Hass molida', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'comp-italiano-doble',
    name: 'Completo Italiano Doble Vienesa',
    category: 'completos',
    price: 4500,
    badge: '',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Dos vienesas a la plancha en pan de completo, porción generosa de palta Hass, tomate en cubos y mayonesa casera.',
    ingredients: ['Doble vienesa', 'Palta Hass', 'Tomate', 'Mayonesa casera'],
    popular: false
  },

  // 2. CHURRASCOS
  {
    id: 'churr-italiano',
    name: 'Churrasco Italiano en Pan Frica',
    category: 'churrascos',
    price: 7200,
    badge: 'Recomendado',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: '200g de posta rosada a la plancha en pan frica tostado, palta Hass molida en el día, tomate fresco y mayonesa casera.',
    ingredients: ['Posta de vacuno (200g)', 'Pan frica tostado', 'Palta Hass', 'Tomate', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'churr-chacarero',
    name: 'Churrasco Chacarero',
    category: 'churrascos',
    price: 7400,
    badge: 'Clásico',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: 'Posta de vacuno a la plancha, porotos verdes tiernos, tomate en rodajas, ají verde picado y un toque de mayonesa casera.',
    ingredients: ['Carne de vacuno', 'Porotos verdes', 'Tomate', 'Ají verde suave', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'churr-pobre',
    name: 'Churrasco a lo Pobre',
    category: 'churrascos',
    price: 7900,
    badge: '',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: 'Posta de vacuno a la plancha, cebolla caramelizada, dos huevos fritos y papas hilo crujientes en pan frica.',
    ingredients: ['Carne de vacuno', 'Cebolla caramelizada', '2 huevos fritos', 'Papas hilo', 'Pan frica'],
    popular: false
  },

  // 3. LÍNEA HASS
  {
    id: 'hass-churrasco',
    name: 'Churrasco Hass',
    category: 'hass',
    price: 7600,
    badge: 'Popular',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Carne de vacuno a la plancha con doble porción de palta Hass fresca molida y mayonesa casera en pan frica tostado.',
    ingredients: ['Carne de vacuno', 'Extra palta Hass', 'Mayonesa casera', 'Pan frica'],
    popular: true
  },
  {
    id: 'hass-lomito',
    name: 'Lomito Hass',
    category: 'hass',
    price: 6900,
    badge: '',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Lomo de cerdo horneado en sus propios jugos, acompañado de abundante palta Hass molida y mayonesa casera.',
    ingredients: ['Lomo de cerdo braseado', 'Palta Hass molida', 'Mayonesa casera', 'Pan frica'],
    popular: false
  },
  {
    id: 'hass-ave',
    name: 'Ave Palta Hass',
    category: 'hass',
    price: 6400,
    badge: '',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Pechuga de pollo cocida y deshilachada a mano, con palta Hass molida y mayonesa en pan tostado.',
    ingredients: ['Pechuga de pollo deshilachada', 'Palta Hass molida', 'Mayonesa casera', 'Pan artesanal'],
    popular: false
  },

  // 4. BARROS LUCO
  {
    id: 'luco-tradicional',
    name: 'Barros Luco Tradicional',
    category: 'barros_luco',
    price: 6900,
    badge: 'Clásico',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: 'Láminas de posta de vacuno a la plancha con abundante queso chanco fundido en pan frica caliente.',
    ingredients: ['Posta de vacuno (200g)', 'Queso chanco fundido', 'Pan frica tostado'],
    popular: true
  },
  {
    id: 'luco-doble',
    name: 'Barros Luco Doble Carne y Queso',
    category: 'barros_luco',
    price: 8600,
    badge: '',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: '300g de carne de vacuno intercalada con doble porción de queso chanco fundido.',
    ingredients: ['Doble carne de vacuno (300g)', 'Doble queso chanco', 'Pan frica'],
    popular: false
  },
  {
    id: 'luco-chacarero',
    name: 'Barros Luco Chacarero',
    category: 'barros_luco',
    price: 7600,
    badge: '',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: 'Carne a la plancha, queso chanco fundido, porotos verdes tiernos, tomate y ají verde suave.',
    ingredients: ['Carne de vacuno', 'Queso fundido', 'Porotos verdes', 'Tomate', 'Ají verde'],
    popular: false
  },

  // 5. PASTAS
  {
    id: 'pasta-lasagna',
    name: 'Lasaña Boloñesa Casera',
    category: 'pastas',
    price: 7500,
    badge: 'Elaboración Propia',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Láminas de pasta al huevo en capas con salsa boloñesa de vacuno, bechamel suave y queso gratinado al horno.',
    ingredients: ['Pasta al huevo', 'Salsa boloñesa de vacuno', 'Salsa bechamel', 'Queso mozzarella y parmesano'],
    popular: true
  },
  {
    id: 'pasta-fettuccine',
    name: 'Fettuccine Alfredo con Pollo',
    category: 'pastas',
    price: 7200,
    badge: '',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Fettuccine frescos en salsa de crema y queso parmesano, acompañados de tiritas de pechuga de pollo y champiñones.',
    ingredients: ['Fettuccine frescos', 'Salsa Alfredo', 'Pollo a la plancha', 'Champiñones'],
    popular: false
  },
  {
    id: 'pasta-ravioles',
    name: 'Ravioles de Ricotta y Espinaca',
    category: 'pastas',
    price: 7400,
    badge: 'Vegetariano',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Ravioles caseros rellenos con ricotta y espinacas, servidos con salsa de tomates naturales y albahaca.',
    ingredients: ['Ravioles caseros', 'Ricotta y espinaca', 'Salsa pomodoro', 'Albahaca fresca'],
    popular: false
  },

  // 6. BEBIDAS Y JUGOS
  {
    id: 'jugo-frambuesa',
    name: 'Jugo Natural de Frambuesa (500ml)',
    category: 'bebidas_jugos',
    price: 2900,
    badge: 'Natural',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Pulpa de frambuesas naturales servida bien fría en vaso de 500ml con hielo.',
    ingredients: ['Frambuesas naturales', 'Agua o leche a elección', 'Hielo'],
    popular: true
  },
  {
    id: 'jugo-mango-maracuya',
    name: 'Jugo Mango - Maracuyá (500ml)',
    category: 'bebidas_jugos',
    price: 3100,
    badge: 'Natural',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Combinación de pulpa natural de mango y maracuyá en vaso de medio litro.',
    ingredients: ['Mango', 'Maracuyá', 'Hielo'],
    popular: false
  },
  {
    id: 'jugo-frutilla-naranja',
    name: 'Jugo Frutilla - Naranja (500ml)',
    category: 'bebidas_jugos',
    price: 2900,
    badge: 'Natural',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Jugo de naranja natural combinado con pulpa de frutillas frescas.',
    ingredients: ['Jugo de naranja exprimido', 'Frutillas frescas', 'Hielo'],
    popular: false
  },
  {
    id: 'bebida-coca-cola',
    name: 'Coca-Cola en Lata (350ml)',
    category: 'bebidas_jugos',
    price: 1600,
    badge: '',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Lata individual fría (Original, Zero o Light a elección).',
    ingredients: ['Lata 350ml'],
    popular: false
  },
  {
    id: 'bebida-chilena',
    name: 'Bilz o Pap en Lata (350ml)',
    category: 'bebidas_jugos',
    price: 1600,
    badge: '',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Lata individual fría a elección: Bilz o Pap.',
    ingredients: ['Lata 350ml'],
    popular: false
  },
  {
    id: 'bebida-familiar',
    name: 'Bebida 1.5 Litros',
    category: 'bebidas_jugos',
    price: 2800,
    badge: '',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Botella desechable de 1.5L (Coca-Cola, Sprite, Fanta, Bilz o Pap).',
    ingredients: ['Botella 1.5L'],
    popular: false
  }
];

// Opciones de personalización
const CUSTOMIZATION_EXTRAS = [
  { id: 'extra_palta', name: 'Porción extra de palta Hass molida', price: 1200 },
  { id: 'extra_queso', name: 'Porción extra de queso chanco fundido', price: 1400 },
  { id: 'extra_mayo', name: 'Mayonesa casera adicional', price: 800 },
  { id: 'extra_aji', name: 'Ají verde picado', price: 400 },
  { id: 'extra_pebre', name: 'Pebre de la casa', price: 600 },
  { id: 'extra_papas', name: 'Papas fritas individuales', price: 2000 }
];

const BREAD_OPTIONS = [
  'Pan Frica tostado',
  'Pan Marraqueta crujiente',
  'Pan Amasado (+ $500)',
  'Pan de Completo tradicional'
];

// Comentarios breves y realistas
const CUSTOMER_REVIEWS = [
  {
    name: 'Rodrigo M.',
    stars: 5,
    comment: 'Muy buenos completos, la mayonesa casera es de verdad y la palta no viene diluida. Rápido para retirar.',
    dish: 'Completo Italiano'
  },
  {
    name: 'Camila S.',
    stars: 5,
    comment: 'El Barros Luco viene bien caliente y con harto queso. El pedido por WhatsApp funcionó sin problemas.',
    dish: 'Barros Luco'
  },
  {
    name: 'Ignacio V.',
    stars: 5,
    comment: 'Buenas porciones y pan frica bien tostado. Las pastas caseras salvan cualquier almuerzo.',
    dish: 'Churrasco Italiano'
  }
];
