import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetProfilePhotoChartResponse } from "@/types/admin/dashboard/profile-photo";

export async function getProfilePhotoChart(
  period: "week" | "month" | "year",
): Promise<GetProfilePhotoChartResponse> {
  const params = new URLSearchParams({
    period,
  });

  return fetchWithAuth(
    `${API_ENDPOINTS.admin.dashboard.profilePhoto.profilePhotoChart}?${params.toString()}`,
  );
}
