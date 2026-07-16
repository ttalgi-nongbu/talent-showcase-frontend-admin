import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetGenderDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getGenderDistribution(): Promise<GetGenderDistributionResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.genderDistribution);
}
