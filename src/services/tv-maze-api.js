import axios from "axios";

const url = "http://api.tvmaze.com";
// Search Query
function getSearchResult(query) {
  return axios.get(`${url}/search/shows?q=${query}`);
}
// Home Page
function getAllShows() {
  return axios.get(`${url}/shows`);
}

// Single Show Page
function getShowDetailsById(id) {
  return axios.get(`${url}/shows/${id}?embed=cast`);
}

function showDetailsByName(name) {
  return axios.get(`${url}/singlesearch/shows?q=${name}`);
}
export { getSearchResult, getAllShows, getShowDetailsById, showDetailsByName };
