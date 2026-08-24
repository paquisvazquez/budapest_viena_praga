// Protege TODO el sitio con usuario y contraseña (autenticación básica del navegador).
// El usuario y la contraseña NO están aquí escritos: se configuran como variables de
// entorno en el panel de Cloudflare Pages (Settings > Environment variables), para que
// no queden visibles en el repositorio de GitHub, que es público.
//
// Variables de entorno necesarias:
//   SITE_USER      -> el usuario que querais usar
//   SITE_PASSWORD  -> la contraseña que querais usar

export async function onRequest(context) {
  const { request, env, next } = context;

  const expectedUser = env.SITE_USER;
  const expectedPass = env.SITE_PASSWORD;

  const authHeader = request.headers.get("Authorization");

  if (authHeader && authHeader.startsWith("Basic ")) {
    const encoded = authHeader.slice(6);
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);

    if (user === expectedUser && pass === expectedPass) {
      return next();
    }
  }

  return new Response("Acceso restringido. Introduce el usuario y la contraseña.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Guia de viaje", charset="UTF-8"',
      "Content-Type": "text/plain; charset=UTF-8",
    },
  });
}
