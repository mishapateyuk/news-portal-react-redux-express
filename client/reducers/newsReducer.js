import {} from '../constants/constants';

const newsReducer = (state = {all: null, filtersSettings: null,}, action) => {
  switch (action.type) {
    case 'NEWS_ARE_CHANGED' :
      return Object.assign({}, state, {all: null});
    case 'LOAD_NEWS' :
      return Object.assign({}, state, {all: action.news});
    case 'APPLY_FILTERS' :
      return Object.assign({}, state, {filtersSettings: action.filtersSettings,});
    default :
      return state;
  };
};

export default newsReducer;
