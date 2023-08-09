import express from 'express'
const router = express.Router()
import { register,login,deleteUser,getUserList,changemsg, changepsd} from '../../router_handler/user/index.js'

/**
 * 用户注册
 * post请求
 * @username 用户名 必填
 * @password 密码 必填
 */
router.post('/register',register)
/**
 * 用户登录
 * post请求
 * @username 用户名 必填
 * @password 密码 必填
 */
router.post('/login',login)
/**
 * 删除用户
 * post请求
 * @user 用户账号 必填
 */
router.post('/deleteUser',deleteUser)
/**
 * 获取用户列表
 * post请求
 */
router.post('/getUserList',getUserList)
/**
 * 修改权限
 * post请求
 * @user 用户账号  必填
 * @role 角色权限  必填
 */
router.post('/changemsg',changemsg)
/**
 * 修改密码
 * post请求
 * @user 用户账号  必填
 * @newpsd 新密码  必填
 */
router.post('/changepsd',changepsd)

export default router