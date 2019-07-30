export default function setAuthHeader(axios_instance, token) {
  if (token) {
    axios_instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios_instance.defaults.headers.common["Authorization"];
  }
}
