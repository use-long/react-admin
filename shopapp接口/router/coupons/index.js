import express from 'express'
const router = express.Router()
import { getAddCoupons,getCoupons,updateCoupons,delCoupons } from '../../router_handler/coupons/index.js'

/**
 * 添加优惠券
 * post请求
 * @store_id 商户id  必填
 * @spu_id 商品id  必填
 * @start_time 开始时间  必填
 * @end_time 结束时间  必填
 * @deno 优惠券面额  必填
 * @condition 优惠券满多少可以使用 必填
 * @name  优惠券名称
 */
router.post('/getAddCoupons', getAddCoupons)
/**
 * 获取优惠券
 * post请求
 * @store_id 优惠券id 必填
 */
router.post("/getCoupons",getCoupons)
/**
 * 更新优惠券
 * post请求
 * @store_id 商户id 必填
 * @spu_id 商品id  必填
 * @start_time 开始时间  必填
 * @end_time 结束时间  必填
 * @deno 优惠券面额  必填
 * @condition 优惠券满多少可以使用  必填
 * @name  优惠券名称
 */
router.post("/updateCoupons",updateCoupons)
/**
 * 删除优惠券
 * @spu_id 优惠券id  必填
 */
router.post("/delCoupons",delCoupons)

export default router