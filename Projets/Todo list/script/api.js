export async function fetchJson(url, options = {}) {
  const headers = { Accept: "application/json", ...options.headers };
  const res = await fetch(url, { ...options, headers });

  if (res) {
    return res.json();
  }
  throw new Error("Erreur serveur", { cause: res });
}
