import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetEngagementSummaryResponse } from "@/types/admin/dashboard/engagement";

export async function getEngagementSummary(): Promise<GetEngagementSummaryResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.engagement.engagementSummary,
  );
}
