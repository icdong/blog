/*
 * @Description: 工具类
 * @Author: Do not edit
 * @Date: 2020-11-01 15:29:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:56:47
 */
export function timetrans(time) {
    let date = new Date(time)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
    // let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    // let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    // let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())
    return Y + M + D
}

export const color = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
]

export function getDateDiff(dateTimeStamp) {
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let month = day * 30
    let now = new Date().getTime()
    let diffValue = now - dateTimeStamp
    if (diffValue < 0) {
        return
    }
    let monthC = diffValue / month
    let weekC = diffValue / (7 * day)
    let dayC = diffValue / day
    let hourC = diffValue / hour
    let minC = diffValue / minute
    let result
    if (monthC >= 1) {
        result = "" + parseInt(monthC, 10) + "月前"
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC, 10) + "周前"
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC, 10) + "天前"
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC, 10) + "小时前"
    } else if (minC >= 1) {
        result = "" + parseInt(minC, 10) + "分钟前"
    } else
        result = "刚刚"
    return result
}
