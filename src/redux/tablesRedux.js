import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_STATUS = createActionName('FETCH_STATUS');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const changeTableStatus = (status, id) => ({
  payload: { status: status, id: id },
  type: FETCH_STATUS,
});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const changeTableStatusInAPI = (status, id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.patch(`${api.url}/api/${api.tables}/${id}`)
      .then((res) => {
        dispatch(changeTableStatus(status, id));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const initialTableState = {
  data: [],
  loading: {
    active: false,
    error: false,
  },
};

export default function reducer(statePart = initialTableState, action) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_STATUS: {
      statePart.data.map((element) => {
        if (element.id === action.payload.id) {
          element.status = action.payload.status;
        }
        return element;
      });

      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    default:
      return statePart;
  }
}
