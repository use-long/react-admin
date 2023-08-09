
- 获取订单详情

url:http://127.0.0.1:3000/orderdetail/getorderDetail

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|order_id|必须|number|订单详情id|




- 修改订单详情信息

url:http://127.0.0.1:3000/orderdetail/updateorderDetail


 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|order_id|必须|number|订单详情id|
|sku_id|必须|number|商品id|
|price|必须|number|原价钱|
|actual_price|必须|number|实例价格|
|num|必须|number|数量|


- 添加订单详情

url:http://127.0.0.1:3000/orderdetail/addorderDetail


 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|order_id|必须|number|订单详情id|
|sku_id|必须|number|商品id|
|price|必须|number|原价钱|
|actual_price|必须|number|实例价格|
|num|必须|number|数量|

- 删除订单详情

url:http://127.0.0.1:3000/orderdetail/delorderDetail


 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|order_id|必须|number|订单详情id|

