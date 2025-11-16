# 🛒 GUÍA COMPLETA: Implementar Tema Baliza V16 en Shopify

## 📋 PASO A PASO PARA CREAR EL TEMA

### 1️⃣ CREAR ESTRUCTURA DE CARPETAS

En tu computadora, crea esta estructura:

```
baliza-v16-theme/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
├── templates/
└── README.md
```

### 2️⃣ ARCHIVOS A CREAR

Te voy a mostrar el contenido de cada archivo. Copia y pega cada uno:

---

## 📁 LAYOUT/THEME.LIQUID

```liquid
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#1e40af">
    <link rel="canonical" href="{{ canonical_url }}">
    <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
    {%- endif -%}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}

    {% style %}
      :root {
        --color-primary: #1e40af;
        --color-secondary: #dc2626;
        --color-accent: #fbbf24;
        --color-text: #111827;
        --color-background: #ffffff;
      }

      * { box-sizing: border-box; }
      
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: var(--color-text);
        background: var(--color-background);
      }
    {% endstyle %}

    {{ 'base.css' | asset_url | stylesheet_tag }}
    {{ 'section-header.css' | asset_url | stylesheet_tag }}
    {{ 'section-hero.css' | asset_url | stylesheet_tag }}
    {{ 'component-product-card.css' | asset_url | stylesheet_tag }}
    {{ 'section-footer.css' | asset_url | stylesheet_tag }}
  </head>

  <body>
    {% section 'header' %}
    
    <main id="MainContent" role="main">
      {{ content_for_layout }}
    </main>

    {% section 'footer' %}

    {% render 'cart-drawer' %}
  </body>
</html>
```

---

## 📁 SECTIONS/HEADER.LIQUID

```liquid
<header class="header">
  <div class="header__top-bar">
    <div class="page-width">
      <div class="header__top-content">
        <div class="header__contact-info">
          <span>📞 900 123 456</span>
          <span>🚚 Envío gratuito a toda España</span>
        </div>
        <div class="header__announcement">
          Obligatorio desde el 1 de enero de 2026
        </div>
      </div>
    </div>
  </div>

  <div class="header__main">
    <div class="page-width">
      <div class="header__content">
        <div class="header__logo">
          <a href="{{ routes.root_url }}">
            <h1>Baliza<span style="color: #dc2626;">V16</span></h1>
            <span>DGT Oficial</span>
          </a>
        </div>

        <nav class="header__nav">
          <ul>
            <li><a href="{{ routes.root_url }}">Inicio</a></li>
            <li><a href="{{ collections.all.url }}">Productos</a></li>
            <li><a href="{{ pages.normativa.url }}">Normativa</a></li>
            <li><a href="{{ pages.faq.url }}">FAQ</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div class="header__actions">
          <a href="{{ routes.cart_url }}" class="header__cart">
            🛒 <span class="cart-count">{{ cart.item_count }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

{% schema %}
{
  "name": "Header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo"
    }
  ]
}
{% endschema %}
```

---

## 📁 SECTIONS/HERO.LIQUID

```liquid
<section class="hero">
  <div class="page-width">
    <div class="hero__content">
      <div class="hero__text">
        <div class="hero__badge">
          ⚠️ OBLIGATORIO 2026
        </div>
        
        <h1 class="hero__title">
          Baliza V16
          <span class="hero__title-accent">DGT Oficial</span>
        </h1>
        
        <p class="hero__description">
          El nuevo dispositivo de preseñalización de peligro que sustituirá a los triángulos de emergencia a partir del 1 de enero de 2026.
        </p>

        <div class="hero__buttons">
          <a href="{{ collections.all.url }}" class="btn btn--primary">
            Comprar Ahora
          </a>
          <a href="{{ collections.all.url }}" class="btn btn--secondary">
            Ver Productos
          </a>
        </div>

        <div class="hero__features">
          <div class="hero__feature">
            🛡️ Homologada DGT
          </div>
          <div class="hero__feature">
            📍 Geolocalización GPS
          </div>
          <div class="hero__feature">
            🔋 Batería 2+ años
          </div>
        </div>
      </div>

      <div class="hero__image">
        <img src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="Baliza V16 en carretera">
        <div class="hero__price-badge">
          Desde 79€
        </div>
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Hero Section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Título",
      "default": "Baliza V16"
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Descripción"
    }
  ]
}
{% endschema %}
```

