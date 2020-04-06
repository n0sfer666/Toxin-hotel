function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./styles/', false, /\.scss$/));
importAll(require.context('./components/', true, /\.((scss)|js|png|jpeg|jpg)$/));
