import express from 'express'
const router = express.Router()
import { getSpu, getShopList, getSearch, updataSpu, addSpu, delSpu, getClassify } from '../../router_handler/mainShopList/index.js';
/**
 * 获取商品列表
 * post 请求
 * @page 页数 必填
 * @size  默认30条 选填
 */
router.post('/getShopList', getShopList)
/**
 * 获取商品详情
 * post请求
 * @id  标识     必填
 * 
 */
router.post('/getSpu', getSpu)
/**
 * 获取商品搜索
 * post请求
 * @keyword  关键词  title为查询条件    必填
 * 
 */
router.post('/getSearch', getSearch)
/**
 * 更新商品（修改）
 * post 请求
 * @id 标识  必填
 * @title  标题 必填
 * @img 产品图片 必填
 * @price 产品价格 必填
 * @special_price  商品优惠多少价格 必填
 * @is_special  是优惠商品还是秒杀商品1.优惠商品2.秒杀商品  必填
 * 
 */
// 
router.post('/updataSpu', updataSpu)
/**
 * 添加商品
 * post 请求
 * @brand_id 品牌id  必填
 * @title  标题 必填
 * @img 产品图片 必填
 * @price 产品价格 必填
 * @special_price  商品优惠多少价格 必填
 * @is_special  是优惠商品还是秒杀商品1.优惠商品2.秒杀商品  必填
 * @store_id  店铺id 必填
 * @category_id  分类id
 * @spg_id    品类id
 * 
 */
router.post('/addSpu', addSpu)
/**
 * 删除商品
 * post 请求
 *  @id  标识     必填
 */
router.post('/delSpu', delSpu)

/**
 * 获取分类列表
 * post 请求
 *  @category_id  分类id     必填
 */
router.post('/getClassify', getClassify)
export default router