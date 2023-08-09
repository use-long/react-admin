
- 用户注册

url:http://127.0.0.1:3000/user/register

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|user|必须|string|账号|
|psd|必须|string|密码|
|role|否|string|权限|

- 用户登录

url:http://127.0.0.1:3000/user/login

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|user|必须|string|账号|
|psd|必须|string|密码|
|role|否|string|权限|


- 删除用户

url:http://127.0.0.1:3000/user/deleteUser

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|user|必须|string|账号|

- 查询用户列表

url:http://127.0.0.1:3000/user/getUserList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|无|无|none|不需要参数|


- 更新个人信息权限

url:http://127.0.0.1:3000/user/changemsg

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|user|必须|string|账号|
|role|必须|string|权限|


- 更改密码

url:http://127.0.0.1:3000/user/changepsd

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|user|必须|string|账号|
|newpsd|必须|string|权限|

