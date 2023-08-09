import express from 'express'
const router = express.Router()
import { getBackstock, setBackstock, delBackstock, addBackstock } from '../../router_handler/backstock/index.js'

/**
 * 查询退货商品
 * get请求
 * @user_id 用户id
 */
router.post('/getBackstock', getBackstock)
/**
 * 查询退货商品
 * post请求
 * @id id
 * @status .待处理，2.处理中，3.完成
 * @reason 退货原因
 * @money 退款
 */
router.post('/setBackstock', setBackstock)
/**
 * 删除退货商品
 * get请求
 * @id id
 */
router.post('/delBackstock', delBackstock)
/**
 * 添加退货商品
 * post请求
 * @user_id 用户id
 * @order_id 订单id
 * @reason 退货原因
 * @money 退款
 */
router.post('/addBackstock', addBackstock)

export default router