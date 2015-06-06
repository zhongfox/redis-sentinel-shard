var endpoints = [
  {host: '127.0.0.1', port: 26381},
  {host: '127.0.0.1', port: 26382},
  {host: '127.0.0.1', port: 26383}
];
var RedisSentinelShard = require('./index.js');
var r = new RedisSentinelShard(endpoints, ['m6381', 'm6382']);
r.set('abc', '123', console.log);
