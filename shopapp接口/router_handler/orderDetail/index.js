import { query } from '../../db/index.js'
// 获取订单详情
export const getorderDetail = (req, res) => {
    let { order_id } = req.query
    if (!order_id) {
        res.json({
            code: 400,
            msg: '参数错误'
        })
        return
    }
    let sql = `SELECT * FROM t_order_detail WHERE order_id = ?`
    query(sql, [order_id]).then(data => {
        res.json({
            code: 200,
            message: "获取成功",
            data
        })
    }).catch(err => {
        console.log(err);
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}

// 修改订单详情
export const updateorderDetail = (req, res) => {
    // 传入id 图片url 
    let { order_id, sku_id, price, actual_price, num } = req.fields
    if (!order_id || !sku_id || !price || !actual_price || !num) {
        res.json({
            code: 400,
            msg: "参数错误",
        })
        return
    }
    let sql = `update t_order_detail set sku_id=?, price=?, actual_price=?, num=? where order_id=?`
    query(sql, [sku_id, price, actual_price, num, order_id]).then(data => {
        if (data.affectedRows === 1) {
            res.json({
                code: 204,
                msg: '更新完成'
            })
            return
        } else {
            res.json({
                code: 400,
                msg: '更新出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        console.log(err);
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}


// 添加订单详情
export const addorderDetail = (req, res) => {
    let { order_id, sku_id, price, actual_price, num } = req.fields
    if (!order_id || !sku_id || !price || !actual_price || !num) {
        res.json({
            code: 400,
            msg: "参数错误",
        })
        return
    }
    let sql = `INSERT INTO t_order_detail (order_id, sku_id, price, actual_price, num) VALUES (?, ?, ?, ?, ?);`
    query(sql, [order_id, sku_id, price, actual_price, num]).then(data => {
        if (data.affectedRows) {
            res.json({
                code: '204',
                msg: '添加完成'
            })
            return
        } else {
            res.json({
                code: '400',
                msg: '添加出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        console.log(err);
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}

// 删除订单详情
export const delorderDetail = (req, res) => {
    let { order_id } = req.fields
    if (!order_id) {
        res.json({
            code: 400,
            msg: "参数错误",
        })
        return
    }
    let sql = `DELETE FROM t_order_detail WHERE order_id = ?;`
    query(sql, [order_id]).then(data => {
        if (data.affectedRows) {
            res.json({
                code: '204',
                msg: '删除完成'
            })
            return
        } else {
            res.json({
                code: '400',
                msg: '删除出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}