let baseUrl;
const production = false;

if (production) {
  baseUrl = "https://redditto-api.herokuapp.com";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
