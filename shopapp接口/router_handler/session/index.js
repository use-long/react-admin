import { query } from '../../db/index.js'

//获取消息列表
export const getSession = (req, res) => {
    let { customer_id,store_id } = req.fields
    if (!(customer_id && store_id)) {
        res.json({
            code: 400,
            message: '参数不合法'
        })
        return
    }
    let sql = 'select * from t_session where customer_id=? and store_id=?'
    query(sql, [customer_id,store_id]).then(data => {
        if(data.length){
            res.json({
                code: 200,
                message: '获取成功',
                data
            })
        }else{
            res.json({
                code:400,
                message:'此消息不存在'
            })
        }
    
    }).catch(err => {
        res.json({
            code: 500,
            message: '获取消息失败'
        })
    })
}

//根据用户id获取消息列表
export const getCustomerSession = (req, res) => {
    let { customer_id} = req.fields
    if (!(customer_id)) {
        res.json({
            code: 400,
            message: '参数不合法'
        })
        return
    }
    let sql = 'select * from t_session where customer_id=?'
    query(sql, [customer_id]).then(data => {
        if(data.length > 0){
            res.json({
                code: 200,
                message: '获取成功',
                data
            })
        }else{
            res.json({
                code:400,
                message:'此消息不存在'
            })
        }
      
    }).catch(err => {
        res.json({
            code: 500,
            message: '获取消息失败'
        })
    })
}

//获取商户id消息列表
export const getStoreSession = (req, res) => {
    let {store_id } = req.fields
    if (!(store_id)) {
        res.json({
            code: 400,
            message: '参数不合法'
        })
        return
    }
    let sql = 'select * from t_session where store_id=?'
    query(sql, [store_id]).then(data => {
        if(data.length > 0){
            res.json({
                code: 200,
                message: '获取成功',
                data
            })
        }else{
            res.json({
                code:400,
                message:'此消息不存在'
            })
        }
      
    }).catch(err => {
        res.json({
            code: 500,
            message: '获取消息失败'
        })
    })
}

/**
 * 添加消息
 */
export const addSession = (req, res) => {
    let { message, customer_id, store_id, client } = req.fields;
    console.log(req.fields);
    if (!(message && customer_id && store_id && client)) {
        // console.log(user);
        res.json({
            code: 400,
            message: '入参不符'
        })
        return
    }
    let create_time = new Date().getTime()
    let sql = `insert into t_session (message,customer_id,store_id,client,create_time) value (?,?,?,?,?)`;
    query(sql, [message, customer_id, store_id, client, create_time]).then(() => {
            res.json({
                code: 200,
                message: "消息添加成功"
            });
       
    }).catch((err) => {
        res.json({
            code: 500,
            message: '添加失败'
        });
    })
}


/**
 * 删除消息
 */
export const delSession = (req, res) => {
    let { customer_id,store_id } = req.fields
    if (!(customer_id && store_id)) {
        res.json({
            code: 400,
            message: '参数不合法'
        })
        return
    }
    let sql = 'delete from t_session where customer_id=? and store_id=?'
    let sqlCheck = 'select id from t_session where customer_id=? and store_id=?'
    query(sqlCheck, [customer_id,store_id]).then(r => {
        if (r.length === 0) {
            res.json({
                code: 400,
                message: '此消息不存在'
            })
            return
        } else {
            query(sql, [customer_id,store_id]).then(data => {
                res.json({
                    code: 200,
                    message: '删除成功'
                })
                return
            }).catch((err) => {
                res.json({
                    code: 500,
                    message: '删除失败'
                })
            })
        }
    })

}


