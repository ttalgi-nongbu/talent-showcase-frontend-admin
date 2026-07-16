import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetProfilePhotoChartResponse } from "@/types/admin/dashboard/profile-photo";

export async function getProfilePhotoChart(): Promise<GetProfilePhotoChartResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.profilePhoto.profilePhotoChart,
  );
}
