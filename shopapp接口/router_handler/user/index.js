import { query } from "../../db/index.js";
import jwt from "jsonwebtoken";


//注册接口
export const register = (req, res) => {
  let { user, psd } = req.fields;

  let regUser = /^\w{1,16}$/;
  let regPsd = /^\d{1,12}$/; if (
    !user ||
    !psd ||
    !regUser.test(user) ||
    !regPsd.test(psd)
  ) {
    res.json({
      code: 400,
      msg: "参数不合法",
    });
    return;
  }

  let sql = `SELECT * FROM t_user Where user = ?;`;
  query(sql, [user]).then((result) => {
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
    let role = 'common'
    let inster = "insert into t_user (user,psd,role) value (?,?,?);";

    return query(inster, [user, psd, role])
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
// 登录接口
export const login = (req, res) => {
  //1.获取参数
  let { user, psd } = req.fields;
  // 2.验证参数合法性

  if (
    !user ||
    !psd
  ) {
    res.json({
      code: 400,
      msg: "参数不合规",
    });
    return;
  }
  let sql = `select * from t_user where user = ?;`;
  query(sql, [user])
    .then((result) => {
      console.log(result[0].psd);
      console.log(result.length);

      if (result.length === 0) {
        res.json({
          code: 202,
          msg: "用户没注册",
        });
        return;
      }
      let password = result[0].psd;
      if (psd != password) {
        res.json({
          code: 2006,
          msg: "密码是错的",
        });
        return;
      }


      let role = "common"; // 默认角色为common
      let token = jwt.sign(
        {
          user,
          password,
          role,
        },
        "./private.key",
        {
          expiresIn: 1000 * 60 * 60 * 2,
        }
      );
      res.json({
        code: 200,
        msg: "登录成功",
        token,
        role,
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

// 删除用户接口
export const deleteUser = (req, res) => {
  let { user } = req.fields;

  if (!user) {
    res.json({
      code: 400,
      msg: "参数不合法",
    });
    return;
  }

  let sql = `SELECT * FROM t_user WHERE user = ?;`;
  query(sql, [user]).then((result) => {
    // 查询到结果，表示存在，可以删除用户
    if (result.length > 0) {
      let deleteSql = "DELETE FROM t_user WHERE user = ?;";

      return query(deleteSql, [user])
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

// 查询用户列表
export const getUserList = (req, res) => {
  let sql = "SELECT * FROM t_user;";

  query(sql).then((result) => {
    res.json({
      code: 200,
      data: result,
    });
  }).catch((err) => {
    res.json({
      code: 500,
      err,
      msg: "联系管理员",
    });
  });
};


// 更新个人信息权限

export const changemsg = (req, res) => {
  let { user, role } = req.fields;
  let sql = `update t_user set role =? where user = ?`;
  query(sql, [role, user]).then(result => {
    res.json({
      code: 200,
      msg: "update msg success",
    })
  }).catch(err => {
    res.json({
      code: 500,
      err,
      mgs: "联系管理员",
    });
  })
};


// 更改密码
export const changepsd = (req, res) => {
  let { user, newpsd } = req.fields
  if (!user || !newpsd) {
    res.json({
      code: 202,
      msg: "用户已经注册了",
    });
    return;
  }
  let sql = `update t_user set psd =? where user = ?;`
  query(sql, [newpsd, user]).then(result => {
    res.json({
      code: 200,
      msg: "update psd success"
    })
  }).catch(err => {
    res.json({
      code: 500,
      err,
      mgs: "联系管理员",
    });
  })
};