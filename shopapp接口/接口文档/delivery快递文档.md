
---------------delivery快递列表---------------------------------

- 获取快递表总的分类
url:http://127.0.0.1:3000/delivery/getDeliveryList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|


- 添加快递信息
url:http://127.0.0.1:3000/delivery/addDelivery

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|postid|是|string|快递单号|
|ecp|是|string|快递公司|
|address|是|string|收货地址|
|create_time|是|string|添加时间|
|order_id|是|number|订单id|


- 更新快递信息(若只更新是否收货，推荐用/updateDeliveryState)
url:http://127.0.0.1:3000/delivery/updateDelivery

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|string|数据库表中该快递信息对应的id|
|postid|是|string|快递单号|
|ecp|是|string|快递公司|
|address|是|string|收货地址|
|is_delete|是|number|快递是否收货(0未收货/1收货)|

- 更新快递状态
url:http://127.0.0.1:3000/delivery/updateDeliveryState

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|string|数据库表中该快递信息对应的id|
|is_delete|是|number|快递是否收货(0未收货/1收货)|


- 删除快递信息
url:http://127.0.0.1:3000/delivery/delDelivery

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|string|数据库表中该快递信息对应的id|