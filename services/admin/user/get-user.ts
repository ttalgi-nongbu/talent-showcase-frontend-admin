import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetUserResponse } from "@/types/admin/user";

export async function getUser(id: number): Promise<GetUserResponse> {
  return fetchWithAuth(`${API_ENDPOINTS.admin.user.user}/${id}`);
}
