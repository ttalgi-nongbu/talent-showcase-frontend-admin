import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

export async function unverifySkill(id: number) {
  return fetchWithAuth(API_ENDPOINTS.admin.skill.unverify(id), {
    method: "POST",
  });
}
