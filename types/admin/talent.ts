//
// USER
//
export interface User {
  id: number;

  username: string;

  email: string;

  email_verified: boolean;

  status: "active" | "banned";

  role: string;

  registration_at: string;
}

//
// PROFILE
//
export interface Profile {
  id: number;

  full_name: string;

  gender: string;

  nationality: string;

  country: string;

  city: string;

  avatar_url: string | null;
}

//
// STATISTICS
//
export interface Statistics {
  showcases: number;

  profile_photos: number;

  followers: number;

  following: number;
}

//
// TALENT
//
export interface Talent {
  user: User;
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
export interface GetTalents {
  talents: Talent[];

  pagination: Pagination;
}

export interface GetTalentsResponse {
  data: GetTalents;

  message: string;

  success: boolean;
}

//
// GET TALENT
//
export interface GetTalent {
  user: User;

  profile: Profile | null;

  statistics: Statistics | null;
}

export interface GetTalentResponse {
  data: GetTalent;

  message: string;

  success: boolean;
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
