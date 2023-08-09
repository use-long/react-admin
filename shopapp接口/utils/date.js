// 格式化时间
/**
 * 
 * @param {*} date  时间
 * @param {*} fmt   
 * @returns 
 */
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

/**
 * 补零
 * @param {*} str 需要补零的值
 * @returns 
 */
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

/**
 * 时间字符串处理成 new Date 出来的格式
 * @param {*} dateStr    时间字符串
 * @param {*} separator  时间字符串间隔符
 * @returns 
 */
export function str2Date(dateStr, separator) {
    if (!separator) {
        separator = "-";
    }
    let dateArr = dateStr.split(separator);
    let year = parseInt(dateArr[0]);
    let month;
    //处理月份为04这样的情况
    if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
    } else {
        month = parseInt(dateArr[1]);
    }
    let day = parseInt(dateArr[2]);
    let date = new Date(year, month - 1, day);
    return date;
}
