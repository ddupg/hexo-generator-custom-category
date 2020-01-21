'use strict';

const pagination = require('hexo-pagination');
const util = require('util');

module.exports = function(locals) {
  const config = this.config;
  const perPage = config.custom_category_generator.per_page;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.custom_category_generator.order_by;

  const layoutMap = config.custom_category_generator.category_layout || {};

  const defaultLayout = ['category', 'archive', 'index'];

  function _getLayout(category) {
    var layouts = layoutMap[category] || [];
    layouts = util.isArray(layouts) ? layouts : [layouts];
    return layouts.concat(defaultLayout);
  }

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result;

    const posts = category.posts.sort(orderBy);
    const data = pagination(category.path, posts, {
      perPage,
      layout: _getLayout(category.name),
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []);
};
