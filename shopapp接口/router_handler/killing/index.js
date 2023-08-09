import { query } from '../../db/index.js'

// 添加秒杀活动
export const AddFlashKilling = (req,res)=>{
        let {  star_time, end_time, spu_id, active_name} = req.fields
        if (!star_time || !end_time  || !spu_id || !active_name) {
            res.json({
                code: 401,
                msg: "参数错误"
            })
            return
        }
        let sql = `insert into t_miaosha (spu_id,star_time,end_time,active_name) values (?,?,?,?)`
        let arr = [spu_id,star_time,end_time,active_name]
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
// 获取秒杀活动
export const getFlashKilling = (req, res) => {
    let { spu_id } = req.fields
    if (!spu_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`select id,spu_id,active_name,star_time,end_time from t_miaosha where spu_id=?`;
    query(sql, [spu_id]).then(data => {
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
// 更新秒杀活动
export const updateFlashkilling = (req, res) => {
    let {  star_time, end_time, spu_id, active_name,id} = req.fields
    if (!star_time || !end_time  || !spu_id || !active_name || !id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`update t_miaosha set spu_id=?,star_time=?,end_time=?,active_name=? where id=?;`
    let arr = [spu_id, star_time, end_time, active_name,id];
    query(sql, arr).then(result => {
        console.log(result);
        res.json({
            code: 200,
            msg: '更新成功'
        })
    }).catch(err => {
        res.json({
            code: 500,
            err
        })
    })

}
// 删除秒杀活动
export const delFlashKilling = (req, res) => {
    let { spu_id } = req.fields
    if (!spu_id) {
        res.json({
            code: 401,
            msg: '参数不合法'
        })
        return
    }
    let sql = "delete from  t_miaosha where `spu_id` = ?;"
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