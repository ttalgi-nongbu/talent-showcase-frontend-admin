import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetRegistrationChartResponse } from "@/types/admin/dashboard/talent";

export async function getRegistrationChart(): Promise<GetRegistrationChartResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.registrationChart);
}
