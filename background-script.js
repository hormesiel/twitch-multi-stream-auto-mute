chrome.runtime.onMessage.addListener((message, sender, reply) => {
  if (message.type === 'mute_other_streams') {
    // Mute all Twitch tabs except the one that sent the message
    chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, twitchTabs => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }

      twitchTabs.forEach(tab => chrome.tabs.update(tab.id, {
        muted: tab.id !== sender.tab.id
      }))
    })
  }
})
