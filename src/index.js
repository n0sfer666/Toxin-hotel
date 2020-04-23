function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./styles/', false, /\.scss$/));
importAll(require.context('./components/', true, /\.scss$/));
importAll(require.context('./components/', true, /\.js$/));
importAll(require.context('./pages/', true, /\.js$/));
importAll(require.context('./pages/', true, /\.scss$/));
importAll(require.context('./components/', true, /\.(jpeg|jpg|png)$/));
importAll(require.context('./pages/', true, /\.(jpeg|jpg|png)$/));