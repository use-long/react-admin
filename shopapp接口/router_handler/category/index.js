import { query } from "../../db/index.js"

// 获取总的分类
export const getCategoryList = (req, res) => {
    let sql = `select * from t_category;`
    query(sql, []).then(data => {
        res.json({
            code: 200,
            msg: "获取总的数据列表成功",
            data
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 获取一级分类
export const getParentName = (req, res) => {
    let sql = `select parent_name from t_category ;`
    query(sql, []).then(data => {
        let arr = []
        data.forEach(v => {
            if (arr.indexOf(v.parent_name < 0)) {
                arr.push(v.parent_name)
            }
        })
        data = Array.from(new Set(arr))
        res.json({
            code: 200,
            msg: "获取一级分类数据成功",
            data
        })
    })
}

// 通过一级分类获取二级分类
export const getSecondName = (req, res) => {
    let { parentName } = req.fields
    let sql = `select * from t_category where parent_name = ? ;`
    query(sql, [parentName]).then(data => {
        let arr = []
        data.forEach(v => {
            arr.push(v.name)
        })
        res.json({
            code: 200,
            msg: "获取二级分类数据成功",
            "data": arr
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 增加分类
export const addCategory = (req, res) => {
    let { parentName, secondName } = req.fields
    let sql = `select * from t_category where name = ? ;`
    query(sql, [secondName]).then(data => {
        if (data.length == 0) {
            sql = `insert into t_category (parent_name,name) values (?,?);`
            query(sql, [parentName, secondName]).then(data => {
                res.json({
                    code: 201,
                    msg: "添加分类成功"
                })
            })
            return
        }
        res.json({
            code: 400,
            msg: "该分类已存在"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 删除分类
export const delCategory = (req, res) => {
    let { id } = req.fields
    let sql = `delete from t_category where id = ?`
    query(sql, [id]).then(data => {
        res.json({
            code: 201,
            msg: "删除分类成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 修改分类
export const updateCategory = (req, res) => {
    let { id, parentName, secondName } = req.fields
    let sql = "update t_category set `parent_name`=?,`name`=?  where id = ?"
    query(sql, [parentName, secondName, id]).then(data => {
        res.json({
            code: 201,
            msg: "更新分类成功"
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}