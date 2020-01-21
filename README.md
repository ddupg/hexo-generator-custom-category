# hexo-custom-category

Custom category generator for [Hexo].

## Installation

``` bash
$ npm install hexo-generator-category --save
```

## Options

``` yaml
custom_category_generator:
  per_page: 10
  order_by: -date
  layout: [my_layout]
  custom_config:
    English: 
      per_page: 0
      order_by: +date
      layout: category_english
    Chinese:
      per_page: 5
      order_by: -date
      layout: [category_chinese, category, index]
```

- **per_page**: Default posts displayed per page. (0 = disable pagination)
- **order_by**: Default posts order. (Order by date descending by default)
- **custom_config**: Custom configuration per category. (The children items are the names of categories)
  - per_page: Posts displayed per page of the category.
  - order_by: Posts order of the category.
  - layout: Layout of the category. Could be one or more.

## License

MIT

[Hexo]: http://hexo.io/
