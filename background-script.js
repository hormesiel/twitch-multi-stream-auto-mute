//
// Message listener
//

const MAX_RETRY_DURATION = 500 // 500ms
const RETRY_DELAY = 50 // 50ms


//
// Message listener
//

chrome.runtime.onMessage.addListener((message, sender, reply) => {
  if (message.type === 'mute_other_streams') {
    // Mute all Twitch tabs except the one that sent the message.
    //
    // NOTE: If the user changes tab using his keyboard, `chrome.tabs.query()` will work on the first call, but if he
    // uses his mouse `query()` will return an error. In this case, we'll retry every RETRY_DELAY until it works or
    // abort after MAX_RETRY_DURATION.

    muteOtherTwitchTabs(sender.tab, 0)
  }
})

//
// Functions
//

function muteOtherTwitchTabs(currentTab, timeElapsedSinceFirstTry) {
  chrome.tabs.query({ url: 'https://*.twitch.tv/*' }, twitchTabs => {
    // If something wrong happened
    if (chrome.runtime.lastError) {
      // If less than 1sec has elapsed since the content script sent the command, retry after a small delay
      if (timeElapsedSinceFirstTry < MAX_RETRY_DURATION) {
        setTimeout(() => muteOtherTwitchTabs(currentTab, timeElapsedSinceFirstTry + RETRY_DELAY), RETRY_DELAY)
        return
      }
      // Otherwise abort and log the error
      else {
        console.error(chrome.runtime.lastError.message)
        return
      }
    }

    twitchTabs.forEach(tab => chrome.tabs.update(tab.id, {
      muted: tab.id !== currentTab.id
    }))
  })
}
