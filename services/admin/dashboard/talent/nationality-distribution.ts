import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetNationalityDistributionResponse } from "@/types/admin/dashboard/talent";

export async function getNationalityDistribution(): Promise<GetNationalityDistributionResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.talent.nationalityDistribution,
  );
}
