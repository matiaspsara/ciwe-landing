# Guía de contenido — Ciwe

Esta guía explica cómo actualizar el contenido del sitio. Está pensada para que cualquier persona con acceso al código pueda hacer cambios sin necesidad de saber programar en profundidad.

---

## Sabores y categorías

**Archivo:** `src/data/flavors.js`

Este es el único lugar donde están todos los sabores. Si editás este archivo, los cambios se reflejan automáticamente en la sección de Helados y en Novedades.

### Agregar un sabor nuevo a una categoría

Buscá la categoría correspondiente (por ejemplo `"chocolates"`, `"cremas"`, `"frutas-agua"`, etc.) y agregá un objeto al array `items`:

```js
{ name: "Nombre del Sabor" }
```

Si el sabor es nuevo de temporada y tiene descripción, usá:

```js
{ name: "Nombre del Sabor", isNew: true, description: "Descripción corta del sabor." }
```

### Eliminar un sabor

Borrá la línea correspondiente del array `items` de su categoría.

### Agregar un sabor a Novedades (los destacados)

Los sabores de la sección **Novedades** están al final del archivo, en el array `newFlavors`. Cada objeto tiene esta forma:

```js
{
  name: "Nombre del Sabor",
  category: "Nombre de la categoría",
  description: "Descripción del sabor.",
  gradient: "linear-gradient(160deg, #COLOR1 0%, #COLOR2 100%)",
  lightText: true,  // true si el texto tiene que ser blanco (fondo oscuro), false si va oscuro
}
```

### Actualizar la Línea HUNNO o la Línea ZERO

Al final de `src/data/flavors.js` están los objetos `lineaHunno` y `lineaZero`. El campo `items` es un array simple de strings con los nombres de los sabores:

```js
items: ["Americana", "Chocolate", "Dulce de Leche", ...]
```

Agregá o quitá nombres según corresponda.

---

## Fotos

### Foto del Hero (la imagen grande de la derecha en el inicio)

**Archivo:** `src/components/Hero.astro`

Cuando tengas la foto, guardala en `public/photos/hero.jpg` y reemplazá este bloque:

```html
<div class="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
     style="background: linear-gradient(...)">
  <div class="w-full h-full flex items-center justify-center">
    <img src="/logo.png" ... />
  </div>
</div>
```

Por esto:

```html
<img
  src="/photos/hero.jpg"
  class="w-full aspect-[4/5] rounded-3xl object-cover shadow-xl"
  alt="Helados Ciwe"
/>
```

**Tamaño recomendado:** 800 × 1000 px mínimo.

### Fotos de las tarjetas de sabores

**Archivo:** `src/components/Helados.astro`

Cada tarjeta tiene un bloque así arriba (el área de color):

```html
<div
  class="h-44 flex flex-col items-center justify-end pb-4 px-4 relative"
  style="background: linear-gradient(...);"
>
  ...
</div>
```

Reemplazalo por:

```html
<div class="h-44 relative overflow-hidden">
  <img
    src="/photos/nombre-del-sabor.jpg"
    class="w-full h-full object-cover"
    alt="Nombre del Sabor"
  />
</div>
```

**Tamaño recomendado:** 400 × 350 px mínimo.

### Fotos de Novedades

**Archivo:** `src/components/Novedades.astro` — mismo proceso que las tarjetas de sabores.

---

## Historia

**Archivo:** `src/components/Historia.astro`

Buscá el párrafo con el texto de marcador de posición y reemplazalo con la historia real de Ciwe:

```html
<p class="text-base leading-relaxed">
  [Agregá aquí la historia de Ciwe — fundadores, anécdotas, tradición familiar, etc.]
</p>
```

También podés editar los párrafos anteriores con la historia real del local.

---

## Pastelería

**Archivo:** `src/components/Pasteleria.astro`

Por ahora la sección tiene texto de marcador de posición. Cuando tengas el menú de pastelería, editá:

1. El párrafo descriptivo debajo del título
2. La grilla de 4 ítems (`Tortas`, `Alfajores`, `Postres`, `Especiales`) — cambiá los nombres por los productos reales

---

## Información de contacto

**Archivo:** `src/components/Contacto.astro`

Buscá y reemplazá los siguientes marcadores de posición:

| Marcador | Qué poner |
|---|---|
| `[Dirección completa]` | La dirección del local |
| `[Ciudad, Provincia]` | Ciudad y provincia |
| `Lunes a Viernes: [horario]` | El horario real |
| `Sábados: [horario]` | El horario real |
| `Domingos: [horario]` | El horario real |
| `@ciwe_helados` | El usuario real de Instagram |
| `Ciwe Heladería` | El nombre real de la página de Facebook |
| `+54 [número]` | El número de WhatsApp |

Para los links de redes sociales, buscá `href="#"` y reemplazalo con la URL real de cada red.

---

## Sección Chamote

**Archivo:** `src/components/Chamote.astro`

Esta sección está en modo "Próximamente" hasta que se confirme el lanzamiento del carrito. Cuando esté listo, avisale al desarrollador para activarla con información real.

---

## Ver los cambios en vivo

Después de editar cualquier archivo, si el servidor de desarrollo está corriendo (`npm run dev`) los cambios se ven solos al guardar. Si no está corriendo:

```bash
cd site
npm run dev
```

Para generar la versión final lista para publicar:

```bash
npm run build
```
