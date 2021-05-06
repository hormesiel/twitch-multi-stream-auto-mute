chrome.runtime.onMessage.addListener((message, sender, reply) => {
  if (message.type === 'mute_other_streams') {
    // Mute all Twitch tabs except the one that sent the message
    chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, twitchTabs => {
      twitchTabs.forEach(tab => chrome.tabs.update(tab.id, {
        muted: tab.id !== sender.tab.id
      }))
    })
  }
})
