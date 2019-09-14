module.exports = {
  API_PATH: '/api/v1/',
  DURATION_TYPES: {
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY'
  },
  GMAIL: {
    CLIENT_ID: '923614681244-6dg6g672bfk6jgn08gb85fs6idgf1131.apps.googleusercontent.com',
    AUTH_URI: 'https://accounts.google.com/o/oauth2/auth',
    REDIRECT_URI: 'https://gochi.netlify.com/callback',
    RESPONSE_TYPE: 'code',
    SCOPE: 'openid%20email%20https://mail.google.com/',
    TOKEN_URI: 'https://www.googleapis.com/oauth2/v4/token',
    CLIENT_SECRET: 'SIzxuWw7aJ-5Qq0YV2luI_Op',
    GRANT_TYPE: 'authorization_code',
    ACCESS_TYPE: 'offline'
  }
};
