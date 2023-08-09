import { query } from '../../db/index.js'



// 添加商品
export const addshop = (req, res) => {
    let { title,spu_id,imgs,price,param,stock,desc_pc,desc_app} = req.fields;
    if (
        !title ||!spu_id || ! imgs || !price || !param ||!stock
    ) {
      res.json({
        code: 400,
        msg: "参数缺失",
      });
      return;
    }
    let sql = `SELECT * FROM t_sku Where title = ? AND spu_id = ?;`;
    query(sql, [title,spu_id]).then((result) => {
      // result查询结果 非空数组 存在，空数组不存在
      console.log(result);
      // 查询到结果，表示存在，响应浏览器；用户已经注册
      if (result.length > 0) {
        res.json({
          code: 204,
          msg: "商品已经存在",
        });
        return;
      }
      const timestamp = Date.now();
      let inster =
        "insert into t_sku (title,spu_id,imgs,price,param,create_time,last_update_time,stock,desc_pc,desc_app) value (?,?,?,?,?,?,?,?,?,?);";
  
      return query(inster, [
        title,
        spu_id,
        imgs,
        price,
        param,
        timestamp,
        timestamp,
        stock,
        desc_pc,
        desc_app,
      ])
        .then((result) => {
          //then 处理select 查询的结果
          res.json({
            code: 200,
            msg: "注册商品成功",
          });
        })
        .catch((err) => {
          //then 处理inster 添加 响应的结果
          res.json({
            code: 500,
            err,
            mgs: "联系管理员",
          });
        });
    });
  };
// 删除商品
export const deleteshop=(req,res)=>{
    let { id } = req.fields;

    if (!id) {
      res.json({
        code: 400,
        msg: "参数不合法",
      });
      return;
    }
  
    let sql = `SELECT * FROM t_sku WHERE id = ?;`;
    query(sql, [id]).then((result) => {
      // 查询到结果，表示存在，可以删除用户
      if (result.length > 0) {
        let deleteSql = "DELETE FROM t_sku WHERE id = ?;";
  
        return query(deleteSql, [id])
          .then(() => {
            res.json({
              code: 200,
              msg: "删除成功",
            });
          })
          .catch((err) => {
            res.json({
              code: 500,
              err,
              mgs: "联系管理员",
            });
          });
      } else {
        // 没有查询到结果，表示用户不存在
        res.json({
          code: 204,
          msg: "商品不存在",
        });
      }
    });
}
// 修改商品
export const changeshop = (req, res) => {
  let { id, title, imgs, price, param, stock, desc_pc, desc_app } = req.fields;
  if (!id) {
    res.json({
      code: 400,
      msg: "传入商品id",
    });
    return;
  }
  // 检查商品是否存在
  let checkSql = `SELECT id FROM t_sku WHERE id = ?`;
  query(checkSql, [id])
    .then((checkResult) => {
      if (checkResult.length > 0) {
        let sql = `UPDATE t_sku SET last_update_time = ?`;
        const timestamp = Date.now();
        const params = [timestamp];
        if (title) {
          sql += `, title = ?`;
          params.push(title);
        }
        if (imgs) {
          sql += `, imgs = ?`;
          params.push(imgs);
        }
        if (price) {
          sql += `, price = ?`;
          params.push(price);
        }
        if (param) {
          sql += `, param = ?`;
          params.push(param);
        }
        if (stock) {
          sql += `, stock = ?`;
          params.push(stock);
        }
        if (desc_pc) {
          sql += `, desc_pc = ?`;
          params.push(desc_pc);
        }
        if (desc_app) {
          sql += `, desc_app = ?`;
          params.push(desc_app);
        }
        sql += ` WHERE id = ?`;
        params.push(id);

        query(sql, params).then(() => {
          res.json({
            code: 200,
            msg: "更新商品信息成功",
          });
        }).catch((err) => {
          res.json({
            code: 500,
            err,
            mgs: "联系管理员",
          });
        });
      } else {
        // 没有查询到结果，表示商品不存在
        res.json({
          code: 204,
          msg: "商品不存在",
        });
      }
    })
    .catch((err) => {
      res.json({
        code: 500,
        err,
        mgs: "联系管理员",
      });
    });
};

// 获取所有商品
export const getshop = (req, res) => {
    let sql = "SELECT * FROM t_sku;";
    query(sql)
      .then((result) => {
        res.json({
          code: 200,
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          code: 500,
          err,
          msg: "联系管理员",
        });
      });
  };
  

// 根据id获取商品
// 如果传入spu_id 只获取商品标题
export const getItemshop = (req, res) => {
let { id, spu_id } = req.fields;
let sql = "";
let params = [];

if (id) {
  sql = "SELECT * FROM t_sku WHERE id = ?";
  params = [id];
} else if (spu_id) {
  sql = "SELECT title FROM t_sku WHERE spu_id = ?";
  params = [spu_id];
}

query(sql, params)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        code: 200,
        data: result,
      });
    } else {
      res.json({
        code: 204,
        msg: "商品不存在",
      });
    }
  })
  .catch((err) => {
    res.json({
      code: 500,
      err,
      msg: "联系管理员",
    });
  });

  };
  