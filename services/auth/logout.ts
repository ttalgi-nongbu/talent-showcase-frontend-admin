import { API_ENDPOINTS } from "@/lib/endpoints";

export async function logout() {
  const response = await fetch(API_ENDPOINTS.auth.logout, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
