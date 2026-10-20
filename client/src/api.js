const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
    if (!API_URL) {
        throw new Error("VITE_API_URL is missing. Check the client .env file or deployment settings.");
    }

    const baseUrl = API_URL.replace(/\/+$/, "");
    const res = await fetch(`${baseUrl}/api/products${path}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json();
}
export const getProducts = () => request("");

export const createProduct = (data) =>
    request("", { method: "POST", body: JSON.stringify(data) });

export const updateProduct = (id, data) =>
    request(`/${id}`, { method: "PUT", body: JSON.stringify(data) });

export const deleteProduct = (id) =>
    request(`/${id}`, { method: "DELETE" });