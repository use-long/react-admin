import express from 'express'
const router = express.Router()
import { login, register,deleteUser ,getUserList,changemessage} from '../../router_handler/customer/index.js'

/**
 * 注册
 * post请求
 * @username 用户名  必填
 * @password 密码  必填
 * @email 邮箱 必填
 * @nickname 昵称 必填
 * @tel 手机号 可选
 */
router.post('/register', register);
/**
 * 登录
 * post请求
 * @username 用户名  必填
 * @password 密码  必填
 */

router.post('/login', login);
/**
 * 删除客户
 * post请求
 * @username 用户名  必填
 */
router.post('/deleteUser', deleteUser);

/**
 * 查询客户列表
 * post请求
 */

router.post('/getUserList', getUserList);

/**
 * 更新客户信息
 * post请求
 * @username 用户名  必填
 * @newpsd 新密码  可选
 * @neweamil 新邮箱 可选
 * @tel 新手机号 可选
 * @newnickname 手机号 可选
 */

router.post('/changepsd', changemessage);


export default router