import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetTalentResponse } from "@/types/admin/talent";

export async function getTalent(id: number): Promise<GetTalentResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.talent.detail(id));
}
