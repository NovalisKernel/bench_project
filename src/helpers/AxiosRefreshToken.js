import axios from "axios";

const customAxios = axios.create();
const token = localStorage.getItem("access_token");
if (token) {
  customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}
customAxios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const errorResponse = error.response;
    if (isTokenExpiredError(errorResponse)) {
      return resetTokenAndReattemptRequest(error);
    }

    return Promise.reject(error);
  }
);

function isTokenExpiredError(errorResponse) {
  if (errorResponse.data.status === 401) {
    return true;
  }
  return false;
}

let isAlreadyFetchingAccessToken = false;

let subscribers = [];

async function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorRespose } = error;
    const resetToken = localStorage.getItem("refresh_token");
    if (!resetToken) {
      return Promise.reject(error);
    }

    const retryOriginalRequest = new Promise(resolve => {
      addSubscriber(access_token => {
        errorRespose.config.headers.Authorization = "Bearer " + access_token;
        resolve(axios(errorRespose.config));
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await axios({
        method: "post",
        url: "https://morning-brushlands-61529.herokuapp.com/auth/refresh",
        data: {
          token: resetToken
        }
      });
      if (!response.data) {
        return Promise.reject(error);
      }
      const newRefreshToken = response.data.refresh_token;
      const newAccessToken = response.data.access_token;
      localStorage.setItem("refreshToken", newRefreshToken);
      localStorage.setItem("accessToken", newAccessToken);
      isAlreadyFetchingAccessToken = false;
      onAccessTokenFetched(newAccessToken);
    }
    return retryOriginalRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

function onAccessTokenFetched(access_token) {
  subscribers.forEach(callback => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

export default customAxios;
