import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetEngagementChartResponse } from "@/types/admin/dashboard/engagement";

export async function getEngagementChart(
  period: "week" | "month" | "year",
): Promise<GetEngagementChartResponse> {
  const params = new URLSearchParams({
    period,
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.engagement.engagementChart}?${params.toString()}`,
  );
}
