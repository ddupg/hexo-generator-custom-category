'use strict';

const pagination = require('hexo-pagination');

module.exports = function(locals) {
  const config = this.config;
  const perPage = config.custom_category_generator.per_page || config.category_generator.per_page || config.per_page || 10;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.category_generator.order_by || '-date';

  const layoutMap = config.custom_category_generator.category_layout || {};

  const defaultLayout = ['category', 'archive', 'index'];

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result;

    const posts = category.posts.sort(orderBy);
    const data = pagination(category.path, posts, {
      perPage,
      layout: defaultLayout,
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []);
};
