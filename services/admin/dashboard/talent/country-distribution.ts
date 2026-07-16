import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetCountryDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getCountryDistribution(): Promise<GetCountryDistributionResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.talent.countryDistribution,
  );
}
