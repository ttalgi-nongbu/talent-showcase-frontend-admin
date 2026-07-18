import { API_URL } from "./api";

export const API_ENDPOINTS = {
  //
  // AUTH
  //
  auth: {
    login: `${API_URL}/auth/login`,
    refreshToken: `${API_URL}/auth/refresh-token`,
    logout: `${API_URL}/auth/logout`,
  },

  //
  // USER
  //
  user: {
    account: `${API_URL}/user`,
  },

  //
  // ADMIN
  //
  admin: {
    //
    // DASHBOARD
    //
    dashboard: {
      //
      // TALENT
      //
      talent: {
        registeredTalents: `${API_URL}/admin/dashboard/registered-talents`,
        completedProfiles: `${API_URL}/admin/dashboard/completed-profiles`,
        registrationStatistics: `${API_URL}/admin/dashboard/registration-statistics`,
        registrationChart: `${API_URL}/admin/dashboard/registration-chart`,
        unverifiedTalents: `${API_URL}/admin/dashboard/unverified-talents`,
        genderDistribution: `${API_URL}/admin/dashboard/gender-distribution`,
        nationalityDistribution: `${API_URL}/admin/dashboard/nationality-distribution`,
        countryDistribution: `${API_URL}/admin/dashboard/country-distribution`,
        cityDistribution: `${API_URL}/admin/dashboard/city-distribution`,
        ageDistribution: `${API_URL}/admin/dashboard/age-distribution`,
      },

      //
      // SHOWCASE
      //
      showcase: {
        draftShowcases: `${API_URL}/admin/dashboard/draft-showcases`,
        publishedShowcases: `${API_URL}/admin/dashboard/published-showcases`,
        showcaseStatistics: `${API_URL}/admin/dashboard/showcase-statistics`,
        showcaseChart: `${API_URL}/admin/dashboard/showcase-chart`,
        showcaseCategoryDistribution: `${API_URL}/admin/dashboard/showcase-category-distribution`,
        showcaseLanguageDistribution: `${API_URL}/admin/dashboard/showcase-language-distribution`,
      },

      //
      // PROFILE PHOTO
      //
      profilePhoto: {
        draftProfilePhotos: `${API_URL}/admin/dashboard/draft-profile-photos`,
        publishedProfilePhotos: `${API_URL}/admin/dashboard/published-profile-photos`,
        profilePhotoStatistics: `${API_URL}/admin/dashboard/profile-photo-statistics`,
        profilePhotoChart: `${API_URL}/admin/dashboard/profile-photo-chart`,
      },

      //
      // ENGAGEMENT
      //
      engagement: {
        engagementSummary: `${API_URL}/admin/dashboard/engagement-summary`,
        engagementChart: `${API_URL}/admin/dashboard/engagement-chart`,
      },
    },

    //
    // TALENT
    //
    talent: {
      root: `${API_URL}/admin/talents`,

      detail: (id: number) => `${API_URL}/admin/talents/${id}`,

      ban: (id: number) => `${API_URL}/admin/talents/${id}/ban`,

      activate: (id: number) => `${API_URL}/admin/talents/${id}/activate`,
    },
  },
};
