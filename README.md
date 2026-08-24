# Guía de viaje — Budapest · Viena · Praga

Este repo despliega como un **Cloudflare Worker con assets** (así es como Cloudflare
crea los proyectos conectados por Git ahora mismo, en vez de un proyecto "Pages"
clásico). La guía en sí está en `public/index.html`; `src/index.js` es el código que
pide usuario y contraseña antes de dejarla ver.

## Si ya tienes el Worker creado y conectado al repo (paquisvazquez/budapest_viena_praga)

Sustituye el contenido del repositorio por el de esta carpeta (`wrangler.jsonc`,
`src/index.js` y `public/index.html`) y súbelo — Cloudflare volverá a desplegar solo.

Después, en el panel del Worker en Cloudflare:

1. **Activar la URL**: Settings → Domains & Routes → en "workers.dev", pulsa
   **Enable**. Te dará una URL del tipo `budapest-viena-praga.<tu-subdominio>.workers.dev`.
2. **Añadir el usuario y la contraseña**: Settings → Variables and Secrets → Add:
   - `SITE_USER` (tipo Text) → el usuario que queráis
   - `SITE_PASSWORD` (tipo **Secret**, para que quede cifrado) → la contraseña
3. Cloudflare vuelve a desplegar solo al guardar las variables. Si no lo hace,
   fuerza un redeploy desde la pestaña Deployments.
4. Abre la URL desde el móvil: el navegador debería pedir usuario y contraseña
   antes de enseñar nada.

Para actualizar la guía más adelante, basta con subir un `public/index.html` nuevo
al repositorio — Cloudflare la vuelve a publicar sola en 1-2 minutos.
