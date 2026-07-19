import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetSkillsParams, GetSkillsResponse } from "@/types/admin/skill";

export async function getSkills(
  params: GetSkillsParams,
): Promise<GetSkillsResponse> {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      query.set(key, value);
    }
  });

  const endpoint =
    query.size > 0
      ? `${API_ENDPOINTS.admin.skill.root}?${query.toString()}`
      : API_ENDPOINTS.admin.skill.root;

  return fetchWithAuth(endpoint);
}
