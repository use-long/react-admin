import express from 'express'
const router = express.Router()
import { getDeliveryList, addDelivery, updateDelivery, updateDeliveryState, delDelivery } from '../../router_handler/delivery/index.js'

/**
 * 获取快递表总的分类
 * post请求
 */
router.post("/getDeliveryList", getDeliveryList)


/**
 * 添加快递信息
 * post请求
 * @postid 快递单号 必填
 * @ecp 快递公司 必填
 * @address 收货地址 必填
 * @create_time 添加时间 必填
 * @order_id 订单id 必填(对应order表中的id字且一一对应)
 */
router.post("/addDelivery", addDelivery)


/**
 * 更新快递信息(若只更新是否收货，推荐用/updateDeliveryState)
 * post请求
 * @id 数据库表中该快递信息对应的id 必填
 * @postid 快递单号 必填
 * @ecp 快递公司 必填
 * @address 收货地址 必填
 * @is_delete 快递是否收货 必填 [快递是否收货(0未收货/1收货)[添加快递默认为0])]
 */
router.post("/updateDelivery", updateDelivery)

/**
 * 更新快递状态
 * post请求
 * @is_delete 订单id 必填 [快递是否收货(0未收货/1收货)[添加快递默认为0])]
 * @id 数据库表中该快递信息对应的id 必填
 */
router.post("/updateDeliveryState", updateDeliveryState)

/**
 * 删除快递信息
 * post请求
 * @id 数据库表中该快递信息对应的id 必填
 */
router.post("/delDelivery", delDelivery)

export default router