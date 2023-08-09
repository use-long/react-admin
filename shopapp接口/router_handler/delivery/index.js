import { query } from "../../db/index.js"

// 获取快递表总的分类
export const getDeliveryList = (req, res) => {
    let sql = `select * from t_delivery;`
    query(sql, []).then(data => {
        res.json({
            code: 200,
            msg: "获取总的快递数据列表成功",
            data
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 添加快递 (前提有订单号，且无快递)
//  postid 快递单号, ecp 快递公司, address 收货地址, create_time 添加时间, order_id 订单id
export const addDelivery = (req, res) => {
    let { postid, ecp, address, create_time, order_id } = req.fields
    if (!postid || !ecp || !address || !create_time || !order_id) {
        res.json({
            code: 400,
            msg: "请输入完整的信息"
        })
    }
    // 先查询订单号是否有效
    let sql = `select * from t_order where id = ?;`
    query(sql, [order_id]).then(data => {
        // 订单无效
        if (data.length == 0) {
            res.json({
                code: 403,
                msg: "该订单号无效"
            })
            return
        } else {// 订单号有效，添加快递
            sql = `insert into t_delivery (postid,ecp,address,create_time,order_id,is_delete) values (?,?,?,?,?,0)`
            query(sql, [postid, ecp, address, create_time, order_id]).then(data => {
                res.json({
                    code: 201,
                    msg: "添加快递成功"
                })
                // 订单号唯一对应
            }).catch(err => {
                res.json({
                    msg: 403,
                    msg: "该订单已加入快递,请查看是否正确"
                })
            })
        }
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 更新快递信息(只能修改postid 快递单号, ecp 快递公司, address 收货地址, is_delete 快递是否结束(收货)(0未结束/1结束)[添加快递默认为0])这四项可以改
export const updateDelivery = (req, res) => {
    let { id, postid, ecp, address, is_delete } = req.fields
    if (!id || !postid || !ecp || !address || !is_delete && is_delete !== 0) {
        res.json({
            code: 400,
            msg: "请输入完整快递信息"
        })
        return
    }
    let sql = "update  t_delivery set postid=?,ecp=?,address=?,is_delete=?  where id = ?;"
    query(sql, [postid, ecp, address, is_delete, id]).then(data => {
        res.json({
            code: 200,
            msg: "更改快递信息成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 只更改快递的状态  is_delete 快递是否结束(收货)(0未结束/1结束)[添加快递默认为0]
export const updateDeliveryState = (req, res) => {
    let { id, is_delete } = req.fields
    if (!id || !is_delete) {
        res.json({
            code: 400,
            msg: "请输入完整快递信息"
        })
        return
    }
    let sql = "update t_delivery set is_delete=?  where id = ?;"
    query(sql, [is_delete, id]).then(data => {
        res.json({
            code: 200,
            msg: "更改快递状态成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 删除快递信息 
export const delDelivery = (req, res) => {
    let { id } = req.fields
    let sql = "delete from  t_delivery   where id = ?;"
    query(sql, [id]).then(data => {
        res.json({
            code: 200,
            msg: "删除快递信息成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}