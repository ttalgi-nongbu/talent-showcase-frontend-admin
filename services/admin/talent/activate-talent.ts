import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

export async function activateTalent(id: number): Promise<void> {
  await fetchWithAuth(API_ENDPOINTS.admin.talent.activate(id), {
    method: "POST",
  });
}
