import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetPublishedProfilePhotosResponse } from "@/types/admin/dashboard/profile-photo";

export async function getPublishedProfilePhotos(): Promise<GetPublishedProfilePhotosResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.profilePhoto.publishedProfilePhotos,
  );
}
