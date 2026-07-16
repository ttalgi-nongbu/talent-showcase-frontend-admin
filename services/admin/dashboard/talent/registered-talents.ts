import { API_ENDPOINTS } from "@/lib/endpoints";

import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { GetRegisteredTalentsResponse } from "@/types/admin/dashboard/talent";

export async function getRegisteredTalents(): Promise<GetRegisteredTalentsResponse> {
  return fetchWithAuth(API_ENDPOINTS.admin.dashboard.talent.registeredTalents);
}
