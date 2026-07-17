import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetCountryDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getCountryDistribution(
  limit: number,
): Promise<GetCountryDistributionResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.talent.countryDistribution}?${params.toString()}`,
  );
}
