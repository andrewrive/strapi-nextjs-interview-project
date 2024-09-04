export async function request<T>(path: string, init?: RequestInit) {
  const headers = new Headers({
    ...(init?.headers || {}),
  });
  headers.set("Authorization", `bearer ${process.env.AUTH_TOKEN!}`);
  headers.set("Content-Type", "application/json");

  const endpoint = `${process.env.API_BASE}${path}`;
  const response = await fetch(endpoint, {
    ...(init || {}),
    headers,
  });

  return (await response.json()) as T;
}
