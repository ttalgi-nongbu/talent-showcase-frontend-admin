import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetAgeDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getAgeDistribution(): Promise<GetAgeDistributionResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.ageDistribution);
}
