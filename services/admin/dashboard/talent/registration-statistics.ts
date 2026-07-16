import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetRegistrationStatisticsResponse } from "@/types/admin/dashboard/talent";

export async function getRegistrationStatistics(): Promise<GetRegistrationStatisticsResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.talent.registrationStatistics,
  );
}
