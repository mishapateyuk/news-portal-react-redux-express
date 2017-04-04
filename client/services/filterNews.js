const filterByAuthor = (article, author) => {
  if (!author) {
    return true;
  }
  return article.author == author.value ? true : false;
};

const filterByDate = (article, date) => {
  const articleDate = (new Date(article.publishDate)).valueOf();
  const dateFrom = !!date.from ? new Date(date.from._d.toLocaleDateString()).valueOf() : 0;
  const dateTo = !!date.to ? new Date(date.to._d.toLocaleDateString()).valueOf() + 3 * 3600000: Infinity;
  return articleDate >= dateFrom && articleDate <= dateTo;
};

const filterByTag = (article, tags) => {
  if (!tags.length) {
    return true;
  }
  return article.tags.some((articleTag) => tags.includes(articleTag));
};

const getFilteredNews = (filtersSettings, allNews) => {
  const {author, tags, date} = filtersSettings;
  return !allNews ? null : allNews.filter(
    (article) => (
      filterByAuthor(article, author) &&
      filterByTag(article, tags) &&
      filterByDate(article, date)
    )
  );
};

export {getFilteredNews};
