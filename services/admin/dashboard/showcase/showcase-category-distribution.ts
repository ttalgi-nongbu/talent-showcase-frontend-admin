import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetShowcaseCategoryDistributionResponse } from "@/types/admin/dashboard/showcase";

export async function getShowcaseCategoryDistribution(): Promise<GetShowcaseCategoryDistributionResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.showcase.showcaseCategoryDistribution,
  );
}
