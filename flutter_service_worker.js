'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c483f838fd54050dc758fc0568793041",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/background.jpg": "8e0b36e2e8e7c81530c9a12dbfc087a1",
"assets/images/background2.png": "88a028ee9abc9d553779682826e3045d",
"assets/images/brust.jpg": "d2f2a30677f08860a85692262262760f",
"assets/images/logo.jpg": "003b5ec4d82280a3e5df779852fd8b6c",
"assets/images/wide1.png": "a8f499e077fd9a7c0eee5b09aa94f6c0",
"assets/images/wide2.png": "b941413d5d8c93de18cefc002ea12905",
"assets/images/wide3.png": "5f4a7968b0746d9c576a3342f6a86244",
"assets/images/wide4.png": "9f0c8034ca02d12949d16adcabec3a46",
"assets/images/wide5.png": "c8fbd4641dbc24f094a049d29492a466",
"assets/images/wide6.png": "cb346aacffe2e0094bd4ff9667bdeb6e",
"assets/images/wide7.png": "acf55ee46a9026aa192b7bacb96c59af",
"assets/images/wide8.png": "c7001af770306669f90bedc703c1ea4c",
"assets/NOTICES": "31077a2471193adacfb3cb50ddd7133e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"assets/videos/Anfersen.mp4": "2aa2a4b5f1c0abf66b90599d2872ceef",
"assets/videos/ArcherPushUps.mp4": "b7312f9ddc3f88e51098d7134e4ac414",
"assets/videos/BizepsCurls.mp4": "e31b75074dfcf27abde5b54426de0c4a",
"assets/videos/Burpees.mp4": "a50640dec965b869f33c4c32317b9b24",
"assets/videos/CrabWalk.mp4": "e631dd5cf5ac98bd28064a351d134d6f",
"assets/videos/Crunches.mp4": "59d03a5475d03bd7dcafd18ecf05a3bb",
"assets/videos/DiamondPushUps.mp4": "715eccff7ee68ddb22847cb2dd9660c5",
"assets/videos/ElevatedPushUp.mp4": "7d09058f02765c1e9868f1ea407767c8",
"assets/videos/FeetElevatedPushUp.mp4": "333d39d502f18197350bcde6267bb941",
"assets/videos/Hampelmann.mp4": "7fbbffdaaee2ed9b84b4b2cf55e97677",
"assets/videos/HeelTouch.mp4": "6d1c39a7395ccdd8070f40ca1a87706c",
"assets/videos/HighKnee.mp4": "075da9ac5a19907dd66bfc6bdc1b44e4",
"assets/videos/Lunges.mp4": "135414ff4b92e20edda2fd54316b6a94",
"assets/videos/MountainClimbers.mp4": "44b946eef09ab4f7366ad5ba08c40cbb",
"assets/videos/Nackenheben.mp4": "a09485ef1c1aa107231e6661fed8eb85",
"assets/videos/Plank.mp4": "d15fcf74826050a279f1ee352ef585bd",
"assets/videos/PushUps.mp4": "3ed522b85677118bcd9094c648ee9c30",
"assets/videos/Rudern.mp4": "c946cd8ea53e4afba924e9c2abc9a111",
"assets/videos/Seitenheben.mp4": "4fe64b787c4dcd813c467954fbdbde38",
"assets/videos/ShoulderPress.mp4": "fa94da788b4cad629e995414cf079bb2",
"assets/videos/Squats.mp4": "2245b0d2f7c32416dcfac21144b96b59",
"assets/videos/Superman.mp4": "578193f75908dda96796bdf5e4dc173a",
"assets/videos/TricepKabelzug.mp4": "601e3d1721e24a5a1813a100082cef52",
"assets/videos/TricepPushUps.mp4": "83704c48546568f4ac85360fe1cf895e",
"assets/videos/W-Rows.mp4": "b5cc3d310b6690983a2593d0e4529d15",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45748dbc301e59060e3dda81c277a967",
"/": "45748dbc301e59060e3dda81c277a967",
"main.dart.js": "a6df998ee1a12e29351499d4ac317e2d",
"manifest.json": "d53d1d41f0a81b507a8c35155a735c70",
"version.json": "a7cd14fa96d6303b02782e28a7478ed0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
