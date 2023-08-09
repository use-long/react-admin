import { query } from "../../db/index.js"

// 添加商户(注册商户)
export const addStore = (req, res) => {
    let { name, address, password, avatar, tel, region, real_name, desc } = req.fields
    // 店铺名字/密码必填项
    if (!name || !password) {
        res.json({
            code: 400,
            msg: "参数错误"
        })
        return
    }
    // 店铺名字重复情况
    let sql = `select * from t_store where name = ?`
    query(sql, [name]).then(data => {
        // 返回数组长度为0，即商家名字不重复
        if (data.length == 0) {
            // 进行注册用户
            sql = "insert into  t_store (`name`,address,`password`,avatar,tel,region,real_name,`desc`) values (?,?,?,?,?,?,?,?);"
            query(sql, [name, address, password, avatar, tel, region, real_name, desc]).then(data => {
                // 注册成功
                res.json({
                    code: 201,
                    msg: "注册商家成功"
                })
                return
            })
        } else {
            // 商家名字重复
            res.json({
                code: 400,
                msg: "商家名已存在"
            })
        }
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}


// 获取商家列表
export const getStoreList = (req, res) => {
    let sql = `select * from t_store`
    query(sql, []).then(data => {
        res.json({
            code: 200,
            msg: "获取商家列表成功",
            data
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 删除商户
export const delStore = (req, res) => {
    let { id } = req.fields
    let sql = `DELETE FROM t_store WHERE id = ?;`
    query(sql, [id]).then(data => {
        res.json({
            code: 200,
            msg: "删除商户成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 修改商户信息
export const updateStore = (req, res) => {
    let { id, name, address, password, avatar, tel, region, real_name, desc } = req.fields
    let sql = "update  t_store set `name`=?,address=?,`password`=?,avatar=?,tel=?,region=?,real_name=?,`desc`=? where id =?;"
    query(sql, [name, address, password, avatar, tel, region, real_name, desc, id]).then(data => {
        res.json({
            code: 200,
            msg: "修改商户信息成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}