---

## 📁 SECTIONS/FEATURED-COLLECTION.LIQUID

```liquid
<section class="products-section">
  <div class="page-width">
    <div class="products-section__header">
      <h2>Nuestros Productos</h2>
      <p>Toda la gama de balizas V16 homologadas por la DGT</p>
    </div>

    <div class="products-grid">
      {% assign collection = collections[section.settings.collection] %}
      {% if collection.products.size > 0 %}
        {% for product in collection.products limit: 4 %}
          {% render 'product-card', product: product %}
        {% endfor %}
      {% else %}
        <!-- Productos de ejemplo -->
        <div class="product-card">
          <div class="product-card__image">
            <img src="https://images.pexels.com/photos/163792/model-car-land-vehicle-toy-car-163792.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Baliza V16 Premium">
            <div class="product-card__badge--popular">MÁS VENDIDO</div>
          </div>
          <div class="product-card__content">
            <h3>Baliza V16 Premium GPS</h3>
            <div class="product-card__price">
              <span class="price-current">€89</span>
              <span class="price-original">€119</span>
            </div>
            <div class="product-card__features">
              <div>🛡️ Homologada DGT</div>
              <div>📍 GPS integrado</div>
              <div>🔋 Batería 3 años</div>
            </div>
            <button class="btn btn--primary">Añadir al Carrito</button>
          </div>
        </div>

        <div class="product-card">
          <div class="product-card__image">
            <img src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Baliza V16 Estándar">
          </div>
          <div class="product-card__content">
            <h3>Baliza V16 Estándar</h3>
            <div class="product-card__price">
              <span class="price-current">€79</span>
              <span class="price-original">€99</span>
            </div>
            <div class="product-card__features">
              <div>🛡️ Homologada DGT</div>
              <div>📍 Localización GPS</div>
              <div>🔋 Batería 2 años</div>
            </div>
            <button class="btn btn--primary">Añadir al Carrito</button>
          </div>
        </div>

        <div class="product-card">
          <div class="product-card__image">
            <img src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Baliza V16 Pro">
          </div>
          <div class="product-card__content">
            <h3>Baliza V16 Pro Connect</h3>
            <div class="product-card__price">
              <span class="price-current">€129</span>
              <span class="price-original">€159</span>
            </div>
            <div class="product-card__features">
              <div>🛡️ Homologada DGT</div>
              <div>📱 Conectividad 4G</div>
              <div>🔋 Batería 4 años</div>
            </div>
            <button class="btn btn--primary">Añadir al Carrito</button>
          </div>
        </div>

        <div class="product-card">
          <div class="product-card__image">
            <img src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Pack Familiar">
          </div>
          <div class="product-card__content">
            <h3>Pack Familiar 2 Balizas</h3>
            <div class="product-card__price">
              <span class="price-current">€149</span>
              <span class="price-original">€178</span>
            </div>
            <div class="product-card__features">
              <div>🛡️ 2 Balizas Premium</div>
              <div>📦 Estuche incluido</div>
              <div>🔋 Garantía extendida</div>
            </div>
            <button class="btn btn--primary">Añadir al Carrito</button>
          </div>
        </div>
      {% endif %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Featured Collection",
  "settings": [
    {
      "type": "collection",
      "id": "collection",
      "label": "Colección"
    }
  ]
}
{% endschema %}
```

---

## 📁 SECTIONS/FOOTER.LIQUID

