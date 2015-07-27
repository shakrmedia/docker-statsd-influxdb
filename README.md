docker-statsd-influxdb [![wercker status](https://app.wercker.com/status/eb092421caa7bd703ac332444f7e978b/s "wercker status")](https://app.wercker.com/project/bykey/eb092421caa7bd703ac332444f7e978b)
======================

Out-of-the-box StatsD + InfluxDB backend container for Docker

## Introduction

This Docker container is based on [`node:slim`](https://registry.hub.docker.com/u/library/node/) and runs a [`StatsD`](https://github.com/etsy/statsd/) network daemon with native backend support for [`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) using the [`statsd-influxdb-backend`](https://github.com/bernd/statsd-influxdb-backend) node.js package. All settings for the [`StatsD`](https://github.com/etsy/statsd/) daemon to connect with [`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) can be provided using environmental variables.

The node package [`statsd-influxdb-backend`](https://github.com/bernd/statsd-influxdb-backend) `v0.6.0` included in this container supports [`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) versions `v0.8` and `v0.9`.

## Considerations

- The default version of [`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) for this container is `v0.8`, use the `INFLUXDB_VERSION` environment variable to specify `v0.9`
- [`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) `v0.9` currently has no upgrade tool from `v0.8`, you will need to start with a fresh database
- Ensure that any programs that you are using with the [`StatsD`](https://github.com/etsy/statsd/)/[`InfluxDB`](https://github.com/influxdb/influxdb/tree/master) stack support `v0.9`, support in the community is still being finalised and you may lose functionality by moving to the new version

## Running

Example command to run this image:

    docker run -p 8125:8125/udp -e "INFLUXDB_HOST=localhost" -e "INFLUXDB_DATABASE=site_dev" -e "INFLUXDB_USERNAME=username" -e "INFLUXDB_PASSWORD=password" -e "STATSD_DEBUG=true" shakr/statsd-influxdb

Following environment variables can be used:

- `INFLUXDB_HOST` or `INFLUXDB_MASTER_SERVICE_HOST` (default: localhost)
- `INFLUXDB_PORT` or `INFLUXDB_MASTER_SERVICE_PORT` (default: 8086)
- `INFLUXDB_VERSION` (default: 0.8, latest: 0.9)
- `INFLUXDB_SSL` (default: false)
- `INFLUXDB_DATABASE` (default: site_dev)
- `INFLUXDB_USERNAME` (default: root)
- `INFLUXDB_PASSWORD` (default: root)

- `STATSD_PORT` (default: 8125)
- `STATSD_DEBUG` (default: false)
- `STATSD_ENABLE_FLUSH` (default: true)
- `STATSD_ENABLE_PROXY` (default: false)
- `STATSD_PROXY_FLUSH_INTERVAL` (default: 1000)
