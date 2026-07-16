export interface RegisteredTalents {
  total: number;
}

export interface GetRegisteredTalentsResponse {
  data: RegisteredTalents;

  message: string;

  success: boolean;
}

export interface CompletedProfiles {
  total: number;
}

export interface GetCompletedProfilesResponse {
  data: CompletedProfiles;

  message: string;

  success: boolean;
}

export interface RegistrationStatistics {
  today: number;

  this_week: number;

  this_month: number;

  this_year: number;
}

export interface GetRegistrationStatisticsResponse {
  data: RegistrationStatistics;

  message: string;

  success: boolean;
}

export interface RegistrationChartItem {
  date: string;

  total: number;
}

export interface GetRegistrationChartResponse {
  data: RegistrationChartItem[];

  message: string;

  success: boolean;
}

export interface UnverifiedTalents {
  total: number;
}

export interface GetUnverifiedTalentsResponse {
  data: UnverifiedTalents;

  message: string;

  success: boolean;
}

export interface GenderDistribution {
  gender: string;

  total: number;
}

export interface GetGenderDistributionResponse {
  data: GenderDistribution[];

  message: string;

  success: boolean;
}

export interface NationalityDistribution {
  nationality: string;

  total: number;
}

export interface GetNationalityDistributionResponse {
  data: NationalityDistribution[];

  message: string;

  success: boolean;
}

export interface CountryDistribution {
  country: string;

  total: number;
}

export interface GetCountryDistributionResponse {
  data: CountryDistribution[];

  message: string;

  success: boolean;
}

export interface CityDistribution {
  city: string;

  total: number;
}

export interface GetCityDistributionResponse {
  data: CityDistribution[];

  message: string;

  success: boolean;
}

export interface AgeDistribution {
  age_group: string;

  total: number;
}

export interface GetAgeDistributionResponse {
  data: AgeDistribution[];

  message: string;

  success: boolean;
}
