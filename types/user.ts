export interface Account {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  has_profile: boolean;
}

export interface GetAccountResponse {
  data: Account;
  message: string;
  success: boolean;
}
