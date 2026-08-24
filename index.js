// Protege TODO el sitio con usuario y contraseña (autenticación básica del navegador)
// antes de servir el archivo estático de la guía.
//
// El usuario y la contraseña NO están escritos aquí: se configuran como variables
// de entorno / secretos en el panel de Cloudflare (Settings > Variables and Secrets),
// para que no queden visibles en el repositorio de GitHub, que es público.
//
// Variables necesarias en Cloudflare:
//   SITE_USER      -> el usuario que querais usar
//   SITE_PASSWORD  -> la contraseña que querais usar (mejor como "Secret", no "Text")

export default {
  async fetch(request, env) {
    const expectedUser = env.SITE_USER;
    const expectedPass = env.SITE_PASSWORD;

    const authHeader = request.headers.get("Authorization");

    if (authHeader && authHeader.startsWith("Basic ")) {
      const decoded = atob(authHeader.slice(6));
      const separatorIndex = decoded.indexOf(":");
      const user = decoded.slice(0, separatorIndex);
      const pass = decoded.slice(separatorIndex + 1);

      if (user === expectedUser && pass === expectedPass) {
        // Usuario y contraseña correctos: servimos el archivo estático (index.html).
        return env.ASSETS.fetch(request);
      }
    }

    // Sin credenciales o incorrectas: el navegador muestra su cuadro nativo de login.
    return new Response("Acceso restringido. Introduce el usuario y la contraseña.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Guia de viaje", charset="UTF-8"',
        "Content-Type": "text/plain; charset=UTF-8",
      },
    });
  },
};
