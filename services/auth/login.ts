import { API_ENDPOINTS } from "@/lib/endpoints";
import type { LoginRequest } from "@/types/auth";

export async function login(payload: LoginRequest) {
  const response = await fetch(API_ENDPOINTS.auth.login, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
