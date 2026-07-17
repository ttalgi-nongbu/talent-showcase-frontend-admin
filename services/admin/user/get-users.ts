import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetUsersParams, GetUsersResponse } from "@/types/admin/user";

export async function getUsers(
  params: GetUsersParams,
): Promise<GetUsersResponse> {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      query.set(key, value);
    }
  });

  const endpoint =
    query.size > 0
      ? `${API_ENDPOINTS.admin.user.users}?${query.toString()}`
      : API_ENDPOINTS.admin.user.users;

  return fetchWithAuth(endpoint);
}
