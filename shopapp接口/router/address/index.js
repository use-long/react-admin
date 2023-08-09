import express from 'express'
const router = express.Router()
import { addAddress, delAddress, updateAddress, getAddress, getAddressList, getDefaultAddress, setDefaultAddress } from '../../router_handler/address/index.js'

/**
 * 查询地址列表
 * get请求
 * @name 用户名 必填
 */
router.get('/getAddressList', getAddressList)
/**
 * 查询地址
 * get请求
 * @id 用户id 必填
 * @name 用户名 必填
 */
router.get('/getAddress', getAddress)
/**
 * 添加地址
 * post请求
 * @name 用户名 必填
 * @tel 手机号 必填
 * @address 地址 必填
 */
router.post('/addAddress', addAddress)
/**
 * 删除地址
 * get请求
 * @id 用户id 必填
 * @name 用户名
 */
router.get('/delAddress', delAddress)
/**
 * 修改地址
 * get请求
 * @id 用户id 必填
 * @name 用户名 必填
 * @tel 手机号 必填
 * @address 地址 必填
 */
router.post('/updateAddress', updateAddress)
/**
 * 获取默认地址
 * get请求
 * @name 用户名 必填
 */
router.get('/getDefaultAddress', getDefaultAddress)
/**
 * 修改默认地址
 * get请求
 * @id 用户id 必填
 * @name 用户名 必填
 */
router.get('/setDefaultAddress', setDefaultAddress)


export default router