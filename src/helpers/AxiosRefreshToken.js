import axios from "axios";

const customAxios = axios.create();
customAxios.defaults.baseURL = process.env.REACT_APP_API;
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
        url: process.env.REACT_APP_API,
        data: {
          token: resetToken
        }
      });
      if (!response.data) {
        return Promise.reject(error);
      }
      const newRefreshToken = response.data.refresh_token;
      const newAccessToken = response.data.access_token;
      localStorage.setItem("refresh_token", newRefreshToken);
      localStorage.setItem("access_token", newAccessToken);
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
