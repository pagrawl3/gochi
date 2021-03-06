import APIRequest from './APIRequest';
const BASE_URL = 'https://gochi.soch.io/api/v1';
// const BASE_URL = 'https://705e248b.ngrok.io/api/v1';
// const BASE_URL = 'http://localhost:9000/api/v1';

class API {
  constructor() {
    this.request = new APIRequest();
  }

  getLoginURL = () => this.request.get(`${BASE_URL}/login/url`);
  login = code => this.request.post(`${BASE_URL}/login/callback`, { code });
  authenticate = token => this.request.post(`${BASE_URL}/login/authenticate`, { token });

  // GET CALLS
  getDashboard = dashboardId => this.request.get(`${BASE_URL}/dashboards/${dashboardId}`);
  getEmails = dashboardId => this.request.get(`${BASE_URL}/dashboards/${dashboardId}/emails`);
  getEmail = emailId => this.request.get(`${BASE_URL}/emails/${emailId}`);
  getReplies = threadId => this.request.get(`${BASE_URL}/emails/${threadId}/replies`);

  // UPDATE CALLS
  updateEmailCategory = (emailId, categoryId) =>
    this.request.post(`${BASE_URL}/emails/${emailId}/category`, { categoryId: categoryId });
  updateEmailStatus = (emailId, status) =>
    this.request.post(`${BASE_URL}/emails/${emailId}/resolution`, { resolved: status });
  sync = dashboardId => this.request.post(`${BASE_URL}/dashboards/${dashboardId}/sync`);

  // CLASS SETTERS
  _setToken = token => this.request.setToken(token);
}

export default new API();
