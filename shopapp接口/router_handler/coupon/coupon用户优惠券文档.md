# 需要修改数据库
## 原因 ： 因为在给优惠卷添加id的时候使用时间戳，数据库中的int类型不够，需要改为bigint
### 操作 : 因为t_customer_voucher表和t_voucher表存在外键关系，所以不能直接修改，需要先右键t_customer_voucher表，点击设计表，然后选中上方的外键，将这两个外键进行删除，删除成功后保存，重新点击设计表，然后点击主键，找到voucher_id将类型改为bigint,也需要把t_voucher表中的id也改为bigint,因为等会还要给他俩重新加上外键，类型需要保持一致，还有一个地方是将t_voucher表中的condition名字修改为condition_value，因为在sql中condition是关键字，不能直接使用，成功保存后，再去t_customer_voucher表中设计表,找到外键，进行修改

## fk_cv_customer    customer_id   shopapp   t_customer    id    CASCADE   CASCADE
## fk_cv_voucher      voucher_id    shopapp    t_voucher    id   CASCADE   CASCADE

### 上面是我保存的数据，可以直接赋值，

# 个人觉得 其中的store_id和spu_id作为优惠卷的使用场景的限制，如果有store_id就只能在这家店铺使用这个优惠卷，spu_id就只能在购买这个产品的时候进行使用优惠卷，要是都没有的话，所有场景都可以使用




---------------coupon客户优惠卷列表---------------------------------


- 获取客户优惠卷列表

url:http://127.0.0.1:3000/customerVoucher/getCustomerList

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id    必填    int    客户id,用来查询客户是否有优惠卷|



- 添加客户优惠卷

url:http://127.0.0.1:3000/customerVoucher/addCustomerList

 协议:http

 请求方式:post

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|customer_id    必填    int    客户id,用来查询客户是否有优惠卷|
|deno           必填    int       优惠卷的面额|
|condition_value 必填   int       优惠卷满多少可以使用|
|start_time      必填   bigint    优惠卷开始时间|
|end_time        必填   bigint    优惠卷结束时间|
|store_id        选填   int       店铺id|
|spu_id          选填   int       产品id|
|name            选填   varchar   优惠卷名称  可以作为查询条件，获取优惠信息|








- 删除优惠卷

url:http://127.0.0.1:3000/customerVoucher/delCustomerList

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|voucher_id    必填    bigint    优惠卷id,用来查询要删除的优惠卷|



- 修改客户优惠卷

url:http://127.0.0.1:3000/customerVoucher/updateCustomerList

 协议:http

 请求方式:get

|参数名称|是否必须|类型|描述|
|---|---|---|---|
|voucher_id    必填    int       优惠卷id,用来查询要修改的优惠卷|
|deno           必填    int       优惠卷的面额|
|condition_value 必填   int       优惠卷满多少可以使用|
|start_time      必填   bigint    优惠卷开始时间|
|end_time        必填   bigint    优惠卷结束时间|
|store_id        选填   int       店铺id|
|spu_id          选填   int       产品id|
|name            选填   varchar   优惠卷名称  可以作为查询条件，获取优惠信息|