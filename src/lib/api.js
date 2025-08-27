const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "";

export const API_BASE = RAW_BASE.replace(/\/+$/, "") || "http://localhost:5000";

export function buildUrl(path) {
  const clean = String(path).replace(/^\/+/, "");
  return `${API_BASE}/${clean}`;
}

async function handleJsonResponse(res, method, url) {
  if (!res.ok) {
    let detail = "";
    try {
      const data = await res.json();
      detail = typeof data === "string" ? data : JSON.stringify(data);
    } catch {
      detail = res.statusText || "";
    }
    throw new Error(`${method} ${url} failed: ${res.status} ${detail}`.trim());
  }
  if (res.status === 204) return null;
  return res.json();
}

export async function apiGet(path, init) {
  const url = buildUrl(path);
  const res = await fetch(url, { method: "GET", ...(init || {}) });
  return handleJsonResponse(res, "GET", url);
}

export async function apiPost(path, body, init = {}) {
  const url = buildUrl(path);
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...init,
  });
  return handleJsonResponse(res, "POST", url);
}

export async function apiPut(path, body, init = {}) {
  const url = buildUrl(path);
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...init,
  });
  return handleJsonResponse(res, "PUT", url);
}

export async function apiPatch(path, body, init = {}) {
  const url = buildUrl(path);
  const res = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...init,
  });
  return handleJsonResponse(res, "PATCH", url);
}

export async function apiDelete(path, init = {}) {
  const url = buildUrl(path);
  const res = await fetch(url, { method: "DELETE", ...init });
  return handleJsonResponse(res, "DELETE", url);
}
