import { query } from "../../db/index.js";

// 注册客户
export const register = (req, res) => {
  let { username, password, email, tel, nickname } = req.fields;
  let regUser = /^\w{1,16}$/;
  let regPsd = /^\d{1,12}$/;
  let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (
    !username ||
    !password ||
    !email ||
    !nickname ||
    !regUser.test(username) ||
    !regPsd.test(password) ||
    !emailRegex.test(email)
  ) {
    res.json({
      code: 400,
      msg: "参数不合法",
    });
    return;
  }
  let sql = `SELECT * FROM t_customer Where username = ?;`;
  query(sql, [username]).then((result) => {
    // result查询结果 非空数组 存在，空数组不存在
    console.log(result);
    // 查询到结果，表示存在，响应浏览器；用户已经注册
    if (result.length > 0) {
      res.json({
        code: 204,
        msg: "用户已经注册了",
      });
      return;
    }
    const timestamp = Date.now();
    let inster =
      "insert into t_customer (username,password,email,tel,create_time,last_update_time,nickname,avatar) value (?,?,?,?,?,?,?,?);";

    return query(inster, [
      username,
      password,
      email,
      tel,
      timestamp,
      null,
      nickname,
      null,
    ])
      .then((result) => {
        //then 处理select 查询的结果
        res.json({
          code: 200,
          msg: "注册成功",
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

// 登录客户
export const login = (req, res) => {
  //1.获取参数
  let { username, password } = req.fields;
  // 2.验证参数合法性

  if (!username || !password) {
    res.json({
      code: 400,
      msg: "参数不合规",
    });
    return;
  }
  let sql = `select * from t_customer where username = ?;`;
  query(sql, [username])
    .then((result) => {
      console.log(result[0].password);
      console.log(result.length);

      if (result.length === 0) {
        res.json({
          code: 202,
          msg: "用户没注册",
        });
        return;
      }
      let psd = result[0].password;
      if (password != psd) {
        res.json({
          code: 400,
          msg: "密码是错的",
        });
        return;
      }
      res.json({
        code: 200,
        msg: "登录成功",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        code: 500,
        msg: "联系管理员",
        err,
      });
      return;
    });
};

// 删除客户接口
export const deleteUser = (req, res) => {
  let { username } = req.fields;

  if (!username) {
    res.json({
      code: 400,
      msg: "参数不合法",
    });
    return;
  }

  let sql = `SELECT * FROM t_customer WHERE username = ?;`;
  query(sql, [username]).then((result) => {
    // 查询到结果，表示存在，可以删除用户
    if (result.length > 0) {
      let deleteSql = "DELETE FROM t_customer WHERE username = ?;";

      return query(deleteSql, [username])
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
        msg: "用户不存在",
      });
    }
  });
};

// 修改客户信息
export const changemessage = (req, res) => {
  let { username, newpsd, neweamil, tel, newnickname } = req.fields;
  if (!username) {
    res.json({
      code: 400,
      msg: "传入用户名",
    });
    return;
  }
  // 检查用户名是否存在
  let checkSql = `SELECT username FROM t_customer WHERE username = ?`;
  query(checkSql, [username])
    .then((checkResult) => {
      if (checkResult.length > 0) {
        let sql = `UPDATE t_customer SET last_update_time = ?`;
        const timestamp = Date.now();
        const params = [timestamp];
        if (newpsd) {
          sql += `, password = ?`;
          params.push(newpsd);
        }
        if (neweamil) {
          sql += `, email = ?`;
          params.push(neweamil);
        }
        if (tel) {
          sql += `, tel = ?`;
          params.push(tel);
        }
        if (newnickname) {
          sql += `, nickname = ?`;
          params.push(newnickname);
        }
        sql += ` WHERE username = ?`;
        params.push(username);

        query(sql, params)
          .then(() => {
            res.json({
              code: 200,
              msg: "更新用户信息成功",
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
        // 没有查询到结果，表示用户名不存在
        res.json({
          code: 204,
          msg: "用户名不存在",
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
// 查询客户列表
export const getUserList = (req, res) => {
  let sql = "SELECT * FROM t_customer;";

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
