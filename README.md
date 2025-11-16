# Shopify Liquid Theme

Tema profesional para Shopify con estructura modular y componentes reutilizables.

## Estructura del Proyecto

```
.
├── config/                 # Configuración del tema
│   └── settings_schema.json
├── layout/                 # Layouts principales
│   ├── theme.liquid
│   └── checkout.liquid
├── templates/             # Templates de páginas
│   ├── index.liquid
│   ├── product.liquid
│   ├── collection.liquid
│   └── page.liquid
├── sections/              # Secciones dinámicas
│   ├── header.liquid
│   ├── footer.liquid
│   ├── featured-product.liquid
│   └── collection-grid.liquid
├── snippets/              # Fragmentos reutilizables
│   ├── product-card.liquid
│   ├── price.liquid
│   └── button.liquid
├── assets/                # CSS, JS e imágenes
│   ├── style.css
│   ├── script.js
│   └── images/
└── locales/               # Traducciones
    └── es.json
```

## Instalación

1. Clona este repositorio
2. Usa Shopify CLI para conectar tu tienda
3. Despliega el tema en Shopify

## Deployment

```bash
shopify theme dev
shopify theme publish
```
