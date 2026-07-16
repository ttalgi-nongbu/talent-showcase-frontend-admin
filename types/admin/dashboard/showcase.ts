export interface DraftShowcases {
  total: number;
}

export interface GetDraftShowcasesResponse {
  data: DraftShowcases;

  message: string;

  success: boolean;
}

export interface PublishedShowcases {
  total: number;
}

export interface GetPublishedShowcasesResponse {
  data: PublishedShowcases;

  message: string;

  success: boolean;
}

export interface ShowcaseStatistics {
  today: number;

  this_week: number;

  this_month: number;

  this_year: number;
}

export interface GetShowcaseStatisticsResponse {
  data: ShowcaseStatistics;

  message: string;

  success: boolean;
}

export interface ShowcaseChartItem {
  date: string;

  total: number;
}

export interface GetShowcaseChartResponse {
  data: ShowcaseChartItem[];

  message: string;

  success: boolean;
}

export interface ShowcaseCategoryDistribution {
  category: string;

  total: number;
}

export interface GetShowcaseCategoryDistributionResponse {
  data: ShowcaseCategoryDistribution[];

  message: string;

  success: boolean;
}

export interface ShowcaseLanguageDistribution {
  language: string;

  total: number;
}

export interface GetShowcaseLanguageDistributionResponse {
  data: ShowcaseLanguageDistribution[];

  message: string;

  success: boolean;
}
