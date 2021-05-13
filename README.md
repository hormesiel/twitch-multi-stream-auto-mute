# Twitch Multi Stream Auto-Mute

<p align="center">
  <img src="https://lh3.googleusercontent.com/tvJSaRK1zE6ENFFr0Ug8ysexIOfnjuIJdhNvMNRTPszsf-OoHdkKd_sdsBrsrh1WebkG-w54zACXgzZ5WcjWJLET=w640-h400-e365-rj-sc0x00ffffff">
</center>

This extension allows you to **follow multiple Twitch streams at once** without hearing the sound of all open streams, but only the one you're currently watching.

Every time you switch tab to another Twitch stream, the one you leave is automatically muted and the one you start watching is automatically unmuted. So whether you have 1, 2 or 10 streams open in 1, 2 or 10 different tabs, **you'll only ever hear the sound of the one you're currently on**.

## Get it on the Chrome Webstore!

[![](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png)](https://chrome.google.com/webstore/detail/twitch-multi-stream-auto/dnjockganjfnlkfengbekkkbplpfpold)

## Zipping

```bash
TMSAM_VERSION=X.Y.Z
cd twitch-multi-stream-auto-mute/
zip twitch-multi-stream-auto-mute-v$TMSAM_VERSION.zip icon/128.png background-script.js content-script.js manifest.json
mv twitch-multi-stream-auto-mute-v$TMSAM_VERSION.zip ..
cd ..
```
