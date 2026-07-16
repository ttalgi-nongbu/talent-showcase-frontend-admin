import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetShowcaseLanguageDistributionResponse } from "@/types/admin/dashboard/showcase";

export async function getShowcaseLanguageDistribution(): Promise<GetShowcaseLanguageDistributionResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.showcase.showcaseLanguageDistribution,
  );
}
