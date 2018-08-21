# is-service

ip-service

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Online

```
http://119.29.214.232:7001/api/resolve?ip=119.147.146.189
```

### Useage

通过ip获取访问地址

```
http://127.0.0.1:7001/api/resolve?ip=119.147.146.189

```
- params
ip:string

- response

```
{
    range: - [
        2006155264,
        2006171647
    ],
    country: "CN",
    region: "AS",
    eu: "0",
    timezone: "Asia/Shanghai",
    city: "Guangzhou",
    ll: - [
        23.1167,
        113.25
    ],
    metro: 0,
    area: 50
}
```

### UpdateIpDb
`yarn updatedb` or `npm run updatedb`

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org