# ngTrack
Angular Multi-Provider Pixel Tracking

ngTrack provides a unified api for managing pixel tracking codes from providers such as facebook, google and adroll.

##setup:
include the pixel tracking code from your providers of choice in your index.html

###facebook
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

###google
```
<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
```


###todo:
-[x] google support
-[x] facebook support
-[] adroll support
