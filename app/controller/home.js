'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const createRule = {
      ip: { type: 'string' }
    };
    ctx.validate(createRule,ctx.request.query);
    const ip = ctx.request.query.ip
    this.success(service.geoIp.find(ip));
  }

  isAbroad() {
    const { ctx, service } = this;
    const createRule = {
      ip: { type: 'string' }
    };
    ctx.validate(createRule,ctx.request.query);
    const ip = ctx.request.query.ip
    this.success(service.geoIp.isChina(ip));
  }

  success(data,code = 200){
    this.ctx.body = {
      status:code,
      data
    }
  }
}

module.exports = HomeController;
