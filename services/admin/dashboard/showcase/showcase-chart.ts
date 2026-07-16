import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetShowcaseChartResponse } from "@/types/admin/dashboard/showcase";

export async function getShowcaseChart(): Promise<GetShowcaseChartResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.showcase.showcaseChart);
}
