docker-statsd-influxdb
======================

Out-of-the-box StatsD + InfluxDB backend image for Docker


## Running

Example command to run this image:

    docker run -p 8125:8125 -e "INFLUXDB_HOST=localhost" -e "INFLUXDB_DATABASE=site_dev" -e "INFLUXDB_USERNAME=username" -e "INFLUXDB_PASSWORD=password" -e "STATSD_DEBUG=true" shakr/docker-statsd-influxdb

Following environment varaiables can be used:

- INFLUXDB\_HOST (default: localhost)
- INFLUXDB\_PORT (default: 8086)
- INFLUXDB\_DATABASE (default: site_dev)
- INFLUXDB\_USERNAME (default: root)
- INFLUXDB\_PASSWORD (default: root)
- STATSD\_PORT (default: 8125)
- STATSD\_DEBUG (default: false)