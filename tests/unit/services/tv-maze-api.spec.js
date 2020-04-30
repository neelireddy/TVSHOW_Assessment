import axios from "axios";
import {
  getSearchResult,
  getAllShows,
  getShowDetailsById,
  showDetailsByName
} from "../../../src/services/tv-maze-api";

jest.mock("axios");

describe("Testing TV Maze API", () => {
  it("getSearchResult should call", () => {
    const searchList = [1, 2, 3];
    axios.get.mockResolvedValue(searchList);
    getSearchResult().then(result => {
      expect(result).toEqual(searchList);
    });
  });
  it("getAllShows should call", () => {
    const allShows = [1, 2, 3];
    axios.get.mockResolvedValue(allShows);
    getAllShows().then(result => {
      expect(result).toEqual(allShows);
    });
  });
  it("getShowDetailsById should call", () => {
    const currentShow = { id: 1, name: "test" };
    axios.get.mockResolvedValue(currentShow);
    getShowDetailsById().then(result => {
      expect(result).toEqual(currentShow);
    });
  });
  it("showDetailsByName should call", () => {
    const currentShow = { id: 1, name: "test" };
    axios.get.mockResolvedValue(currentShow);
    showDetailsByName().then(result => {
      expect(result).toEqual(currentShow);
    });
  });
});
