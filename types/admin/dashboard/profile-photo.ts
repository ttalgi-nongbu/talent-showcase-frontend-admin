export interface DraftProfilePhotos {
  total: number;
}

export interface GetDraftProfilePhotosResponse {
  data: DraftProfilePhotos;

  message: string;

  success: boolean;
}

export interface PublishedProfilePhotos {
  total: number;
}

export interface GetPublishedProfilePhotosResponse {
  data: PublishedProfilePhotos;

  message: string;

  success: boolean;
}

export interface ProfilePhotoStatistics {
  today: number;

  this_week: number;

  this_month: number;

  this_year: number;
}

export interface GetProfilePhotoStatisticsResponse {
  data: ProfilePhotoStatistics;

  message: string;

  success: boolean;
}

export interface ProfilePhotoChartItem {
  date: string;

  total: number;
}

export interface GetProfilePhotoChartResponse {
  data: ProfilePhotoChartItem[];

  message: string;

  success: boolean;
}
