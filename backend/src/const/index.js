module.exports = {
  API_PATH: "/api/v1/",
  DURATION_TYPES: {
    WEEKLY: "WEEKLY",
    MONTHLY: "MONTHLY"
  },
  GMAIL: {
    CLIENT_ID:
      "923614681244-6dg6g672bfk6jgn08gb85fs6idgf1131.apps.googleusercontent.com",
    AUTH_URI: "https://accounts.google.com/o/oauth2/auth",
    REDIRECT_URI: "https://348343b1.ngrok.io/api/v1/getLoginURL",
    RESPONSE_TYPE: "code",
    SCOPE: "openid%20email"
  }
};
