/**
 * Async Pixel Tracking for AngularJS - Daniel Halldorsson 2015
 */

(function(window, angular, undefined) {'use strict';

angular.module('ngTrack', [])

    .factory('trackingService', function(){
        // private methods
        function trackFacebook(facebookPixelId){
            //facebook pixel id
            //console.log("tracking facebook pixel with id:" + facebookPixelId);
            if(typeof window._fbq.push === "function") {
                window._fbq.push(['track',facebookPixelId]);
            } else {
                return false;
            }          
        }
    
        function trackGoogle(googlePixelId){
            //google_conversion_id
            if (typeof window.google_trackConversion === "function") { 
                //console.log("tracking google pixel with id:" + googlePixelId);   
                window.google_trackConversion({
                  google_conversion_id: googlePixelId, 
                  google_remarketing_only: false
                });
            } else {  
                return false;
            }        
        }
    
        function trackAdroll(adrollPixelId){
            //todo
        }
        
        // public methods
        return {
            track:function(pixels) {
                
                if(_.has(pixels, 'facebook')) {
                    trackFacebook(pixels.facebook);   
                }                
                if(_.has(pixels, 'google')) {
                    trackGoogle(pixels.google);   
                }
                if(_.has(pixels, 'adroll')) {
                    trackAdroll(pixels.adroll);   
                }       
            }
        } 
        
    })

})(window, window.angular);
