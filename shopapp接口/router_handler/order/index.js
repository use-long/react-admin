import { query } from '../../db/index.js'

// 创建订单  store_id customer_id money payment_type
export const addOrder = (req, res) => {
    let { store_id, customer_id, money, payment_type, sku_id, actual_price, num } = req.query;
    console.log(req.query);
    console.log(store_id, customer_id, money, payment_type, sku_id, actual_price, num);
    console.log(sku_id);
    if (!store_id || !customer_id || !money || !payment_type || !sku_id || !actual_price || !num) {
        res.json({
            code: 400,
            msg: '参数错误'
        })
        return
    }
    let status = 0;
    let sql = `insert into t_order (code,store_id,customer_id,money,status,payment_type,create_time,update_time,sku_id, actual_price, num) values (?,?,?,?,?,?,?,?,?,?,?)`
    query(sql, [(Date.now() - 2), store_id, customer_id, money, status, payment_type, '0000000' + Date.now(), Date.now(), sku_id, actual_price, num]).then(result => {
        res.json({
            code: 200,
            msg: '创建成功',
            result
        })
    }).catch((err) => {
        res.json({
            code: 500,
            msg: '服务器出错',
            err
        })
    })
}

// 修改订单
export const setOrder = (req, res) => {
    // console.log(req.query);
    let { id, store_id, customer_id, money, status, payment_type, sku_id, actual_price, num } = req.query;
    if (!id || !store_id || !customer_id || !money || !payment_type || !status || !sku_id || !actual_price || !num) {
        res.json({
            code: 400,
            msg: '参数错误'
        })
        return
    }
    let sql = `update t_order set store_id = ?,customer_id = ?,money = ?,payment_type = ?,update_time = ?,status=?,sku_id=?, actual_price=?, num=? where id = ? ;`
    query(sql, [store_id, customer_id, money, payment_type, Date.now(), status, sku_id, actual_price, num, id]).then(result => {
        res.json({
            code: 200,
            msg: '修改成功',
        })
    }).catch(() => {
        res.json({
            code: 500,
            msg: "服务器出错"
        })
        return
    })
}

// 删除订单
export const delOrder = (req, res) => {
    let { id } = req.query;
    // console.log(req.query);
    if (!id) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `delete from t_order where id = ?;`
    query(sql, [id]).then(result => {
        res.json({
            code: 200,
            msg: '删除成功',
        })
    }).catch(() => {
        res.json({
            code: 500,
            msg: "服务器出错"
        })
        return
    })
}

// 获取订单
export const getOrder = (req, res) => {
    let { id } = req.query;
    if (!id) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `select * from t_order where id = ?;`
    query(sql, [id]).then(result => {
        res.json({
            code: 200,
            msg: '查询成功',
            result
        })
    }).catch(() => {
        res.json({
            code: 500,
            msg: "服务器出错"
        })
        return
    })
}

// 获取订单列表
export const getOrderList = (req, res) => {
    let sql = `select * from t_order;`
    query(sql, []).then(result => {
        res.json({
            code: 200,
            msg: '查询成功',
            result
        })
    }).catch(() => {
        res.json({
            code: 500,
            msg: "服务器出错"
        })
        return
    })
}