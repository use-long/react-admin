// 导入express
import express from "express"
// 导入express-formidable
import fromidable from "express-formidable"
import path from "path"
import cors from "cors"

// 获取路由
// 地址
import addressRouter from './router/address/index.js'
// 退货退款
import backstockRouter from './router/backstock/index.js'
// 品牌
import brandRouter from './router/brand/index.js'
// 分类
import categoryRouter from './router/category/index.js'
// 用户优惠券
import couponRouter from './router/coupon/index.js'
// 优惠券
import couponsRouter from './router/coupons/index.js'
// 用户 购物平台 pc端
import customerRouter from './router/customer/index.js'
// 快递 发货
import deliveryRouter from './router/delivery/index.js'
// 秒杀
import killingRouter from './router/killing/index.js'
// 商品列表 主列表
import mainShopRouter from './router/mainShopList/index.js'
// 订单列表
import orderRouter from './router/order/index.js'
// 订单详情
import orderDetailRouter from './router/orderDetail/index.js'
// 评分
import ratingRouter from './router/rating/index.js'
// 消息
import sessionRouter from './router/session/index.js'
// 购物车
import shopcarRouter from './router/shopcar/index.js'
// 商品详情 列表
import skuRouter from './router/sku/index.js'
// 商户
import storeRouter from './router/store/index.js'
// 轮播图
import swiperRouter from "./router/swiper/index.js"
// 用户后台
import userRouter from './router/user/index.js'


// 创建express服务对象
const app = express()

// 解决跨域拦截
app.use(cors())


// 上传文件
app.use(fromidable({
    keepExtensions: true,
    uploadDir: path.resolve("./public/upload"),
    multiples: true,
    encoding: "utf-8"
}))

// 挂载路由
app.use("/swiper", swiperRouter)
app.use("/address", addressRouter)
app.use("/store", storeRouter)
app.use("/user", userRouter)
app.use("/coupons", couponsRouter)
app.use('/customer', customerRouter)
app.use('/shopcar', shopcarRouter)
app.use('/killing', killingRouter)
app.use('/category', categoryRouter)
app.use('/brand', brandRouter)
app.use('/orderdetail', orderDetailRouter)
app.use('/coupon', couponRouter)
app.use('/shop', mainShopRouter)
app.use('/sku', skuRouter)
app.use('/delivery', deliveryRouter)
app.use('/order', orderRouter)
app.use('/rating', ratingRouter)
app.use('/session', sessionRouter)
app.use('/backstock', backstockRouter)
// 端口号
const proxy = 3000

// 运行服务
app.listen(proxy, () => {
    console.log(`https://127.0.0.1:${proxy}`);
})