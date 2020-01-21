/* global hexo */

'use strict';

hexo.config.custom_category_generator = Object.assign({
  per_page: (hexo.config.custom_category_generator && hexo.config.custom_category_generator.per_page)
   || (hexo.config.category_generator && hexo.config.category_generator.per_page )
   || hexo.config.per_page || 10,
  order_by: (hexo.config.custom_category_generator && hexo.config.custom_category_generator.order_by)
  || (hexo.config.category_generator && hexo.config.category_generator.order_by )
  || hexo.config.order_by || '-date',
}, hexo.config.custom_category_generator);

hexo.extend.generator.register('category', require('./lib/generator'));
