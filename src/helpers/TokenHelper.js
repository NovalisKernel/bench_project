function setAuthToken(access_token, refresh_token) {
  if (access_token && refresh_token) {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }
}

function getAuthToken() {
  const token = localStorage.getItem("access_token");
  if (token) return token;
  else return false;
}

function clearAuthToken() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

export const tokenHelper = {
  setAuthToken,
  getAuthToken,
  clearAuthToken
};
