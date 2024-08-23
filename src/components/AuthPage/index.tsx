import React, { useEffect, useState } from "react";

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
}

const Auth: React.FC = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setAuthCode(code);
      fetchAccessToken(code);
    } else {
      const storedToken = localStorage.getItem("anilist_access_token");
      if (storedToken) {
        setAccessToken(storedToken);
      }
    }
  }, []);

  const fetchAccessToken = async (code: string) => {
    const data = {
      grant_type: "authorization_code",
      client_id: "20567",
      client_secret: "9PhSsU6t2a7t2CwdYRYsixHkn14x1BTLyRRQwRSs",
      redirect_uri: "http://localhost:5173/auth",
      code: code,
    };

    try {
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://anilist.co/api/v2/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch access token");
      }

      const tokenData: TokenResponse = await response.json();
      setAccessToken(tokenData.access_token);
      localStorage.setItem("anilist_access_token", tokenData.access_token);
    } catch (err) {
      console.error("Error fetching access token:", err);
      setError("Error fetching access token");
    }
  };

  return (
    <div>
      <h1>AniList OAuth2 Authentication</h1>
      {authCode && <p>Authorization Code: {authCode}</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Auth;
