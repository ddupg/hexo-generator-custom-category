/* global hexo */

'use strict';

hexo.config.custom_category_generator = Object.assign({
  per_page: hexo.config.custom_category_generator.per_page || hexo.config.category_generator.per_page || hexo.config.per_page || 10
}, hexo.config.custom_category_generator);

hexo.extend.generator.register('category', require('./lib/generator'));
