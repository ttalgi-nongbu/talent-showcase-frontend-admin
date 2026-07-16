import { refreshToken } from "@/services/auth";

export async function fetchWithAuth(
  input: RequestInfo | URL,
  init?: RequestInit,
) {
  //
  // ambil access token
  //
  let accessToken = localStorage.getItem("access_token");

  //
  // request pertama
  //
  let response = await fetch(input, {
    ...init,

    headers: {
      ...(init?.headers || {}),

      Authorization: `Bearer ${accessToken}`,
    },
  });

  //
  // kalau token expired
  //
  if (response.status === 401) {
    try {
      //
      // panggil refresh token service
      //
      const refreshResponse = await refreshToken();

      //
      // simpan access token baru
      //
      localStorage.setItem("access_token", refreshResponse.data.access_token);

      //
      // ambil token baru
      //
      accessToken = refreshResponse.data.access_token;

      //
      // retry request
      //
      response = await fetch(input, {
        ...init,

        headers: {
          ...(init?.headers || {}),

          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch {
      //
      // refresh gagal
      //
      localStorage.removeItem("access_token");

      throw new Error("Session expired");
    }
  }

  //
  // ambil response json
  //
  const data = await response.json();

  //
  // kalau request gagal
  //
  if (!response.ok) {
    throw data;
  }

  return data;
}
