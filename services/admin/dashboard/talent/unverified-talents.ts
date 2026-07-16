import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetUnverifiedTalentsResponse } from "@/types/admin/dashboard/talent";

export async function getUnverifiedTalents(): Promise<GetUnverifiedTalentsResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.unverifiedTalents);
}
