import { API_ENDPOINTS } from "@/lib/endpoints";
import { fetchWithAuth } from "@/lib/fetchWithAuth";

import type { GetAccountResponse } from "@/types/user";

export async function getAccount(): Promise<GetAccountResponse> {
  return fetchWithAuth(API_ENDPOINTS.user.account, {
    method: "GET",
  });
}
