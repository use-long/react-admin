

### spu商品列表

##### 获取商品列表

- url:http://127.0.0.1:3000/shop/getShoplist

 协议:http

 请求方式:post

| 参数名称 | 是否必须 | 类型   | 描述                 |
| -------- | -------- | ------ | -------------------- |
| page     | 是       | number | 页数                 |
| size     | 否       | number | 一页数量（默认30条） |



##### 获取商品

- url:http://127.0.0.1:3000/shop/getSpu

 协议:http

 请求方式:post

| 参数名称 | 是否必须 | 类型   | 描述 |
| -------- | -------- | ------ | ---- |
| id       | 是       | number | 标识 |





##### 添加商品

- url:http://127.0.0.1:3000/shop/addSpu

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|brand_id|是|number|品牌id|
|title|是|String|标题|
|img|是|String|产品图片|
|price|是|number|产品价格|
|special_price|是|number|商品优惠多少价格|
|is_special|是|number|是优惠商品还是秒杀商品1.优惠商品2.秒杀商品|
|store_id|是|number|店铺id|
|category_id|是|number|分类id|
|spg_id|是|number|品类id|



##### 删除商品

- url:http://127.0.0.1:3000/shop/delSpu

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|number|标识|



##### 更新商品

- url:http://127.0.0.1:3000/shop/updataSpu

 协议:http

 请求方式:post

| 参数名称      | 是否必须 | 类型   | 描述                                       |
| ------------- | -------- | ------ | ------------------------------------------ |
| id            | 是       | number | 标识                                       |
| title         | 是       | String | 标题                                       |
| img           | 是       | String | 产品图片                                   |
| price         | 是       | number | 产品价格                                   |
| special_price | 是       | number | 商品优惠多少价格                           |
| is_special    | 是       | number | 是优惠商品还是秒杀商品1.优惠商品2.秒杀商品 |

##### 获取搜索

url:http://127.0.0.1:3000/shop/getSearch

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|keyword|是|string|商品title作为查询条件|

##### 获取分类列表

url:http://127.0.0.1:3000/shop/getClassify

 协议:http

 请求方式:post

| 参数名称    | 是否必须 | 类型   | 描述   |
| ----------- | -------- | ------ | ------ |
| category_id | 是       | number | 分类id |

