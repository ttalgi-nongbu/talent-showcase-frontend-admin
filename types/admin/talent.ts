//
// TALENT
//
export interface Talent {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  status: string;
  registration_at: string;
}

//
// PAGINATION
//
export interface Pagination {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
}

//
// GET TALENTS
//
export interface GetTalentsResponse {
  talents: Talent[];
  pagination: Pagination;
}

//
// TALENT PROFILE
//
export interface TalentProfile {
  full_name: string;
  gender: string;
  nationality: string;
  country: string;
  city: string;
}

//
// TALENT STATISTICS
//
export interface TalentStatistics {
  showcases: number;
  profile_photos: number;
  followers: number;
  following: number;
}

//
// GET TALENT
//
export interface GetTalentResponse {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  status: string;
  registration_at: string;

  profile: TalentProfile;
  statistics: TalentStatistics;
}

//
// UPDATE TALENT STATUS
//
export interface UpdateTalentStatusRequest {
  status: string;
}

//
// GET TALENTS PARAMS
//
export interface GetTalentsParams {
  page?: string;
  limit?: string;
  search?: string;
  status?: string;
}
