let cacheData="appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/triangle_image.png',
                '/triangle_back.png',
                '/favicon.ico',
                '/static/media/triangle_back.2b9862a7ed739e83ec63.png',
                '/manifest.json',
                '/simplified',
                '/analytical',
                '/about',
                '/mulesme',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
                let requestUrl= event.request.clone()
                fetch(requestUrl)
            })
        )
    }
})