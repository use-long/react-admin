import express from 'express'
const router = express.Router()

import { addSwiper, getSwiper, updateSwiper,delSwiper } from '../../router_handler/swiper/index.js'

/**
 * 获取轮播图
 * get请求
 */
router.get('/getswiper', getSwiper)

/**
 * 修改轮播图
 * post请求
 * @id 轮播图id  必填
 * @url 轮播图更新后的url地址  必填
 */
router.post('/updateswiper', updateSwiper)

/**
 * 添加轮播图
 * post请求
 * @url 轮播图url地址  必填
 */
router.post('/addswiper', addSwiper)

/**
 * 删除轮播图
 * get请求
 * @id 轮播图id  必填
 */
router.get('/delSwiper', delSwiper)

export default router