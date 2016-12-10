'use strict';

const BaseController = require('slet-basecontroller')
// https://github.com/koa-modules/multer
const multer = require('koa-multer')

module.exports = class BasicController extends BaseController{
  constructor(app, ctx, next) {
    super(app, ctx, next)
    
    
    if (!this.app.opts.upload) {
      console.log('please give a upload config')
      return;
    }
    
    // 定义中间件
    this.upload = multer(this.app.opts.upload) 
  }
}