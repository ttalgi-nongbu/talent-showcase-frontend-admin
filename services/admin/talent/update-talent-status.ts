import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { UpdateTalentStatusRequest } from "@/types/admin/talent";

export async function updateTalentStatus(
  id: number,
  payload: UpdateTalentStatusRequest,
): Promise<void> {
  return fetchWithAuth(API_ENDPOINTS.admin.talent.updateStatus(id), {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}
