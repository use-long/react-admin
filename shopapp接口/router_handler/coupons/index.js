import { query } from '../../db/index.js'

/**
 * 添加优惠券
 */
export const getAddCoupons = (req, res) => {
    console.log(req.fields);
    let { deno, condition, start_time, end_time, store_id, spu_id, name } = req.fields
    if (!deno || !condition || !start_time || !end_time || !store_id || !spu_id || !name) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = "insert into t_voucher (store_id,spu_id,start_time,end_time,deno,`condition`,name) values (?,?,?,?,?,?,?)";
    let arr = [store_id, spu_id, start_time, end_time, deno, condition, name]
    query(sql, arr).then(result => {
        console.log(result);
        res.json({
            code: 200,
            msg: '添加成功'
        })
    }).catch(err => {
        res.json({
            code: 500,
            data: err
        })
    })

}
// 获取优惠券
export const getCoupons = (req, res) => {
    let { store_id } = req.fields
    if (!store_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = "select id,name,deno,`condition`,start_time,end_time from t_voucher where store_id=?";
    query(sql, [store_id]).then(data => {
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
// 修改优惠券
export const updateCoupons = (req, res) => {
    let { deno, condition, start_time, end_time, spu_id, name } = req.fields
    if (!deno || !condition || !start_time || !end_time || !spu_id || !name) {
        res.json({
            code: 401,
            msg: '参数不合法'
        })
        return
    }
    let sql = "update t_voucher set deno=?,start_time=?,end_time=?,`name`=?,`condition`=? where spu_id=?"
    let arr = [deno, start_time, end_time, name, condition, spu_id,];
    query(sql, arr).then(result => {
        console.log(result);
        res.json({
            code: 200,
            msg: 'update成功'
        })
    }).catch(err => {
        res.json({
            code: 500,
            err
        })
    })

}
// 删除优惠券
export const delCoupons = (req, res) => {
    let { spu_id } = req.fields
    if (!spu_id) {
        res.json({
            code: 401,
            msg: '参数不合法'
        })
        return
    }
    let sql = "delete from t_voucher where `spu_id` = ?;"
    let arr = [spu_id];
    query(sql, arr).then(result => {
        console.log(result);
        res.json({
            code: 200,
            msg: '删除成功'
        })
    }).catch(err => {
        res.json({
            code: 500,
            err
        })
    })

}