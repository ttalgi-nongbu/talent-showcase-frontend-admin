import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetRegistrationChartResponse } from "@/types/admin/dashboard/talent";

export async function getRegistrationChart(
  period: "week" | "month" | "year",
): Promise<GetRegistrationChartResponse> {
  const params = new URLSearchParams({
    period,
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.talent.registrationChart}?${params.toString()}`,
  );
}
