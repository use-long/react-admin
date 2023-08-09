import express from 'express'
const router = express.Router()
import { AddFlashKilling,getFlashKilling,updateFlashkilling,delFlashKilling } from '../../router_handler/killing/index.js'

/**
 * 添加秒杀活动
 * POST请求
 * @star_time 开始时间  必填
 * @end_time 结束时间   必填
 * @spu_id   商品ID     必填
 * @active_name 活动名称 必填
 */
router.post('/addflashkilling', AddFlashKilling)
/**
 * 获取秒杀活动
 * POST请求
 * @spu_id   商品ID     必填
 */
router.post("/getflashkilling",getFlashKilling)
/**
 * 更新秒杀活动
 * POST请求
 * @star_time 开始时间  必填
 * @end_time 结束时间   必填
 * @spu_id   商品ID     必填
 * @active_name 活动名称 必填
 */

router.post("/updateflashkilling",updateFlashkilling)
/**
 * 删除秒杀活动
 * POST请求
 * @spu_id   商品ID     必填
 */
router.post("/delflashkilling",delFlashKilling)

export default router