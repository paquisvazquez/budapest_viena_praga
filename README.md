# Guía de viaje — Budapest · Viena · Praga

## Cómo publicarla con usuario y contraseña

1. Sube el contenido de esta carpeta (`index.html` y la carpeta `functions/`) a un
   repositorio nuevo en GitHub.
2. Entra en https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages**
   → **Connect to Git**, y elige ese repositorio. Deja el resto de opciones por
   defecto (no hace falta comando de build ni carpeta de salida).
3. Cuando el proyecto esté creado, ve a **Settings → Environment variables** y añade:
   - `SITE_USER` → el usuario que queráis usar
   - `SITE_PASSWORD` → la contraseña que queráis usar
4. Vuelve a **Deployments** y pulsa **Retry deployment** (para que recoja las
   variables nuevas).
5. Abre la URL que te da Cloudflare (algo como `nombre-proyecto.pages.dev`) desde el
   móvil — el navegador pedirá usuario y contraseña antes de enseñar nada.

Para actualizar la guía más adelante, basta con subir un `index.html` nuevo al
repositorio de GitHub — Cloudflare la vuelve a publicar sola en 1-2 minutos.
