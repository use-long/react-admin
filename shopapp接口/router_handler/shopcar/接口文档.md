
- 添加购物车商品

url:http://127.0.0.1:3000/shopcar/Addshopcar

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id|必须|string|用户id|
|sku_id|必须|string|商品id|
|num|否|string|商品数量|
|params|否|string|商品类型|


- 删除购物车商品

url:http://127.0.0.1:3000/shopcar/DeleteShopCar

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id|必须|string|用户id|
|sku_id|必须|string|商品id|




- 获取购物车列表

url:http://127.0.0.1:3000/shopcar/getshopCarList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id|必须|string|用户id|





- 更改商品数量

url:http://127.0.0.1:3000/shopcar/changeCount

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id|必须|string|用户id|
|sku_id|必须|string|商品id|
|type|必须|string|add or reduce|
|count|必须|number|增加或减少的数量|



