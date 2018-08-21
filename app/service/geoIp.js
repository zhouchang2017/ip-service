// app/service/geoiP.js
var geoip = require('geoip-lite');


const Service = require('egg').Service;

class GenIpService extends Service {
  find(ip) {
    return geoip.lookup(ip);
  }

  isChina(ip) {
    try{
      const {country} = this.find(ip)
      return country ==='CN'
    }catch(err){
      return true
    }
    
  }

}

module.exports = GenIpService;
