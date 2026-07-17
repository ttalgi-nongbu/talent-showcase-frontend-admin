import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetUsersResponse } from "@/types/admin/user";

export async function getUsers(
  page: number,
  limit: number,
): Promise<GetUsersResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.user.users}?${params.toString()}`,
  );
}
