(function($window){
    'use strict';
    $window.$dispatch = function() {
        var view, controller;
    };
})(window);;(function($window){
    'use strict';
    $window.wine = function() {
        /**
         * $type object Object
         */
        var config = {};
        
        /**
         * @type object $route
         */
        var route;
        
        /**
         * 
         * @type object $dispatch;
         */
        var dispatch;
        
        /**
         * 
         * @param string type type of configuration
         * @param object configuration items
         * @returns self
         */
        this.setConfig = function(type, object) {
            config[type] = object;
            return this;
        };
        
        
        this.getConfig = function(type) {
            return config[type];
        };
        /**
         * Runs application
         * @returns void
         */
        this.run = function() {
            route = new $route(this);
            dispatch = new $dispatch(this);
            //dispatch.setController(route.controller).setView(route.view);
        };
    };
})(window);;(function($window, $location){
    'use strict';
    $window.$route = function(wine) {
        var config = wine.getConfig('route');
        var getRegExp = function(pseudo) {
            console.log(pseudo);
            if(!pseudo.match(/[a-z0-9\-_\(\):\/]+/)) {
                throw "invalid charectors in uri " + pseudo;
            }
            
            var segments = pseudo.replace(/^\//, '').replace(/\/$/, '').split('/');
            var regEx = '^/?';
            for(var i in segments) {
                if(segments[i].match(/\(:any\)/)) {
                    segments[i] = segments[i].replace('(:any)', '[a-z0-9-_]+'); 
                } 
                if(segments[i].match(/\(:num\)/)) {
                    segments[i] = segments[i].replace('(:num)', '[0-9]+'); 
                }
                if(segments[i].match(/\(:alpha\)/)) {
                    segments[i] = segments[i].replace('(:alpha)', '[a-z-_]+'); 
                }
                regEx += segments[i] + '/';
            }
            regEx += '?$';
            return new RegExp(regEx, 'i');
        };
        var matchRoute = function(matchUri, uri) {
            var rgexp = getRegExp(matchUri);
            return rgexp.test(uri);
        };
        var parse = function(uri) {
            var found = false;
            for(var state in config) {
                if(matchRoute(config[state].uri, uri)) {
                    console.log(config[state].controller, config[state].view, config[state].module);
                    found = true;
                    break;
                }
            }
            if(!found) {
                $window.location.hash = '';
            }
            
        };
        var dispatch = function(uri) {
            parse(uri);
        };
        $window.onhashchange =  function(x, y){
            dispatch($location.hash.replace(/#/, ''));
        };
        dispatch($location.hash.replace(/#/, ''));
    };
})(window, location);