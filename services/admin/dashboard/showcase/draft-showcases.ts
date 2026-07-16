import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetDraftShowcasesResponse } from "@/types/admin/dashboard/showcase";

export async function getDraftShowcases(): Promise<GetDraftShowcasesResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.showcase.draftShowcases);
}
