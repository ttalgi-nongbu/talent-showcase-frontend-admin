import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetCityDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getCityDistribution(): Promise<GetCityDistributionResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.cityDistribution);
}
