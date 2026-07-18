import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

export async function banTalent(id: number): Promise<void> {
  await fetchWithAuth(API_ENDPOINTS.admin.talent.ban(id), {
    method: "POST",
  });
}
