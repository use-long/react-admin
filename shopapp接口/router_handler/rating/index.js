import { query } from '../../db/index.js'

// 添加评分
export const AddRating = (req,res)=>{
        let { sku_id, rating, comment, create_time,store_id,customer_id} = req.fields
        if ( !sku_id || !rating || !comment || !create_time || !store_id || !customer_id) {
            res.json({
                code: 401,
                msg: "参数错误"
            })
            return
        }
        let sql = `insert into t_rating ( sku_id, rating, comment, create_time,store_id,customer_id) values (?,?,?,?,?,?)`
        let arr = [ sku_id, rating, comment, create_time,store_id,customer_id]
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

// 根据产品ID获取评分
export const getRating = (req, res) => {
    let { sku_id } = req.fields
    if (!sku_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`select id,sku_id, rating, comment, create_time,store_id,customer_id from t_rating where sku_id=?`;
    query(sql, [sku_id]).then(data => {
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

// 根据店铺ID获取评分
export const getRatingByStore = (req, res) => {
    let { store_id } = req.fields
    if (!store_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`select id,sku_id, rating, comment, create_time,store_id,customer_id from t_rating where store_id=?`;
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

// 更新评分
export const updaterating = (req, res) => {
    let {id,sku_id, rating, comment, create_time,store_id,customer_id} = req.fields
    if (!id||!sku_id || !rating || !comment || !create_time || !store_id || !customer_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`update t_rating set sku_id=?,rating=?,comment=?,create_time=?,store_id=?,customer_id=? where id=?;`
    let arr = [sku_id, rating, comment, create_time,store_id,customer_id,id];
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

// 删除评分
export const delrating = (req, res) => {
    let { id } = req.fields
    if (!id) {
        res.json({
            code: 401,
            msg: '参数不合法'
        })
        return
    }
    let sql = "delete from  t_rating where id = ?;"
    let arr = [id];
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

// 通过ID获取评分
export const getRatingByID = (req, res) => {
    let { id } = req.fields
    if (!id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql =`select * from t_rating where id=?`;
    query(sql, [id]).then(data => {
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

// 获取所有评分
export const getAllRating = (req, res) => {
    let sql = `select * from t_rating`
    query(sql).then(data => {
        res.json({
            code: 200,
            msg: "获取成功",
            data
        })
    })
}