```liquid
<footer class="footer">
  <div class="page-width">
    <div class="footer__content">
      <div class="footer__section">
        <h3>Baliza<span style="color: #dc2626;">V16</span></h3>
        <p>Tu tienda especializada en balizas V16 homologadas por la DGT.</p>
        <div class="footer__social">
          <a href="#">📘 Facebook</a>
          <a href="#">📷 Instagram</a>
          <a href="#">🎵 TikTok</a>
          <a href="#">📺 YouTube</a>
        </div>
      </div>

      <div class="footer__section">
        <h4>Productos</h4>
        <ul>
          <li><a href="#">Baliza V16 Premium</a></li>
          <li><a href="#">Baliza V16 Estándar</a></li>
          <li><a href="#">Baliza V16 Pro Connect</a></li>
          <li><a href="#">Packs Familiares</a></li>
        </ul>
      </div>

      <div class="footer__section">
        <h4>Información</h4>
        <ul>
          <li><a href="{{ pages.normativa.url }}">Normativa DGT</a></li>
          <li><a href="{{ pages.faq.url }}">FAQ</a></li>
          <li><a href="{{ pages.privacy-policy.url }}">Política de Privacidad</a></li>
          <li><a href="{{ pages.terms-conditions.url }}">Términos y Condiciones</a></li>
        </ul>
      </div>

      <div class="footer__section">
        <h4>Contacto</h4>
        <div class="footer__contact">
          <p>📞 900 123 456</p>
          <p>✉️ info@balizav16.es</p>
          <p>📍 Madrid, España</p>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; 2024 BalizaV16.es - Todos los derechos reservados</p>
      <p>🛡️ Productos Homologados DGT</p>
    </div>
  </div>
</footer>

{% schema %}
{
  "name": "Footer",
  "settings": [
    {
      "type": "text",
      "id": "phone",
      "label": "Teléfono",
      "default": "900 123 456"
    }
  ]
}
{% endschema %}
```

---

## 📁 TEMPLATES/INDEX.LIQUID

```liquid
{% section 'hero' %}
{% section 'featured-collection' %}
```

---

## 📁 TEMPLATES/PRODUCT.LIQUID

```liquid
<div class="product-page">
  <div class="page-width">
    <div class="product-grid">
      <div class="product-images">
        {% if product.featured_image %}
          <img src="{{ product.featured_image | image_url: width: 600 }}" alt="{{ product.title }}">
        {% endif %}
      </div>
      
      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <div class="product-price">
          <span class="price-current">{{ product.price | money }}</span>
          {% if product.compare_at_price > product.price %}
            <span class="price-original">{{ product.compare_at_price | money }}</span>
          {% endif %}
        </div>
        
        <div class="product-description">
          {{ product.description }}
        </div>
        
        <form action="/cart/add" method="post">
          <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
          <button type="submit" class="btn btn--primary">
            Añadir al Carrito - {{ product.price | money }}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
```

---

## 📁 ASSETS/BASE.CSS

```css
/* Reset y estilos base */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
}

.page-width {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Botones */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--primary {
  background: #1e40af;
  color: white;
}

.btn--primary:hover {
  background: #1e3a8a;
  transform: translateY(-1px);
}

.btn--secondary {
  background: transparent;
  color: #1e40af;
  border: 2px solid #1e40af;
}

.btn--secondary:hover {
  background: #1e40af;
  color: white;
}

/* Grid */
.grid {
  display: grid;
  gap: 1rem;
}

.grid--2-col {
  grid-template-columns: repeat(2, 1fr);
}

.grid--4-col {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .grid--2-col,
  .grid--4-col {
    grid-template-columns: 1fr;
  }
}

/* Utilidades */
.text-center { text-align: center; }
.mb-4 { margin-bottom: 1rem; }
.py-8 { padding: 2rem 0; }
```

---

## 📁 CONFIG/SETTINGS_SCHEMA.JSON

```json
[
  {
    "name": "Colores",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Color primario",
        "default": "#1e40af"
      },
      {
        "type": "color",
        "id": "color_secondary",
        "label": "Color secundario",
        "default": "#dc2626"
      }
    ]
  },
  {
    "name": "Información de contacto",
    "settings": [
      {
        "type": "text",
        "id": "contact_phone",
        "label": "Teléfono",
        "default": "900 123 456"
      },
      {
        "type": "text",
        "id": "contact_email",
        "label": "Email",
        "default": "info@balizav16.es"
      }
    ]
  }
]
```

---

## 🚀 PASOS FINALES

1. **Crea todas las carpetas y archivos** con el contenido mostrado
2. **Comprime la carpeta** `baliza-v16-theme/` en ZIP
3. **Ve a Shopify Admin** → Tienda online → Temas
4. **Sube el tema** y publícalo
5. **Personaliza** desde el editor de temas

¿Necesitas ayuda con algún archivo específico o el proceso de subida?