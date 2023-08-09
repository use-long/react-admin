import express from 'express'
const router = express.Router()
import { addStore, getStoreList, delStore, updateStore } from "../../router_handler/store/index.js"

/**
 * 添加商户
 * post请求
 * @name  店铺名字  必填
 * @address 地址  选填
 * @password 密码  必填
 * @avatar 店铺logo 选填
 * @tel  联系电话  选填
 * @region  商家所在地区  选填
 * @real_name 商家真实名字  选填
 * @desc  店铺描述 选填
 * */
router.post("/addStore", addStore)

/**
 * 获取商户列表
 * post请求
 * */
router.post("/getStoreList", getStoreList)


/**
 * 删除商户
 * post请求
 * @id 数据库表该商户的id值  必填
 * */
router.post("/delStore", delStore)

/**
 * 添加商户
 * post请求
 * @id 数据库表该商户的id值  必填
 * @name  店铺名字  必填
 * @address 地址  选填
 * @password 密码  必填
 * @avatar 店铺logo 选填
 * @tel  联系电话  选填
 * @region  商家所在地区  选填
 * @real_name 商家真实名字  选填
 * @desc  店铺描述 选填
 * */
router.post("/updateStore", updateStore)



export default router
