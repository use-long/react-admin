import express from 'express'
const router = express.Router()
import { AddRating,getRating,getRatingByStore,updaterating,delrating,getRatingByID, getAllRating } from "../../router_handler/rating/index.js";

/**
 * 添加评分
 * POST请求
 * @sku_id 产品ID  必填
 * @rating 评分   必填
 * @comment   卖家评论    必填
 * @create_time 评价时间 必填
 * @store_id    店铺ID    必填
 * @customer_id 用户ID    必填
 */
router.post('/addrating', AddRating)
/**
 * 根据产品ID获取评分
 * POST请求
 * @sku_id   产品ID     必填
 */
router.post("/getrating",getRating)
/**
 * 根据店铺ID获取评分
 * POST请求
 * @store_id   店铺ID     必填
 */

router.post("/getratingtostore",getRatingByStore)
/**
 * 更新评分
 * POST请求
 * @id     评论ID
 * @sku_id 产品ID  必填
 * @rating 评分   必填
 * @comment   卖家评论    必填
 * @create_time 评价时间 必填
 * @store_id    店铺ID    必填
 * @customer_id 用户ID    必填
 */
router.post("/updaterating",updaterating)
/**
 * 删除评分
 * POST请求
 * @id   评论ID     必填
 */

router.post("/delrating",delrating)
/**
 * 通过ID获取评分
 * POST请求
 * @id   评论ID     必填
 */
router.post("/getratingbyid",getRatingByID)
// 获取所有评分
router.post("/getAllRating", getAllRating)

export default router