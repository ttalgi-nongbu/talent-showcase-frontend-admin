import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetNationalityDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getNationalityDistribution(
  limit: number,
): Promise<GetNationalityDistributionResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.talent.nationalityDistribution}?${params.toString()}`,
  );
}
