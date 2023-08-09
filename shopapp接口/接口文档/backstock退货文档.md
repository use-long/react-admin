
- 查询退货商品
url:http://127.0.0.1:3000/backstock/getBackstock

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|user_id|必须|number|用户id|

- 修改退货商品
url:http://127.0.0.1:3000/backstock/setBackstock

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|id|必须|number|退货商品id|
|status|必须|number|状态1 2 3|
|reason|必须|string|退货原因|
|money|必须|number|退款金额|

- 删除退货商品
url:http://127.0.0.1:3000/backstock/delBackstock

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|id|必须|number|退货商品id|


- 删除退货商品
url:http://127.0.0.1:3000/backstock/addBackstock

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|user_id|必须|number|用户id|
|order_id|必须|number|订单id|
|reason|必须|string|退货原因|
|money|必须|number|退款金额|

