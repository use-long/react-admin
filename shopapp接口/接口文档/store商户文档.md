
- 添加商户

url:http://127.0.0.1:3000/store/addStore

协议:http

请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|name|必须|string|店铺名字|
|address|必须|string|地址|
|password|否|string|密码|
|avatar|否|string|店铺logo|
|tel|否|string|联系电话|
|region|否|string|商家所在地区|
|real_name|否|string|商家真实名字|
|desc|否|string|店铺描述|

- 获取商户列表

url:http://127.0.0.1:3000/store/getStoreList

协议:http

请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|


- 删除用户

url:http://127.0.0.1:3000/store/delStore

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|string|数据库中该用户的id值|

- 更新用户列表

url:http://127.0.0.1:3000/store/updateStore

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|string|数据库中该用户的id值|
|name|否|string|店铺名字|
|address|否|string|地址|
|password|否|string|密码|
|avatar|否|string|店铺logo|
|tel|否|string|联系电话|
|region|否|string|商家所在地区|
|real_name|否|string|商家真实名字|
|desc|否|string|店铺描述|