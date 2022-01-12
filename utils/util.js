/**
 * 通用工具函数
 */
const log4js = require('./log4j')

const CODE = {
  SUCCESS: 200, // 请求成功
  ERROR: 10001, // 错误
  AUTH_ERROR: 500001 // 认证失败
}

module.exports = {
  /**
   * 分页结构封装
   * @param {number} pageNum
   * @param {number} pageSize
   */
  pager({ pageNum = 1, pageSize = 10 }) {
    pageNum = +pageNum
    pageSize = +pageSize
    const skipIndex = (pageNum - 1) * pageSize
    return {
      page: {
        pageNum,
        pageSize
      },
      skipIndex
    }
  },
  success(data = null, msg = '', code = CODE.SUCCESS) {
    log4js.debug(data)
    return {
      code,
      data,
      msg
    }
  },
  fail(msg, code = CODE.ERROR) {
    log4js.debug(msg)
    return {
      code,
      msg
    }
  }
}
