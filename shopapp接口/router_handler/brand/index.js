import { query } from '../../db/index.js'

//获取品牌列表
export const getBrand = (req,res)=>{
    let sql = 'select * from t_brand'
    query(sql,[]).then(data=>{
        res.json({
            code:200,
            message:'获取成功',
            data
        })
    }).catch(err=>{
        res.json({
            code:500,
            message:'获取品牌列表失败'
        })
    })
}

// 修改品牌表信息
export const updateBrand = (req, res) => {
    let { id, name, image, letter } = req.fields;
    if (!(id && name && image && letter)) {
        res.json({
            code: 400,
            message: '入参不符'
        })
        return
    }
    let sql = "update t_brand set name=?,image=?,letter=? where id=?"
    query(sql, [name, image, letter, id]).then(data => {
        // console.log(res,'----');
        if (res.affectedRows > 0) {
            res.json({
                code: 200,
                message: '修改信息成功'
            })
            return
        }else{
            res.json({
                code:200,
            })
        }
    }).catch(err => {
        res.json({
            code: 500,
            message: '请联系管理员'
        })
    })

}

/**
 * 增加品牌
 */
export const addBrand = (req, res) => {
    let { name, image, letter } = req.fields;
    if (!(name && image && letter)) {
        // console.log(user);
        res.json({
            code: 400,
            message: '入参不符'
        })
        return
    }
    let sql = `insert into t_brand (name,image,letter) value (?,?,?)`;
    let sqlCheck = "select id from t_brand where name=?"
    query(sqlCheck, name).then((data) => {
        if (data.length > 0) {
            res.json({
                code:400,
                message:'此品牌已存在'
            })
            return;
        }else{
            query(sql, [name, image, letter]).then(() => {
                    res.json({
                        code: 200,
                        message: "品牌添加成功"
                    });
                    return;
        
            }).catch((err) => {
                res.json({
                    code: 500,
                    message: '添加失败'
                });
            })
        
        }
    }).catch(err=>{
        res.json({
            code:500,
            message:'请联系管理员'
        })
    })

}


/**
 * 删除用户
 */
export const delBrand = (req,res)=>{
    let {id} = req.fields
    if(!id){
        res.json({
            code:400,
            message:'参数不合法'
        })
        return
    }
    let sql = 'delete from t_brand where id=?'
    let sqlCheck = 'select name from t_brand where id=?'
    query(sqlCheck,id).then(r=>{
        if(r.length === 0){
            res.json({
                code:400,
                message:'此品牌不存在'
            })
            return
        }else{
            query(sql,id).then(data=>{
                res.json({
                    code:200,
                    message:'删除成功'
                })
                return
            }).catch((err)=>{
                res.json({
                    code:500,
                    message:'删除失败'
                })
            })
        }
    })
   
}


/**
 * 根据首字母获取品牌
 * @letter 作为参数的首字母
 */

export const getLetterBrand = (req,res)=>{
    let {letter} = req.fields
    if(!letter){
        res.json({
            code:400,
            message:'参数不合法'
        })
        return
    }
    let sql = "select * from t_brand where letter=?"
    query(sql,letter).then(data=>{
        if(!data){
            res.json({
                code:400,
                message:'品牌不存在'
            })
            return
        }else{
            res.json({
                code:200,
                message:'获取成功',
                data
            })
        }
    })

}