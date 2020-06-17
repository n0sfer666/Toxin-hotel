function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('./styles/', false, /\.scss$/));
importAll(require.context('./vendors/', true, /\.scss$/));
importAll(require.context('./components/', true, /\.(scss|js|jpeg|jpg|png)$/));
importAll(require.context('./pages/', true, /\.(js|scss|jpeg|jpg|png)$/));
