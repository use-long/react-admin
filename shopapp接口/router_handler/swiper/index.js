import { query } from '../../db/index.js'
// 获取轮播图
export const getSwiper = (req, res) =>{
    let sql = `SELECT * FROM t_swiper`
    query(sql, []).then(data => {
        res.json({
            code: 200,
            message:"获取成功",
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

// 修改轮播图
export const updateSwiper = (req, res) =>{
    // 传入id 图片url 
    let { id, url } = req.fields
    if(!id || !url){
        res.json({
            code: 400,
            msg:"参数错误",
        })
        return
    }
    let sql = `update t_swiper set swiperImg=? where id=?`
    query(sql, [url, id]).then(data => {
        if(data.affectedRows === 1){
            res.json({
                code: '204',
                msg: '更新完成'
            })
            return
        }else{
            res.json({
                code: '400',
                msg: '更新出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}


// 添加轮播图
export const addSwiper = (req, res) =>{
    let {url} = req.fields
    if(!url){
        res.json({
            code: 400,
            msg:"参数错误",
        })
        return
    }
    let sql = `INSERT INTO t_swiper (swiperImg) VALUES (?);`
    query(sql, [url]).then(data => {
        if(data.affectedRows){
            res.json({
                code: '204',
                msg: '添加完成'
            })
            return
        }else{
            res.json({
                code: '400',
                msg: '添加出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        console.log(err);
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}

// 删除轮播图
export const delSwiper = (req, res) =>{
    let {id} = req.query
    if(!id){
        res.json({
            code: 400,
            msg:"参数错误",
        })
        return
    }
    let sql = `DELETE FROM t_swiper WHERE id = ?;`
    query(sql, [id]).then(data => {
        if(data.affectedRows){
            res.json({
                code: '204',
                msg: '删除完成'
            })
            return
        }else{
            res.json({
                code: '400',
                msg: '删除出错，查看参数是否正确'
            })
            return
        }
    }).catch(err => {
        res.json({
            code: '500',
            msg: '出错，联系管理员'
        })
    })
}