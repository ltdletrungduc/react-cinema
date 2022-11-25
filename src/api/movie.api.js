import http from "../utils/http";

const baseURL = "Movie";
export const movieAPI = {
  getMovies() {
    return http.get(baseURL + "/getMovie");
  },
};

export default movieAPI;
