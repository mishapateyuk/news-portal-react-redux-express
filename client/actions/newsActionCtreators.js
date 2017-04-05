import {addArticle, getArticles, deleteArticle, editArticle} from '../models/articleModel';
import {newsAreChangedType, loadNewsType, applyFiltersType} from '../constants/constants';
import {jsonAJAX} from '../services/AJAX.js';

const addNews = (dataInfo) =>
  (dispatch) => {
    dispatch({type: newsAreChangedType});
    jsonAJAX('post', '/api/addNews', JSON.stringify(dataInfo))
      .then(() => dispatch(loadNews()));
};

const loadNews = () => (dispatch) => {
  return jsonAJAX('get', '/api/getNews')
    .then(
        (response) => dispatch({
          type: loadNewsType,
          news: JSON.parse(response),
        })
      );
};

const editNews = (dataInfo) =>
  (dispatch) => {
    dispatch({type: newsAreChangedType});
    editArticle(dataInfo)
      .then(() => dispatch(loadNews()));
};

const removeNews = (id) =>
  (dispatch) => {
    dispatch({type: newsAreChangedType});
    deleteArticle(id)
      .then(() => dispatch(loadNews()));
};

const filterNews = (author, tags, date) => ({
  type: applyFiltersType,
  filtersSettings: {
    author,
    date,
    tags,
  },
});

export {addNews, editNews, removeNews, loadNews, filterNews};
