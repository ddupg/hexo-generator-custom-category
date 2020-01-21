'use strict';

const pagination = require('hexo-pagination');
const util = require('util');

module.exports = function(locals) {
  const config = this.config;
  const paginationDir = config.pagination_dir || 'page';

  const defaultConfig = {
    order_by: config.custom_category_generator.order_by,
    per_page: config.custom_category_generator.per_page,
    layout: config.custom_category_generator.layout
  }
  
  const customConfig = config.custom_category_generator.custom_config || {};

  function _getOrderBy(category) {
    return customConfig && customConfig[category] && customConfig[category]['order_by'] || defaultConfig['order_by'];
  }

  function _getPerPage(category) {
    return customConfig && customConfig[category] && customConfig[category]['per_page'] || defaultConfig['per_page'];
  }
  
  function _getLayout(category) {
    var layouts = customConfig && customConfig[category] && customConfig[category]['layout'] || defaultConfig['layout'];
    layouts = util.isArray(layouts) ? layouts : [layouts];
    return layouts.concat(['category', 'index']);
  }

  console.log(defaultConfig)
  console.log(customConfig)

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result;

    const posts = category.posts.sort(_getOrderBy(category.name));
    const data = pagination(category.path, posts, {
      perPage: _getPerPage(category.name),
      layout: _getLayout(category.name),
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []);
};
