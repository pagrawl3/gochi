import APIRequest from './APIRequest';
// const BASE_URL = 'https://gochi.soch.io/api/v1';
const BASE_URL = 'http://localhost:9000/api/v1';

class API {
  constructor() {
    this.request = new APIRequest();
  }

  login(username, password) {}

  // GET CALLS
  getDashboard = dashboardId => this.request.get(`${BASE_URL}/dashboards/${dashboardId}`);
  getEmails = dashboardId => this.request.get(`${BASE_URL}/dashboards/${dashboardId}/emails`);
  getEmail = emailId => this.request.get(`${BASE_URL}/emails/${emailId}`);

  // UPDATE CALLS
  updateEmailCategory = emailId => this.request.put(`${BASE_URL}/emails/${emailId}/category`);
  updateEmailStatus = emailId => this.request.put(`${BASE_URL}/emails/${emailId}/status`);
  sync = dashboardId => this.request.post(`${BASE_URL}/dashboards/${dashboardId}/sync`);

  // CLASS SETTERS
  _setToken = token => this.APIRequest.setToken(token);
}

export default new API();
