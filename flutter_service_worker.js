'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fa5adc6d5688dbd143e6ce0dc6a1d91d",
"index.html": "07424c77a0bfa122ec652fcb8d3c230b",
"/": "07424c77a0bfa122ec652fcb8d3c230b",
"firebase-messaging-sw.js": "06cc64c8f34234f4558efac2fcd160e1",
"main.dart.js": "dfbd8169c5ede21d0755641b8ba6d69d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6fb1d0c1bbadf5f5639a315eab362793",
"assets/AssetManifest.json": "6edc781b081fc07a739ca56cc20dcb39",
"assets/NOTICES": "031fe787e7a9ea677f6c0bc8bf4f5772",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "634c66f509f597fd63323afe91e78ee0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Siyob%2520Agromash-3.png": "99e622bfec3aae2a55506447b845e8b7",
"assets/assets/Siyob%2520Agromash-3.jpg": "a27f4eda85dfd4d3cb7c5d925826f0c0",
"assets/assets/%25D1%2585%25D0%25BE%25D0%25B7%25D1%2582%25D0%25BE%25D0%25B2%25D0%25B0%25D1%2580%25D1%258B.jpeg": "44a6dfa0f4c6f858f6e31f36a76abf51",
"assets/assets/%25D0%25B7%25D0%25B0%25D0%25BF%25D1%2587%25D0%25B0%25D1%2581%25D1%2582%25D0%25B8.jpeg": "a0093288eebfcb4b54f2203b4660cf4d",
"assets/assets/%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25D0%25B8.jpeg": "f4eac500df2313bfdfcbddaea20641bf",
"assets/assets/whiteLogo.jpeg": "56a64d347c8956a86712ed3db137020d",
"assets/assets/Siyob%2520Agromash.jpeg": "4678896608b1474c73f5ca620dc838d3",
"assets/assets/%25D0%25BA%25D0%25B0%25D0%25BC%25D0%25B5%25D1%2580%25D1%258B.jpeg": "1bef3e44f6d9850c6dcd19006feed65d",
"assets/assets/%25D1%2581%25D0%25B5%25D0%25BB%25D1%258C%25D1%2585%25D0%25BE%25D0%25B7.jpeg": "7d1235dd3b0f108c2a34b60c509c7f7f",
"assets/assets/tire-logo.png": "85703fb2216a3a2c067b375f35e1f194",
"assets/assets/logo1.png": "e1ef096a16680ff38d5b9d781d75a1c2",
"assets/assets/logoWhie.png": "23fd8eb9042e9c5e0e8ffdf12035dd61",
"assets/assets/logo2.jpg": "1eb37d42954e2cc5eb77e401b4d2bc97",
"assets/assets/logo.png": "4148610985faca193bee7b90ab8d7a6c",
"assets/assets/shlogo.png": "91d15f72d170257080109bce975ca73b",
"assets/assets/whiteLogo.png": "6e9bc559097649d3dd7912c8f8f337f9",
"assets/assets/%25D0%25BC%25D0%25B0%25D1%2581%25D0%25BB%25D0%25BE.png": "06844fb08b1bc5144c93b5ff3c9d3163",
"assets/assets/primary_logo.png": "dcfbfd0bf48253f1489c9ea9216802be",
"assets/assets/%25D1%2588%25D0%25B8%25D0%25BD%25D0%25B0.jpeg": "66a9f56280cb90148c5d18afa2fb8e31",
"assets/assets/%25D0%25B0%25D0%25BA%25D1%2583%25D0%25BC%25D1%2583%25D0%25BB%25D1%258F%25D1%2582%25D0%25BE%25D1%2580.jpeg": "a48abc72fd55dd361879071cb6a76611",
"assets/assets/%25D1%2588%25D0%25B8%25D0%25BD%25D0%25B0.png": "85703fb2216a3a2c067b375f35e1f194",
"assets/assets/Siyob%2520Agromash%2520PNG.png": "964491cdb793281eb0f735b84b594c8b",
"assets/assets/SiyobAgromash.png": "ce676ce2f9667ab18f4e7f764cd60fc6",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
