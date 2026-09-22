/**
 * Catálogo de Menú - Fuente & Sabor (Sanguchería & Comida Rápida Tradicional)
 * Moneda: Pesos Chilenos (CLP)
 */

const HERO_IMAGE = 'assets/images/hero_food_banner_1790093904159.jpg';

const MENU_CATEGORIES = [
  { id: 'todos', name: 'Todos los Platos', icon: '🍽️' },
  { id: 'completos', name: 'Completos Italianos', icon: '🌭' },
  { id: 'churrascos', name: 'Churrascos Criollos', icon: '🥩' },
  { id: 'hass', name: 'Especialidades Hass', icon: '🥑' },
  { id: 'barros_luco', name: 'Barros Luco Fundido', icon: '🧀' },
  { id: 'pastas', name: 'Pastas Caseras', icon: '🍝' },
  { id: 'bebidas_jugos', name: 'Bebidas & Jugos', icon: '🥤' }
];

const MENU_ITEMS = [
  // 1. COMPLETOS ITALIANOS Y CLÁSICOS
  {
    id: 'comp-italiano',
    name: 'Completo Italiano Tradicional',
    category: 'completos',
    price: 3600,
    badge: 'Más Vendido ⭐',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'El rey indiscutido de las fuentes de soda: pan de completo tibio y tostado, vienesa de primera calidad, abundante palta Hass cremosa molida en el día, tomate fresco en cubitos y coronado con mayonesa casera artesanal.',
    ingredients: ['Pan artesanal horneado', 'Vienesa de primera', 'Tomate fresco en cubos', 'Palta Hass molida al día', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'comp-dinamico',
    name: 'Completo Dinámico Especial',
    category: 'completos',
    price: 3900,
    badge: 'Clásico Chileno',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Pan de completo crocante, vienesa, tomate en cubitos, salsa americana de encurtidos, chucrut tibio, abundante palta Hass molida y un toque generoso de mayonesa de la casa.',
    ingredients: ['Vienesa premium', 'Tomate en cubitos', 'Salsa americana', 'Chucrut tibio', 'Palta Hass', 'Mayonesa casera'],
    popular: false
  },
  {
    id: 'comp-as-italiano',
    name: 'As Italiano a la Plancha',
    category: 'completos',
    price: 4900,
    badge: 'Favorito del Público 🔥',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'La versión monumental del completo: cambiamos la vienesa por jugosas láminas de posta de vacuno recién selladas a la plancha con sal marina, con tomate fresco, palta Hass cremosa y mayonesa casera.',
    ingredients: ['Láminas de vacuno a la plancha (150g)', 'Pan artesanal', 'Palta Hass cremosa', 'Tomate fresco', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'comp-italiano-doble',
    name: 'Completo Italiano XL Doble Vienesa',
    category: 'completos',
    price: 4500,
    badge: 'Tamaño XL',
    image: 'assets/images/completo_italiano_1790094059330.jpg',
    description: 'Para los que no se conforman con poco: dos vienesas premium doradas a la plancha, doble porción de palta Hass y tomate con abundante mayonesa.',
    ingredients: ['Doble vienesa premium', 'Pan gigante', 'Palta Hass extra', 'Tomate fresco', 'Mayonesa casera'],
    popular: false
  },

  // 2. CHURRASCOS
  {
    id: 'churr-italiano',
    name: 'Churrasco Italiano en Pan Frica',
    category: 'churrascos',
    price: 7200,
    badge: 'Insignia de la Casa 🏆',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: 'Finas láminas de posta rosada marinada a la plancha caliente, montadas en pan frica artesanal crujiente por fuera y suave por dentro, con una generosa porción de palta Hass, tomate en rodajas y abundante mayonesa casera.',
    ingredients: ['Posta de vacuno seleccionada (200g)', 'Pan frica artesanal tostado', 'Abundante palta Hass', 'Tomate fresco', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'churr-chacarero',
    name: 'Churrasco Chacarero Criollo',
    category: 'churrascos',
    price: 7400,
    badge: 'Tradición Nacional',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: 'Sabor 100% chileno: jugosa carne de vacuno a la plancha, porotitos verdes cocidos al dente, tomate fresco jugoso, ají verde chileno suave sin picor agresivo y mayonesa casera.',
    ingredients: ['Carne de vacuno a la plancha', 'Porotos verdes tiernos', 'Tomate en rodajas', 'Ají verde chileno suave', 'Mayonesa casera'],
    popular: true
  },
  {
    id: 'churr-pobre',
    name: 'Churrasco a lo Pobre Monumental',
    category: 'churrascos',
    price: 7900,
    badge: 'Para Valientes',
    image: 'assets/images/churrasco_italiano_1790094100239.jpg',
    description: 'Generosa carne a la plancha, abundante cebolla caramelizada dulce y dorada, dos huevos fritos con yema blanda y papas hilo crujientes dentro del sándwich.',
    ingredients: ['Carne de vacuno (200g)', 'Cebolla caramelizada', '2 huevos fritos a la plancha', 'Papas hilo crocantes', 'Pan frica'],
    popular: false
  },

  // 3. ESPECIALIDADES HASS
  {
    id: 'hass-churrasco',
    name: 'Churrasco Hass Supremo',
    category: 'hass',
    price: 7600,
    badge: 'Pura Palta Hass 🥑',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Para los devotos de la palta: doble capa de palta Hass cremosa de exportación recién molida, tiernas láminas de carne de vacuno a la plancha, mayonesa casera y un toque de pebre criollo al costado.',
    ingredients: ['Carne de vacuno a la plancha', 'Doble porción de palta Hass fresca', 'Mayonesa de la casa', 'Pan crujiente'],
    popular: true
  },
  {
    id: 'hass-lomito',
    name: 'Lomito de Cerdo Braseado Hass',
    category: 'hass',
    price: 6900,
    badge: 'Sabor Casero',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Cortes finos y tiernos de lomo de cerdo cocinado a fuego lento en sus jugos con hierbas de la huerta, acompañado de un manto generoso de palta Hass y mayonesa casera.',
    ingredients: ['Lomito de cerdo braseado', 'Palta Hass molida', 'Pan crujiente', 'Mayonesa artesanal'],
    popular: false
  },
  {
    id: 'hass-ave',
    name: 'Ave Palta Hass Artesanal',
    category: 'hass',
    price: 6400,
    badge: 'Ligero & Jugoso',
    image: 'assets/images/churrasco_hass_1790094191216.jpg',
    description: 'Pechuga de pollo deshilachada a mano, salteada a la plancha, con cremosa palta Hass y mayonesa suave en pan tostado con mantequilla.',
    ingredients: ['Pechuga de ave desmenuzada', 'Abundante palta Hass', 'Mayonesa casera', 'Pan artesanal'],
    popular: false
  },

  // 4. BARROS LUCO
  {
    id: 'luco-tradicional',
    name: 'Barros Luco Clásico Fundido',
    category: 'barros_luco',
    price: 6900,
    badge: 'El Clásico de Chile 🧀',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: 'El legendario sándwich chileno: finas láminas de posta de vacuno a la plancha cubiertas por una cascada caliente de queso chanco fundido que se estira con cada mordisco en pan tostado a la mantequilla.',
    ingredients: ['Carne de vacuno a la plancha (200g)', 'Queso chanco fundido elástico premium', 'Pan frica tostado a la plancha'],
    popular: true
  },
  {
    id: 'luco-doble',
    name: 'Barros Luco Doble Carne & Doble Queso',
    category: 'barros_luco',
    price: 8600,
    badge: 'Especial Gigante',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: 'Doble porción de tierna carne de vacuno intercalada con dos generosas capas de queso mantecoso fundido artesanal.',
    ingredients: ['Doble carne de vacuno (300g)', 'Doble queso chanco fundido', 'Pan frica extra grande'],
    popular: true
  },
  {
    id: 'luco-chacarero',
    name: 'Barros Luco Chacarero Fusión',
    category: 'barros_luco',
    price: 7600,
    badge: 'Fusión de Sabores',
    image: 'assets/images/barros_luco_1790094155524.jpg',
    description: 'La unión celestial de dos grandes chilenos: queso chanco derretido caliente sobre lomo a la plancha con porotos verdes crujientes, tomate y ají verde suave.',
    ingredients: ['Carne de vacuno', 'Queso fundido caliente', 'Porotos verdes', 'Tomate fresco', 'Ají verde suave'],
    popular: false
  },

  // 5. PASTAS CASERAS
  {
    id: 'pasta-lasagna',
    name: 'Lasaña Boloñesa Casera Gratinada',
    category: 'pastas',
    price: 7500,
    badge: 'Receta de la Nonna 🍝',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Elaborada artesanalmente en fuente individual: capas de pasta fresca al huevo, abundante ragú boloñesa con carne de vacuno braseada lentamente con tomates y albahaca, bechamel cremosa y costra dorada de queso mozzarella y parmesano.',
    ingredients: ['Pasta fresca al huevo', 'Ragú boloñesa de vacuno', 'Salsa bechamel', 'Mozzarella y queso parmesano gratinado', 'Acompañado de pan de ajo'],
    popular: true
  },
  {
    id: 'pasta-fettuccine',
    name: 'Fettuccine Alfredo con Pollo a la Plancha',
    category: 'pastas',
    price: 7200,
    badge: 'Cremoso & Gourmet',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Fettuccine al dente envueltos en una sedosa salsa Alfredo a base de crema fresca, mantequilla y queso parmesano, acompañados de tiritas de pollo salteado y champiñones dorados.',
    ingredients: ['Fettuccine caseros al huevo', 'Salsa Alfredo con queso parmesano', 'Pechuga de pollo a la plancha', 'Champiñones salteados'],
    popular: false
  },
  {
    id: 'pasta-ravioles',
    name: 'Ravioles Artesanales Ricotta & Espinaca',
    category: 'pastas',
    price: 7400,
    badge: 'Vegetariano',
    image: 'assets/images/pasta_lasagna_1790094273268.jpg',
    description: 'Ravioles rellenos con suave ricotta fresca campesina y hojas de espinaca a la nuez moscada, bañados en salsa pomodoro rústica con hojas de albahaca fresca y queso parmesano.',
    ingredients: ['Ravioles frescos', 'Ricotta y espinacas', 'Salsa pomodoro casera', 'Hojas de albahaca fresca', 'Queso parmesano rallado'],
    popular: false
  },

  // 6. BEBIDAS Y JUGOS NATURALES
  {
    id: 'jugo-frambuesa',
    name: 'Jugo Natural de Frambuesa (500ml)',
    category: 'bebidas_jugos',
    price: 2900,
    badge: '100% Fruta Natural 🍓',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Preparado al instante con fruto entero y pulpa de frambuesas del sur chileno, servido bien frío en vaso de medio litro con hielo y hojas de menta fresca.',
    ingredients: ['Frambuesas naturales', 'Agua purificada o leche a elección', 'Hielo frappé', 'Menta fresca'],
    popular: true
  },
  {
    id: 'jugo-mango-maracuya',
    name: 'Jugo Natural Mango - Maracuyá (500ml)',
    category: 'bebidas_jugos',
    price: 3100,
    badge: 'Tropical & Refrescante',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Combinación intensa y revitalizante de pulpa de mango maduro con semillas y esencia refrescante de maracuyá natural.',
    ingredients: ['Mango maduro', 'Maracuyá fresco', 'Hielo cristalino'],
    popular: true
  },
  {
    id: 'jugo-frutilla-naranja',
    name: 'Jugo Frutilla - Naranja Exprimido (500ml)',
    category: 'bebidas_jugos',
    price: 2900,
    badge: 'Vitamina C Pura',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Zumo de naranjas recién exprimidas en el momento combinado con frutillas maceradas. Dulzor y acidez perfectamente balanceados.',
    ingredients: ['Jugo de naranja natural', 'Frutillas frescas maduras', 'Hielo'],
    popular: false
  },
  {
    id: 'bebida-coca-cola',
    name: 'Bebida Coca-Cola en Lata (350ml)',
    category: 'bebidas_jugos',
    price: 1600,
    badge: 'Bien Helada',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Lata clásica de 350ml bien helada (Original, Zero o Light). Se envía con vaso y rodaja de limón.',
    ingredients: ['Lata Coca-Cola 350ml fría'],
    popular: false
  },
  {
    id: 'bebida-chilena',
    name: 'Bebida Bilz o Pap en Lata (350ml)',
    category: 'bebidas_jugos',
    price: 1600,
    badge: 'Tradición Chilena',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'La tradición de toda fuente de soda chilena: elige entre la inconfundible Bilz roja o Pap sabor papaya bien helada.',
    ingredients: ['Lata 350ml a elección (Bilz o Pap)'],
    popular: false
  },
  {
    id: 'bebida-familiar',
    name: 'Bebida Familiar 1.5 Litros',
    category: 'bebidas_jugos',
    price: 2800,
    badge: 'Para Compartir',
    image: 'assets/images/jugos_naturales_1790094393714.jpg',
    description: 'Botella desechable de 1.5L helada para compartir en familia. Variedades: Coca-Cola, Sprite, Fanta, Bilz o Pap.',
    ingredients: ['Botella 1.5L refrigerada'],
    popular: false
  }
];

// Opciones de personalización y extras
const CUSTOMIZATION_EXTRAS = [
  { id: 'extra_palta', name: 'Extra Palta Hass Molida (+100g)', price: 1200 },
  { id: 'extra_queso', name: 'Extra Queso Chanco Fundido Caliente', price: 1400 },
  { id: 'extra_mayo', name: 'Pote Mayonesa Casera Artesanal (60ml)', price: 800 },
  { id: 'extra_aji', name: 'Porción Ají Verde Picado Suave', price: 400 },
  { id: 'extra_pebre', name: 'Pote Pebre Criollo Fresco', price: 600 },
  { id: 'extra_papas', name: 'Papas Fritas Rústicas Individuales', price: 2000 }
];

const BREAD_OPTIONS = [
  'Pan Frica Artesanal Tostado',
  'Pan Marraqueta Crujiente',
  'Pan Amasado Casero (+ $500)',
  'Pan de Completo Especial'
];

// Testimonios de clientes
const CUSTOMER_REVIEWS = [
  {
    name: 'Rodrigo Morales',
    stars: 5,
    comment: '¡El mejor Completo Italiano de la zona! La mayonesa casera tiene ese sabor auténtico de las fuentes de soda de antaño y la palta es 100% Hass fresca.',
    dish: 'Completo Italiano Tradicional'
  },
  {
    name: 'Camila Sepúlveda',
    stars: 5,
    comment: 'El Barros Luco es impresionante, el queso viene hirviendo y se estira como debe ser. El pedido por WhatsApp llegó en 30 minutos caliente.',
    dish: 'Barros Luco Clásico Fundido'
  },
  {
    name: 'Ignacio Valenzuela',
    stars: 5,
    comment: 'La lasaña boloñesa compite con cualquier trattoria italiana y los jugos naturales de frambuesa son puro fruto natural sin diluir. ¡10/10!',
    dish: 'Lasaña Boloñesa Casera'
  }
];
