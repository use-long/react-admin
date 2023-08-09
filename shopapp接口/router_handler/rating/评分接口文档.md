## 添加评分

#### 请求URL

· `/rating/addrating`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|sku_id |  是
|rating   |  是
|comment |  是
|create_time |  是
|store_id     |  是
|customer_id |  是


## 根据产品ID获取评分

#### 请求URL

· `/rating/getrating`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|sku_id |  是
 



## 根据店铺ID获取评分

#### 请求URL

- `/rating/getratingtostore`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|store_id |  是
 




## 更新评分

#### 请求URL

· `/rating/updaterating`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|id      |是
|sku_id |  是
|rating   |  是
|comment |  是
|create_time |  是
|store_id     |  是
|customer_id |  是




## 删除评分

#### 请求URL

- `/rating/delrating`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|id |  是
 



## 通过ID获取评分

#### 请求URL

- `/rating/getratingbyid`

#### 请求方式

- POST

#### 参数

|参数名   | 是否必选
|id |  是
 