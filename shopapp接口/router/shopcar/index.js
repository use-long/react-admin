import express from 'express'
const router = express.Router()
import { Addshopcar,DeleteShopCar,getshopCarList,changeCount} from '../../router_handler/shopcar/index.js'
/**
 * 添加购物车商品
 * post请求
 * @customer_id 用户id  必填
 * @sku_id 商品id  必填
 * @num 商品数量 可选
 * @params 商品类型 可选
 */
router.post('/Addshopcar',Addshopcar)
/**
 * 删除购物车商品
 * post请求
 * @customer_id 用户id
 * @sku_id 商品id
 */
router.post('/DeleteShopCar',DeleteShopCar)
/**
 * 获取购物车列表
 * post请求
 * @customer_id 用户id
 */
router.post('/getshopCarList',getshopCarList)
/**
 * 更改商品数量
 * post请求
 * @customer_id 用户id
 * @sku_id 商品id
 * @type add 或 reduce  add添加  reduce减少
 * @count 增加或减少的数量
 */
router.post('/changeCount',changeCount)

export default router

