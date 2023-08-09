import { query } from '../../db/index.js'

// 查询地址列表  用户名 name    16行添加了if  else判断
export const getAddressList = (req, res) => {
    let { name } = req.query;
    if (!name) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    if (name) {
        let sql = `select * from t_customer_address WHERE name = ?;`
        query(sql, [name]).then(result => {
            if (result.length > 0) {
                res.json({
                    code: 200,
                    msg: '获取成功',
                    result
                })
            } else {
                res.json({
                    code:404,
                    msg:'获取失败'
                })
            }
        }).catch(() => {
            res.json({
                code: 500,
                msg: "服务器出错"
            })
            return
        })
    }
}

// 查询地址  id name      50行添加if  else判断
export const getAddress = (req, res) => {
    let { id, name } = req.query;
    if (!id || !name) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = `SELECT * FROM t_customer_address WHERE id = ? and name = ?;`
    query(sql, [id, name]).then(result => {
        if (result.length > 0) {
            res.json({
                code: 200,
                msg: '获取成功',
                result
            })
        } else {
            res.json({
                code:404,
                msg:'获取失败'
            })
        }
    }).catch(() => {
        res.json({
            code: 500,
            msg: "服务器出错"
        })
        return
    })
}

// 添加地址  name tel address   73行请求体改为fields  添加了customer_id 值，必须
export const addAddress = (req, res) => {
    let { name, tel, address, customer_id } = req.fields
    if (!name || !tel || !address || !customer_id) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    let sql = `insert into t_customer_address (customer_id,name,tel,address) values (?,?,?,?);`
    query(sql, [customer_id,name, tel, address]).then(result => {
        res.json({
            code: 200,
            msg: '添加成功',
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

// 删除地址 id name
export const delAddress = (req, res) => {
    let { id, name } = req.query
    if (!name || !id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = `delete from t_customer_address where id = ? and name = ?;`
    query(sql, [id, name]).then(result => {
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

// 修改地址  id name tel address      删除了name字段，因为有name字段的话，需要给name加上字符串 有id唯一标识 就行
export const updateAddress = (req, res) => {
    let { id, tel, address } = req.query;
    if (!tel || !address || !id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = `update t_customer_address set tel = ?,address = ? where id = ${id}; `
    query(sql, [tel, address]).then(result => {
        res.json({
            code: 200,
            msg: '修改成功',
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: "服务器出错",
            err
        })
        return
    })
}

// 获取默认地址 name
export const getDefaultAddress = (req, res) => {
    let { name } = req.query;
    if (!name) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = `select * from t_customer_address where name = ? and prime = 1;`
    query(sql, [name]).then(result => {
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

// 修改默认地址 id name
export const setDefaultAddress = (req, res) => {
    let { id, name } = req.query;
    if (!name || !id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    if (name) {
        let sql = `update t_customer_address set prime = 0;`
        query(sql, []).then(result => {
            sql = `update t_customer_address set prime = 1 where id = ?;`
            query(sql, [id]).then(result => {
                res.json({
                    code: 200,
                    msg: '修改成功',
                })
                return
            }).catch(() => {
                res.json({
                    code: 500,
                    msg: "服务器出错"
                })
                return
            })
        }).catch(() => {
            res.json({
                code: 500,
                msg: "服务器出错"
            })
            return
        })
    }
}