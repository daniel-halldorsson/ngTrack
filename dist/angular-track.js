/**
 * Async Pixel Tracking for AngularJS
 * Author: Daniel Halldorsson
 * Date: 2015
 */

(function (window, angular, undefined) {
    'use strict';
    angular.module('ngTrack', [])
        .factory('trackingService', function () {
        
            /* ---------------------------------------------------------------------
             * public interface
             * --------------------------------------------------------------------- */
            var service = {
                track: track,
                trackFacebook: trackFacebook,
                trackGoogle: trackGoogle,
                trackAdroll: trackAdroll,
            }
            return service;

            /* ---------------------------------------------------------------------
             * public methods
             * --------------------------------------------------------------------- */
        
            /**
             * track()         - submit one or many pixel tracking codes to
             *                   their respective providers at once
             *                   expects an object with any of the keys: facebook, google, adroll
             */
            function track(pixels) {
                if (_.has(pixels, 'facebook')) {
                    trackFacebook(pixels.facebook, null);
                }
                if (_.has(pixels, 'google')) {
                    trackGoogle(pixels.google, null);
                }
                if (_.has(pixels, 'adroll')) {
                    trackAdroll(pixels.adroll, null);
                }
            }
        
            /**
             * trackFacebook() - submit a pixel tracking code to facebook
             *                   accepts a facebook pixel_id see: https://developers.facebook.com/docs/ads-for-websites/conversion-pixel-code-migration
             *                   an optional json object of customData formatted to facebooks
             *                   specifications may also be supplied
             */
            function trackFacebook(facebookPixelId, customData) {
                if (typeof window._fbq.push === "function") {
                    //console.log("tracking facebook pixel with id:" + facebookPixelId);
                    if (customData) {
                        window._fbq.push(['track', facebookPixelId, customData]);
                    } else {
                        window._fbq.push(['track', facebookPixelId]);
                    }
                } else {
                    return false;
                }
            }

            /**
             * trackGoogle()   - submit a pixel tracking code to google
             *                   accepts a google_conversion_id see: https://developers.google.com/adwords-remarketing-tag/asynchronous/
             *                   an optional json object of customData formatted to googles
             *                   specifications may also be supplied
             */
            function trackGoogle(googlePixelId, customData) {
                if (typeof window.google_trackConversion === "function") {
                    if (customData) {
                        window.google_trackConversion({
                            google_conversion_id: googlePixelId,
                            google_remarketing_only: false,
                            google_custom_params: {
                                customData
                            }
                        });
                    } else {
                        window.google_trackConversion({
                            google_conversion_id: googlePixelId,
                            google_remarketing_only: false
                        });
                    }

                } else {
                    return false;
                }
            }

            /**
             * trackAdroll()   - submit a pixel tracking code to Adroll
             *                   accepts a adroll pixel id see: [coming soon]
             *                   an optional json object of customData formatted to adrolls
             *                   specifications may also be supplied
             */
            function trackAdroll(adrollPixelId, customData) {
                //todo
                return false;
            }

        })

})(window, window.angular);