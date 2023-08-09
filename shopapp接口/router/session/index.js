import express from 'express'
import { addSession,delSession,getSession,getCustomerSession,getStoreSession } from '../../router_handler/session/index.js'
const router = express.Router()
/**
 * 获取消息列表
 * post请求
 * @customer_id  用户id`
 * @store_id  商户id
 */
router.post('/getSession',getSession)


/**
 * 新增消息
 * post请求
 * @message 消息
* @customer_id  用户id`
 * @store_id  商户id
 * @client 该消息是否为用户消息1.是用户 0.是商家
 */
router.post('/addSession',addSession)

/**
 * 删除消息
 * post请求
 * @customer_id  用户id`
 * @store_id  商户id
 */
router.post('/delSession',delSession)

/**
 * 根据商户id获取消息
 * post请求
 * @store_id  商户id
 */
router.post('/getStoreSession',getStoreSession)

/**
 * 根据用户id获取消息
 * post请求
 * @customer_id  用户id
 */
router.post('/getCustomerSession',getCustomerSession)




export default router