import { query } from '../../db/index.js'

// 查询退货商品  user_id
export const getBackstock = (req, res) => {
    let { user_id } = req.fields;
    // if (!user_id) {
    //     res.json({
    //         code: 400,
    //         msg: "参数错误"
    //     })
    //     return
    // }
    let sql;
    if (user_id) {
        sql = `select * from t_backstock WHERE user_id = ?;`
    } else {
        sql = `select * from t_backstock;`
    }

    query(sql, [user_id]).then(result => {
        res.json({
            code: 200,
            msg: '获取成功',
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

// 修改退货商品 id status reason money 
export const setBackstock = (req, res) => {
    let { id, status, reason, money } = req.fields;
    if (!id || !status || !money || !reason) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `update t_backstock set update_time = ?,status = ?,reason = ?,money=? where id = ?;`
    query(sql, [Date.now(), status, reason, money, id]).then(result => {
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

// 删除退货商品  id
export const delBackstock = (req, res) => {
    let { id } = req.fields;
    if (!id) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `delete from t_backstock where id = ?;`
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

// 添加退货商品 user_id order_id  reason money
export const addBackstock = (req, res) => {
    let {  order_id, reason, money, imgs } = req.fields
    order_id = Number(order_id);
    money = Number(money);
    imgs = JSON.stringify(imgs)


    if ( !order_id || !reason || !money) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `insert into t_backstock ( order_id, create_time, update_time, status, reason, money,imgs) values (?, ?, ?, ?, ?, ?, ?);`
    query(sql, [ order_id, Date.now(), Date.now(), 1, reason, money, imgs]).then(result => {
        res.json({
            code: 200,
            msg: '退货商品添加成功',
        })
    }).catch((err) => {
        res.json({
            code: 500,
            msg: "服务器出错",
            err
        })
        return
    })
}

