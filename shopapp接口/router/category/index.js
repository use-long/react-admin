import express from 'express'
const router = express.Router()
import { updateCategory, delCategory, getCategoryList, getParentName, getSecondName, addCategory } from '../../router_handler/category/index.js'


/**
 * 获取总的分类列表
 * post请求
 */
router.post("/getCategoryList", getCategoryList)


/**
 * 获取一级分类列表
 * post请求
 */
router.post('/getParentName', getParentName)

/**
 * 通过一级分类列表获取二级分类列表
 * post请求
 * @parentName 一级分类 必填
 */
router.post("/getSecondName", getSecondName)


/**
 * 添加分类
 * post请求
 * @parentName 一级分类 必填
 * @secondName 二级分类 必填
 */
router.post("/addCategory", addCategory)

/**
 * 删除分类
 * post请求
 * @id 数据库中该分类对应的id值 必填
 */
router.post("/delCategory", delCategory)

/**
 * 更新分类
 * post请求
 * @parentName 一级分类 必填
 * @secondName 二级分类 必填
 * @id 数据库中该分类对应的id值 必填
 */
router.post("/updateCategory", updateCategory)

export default router