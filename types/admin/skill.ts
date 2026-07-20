//
// SKILL
//
export interface Skill {
  id: number;

  name: string;

  is_verified: boolean;
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
// GET SKILLS
//
export interface GetSkills {
  skills: Skill[];

  pagination: Pagination;
}

export interface GetSkillsResponse {
  data: GetSkills;

  message: string;

  success: boolean;
}

//
// GET SKILLS PARAMS
//
export interface GetSkillsParams {
  page?: string;

  limit?: string;

  q?: string;
}
