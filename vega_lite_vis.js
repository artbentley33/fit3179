var charts = [
    { id: "#milk_utilisation", spec: "charts/01_milk_utilisation.vg.json" },
    { id: "#milk_by_state_map", spec: "charts/02_milk_by_state_map.vg.json" },
    { id: "#production_by_type", spec: "charts/03_production_by_type.vg.json" },
    { id: "#composition_scatter", spec: "charts/04_composition_scatter.vg.json" },
    { id: "#consumption_trend", spec: "charts/05_consumption_trend.vg.json" },
    { id: "#imports_by_origin", spec: "charts/06_imports_by_origin.vg.json" },
    { id: "#exports_value_by_region", spec: "charts/07_exports_value_by_region.vg.json" },
    { id: "#export_flow_map", spec: "charts/08_export_flow_map.vg.json" },
    { id: "#top_producers", spec: "charts/09_top_producers.vg.json" },
    { id: "#medals_by_state_map", spec: "charts/10_medals_by_state_map.vg.json" }
];

charts.forEach(function(chart) {
    vegaEmbed(chart.id, chart.spec, { actions: false }).catch(console.error);
});
