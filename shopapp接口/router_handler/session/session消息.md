##### 描述

获取消息列表

#### 请求URL

`/session/getSession`

#### 请求方式

####   post

#### 参数

| 参数名      | 必选 | 类型 | 说明   |
| ----------- | ---- | ---- | ------ |
| customer_id | 是   | int  | 用户id |
| store_id    | 是   | int  | 商户id |





##### 描述

添加新的消息

#### 请求URL

`/session/addSession`

#### 请求方式

####   post

#### 参数

| 参数名      | 必选 | 类型     | 说明                                  |
| ----------- | ---- | -------- | ------------------------------------- |
| message     | 是   | longtext | 消息                                  |
| customer_id | 是   | int      | 用户id                                |
| store_id    | 是   | int      | 商户id                                |
| client      | 是   | tinyint  | 该消息是否为用户消息1.是用户 0.是商家 |



##### 描述

删除消息

#### 请求URL

`/session/delSession`

#### 请求方式

####   post

#### 参数

| 参数名      | 必选 | 类型 | 说明   |
| ----------- | ---- | ---- | ------ |
| customer_id | 是   | int  | 用户id |
| store_id    | 是   | int  | 商户id |



##### 描述

根据商户id获取消息

#### 请求URL

`/session/getStoreSession`

#### 请求方式

####   post

#### 参数

| 参数名   | 必选 | 类型 | 说明   |
| -------- | ---- | ---- | ------ |
| store_id | 是   | int  | 商户id |



##### 描述

根据用户id获取消息

#### 请求URL

`/session/getCustomerSession`

#### 请求方式

####   post

#### 参数

| 参数名      | 必选 | 类型 | 说明   |
| ----------- | ---- | ---- | ------ |
| customer_id | 是   | int  | 用户id |