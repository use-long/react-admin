import express from 'express'
const router = express.Router()
import { addOrder, setOrder, delOrder, getOrder, getOrderList } from '../../router_handler/order/index.js'

/**
 * 创建订单
 * post请求
 * @store_id  商店id  必填
 * @customer_id 客户id  必填
 * @money       总价格  必填
 * @payment_type  支付类型   选填
 */
router.get('/addOrder', addOrder)



/**
 * 修改订单
 * get请求
 * @id        id  订单id  必填
 * @store_id  商店id  必填
 * @customer_id 客户id  必填
 * @money       总价格  必填
 * @payment_type  支付类型   选填
 * status 修改订单
 */
router.get('/setOrder', setOrder)


/**
 * 删除订单
 * get请求
 * @id        id  订单id  必填
 */
router.get('/delOrder', delOrder)



/**
 * 获取订单
 * get请求
 * @id        id  订单id  必填
 */
router.get('/getOrder', getOrder)
router.get('/getOrderList', getOrderList)


export default router