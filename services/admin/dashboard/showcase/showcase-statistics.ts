import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetShowcaseStatisticsResponse } from "@/types/admin/dashboard/showcase";

export async function getShowcaseStatistics(): Promise<GetShowcaseStatisticsResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.showcase.showcaseStatistics,
  );
}
