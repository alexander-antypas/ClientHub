let cacheData="appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/triangle_image.jpg',
                '/triangle_back.jpg',
                '/favicon.ico',
                '/static/media/triangle_back.9580890d2bc11dab70e7.jpg',
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