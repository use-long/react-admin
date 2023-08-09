import express from 'express'
const router = express.Router()
import { getUserCustomerList,addCustomer,delCustomer,updateCustomer,getAllVoucher,getAllCustomerVoucher } from '../../router_handler/coupon/index.js'

/**
 * 获取客户优惠卷列表
 * get请求
 * @customer_id 客户id  必填
 */
router.get('/getUserCustomerList', getUserCustomerList)


/**
 * 添加用户优惠卷
 * post请求
 * @customer_id 客户id  必填
 * @deno          优惠卷的面额  必填
 * @condition_value     优惠卷满多少可以使用  必填
 * @start_time            优惠开始时间    必填
 * @end_time             优惠结束时间    必填
 * @store_id              店铺id   选填
 * @spu_id                产品id   选填
 * @name           ()     优名称 选填  可以作为查询条件，获取优惠信息  
 */
router.post('/addCustome', addCustomer)


/**
 * 删除优惠卷
 * get请求
 * @voucher_id    优惠卷id  必填
 */
router.get('/delCustomer', delCustomer)


/**
 * 修改优惠卷
 * get请求
 * @voucher_id          优惠卷id  必填
 * @deno                优惠卷的面额  必填
 * @condition_value     优惠卷满多少可以使用  必填
 * @start_time            优惠开始时间    必填
 * @end_time             优惠结束时间    必填
 * @store_id              店铺id   选填
 * @spu_id                产品id   选填
 * @name           ()     优名称 选填  可以作为查询条件，获取优惠信息  
 */
router.post('/updateCustomer', updateCustomer)


/**
 * 删除优惠卷
 * get请求
 * @voucher_id    优惠卷id  必填
 */
router.get('/delCustomer', delCustomer)


/**
 * 获取所有优惠卷
 * get请求
 */
router.get('/getAllVoucher', getAllVoucher)


/**
 * 获取所有用户优惠卷
 * get请求
 */
router.get('/getAllCustomerVoucher', getAllCustomerVoucher)
export default router