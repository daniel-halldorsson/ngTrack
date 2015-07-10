# ngTrack
Angular Multi-Provider Pixel Tracking

ngTrack provides a unified api for managing pixel tracking codes from providers such as facebook, google and adroll.

##setup:
####include assets
Include angular-track.js and the pixel tracking code from your providers of choice in to the `<head>` of your index.html

```
<script src="[path to library]/angular-track.js"></script>
```

#####facebook
```
<!-- start facebook pixel tracking -->
<script>
(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
window._fbq = window._fbq || [];
</script>
<!-- end facebook pixel tracking -->
 ```

#####google
```
<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
```

####inject into application
Inject 'ngTrack' in to your application
```
angular.module('myApp', ['ngTrack']);
```  

Include 'trackingService' into any controller where you wish to use it.
```
myApp.controller('ExampleController', ['trackingService', function(trackingService) { }]);
```


#usage

####basic tracking
Simply pass in the provider name and tracking code to trackingService.track(), you can track via as many providers at a time as you like.
```
trackingService.track({
    facebook:"1234567891011",
    google:"9876543210",
    adroll:"ABCDEFGHIJKLMNOPQRSTUV"
});
```


#### custom data
If you need more control and want to use custom data, you can call the provider tracking function directly and supply
a 'customData' object in a format the provider will accept, please see individual provider documentation on how to format this data
```
trackFacebook('1234567891011',{'value':'10.00','currency':'USD'});
trackGoogle('9876543210',{'parameter1':'abc123','parameter2':'29.99'});
//etc...
```

##todo:
- [x] angular 1.x support
- [x] google support
- [x] facebook support
- [x] custom tracking data
- [ ] adroll support
- [ ] angular2 support
