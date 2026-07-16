import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetDraftProfilePhotosResponse } from "@/types/admin/dashboard/profile-photo";

export async function getDraftProfilePhotos(): Promise<GetDraftProfilePhotosResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.profilePhoto.draftProfilePhotos,
  );
}
