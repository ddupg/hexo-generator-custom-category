/* global hexo */

'use strict';

hexo.config.custom_category_generator = Object.assign({
  per_page: hexo.config.per_page || 10,
  order_by: hexo.config.order_by || '-date',
  layout: ['category', 'index']
}, hexo.config.custom_category_generator);

hexo.extend.generator.register('category', require('./lib/generator'));
