# redis-sentinel-shard

Wrapper around [node-redis-sentinel](https://github.com/ortoo/node-redis-sentinel), implement client sharding, using the master name of sentinel as hash input.

## Demo


    cd examples/redis_conf/

    # 1 master 2 slaves named m6381
    redis-server --port 6381
    redis-server ./6381_slave1.conf --port 63811
    redis-server ./6381_slave2.conf --port 63812

    # 1 master 2 slaves, named m6382
    redis-server --port 6382
    redis-server ./6382_slave1.conf --port 63821
    redis-server ./6382_slave2.conf --port 63822

    # 3 sentinels
    redis-server s1.conf --port 26381 --sentinel
    redis-server s2.conf --port 26382 --sentinel
    redis-server s3.conf --port 26383 --sentinel

    node ../demo.js
