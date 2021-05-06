//
// Functions
//

function muteOtherStreams() {
  chrome.runtime.sendMessage({ type: 'mute_other_streams' })
}

function setupPageVisibilityChangeListener() {
  document.addEventListener('visibilitychange', () => {
    // Mute other streams when switching to this one
    if (document.visibilityState === 'visible')
      muteOtherStreams()
  })
}

//
// Init
//

setupPageVisibilityChangeListener()

// Mute other streams when opening this one if the user is on it
if (document.visibilityState === 'visible')
  muteOtherStreams()

