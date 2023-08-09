import express from 'express'
const router = express.Router()
import {addshop,deleteshop,changeshop,getshop,getItemshop } from '../../router_handler/sku/index.js'


/**
 * 添加商品
 * post请求
 * @title 标题 必填
 * @spu_id 产品id  必填
 * @imgs 产品图片 必填
 * @price 产品价格  必填
 * @param 商品参数 必填
 * @stock  股票   必填
 * @desc_pc 电脑端商品详情 可选 
 * @desc_app 移动端商品详情 可选
 */
router.post("/addshop",addshop);
/**
 * 删除商品
 * post请求
 * @id 标识 必填
 */

router.post("/deleteshop",deleteshop);
/**
 * 修改商品
 * post请求
 * @id 标识 必填
 * @title 标题 可选
 * @spu_id 产品id  可选
 * @imgs 产品图片 可选
 * @price 产品价格  可选
 * @param 商品参数 可选
 * @stock  股票   可选
 * @desc_pc 电脑端商品详情 可选 
 * @desc_app 移动端商品详情 可选
 */

router.post("/changeshop",changeshop);

/**
 * 获取所有商品
 * post请求
 */

router.post("/getshop",getshop);

/**
 * 根据id获取商品 根据spu_id获取商品标题
 * post请求
 * @id 标识 可选
 * @spu_id 产品id 可选
 */

router.post("/getItemshop",getItemshop);


export default router