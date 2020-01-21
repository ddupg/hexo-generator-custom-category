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
  category_layout: 
    English: [category, index]
    
```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## License

MIT

[Hexo]: http://hexo.io/
