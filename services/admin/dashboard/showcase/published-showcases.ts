import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetPublishedShowcasesResponse } from "@/types/admin/dashboard/showcase";

export async function getPublishedShowcases(): Promise<GetPublishedShowcasesResponse> {
  return fetchWithAuth(
    API_ENDPOINTS.admin.dashboard.showcase.publishedShowcases,
  );
}
