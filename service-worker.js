//self.addEventListener('install', function(event){
//    console.log('service worker installed');
//    event.waitUntil(caches.open('static')
//    .then(function(cache){
//        cache.addAll([
//            '/',
//            'index.php',
//            'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
//            'bootstrap-assets/js/bootstrap.min.js',
//            'js/custom.js',
//            'img/sliders/home1.jpg',
//            'img/sliders/home2.jpg',
//            'img/sliders/home5.jpg',
//            'img/sliders/home6.jpg',
//            'https://connect.facebook.net/en_US/fbevents.js-'
//        ]);
//    })
//);
//    
//});

self.addEventListener('activate', function(evemt){
    console.log('service worker activated');
});
self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
