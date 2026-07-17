export interface EngagementSummary {
  showcase_likes: number;

  showcase_comments: number;

  showcase_saves: number;

  profile_photo_likes: number;

  profile_photo_saves: number;
}

export interface GetEngagementSummaryResponse {
  data: EngagementSummary;

  message: string;

  success: boolean;
}

export interface EngagementChart {
  date: string;

  likes: number;

  comments: number;

  saves: number;
}

export interface GetEngagementChartResponse {
  data: EngagementChart[];

  message: string;

  success: boolean;
}
