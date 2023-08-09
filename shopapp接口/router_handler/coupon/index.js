import { query } from '../../db/index.js'



// 获取指定用户优惠券
export const getUserCustomerList = (req, res) => {
    let { customer_id } = req.query;
    if (!customer_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        })
        return
    }
    if (customer_id) {
        let sql = `select * from t_customer_voucher WHERE customer_id = ?;`
        query(sql, [customer_id])
            .then(result => {
                if (result.length > 0) {
                    let voucherPromises = result.map(row => {
                        let voucher_id = row.voucher_id;
                        let getVoucher = `select * from t_customer_voucher t1 join t_voucher t2 on t1.voucher_id = t2.id where voucher_id = ?`
                        return query(getVoucher, [voucher_id]);
                    });

                    Promise.all(voucherPromises)
                        .then(results => {
                            let arr = results.map(result => result[0]);
                            res.json({
                                code: 200,
                                msg: '获取成功',
                                arr
                            })
                        })
                        .catch(err => {
                            res.json({
                                code: 500,
                                msg: "服务器出错",
                                err
                            });
                        });
                } else {
                    res.json({
                        code: 200,
                        msg: '该用户没有优惠券',
                    });
                }
            })
            .catch(err => {
                res.json({
                    code: 500,
                    msg: "服务器出错",
                    err
                });
            });
    }
}


// 添加优惠卷
export const addCustomer = (req, res) => {
    let { customer_id, deno, condition_value, start_time, end_time, store_id, spu_id, name } = req.fields;
    if (!customer_id || !deno || !condition_value || !start_time || !end_time) {
        res.json({
            code: 401,
            msg: "参数错误"
        });
        return;
    }

    let sql_id = `SELECT * FROM t_customer WHERE id = ${customer_id};`;
    query(sql_id).then(result_user => {
        if (result_user.length > 0) {
            let voucher_id = Number(new Date());

            let insertVoucherSql = `INSERT INTO t_voucher (customer_id,id, deno, condition_value, start_time, end_time, store_id, spu_id, name) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?);`;
            let insertCustomerVoucherSql = `INSERT INTO t_customer_voucher (customer_id, voucher_id) VALUES (?, ?);`;

            Promise.all([
                query(insertVoucherSql, [customer_id, voucher_id, deno, condition_value, start_time, end_time, store_id, spu_id, name]),
                query(insertCustomerVoucherSql, [customer_id, voucher_id])
            ]).then(() => {
                res.json({
                    code: 200,
                    msg: '添加优惠券成功'
                });
            }).catch(err => {
                res.json({
                    code: 404,
                    msg: '添加优惠卷失败',
                    err
                });
            });
        } else {
            res.json({
                code: 404,
                msg: '查无此用户'
            });
        }
    }).catch(err => {
        res.json({
            code: 500,
            msg: '服务器出错',
            err
        });
    });
};


// 删除用户优惠券
export const delCustomer = (req, res) => {
    let { voucher_id } = req.query;
    if (!voucher_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        });
        return;
    }
    if (voucher_id) {
        let sql = `SELECT * FROM t_customer_voucher WHERE voucher_id = ?;`
        query(sql, [voucher_id]).then(result => {
            if (result.length > 0) {
                let delCustomer = `DELETE FROM t_customer_voucher WHERE voucher_id = ?;`
                query(delCustomer, [voucher_id]).then(() => {
                    let delVoucher = `DELETE FROM t_voucher WHERE id = ?;`
                    query(delVoucher, [voucher_id]).then(() => {
                        res.json({
                            code: 200,
                            msg: '删除成功',
                        })
                    }).catch(err => {
                        res.json({
                            code: 200,
                            msg: '删除失败'
                        })
                    })
                })
            } else {
                res.json({
                    code: 404,
                    msg: '查无此优惠卷'
                })
            }
        }).catch(err => {
            res.json({
                code: 500,
                msg: "服务器出错",
                err
            })
        })
    }
};

// 修改用户优惠券
export const updateCustomer = (req, res) => {
    let { voucher_id, deno, condition_value, start_time, end_time, store_id, spu_id, name } = req.fields;
    console.log(voucher_id, deno, condition_value, start_time, end_time, store_id, spu_id, name);
    if (!deno || !condition_value || !start_time || !end_time || !voucher_id) {
        res.json({
            code: 401,
            msg: "参数错误"
        });
        return
    }
    if (voucher_id) {
        let selectSql = `SELECT * FROM t_customer_voucher WHERE voucher_id = ?`;
        query(selectSql, [voucher_id]).then(() => {
            let updateSql = `UPDATE t_voucher SET deno = ?, condition_value = ?, start_time = ?, end_time = ?, store_id = ?, spu_id = ?, name = ? WHERE id = ${voucher_id}`;
            let updateParams = [deno, condition_value, start_time, end_time, store_id, spu_id, name];
            query(updateSql, updateParams)
                .then(result => {
                    res.json({
                        code: 200,
                        msg: '修改优惠券成功',
                        result
                    });
                })
                .catch(err => {
                    res.json({
                        code: 404,
                        msg: '修改优惠券失败',
                        err
                    });
                });
        }).catch(err => {
            res.json({
                code: 404,
                msg: "查无此优惠券",
                err
            });
        });
    } else {
        res.json({
            code: 500,
            msg: '服务器出错'
        })
    }
};



// 获取所有的优惠卷
export const getAllVoucher = (req, res) => {
    let sql = `select * from t_voucher`
    query(sql).then(result => {
        res.json({
            code: 200,
            msg: '查找成功',
            result
        })
    }).catch(err => {
        res.json({
            code: 404,
            msg: '查找失败'
        })
    })
}




// 获取所有的客户优惠卷
export const getAllCustomerVoucher = (req, res) => {
    let sql = `select * from t_customer_voucher`
    query(sql).then(result => {
        res.json({
            code: 200,
            msg: '查找成功',
            result
        })
    }).catch(err => {
        res.json({
            code: 404,
            msg: "查找失败"
        })
    })
}
