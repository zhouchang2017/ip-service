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
    this.ctx.body = service.geoIp.find(ip);
  }

  isAbroad() {
    const { ctx, service } = this;
    const createRule = {
      ip: { type: 'string' }
    };
    ctx.validate(createRule,ctx.request.query);
    const ip = ctx.request.query.ip
    this.ctx.body = service.geoIp.isAbroad(ip);
  }
}

module.exports = HomeController;
