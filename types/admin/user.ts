//
// USER
//
export interface User {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  status: string;
  role: string;
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
// GET USERS
//
export interface GetUsersResponse {
  users: User[];
  pagination: Pagination;
}

//
// USER PROFILE
//
export interface UserProfile {
  full_name: string;
  gender: string;
  nationality: string;
  country: string;
  city: string;
}

//
// USER STATISTICS
//
export interface UserStatistics {
  showcases: number;
  profile_photos: number;
  followers: number;
  following: number;
}

//
// GET USER
//
export interface GetUserResponse {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  status: string;
  role: string;
  registration_at: string;

  profile: UserProfile | null;
  statistics: UserStatistics | null;
}

//
// UPDATE USER STATUS
//
export interface UpdateUserStatusRequest {
  status: string;
}
