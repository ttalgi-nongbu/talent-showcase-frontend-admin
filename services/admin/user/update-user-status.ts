import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { UpdateUserStatusRequest } from "@/types/admin/user";

export async function updateUserStatus(
  id: number,
  payload: UpdateUserStatusRequest,
): Promise<void> {
  return fetchWithAuth(
    `${API_ENDPOINTS.admin.user.updateUserStatus}/${id}/status`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
  );
}
