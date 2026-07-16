import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetProfilePhotoStatisticsResponse } from "@/types/admin/dashboard/profile-photo";

export async function getProfilePhotoStatistics(): Promise<GetProfilePhotoStatisticsResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.profilePhoto.profilePhotoStatistics,
  );
}
