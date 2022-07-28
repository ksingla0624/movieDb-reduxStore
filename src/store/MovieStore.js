import axios from "axios";
const GET_INPUT = "MOVIE/GET_INPUT";
const API_BASE_URL = "http://www.omdbapi.com";
const GET_BY_CLICK = "MOVIE/GET_BY_CLICK";
const GET_BY_PAGENO = "MOVIE/GET_BY_PAGENO";
const GET_BY_SEARCH = "MOVIE/GET_BY_SEACRH";
const CONCATE_DATA = "MOVIE/CONCATE_DATA";
const UNDEFINE_BY_CLICK = "MOVIE/UNDEFINE_BY_CLICK";
export function getValueBySearch(input) {
  return async (dispatch) => {
    let res = await axios.get(`${API_BASE_URL}/?s=${input}&apikey=aa660442`);
    return dispatch({ type: GET_BY_SEARCH, payload: [input, res.data] });
  };
}
export function getValueByClick(input) {
  return async (dispatch) => {
    let res = await axios.get(`${API_BASE_URL}/?i=${input}&apikey=aa660442`);
    return dispatch({ type: GET_BY_CLICK, payload: res.data });
  };
}
export function concatData(input, numPage) {
  // console.log(numPage);
  return async (dispatch) => {
    let res = await axios.get(
      `${API_BASE_URL}/?s=${input}&page=${numPage}&apikey=aa660442`
    );
    return dispatch({ type: CONCATE_DATA, payload: res.data });
  };
}
export function getValueByPage(input, pageno) {
  return async (dispatch) => {
    let res = await axios.get(`${API_BASE_URL}/?s=${input}&apikey=aa660442`);
    return dispatch({
      type: GET_BY_PAGENO,
      payload: [input, res.data],
    });
  };
}

// Actions

export const getInput = (item) => {
  return {
    type: GET_INPUT,
    payload: item,
  };
};

export const define = () => {
  return {
    type: UNDEFINE_BY_CLICK,
  };
};
export default function Reducer(
  state = { items: {}, searchInput: "", metadata: {}, pageno: 1 },
  action
) {
  switch (action.type) {
    // case GET_INPUT:
    case GET_BY_SEARCH:
      console.log(action.payload);
      return {
        ...state,
        searchInput: action.payload[0],
        items: action.payload[1],
      };
    case GET_BY_CLICK:
      return {
        ...state,
        metadata: action.payload,
      };
    case CONCATE_DATA:
      return {
        ...state,
        items: {
          ...state.items,
          Search: state.items.Search.concat(action.payload.Search),
        },
      };
    case GET_BY_PAGENO:
      console.log(action.payload);
      return {
        ...state,
        searchInput: action.payload[0],
        items: action.payload[1],
        // pageno: action.payload[1],
      };
    case UNDEFINE_BY_CLICK:
      return {
        ...state,
        metadata: {},
      };
  }
}
