FROM grafana/grafana-enterprise:12.4.0

USER root

RUN grafana-cli plugins install grafana-piechart-panel && \
    grafana-cli plugins install vertamedia-clickhouse-datasource && \
    grafana-cli plugins install grafana-polystat-panel && \
    grafana-cli plugins install grafana-clock-panel
