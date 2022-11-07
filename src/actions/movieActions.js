import axios from 'axios'
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,

  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,

  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_FAIL,

  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_CREATE_FAIL,

  MOVIE_UPDATE_REQUEST,
  MOVIE_UPDATE_SUCCESS,
  MOVIE_UPDATE_FAIL,

  MOVIE_CREATE_REVIEW_REQUEST,
  MOVIE_CREATE_REVIEW_SUCCESS,
  MOVIE_CREATE_REVIEW_FAIL,

  MOVIE_TOP_REQUEST,
  MOVIE_TOP_SUCCESS,
  MOVIE_TOP_FAIL,
} from '../constants/movieConstants'
import { logout } from './userActions'

export const listMovies = () => async (
  dispatch
) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST })

    const { data } = await axios.get(
      `http://localhost:8080/api/movies/showing`
    )
    console.log(data);

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/movies/${id}`)

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteMovie = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MOVIE_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/movies/${id}`, config)

    dispatch({
      type: MOVIE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createMovie = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MOVIE_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/movies`, {}, config)

    dispatch({
      type: MOVIE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: MOVIE_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateMovie = (movie) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MOVIE_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/movies/${movie._id}`,
      movie,
      config
    )

    dispatch({
      type: MOVIE_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: MOVIE_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const createMovieReview = (movieId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: MOVIE_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/movies/${movieId}/reviews`, review, config)

    dispatch({
      type: MOVIE_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: MOVIE_CREATE_REVIEW_FAIL,
      payload: message,
    })
  }
}

export const listTopMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_TOP_REQUEST })

    const { data } = await axios.get(`/api/movies/top`)

    dispatch({
      type: MOVIE_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
