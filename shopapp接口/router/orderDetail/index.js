import express from 'express'
const router = express.Router()

import { getorderDetail, updateorderDetail, addorderDetail, delorderDetail } from '../../router_handler/orderDetail/index.js'

/**
 * 获取订单详情
 * get请求
 * @order_id 订单详情id 必填
 */
router.get('/getorderDetail', getorderDetail)

/**
 * 修改订单详情信息
 * post请求
 * @order_id 订单详情id 必填
 * @sku_id 商品id  必填
 * @price 原价钱  必填
 * @actual_price  实际购买价格  必填
 * @num 数量 必填
 */
router.post('/updateorderDetail', updateorderDetail)

/**
 * 添加订单详情
 * post请求
 * @order_id 订单详情id  必须和订单表中的id对应
 * @sku_id 商品id  必填
 * @price 原价钱  必填
 * @actual_price  实际购买价格  必填
 * @num 数量 必填
 */
router.post('/addorderDetail', addorderDetail)

/**
 * 删除订单详情
 * post请求
 * @order_id 订单详情id  必填
 */
router.post('/delorderDetail', delorderDetail)

export default router