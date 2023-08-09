
---------------category分类列表---------------------------------


- 获取总的分类列表

url:http://127.0.0.1:3000/category/getCategoryList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|


- 获取一级分类列表

url:http://127.0.0.1:3000/category/getParentName

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|


- 通过一级分类列表获取二级分类列表

url:http://127.0.0.1:3000/category/getSecondName

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|parentName|是|string|一级分类|



- 添加分类

url:http://127.0.0.1:3000/category/addCategory

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|parentName|是|string|一级分类|
|secondName|是|string|二级分类|


- 删除分类

url:http://127.0.0.1:3000/category/addCategory

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|number|数据库中该分类对应的id值|

- 更新分类

url:http://127.0.0.1:3000/category/updateCategory

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|id|是|number|数据库中该分类对应的id值|
|parentName|是|string|一级分类|
|secondName|是|string|二级分类|