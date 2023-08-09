import { query } from '../../db/index.js'

// 添加购物车商品
export const Addshopcar = (req, res) => {
  let { customer_id, sku_id, num, params } = req.fields
  if (!customer_id || !sku_id) {
    res.json({
      code: 4001,
      msg: "参数错误"
    })
  }
  let sql = 'select * from t_shopcar where customer_id = ? and sku_id=?;'
  return query(sql, [customer_id, sku_id]).then(result => {
    console.log(result);
    // 商品存在更新数量
    if (result.length != 0 && num) {
      let sql = `update t_shopcar set num = ? where customer_id=? and sku_id=? ;`
      return query(sql, [num, customer_id, sku_id])
    } else if (result.length != 0 && !num) {
      let sql = `update t_shopcar set num = ? where customer_id=? and sku_id=? ;`
      let num = Number(result[0].num) + 1;
      return query(sql, [num, customer_id, sku_id])
    }
    let sql1 = `insert into t_shopcar (customer_id,sku_id,num,params) value (?,?,?,?)`
    return query(sql1, [customer_id, sku_id, 1, params])

  }).then(result => {
    res.json({
      code: 200,
      msg: '添加购物车成功'
    })
  }).catch(result => {
    res.json({
      code: 500,
      msg: '服务器内部错误'
    })
  })
}

// 删除购物车商品
export const DeleteShopCar = (req, res) => {
  let { customer_id, sku_id } = req.fields
  if (!customer_id || !sku_id) {
    res.json({
      code: 4001,
      msg: "参数错误"
    })
  }
  let sql = 'select * from t_shopcar where customer_id = ? and sku_id=? ;'
  return query(sql, [customer_id, sku_id]).then(result => {
    console.log(result);
    if (result.length == 0) {
      res.json({
        code: 406,
        message: "该商品在购物车内未找到"
      })
    }
    // 该商品找到删除商品
    let sql2 = `delete from t_shopcar where customer_id = ? and sku_id=? ;`;
    return query(sql2, [customer_id, sku_id])
  }).then(result => {
    res.json({
      code: 200,
      message: "商品删除成功"
    })
  }).catch(result => {
    res.json({
      code: 500,
      message: "服务器内部错误"
    })
  })
}

// 获取购物车商品
export const getshopCarList = (req, res) => {
  let { customer_id } = req.fields
  if (!customer_id) {
    res.json({
      code: 4001,
      msg: "参数错误"
    })
  }
  let sql = 'select * from t_shopcar where customer_id = ?;'
  return query(sql, [customer_id]).then(result => {
    res.json({
      code: 200,
      message: "购物车列表获取成功",
      data: result
    })
  })
}

// 修改购物数量
export const changeCount = (req, res) => {
  let { customer_id, sku_id, type, count } = req.fields
  if (!customer_id || !sku_id || !type || !count) {
     return res.json({
      code: 4001,
      msg: "参数错误"
    })
  }
  if(type!=='add'&&type!='reduce'){
   return res.json({
      code: 4001,
      msg: "参数类型错误"
    })
  }
  let sql = 'select * from t_shopcar where customer_id = ? and sku_id=?;'
  return query(sql, [customer_id, sku_id]).then(result => {
    console.log(result);
    if(result.length==0){
      res.json({
        code:"405",
        message:"商品不存在"
     })
    }
    let sql = `update t_shopcar set num = ? where customer_id=? and sku_id=? ;`
    if (type == "add") {
      let numCount = (result[0].num * 1) + count * 1
      return query(sql, [numCount, customer_id, sku_id])
    }
    if (type == "reduce") {
      let numCount = (result[0].num * 1) - count * 1
      if(numCount<=0){
        let sql1 = 'delete from t_shopcar where customer_id = ? and sku_id=?;'
       return query(sql1,[customer_id,sku_id])
      }
      return query(sql, [numCount, customer_id, sku_id])
    }
  }).then(result => {
    res.json({
      code: "200",
      message: "商品数量更新成功"
    })
  }).catch(result => {
    res.json({
      code: "500",
      message: "服务器内部错误"
    })
  })
}