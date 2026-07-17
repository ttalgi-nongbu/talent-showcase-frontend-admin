import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetCityDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getCityDistribution(
  limit: number,
): Promise<GetCityDistributionResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.talent.cityDistribution}?${params.toString()}`,
  );
}
