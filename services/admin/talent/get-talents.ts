import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetTalentsParams, GetTalentsResponse } from "@/types/admin/talent";

export async function getTalents(
  params: GetTalentsParams,
): Promise<GetTalentsResponse> {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      query.set(key, value);
    }
  });

  const endpoint =
    query.size > 0
      ? `${API_ENDPOINTS.admin.talent.root}?${query.toString()}`
      : API_ENDPOINTS.admin.talent.root;

  return fetchWithAuth(endpoint);
}
