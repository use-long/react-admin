
- 查询地址列表

url:http://127.0.0.1:3000/address/getAddressList

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|用户名|


- 查询地址

url:http://127.0.0.1:3000/address/getAddress

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|用户id|
|name|必须|string|用户名|


- 添加地址

url:http://127.0.0.1:3000/address/addAddress

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|name|必须|string|用户名|
|tel|必须|string|手机号|
|address|必须|string|地址|

- 删除地址

url:http://127.0.0.1:3000/address/delAddress

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必填|number|用户id|
|name|必填|string|用户名|


- 更新个人信息权限

url:http://127.0.0.1:3000/address/updateAddress

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|用户id|
|name|必须|string|用户名|
|tel|必须|string|手机号|
|address|必须|string|地址|


- 获取默认地址

url:http://127.0.0.1:3000/address/getDefaultAddress

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|name|必须|string|用户名|


- 修改默认地址

url:http://127.0.0.1:3000/address/setDefaultAddress

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|必须|number|用户id|
|name|必须|string|用户名|