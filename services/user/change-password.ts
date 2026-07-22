import { API_ENDPOINTS } from "@/lib/endpoints";
import { fetchWithAuth } from "@/lib/fetchWithAuth";

import type { ChangePasswordRequest } from "@/types/user";

export async function changePassword(payload: ChangePasswordRequest) {
  return fetchWithAuth(API_ENDPOINTS.user.password, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });
}
