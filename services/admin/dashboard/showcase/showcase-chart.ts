import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetShowcaseChartResponse } from "@/types/admin/dashboard/showcase";

export async function getShowcaseChart(
  period: "week" | "month" | "year",
): Promise<GetShowcaseChartResponse> {
  const params = new URLSearchParams({
    period,
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.showcase.showcaseChart}?${params.toString()}`,
  );
}
