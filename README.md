# Twitch Multi Stream Auto-Mute

<p align="center">
  <img src="https://lh3.googleusercontent.com/tvJSaRK1zE6ENFFr0Ug8ysexIOfnjuIJdhNvMNRTPszsf-OoHdkKd_sdsBrsrh1WebkG-w54zACXgzZ5WcjWJLET=w640-h400-e365-rj-sc0x00ffffff">
</center>

This extension allows you to **follow multiple Twitch streams at once** without hearing the sound of all open streams, but only the one you're currently watching.

Every time you switch tab to another Twitch stream, the one you leave is automatically muted and the one you start watching is automatically unmuted. So whether you have 1, 2 or 10 streams open in 1, 2 or 10 different tabs, **you'll only ever hear the sound of the one you're currently on**.

## Get it on the Chrome Webstore!

⬇ Install the extension by clicking on the image below ⬇

[<img src="https://developer.chrome.com/static/docs/webstore/branding/image/206x58-chrome-web-bcb82d15b2486.png">](https://chrome.google.com/webstore/detail/twitch-multi-stream-auto/dnjockganjfnlkfengbekkkbplpfpold)

## Reminders (for myself)

### Zipping

```bash
TMSAM_VERSION=X.Y.Z
cd twitch-multi-stream-auto-mute/
zip twitch-multi-stream-auto-mute-v$TMSAM_VERSION.zip icon/128.png background-service-worker.js content-script.js manifest.json
mv twitch-multi-stream-auto-mute-v$TMSAM_VERSION.zip ..
cd ..
```
