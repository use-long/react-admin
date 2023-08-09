import { query } from '../../db/index.js'
// 获取商品列表
export const getShopList = (req, res) => {
    let { page, size } = req.fields
    size = size || 30
    if (!page) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    page = Number(page)
    let sql = `select * from t_spu`
    query(sql, []).then(data => {
        let list = data.splice((page - 1) * size, page * size)
        res.json({
            code: 200,
            msg: "获取商品列表成功",
            data: list
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })


}
// 获取详情
export const getSpu = (req, res) => {
    let { id } = req.fields
    if (!id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    let sql = `select * from t_spu where id=?`
    query(sql, [id]).then(data => {
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
// 获取搜索
export const getSearch = (req, res) => {
    let { keyword } = req.fields;
    if (!keyword) {
        res.json({
            code: 401,
            message: "入参不符"
        })
        return
    }
    keyword = String(keyword);
    let sql = 'select * from t_spu where title like ? '
    query(sql, ["%" + keyword + '%']).then(data => {
        res.json({
            code: 200,
            msg: "获取搜索列表成功",
            data
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}
// 更新商品（修改）
export const updataSpu = (req, res) => {
    let { id, title, img, price, special_price, is_special } = req.fields;
    if (!(id && title && img && price && special_price && is_special)) {
        res.json({
            code: 401,
            message: '入参不符'
        })
        return
    }
    let sql = `update t_spu set title=?,img=?,price=?,special_price=?,is_special=? where id=?;`;
    id = Number(id);
    let params = [title, img, price, special_price, is_special, id];
    query(sql, params).then(data => {
        res.json({
            code: 200,
            msg: "更改商品成功",

        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}

// 添加商品   t_spu做了更改
export const addSpu = (req, res) => {
    let { img, title,store_id,price, special_price, is_special, brand_id,category_id,spg_id } = req.fields;
    if (!(title && store_id && img && brand_id && price && is_special && store_id &&category_id&&spg_id)) {
        res.json({
            code: 401,
            message: '入参不符'
        })
        return;
    }
    let sql = `insert into t_spu (img,title,store_id,price,special_price,is_special,brand_id,category_id,spg_id) values (?,?,?,?,?,?,?,?,?)`;
    
    let param = [img, title, store_id, price, special_price, is_special, brand_id,category_id,spg_id]
    query(sql, param).then(data => {
        res.json({
            code: 201,
            msg: "添加商品成功",
            data

        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员',
            err
        })
    })
}
// 删除商品

export const delSpu = (req, res) => {
    let {id} = req.fields;
    id = parseInt(id)
    if (!id) {
        res.json({
            code: 401,
            msg: "入参不符"
        })
        return
    }
    let sql = `delete from t_spu where id=?`;
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
};
// 获取分类列表
export const getClassify = (req, res) => {
    let { category_id } = req.fields;
    if (!category_id) {
        res.json({
            code: 401,
            message: "入参不符"
        })
        return
    }
    let sql = 'select * from t_spu where category_id=? '
    query(sql, [category_id]).then(data => {
        res.json({
            code: 200,
            msg: "获取搜索列表成功",
            data
        })
    }).catch(err => {
        res.json({
            code: 500,
            msg: '出错，联系管理员'
        })
    })
}