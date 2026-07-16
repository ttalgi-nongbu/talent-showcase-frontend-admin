import { API_ENDPOINTS } from "@/lib/endpoints";

export async function refreshToken() {
  const response = await fetch(API_ENDPOINTS.auth.refreshToken, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //
  // ambil response json
  //
  const data = await response.json();

  //
  // kalau request gagal
  //
  if (!response.ok) {
    throw data;
  }

  return data;
}
