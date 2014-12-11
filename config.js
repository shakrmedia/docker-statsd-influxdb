{
  influxdb: {
    host: process.env.INFLUXDB_HOST || process.env.INFLUXDB_MASTER_SERVICE_HOST || "localhost",
    port: process.env.INFLUXDB_PORT || process.env.INFLUXDB_MASTER_SERVICE_PORT || 8086,
    database: process.env.INFLUXDB_DATABASE || "site_dev",
    username: process.env.INFLUXDB_USERNAME || "root",
    password: process.env.INFLUXDB_PASSWORD || "root",
    flush: {
      enable: true
    },
    proxy: {
      enable: false,
      suffix: 'raw',
      flushInterval: 1000
    }
  },
  port: process.env.STATSD_PORT || 8125,
  debug: process.env.STATSD_DEBUG || false,
  backends: ['statsd-influxdb-backend']
}