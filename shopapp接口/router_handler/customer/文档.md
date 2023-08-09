
- 注册客户

url:http://127.0.0.1:3000/customer/register

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|username|必须|string|账号|
|password|必须|string|密码|
|email|必须|string|邮箱|
|tel|否|int|手机号|
|nickname|必须|string|昵称|



- 登录客户

url:http://127.0.0.1:3000/customer/login

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|username|必须|string|账号|
|password|必须|string|密码|


- 删除客户

url:http://127.0.0.1:3000/customer/deleteUser

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|username|必须|string|账号|

- 查询客户列表

url:http://127.0.0.1:3000/customer/getUserList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|无|无|none|不需要参数|


- 更新客户信息

url:http://127.0.0.1:3000/customer/changepsd

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|username|必须|string|账号|
|newpsd|否|string|新密码|
|neweamil|否|string|新邮箱|
|tel|否|int|新手机号|
|newnickname|否|string|新昵称|



