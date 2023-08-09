- 创建订单

url:http://127.0.0.1:3000/order/addOrder


 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|store_id|必须|number|店铺id|
|customer_id|必须|number|客户id|
|money|必须|number|总价格|
|payment_type|必须|string|支付类型|

- 修改订单

url:http://127.0.0.1:3000/order/setOrder


 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|订单id|
|store_id|必须|number|店铺id|
|customer_id|必须|number|客户id|
|money|必须|number|总价格|
|payment_type|必须|string|支付类型|

- 删除订单

url:http://127.0.0.1:3000/order/delOrder


 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|订单id|


- 获取订单

url:http://127.0.0.1:3000/order/getOrder


 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|订单id|