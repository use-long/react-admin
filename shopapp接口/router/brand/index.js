import express from 'express'
import { getBrand,updateBrand,addBrand,delBrand,getLetterBrand } from '../../router_handler/brand/index.js'
const router = express.Router()
/**
 * 获取品牌列表
 * post请求
 */
router.post('/getBrand',getBrand)

/**
 * 修改品牌信息
 * post请求
 * @id 品牌标识，作为参数查找到品牌
 * @name  修改的品牌名
 * @image  修改的图片地址
 * @letter 修改的首字母
 */
router.post('/updateBrand',updateBrand)

/**
 * 新增品牌
 * post请求
 * @name    新增的品牌名
 * @image  新增的图片地址
 * @letter 新增的首字母
 */
router.post('/addBrand',addBrand)

/**
 * 删除品牌
 * post请求
 * @id 查询到要删除的品牌
 */
router.post('/delBrand',delBrand)

/**
 * 根据首字母获取品牌
 * post请求
 * @letter 查询到要获取的品牌
 */
router.post('/getLetterBrand',getLetterBrand)



export default router