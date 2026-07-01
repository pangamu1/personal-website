// Single source of truth for projects.
// `featured: true` → appears in the Home deck (max 5).
// Art is a procedural gradient placeholder — swap for real screenshots later.
window.PROJECTS = [
  { k: 'Forecasting',      t: 'Sales Predictor', d: 'Time-series engine forecasting revenue across 12 product lines at 94% accuracy.', c1: '#2b5d8f', c2: '#f4b183', featured: true },
  { k: 'Machine Learning', t: 'Churn Engine',    d: 'Gradient-boosted classifier driving an 18% reduction in customer churn.',         c1: '#4a3f7a', c2: '#c9b7e8', featured: true },
  { k: 'Data Engineering', t: 'Event Pipeline',  d: 'Streaming ingestion of 2M+ daily events into a dbt-modeled warehouse.',           c1: '#1d4e63', c2: '#7fd0e0', featured: true },
  { k: 'Geospatial',       t: 'Hotspot Mapper',  d: 'Temporal clustering of urban incident data for city-planning decisions.',         c1: '#7a3b52', c2: '#ffb0c8', featured: true },
  { k: 'NLP',              t: 'Review Miner',    d: 'Transformer pipeline surfacing themes from 400k product reviews.',                c1: '#31518c', c2: '#9db8ff', featured: true },
  { k: 'Dashboards',       t: 'Ops Cockpit',     d: 'Real-time operational dashboard unifying six data sources into one view.',        c1: '#2c5e4a', c2: '#93d9b4', featured: false },
];

// Shared gradient placeholder used by both the deck and the grid.
window.projectArt = function (p) {
  return 'background:' +
    'linear-gradient(205deg, rgba(255,255,255,0.28), transparent 42%),' +
    'radial-gradient(130% 100% at 24% 10%, ' + p.c2 + ' 0%, transparent 60%),' +
    'radial-gradient(125% 110% at 82% 96%, ' + p.c1 + ' 25%, transparent 90%),' +
    'linear-gradient(180deg, ' + p.c2 + '99, ' + p.c1 + ');';
};
