import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

export async function verifySkill(id: number) {
  return fetchWithAuth(API_ENDPOINTS.admin.skill.verify(id), {
    method: "POST",
  });
}
