var articles = JSON.parse(localStorage.getItem('news')) || [];

function getArticles() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(articles.reverse()), 200);
  });
};

function addArticle({id, title, author, tags, publishDate, shortDescription, fullDescription}) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const article = {
        id,
        title,
        author,
        tags,
        publishDate,
        shortDescription,
        fullDescription,
      };
      articles.push(article);
      localStorage.setItem(
        'news',
        JSON.stringify(articles)
      );
      resolve(articles.reverse());
    }, 400);
  });
};

function editArticle(dataInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let article = articles.find((item) => item.id == dataInfo.id);
      article = Object.assign(article, dataInfo);
      localStorage.setItem(
        'news',
        JSON.stringify(articles)
      );
      resolve(articles.reverse());
    }, 400);
  });
};

function deleteArticle(id) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const article = articles.find((item) => item.id == id);
      const index = articles.indexOf(article);
      articles.splice(index, 1);
      localStorage.setItem(
        'news',
        JSON.stringify(articles)
      );
      resolve(articles.reverse());
    }, 400);
  });
}

const newId = (function getNewId() {
  let id = localStorage.getItem('lastID') || 0;
  return function() {
    id++;
    localStorage.setItem('lastID', id);
    return id;
  };
})();

export { getArticles, newId, addArticle, editArticle, deleteArticle };
