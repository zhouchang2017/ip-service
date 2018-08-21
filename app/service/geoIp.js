// app/service/geoiP.js
var geoip = require('geoip-lite');


const Service = require('egg').Service;

class GenIpService extends Service {
  find(ip) {
    return geoip.lookup(ip);
  }

  isAbroad(ip) {
    const {country} = this.find(ip)
    return country!=='CN'
  }
}

module.exports = GenIpService;
