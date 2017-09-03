fromStream('monitoring').
    when({
        '$init' : function(s,e) {
            return { "timeMillis": new Date().getTime() };
        },
        '$any' : function(s,e) {
            var event = JSON.parse(e.bodyRaw);
            var appName = event.appInfo.appName;
            emit(appName + '-info', 'ApplicationStarted', event);
        }
    });