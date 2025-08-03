const CACHE_NAME = 'ash-ember-cache-v1';
const OFFLINE_URLS = L
'',
'/index.html',
'/app.js',
'/main.js'
'/manifest.json'
self.addEventListener( 'install', event => {
event.waitUntil(
caches. open (CACHE_NAME) . then (cache =>
cache. addAll (OFFLINE_URLS) )
｝）；
self addEventListener ('activate', event →> { event.waitUntil(
caches. keys ().then (keys =>
Promise.all(
keys. filter (key => key !==
CACHE_NAME) • map (key => caches.delete(key) )
)
) ;
}) ;

self addEventListener ('fetch', event => {
event. respondWith(
caches.match (event. request). then (response =>
response || fetch(event. request)
)
) ;
}) ;
