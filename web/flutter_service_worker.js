'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b007664e7828cebeb4c837138b6b2169",
"index.html": "2e59497a5a7445efdee34b4281988cc0",
"/": "2e59497a5a7445efdee34b4281988cc0",
"main.dart.js": "49b0faaed68e3e1cb783b4c431ff97c6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "232d0ba94746dc272d054cef4003b42a",
"assets/NOTICES": "cba734f73629aa648e4c94f044ee5ba1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "82091a3807aeaafebfa40504ece044c3",
"assets/fonts/MaterialIcons-Regular.otf": "d1ccedd9db3e47eccffbb982ad5f23b2",
"assets/assets/images/TAROT42.jpeg": "6d2102aaa1b5c2b96f27a7ea976dfcd9",
"assets/assets/images/TAROT15.jpeg": "aaddbf700d196b9e904182f546a2a158",
"assets/assets/images/TAROT03.jpeg": "5e72cbd7628c635f674f9548280ada1a",
"assets/assets/images/TAROT39.jpeg": "19eeb6f96738b504204526dd96d0bac9",
"assets/assets/images/TAROT020.jpeg": "9ee2b4bd2ed9c94bdcc40f72e90bea43",
"assets/assets/images/TAROT112.jpeg": "d4b1b2e4667b4e349645d613ecba9e5a",
"assets/assets/images/TAROT19.jpeg": "b3ce856f64faf893b1ebeaab0f486ce6",
"assets/assets/images/TAROT016.jpeg": "e517817afbdfb7c7362b6caf884f63e3",
"assets/assets/images/TAROT411.jpeg": "f5df9548456fd17797f2fc02a3a6030e",
"assets/assets/images/TAROT313.jpeg": "03623872238b830aefdf2da250bd0679",
"assets/assets/images/TAROT23.jpeg": "ce7dba6fa53fb4af2dc628a8726befef",
"assets/assets/images/TAROT35.jpeg": "b1f9a3d57adde69c7c9363bf9e54d0b0",
"assets/assets/images/TAROT34.jpeg": "1ffc1d0bce147f59cd42b74c006af943",
"assets/assets/images/TAROT312.jpeg": "c3d69f57b2eff89f3b253554ace63680",
"assets/assets/images/TAROT22.jpeg": "d36ab93724364d2a4327ee4150365012",
"assets/assets/images/TAROT410.jpeg": "e7b433f208113c57bbffffad2e904bfe",
"assets/assets/images/TAROT017.jpeg": "c1ac1495cb2a86f67adc0403e6ff28f4",
"assets/assets/images/TAROT18.jpeg": "4d0d6149a33259f7a44d2030f5e7fb4a",
"assets/assets/images/TAROT113.jpeg": "8b2bc41f93780f9b3aa997be1f241ff6",
"assets/assets/images/TAROT021.jpeg": "d7f02360003789c9fd296ea3af7f6331",
"assets/assets/images/TAROT38.jpeg": "cf1f36848e6dea47894263e0a144c74f",
"assets/assets/images/TAROT02.jpeg": "16efe97fdcab3d92f9b6e129f9ca6eb4",
"assets/assets/images/TAROT14.jpeg": "d32891c87d28cee4ce7b86d241b17ead",
"assets/assets/images/TAROT43.jpeg": "3391c7a841e01a7b34465971a63b8fe6",
"assets/assets/images/TAROT114.jpeg": "cf71c5e2b77e4ab099e91a0d77707e90",
"assets/assets/images/TAROT48.jpeg": "57df4dc69c195439ca972ca64b519124",
"assets/assets/images/TAROT010.jpeg": "851258a7f9994716cd0b2c8679ab9c8b",
"assets/assets/images/TAROT09.jpeg": "bce61a43794ccb972a205b07a6a723a1",
"assets/assets/images/TAROT25.jpeg": "473b72f7e5bb77ffd3146bf2ebfee72e",
"assets/assets/images/TAROT211.jpeg": "7d4e4765d7be406794e601ced5c3fc1d",
"assets/assets/images/TAROT33.jpeg": "bc483cbd8ef111ec5277e25f2c475ba3",
"assets/assets/images/TAROT44.jpeg": "23daded347856a7d941ba16beb5ddbf7",
"assets/assets/images/TAROT13.jpeg": "3a10aeab42e7cb7322baf3ce006a2c54",
"assets/assets/images/TAROT05.jpeg": "66f582afd29ba6cf0c61e181bce0df74",
"assets/assets/images/TAROT29.jpeg": "5c875aae2094f8b943fadfcd18b0f912",
"assets/assets/images/TAROT28.jpeg": "fc19c3c1e351f6a3c5d2c2b06937bab5",
"assets/assets/images/TAROT04.jpeg": "23389cd0907e007382d6bad472c87d7a",
"assets/assets/images/TAROT12.jpeg": "e97491ca6e020e6ab7a704e000582219",
"assets/assets/images/TAROT45.jpeg": "4fe820acec17ededfeaea55da449ce98",
"assets/assets/images/TAROT32.jpeg": "aa917e5463e986636a51337d6058cbe4",
"assets/assets/images/TAROT210.jpeg": "ced85c8820629aa581e720e2bb7054ef",
"assets/assets/images/TAROT314.jpeg": "66fba191522258da255309ab12274db1",
"assets/assets/images/TAROT24.jpeg": "5be7f375ffad962f0f18caa22646aebd",
"assets/assets/images/TAROT08.jpeg": "19e2393e2d8e3dcf68accfcbaf3b0ec2",
"assets/assets/images/TAROT011.jpeg": "c06b0113459a703d74e8b566ea3cbe35",
"assets/assets/images/TAROT49.jpeg": "059e836c6140b6abe016ea0c980e228e",
"assets/assets/images/TAROT31.jpeg": "246f9e9721a2335aabe1bbeaddd6b172",
"assets/assets/images/TAROT213.jpeg": "eeefd27718fb36c4d5b489a96c294aca",
"assets/assets/images/TAROT27.jpeg": "d17e374a09ba8af96b1d921634d1b13c",
"assets/assets/images/TAROT012.jpeg": "edb2e4f21a7d403b10818bce3a7c49ee",
"assets/assets/images/TAROT07.jpeg": "c4c8bb666844817e7174b7e262ad3151",
"assets/assets/images/TAROT11.jpeg": "0815c5d9e3b862b9f9476be36803cf41",
"assets/assets/images/TAROT46.jpeg": "064cb47dc45457562abbede11cac823f",
"assets/assets/images/TAROT47.jpeg": "647681802c0a5e255bbfe9492713d193",
"assets/assets/images/TAROT06.jpeg": "13ce4ae6bf88d3cbbdb906cdf4a551df",
"assets/assets/images/TAROT013.jpeg": "e3e467f92f238a6d7a4a53d06afec284",
"assets/assets/images/TAROT414.jpeg": "40f805a1d24fb190633aee92e70afc33",
"assets/assets/images/TAROT26.jpeg": "beede49fefa6a48a79fca8cd035604a4",
"assets/assets/images/TAROT212.jpeg": "14e1e42f8e02f58fca81e51043f7ded1",
"assets/assets/images/TAROT022.jpeg": "0476aa820e6803604c6a9ee3ba5ad509",
"assets/assets/images/TAROT018.jpeg": "43c69c5a1c6c68c280afd8561de49b00",
"assets/assets/images/TAROT01.jpeg": "b6038684c967f0ea499dc0aaa4fcd2a7",
"assets/assets/images/TAROT17.jpeg": "f31db35595b44732aece25713acb5f96",
"assets/assets/images/TAROT37.jpeg": "6972b055f4930fdf1516109b1d3c9177",
"assets/assets/images/TAROT311.jpeg": "ff1de5949e674545961f4deb2a6b04b2",
"assets/assets/images/TAROT21.jpeg": "7787c8e88bbcbc0b90d33ae8bc481b33",
"assets/assets/images/TAROT413.jpeg": "910854e9af55e79b342870d3a854c226",
"assets/assets/images/TAROT014.jpeg": "dd9e4397adf3870371aa3ab55f33313d",
"assets/assets/images/TAROT110.jpeg": "1ba0fc11453f3ed878474c4cacc6d3b5",
"assets/assets/images/TAROT111.jpeg": "1c9619a170722f206105d42e4ef78e1f",
"assets/assets/images/TAROT015.jpeg": "bd5879afea16329b996ec682943b20d2",
"assets/assets/images/TAROT412.jpeg": "3c4146f942b2f623f4f7c64548ef6e29",
"assets/assets/images/TAROT310.jpeg": "7f8f3cae2d5aa1f69875d1a44328c4e7",
"assets/assets/images/TAROT214.jpeg": "79e0898503f0e4504818a2db3324bc0a",
"assets/assets/images/TAROT36.jpeg": "796a147360bbe0191bef4ad6d33d056f",
"assets/assets/images/TAROT41.jpeg": "c6c3e990e2b6ac539b1950b59e303ae6",
"assets/assets/images/TAROT16.jpeg": "de858d9d936a07b742e488536a44fb7b",
"assets/assets/images/TAROT00.jpeg": "667fd58c8bb8051a7d651841e1117b2c",
"assets/assets/images/TAROT019.jpeg": "96139f8e11a5fe8926a0c5ea5176eadf",
"assets/assets/doc/tarodoc02.jpg": "53f3be9501bead463610e7eec3cfc217",
"assets/assets/doc/tarodoc03.jpg": "cf61cc92e9a7142ab879ce67fb42b0df",
"assets/assets/doc/tarodoc01.jpg": "48851d75da33b028baf5fa401c176edb",
"assets/assets/doc/tarodoc00.jpg": "6dd7a13aa83eb19dfcf8f90903d3f995",
"assets/assets/doc/tarodoc04.jpg": "77e5566f16cbedfb7d57bd13ccbe1ef3",
"assets/taroto/bout2105.jpeg": "01af419dbf1ae1547988d67629a6c0c9",
"assets/taroto/couleur05.jpeg": "92d8a6ce050a7d061f8862b1efa2a234",
"assets/taroto/dos05.jpeg": "ceaeccf7618f4eb9a4c97853b1c41f4f",
"assets/taroto/valet05.jpeg": "97a67e472a23be89249e5f0f46c42e0d",
"assets/taroto/bout0105.jpeg": "493204889a27e5148e4fd5b0b3ebd192",
"assets/taroto/atout05.jpeg": "050f14df7205dc4511a564fc1c949a7c",
"assets/taroto/boutexcuse05.jpeg": "c05f86d6d54eb4e27f84880944384d59",
"assets/taroto/dame05.jpeg": "b6dc5ac5dc28fc0fdb5c5abf2fc6740f",
"assets/taroto/cavalier05.jpeg": "43cf95b66ff3fcbe4ad5cdbf552bde6a",
"assets/taroto/couleur07.jpeg": "fc3881b380f70f4548a11f928d25ba6c",
"assets/taroto/roi05.jpeg": "585dcbca72b894601d8dad5d7d39c00e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
