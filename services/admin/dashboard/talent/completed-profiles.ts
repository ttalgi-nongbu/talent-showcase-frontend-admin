import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetCompletedProfilesResponse } from "@/types/admin/dashboard/talent";

export async function getCompletedProfiles(): Promise<GetCompletedProfilesResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.completedProfiles);
}
