//
// Functions
//

function setupPageVisibilityChangeListener() {
  document.addEventListener('visibilitychange', () => toggleSound())
}

function init() {
  setSoundEnabled(true)
  setupPageVisibilityChangeListener()
}

function isSoundEnabled() {
  // Sound is enabled when the direct child of the sound icon's <svg> is a <g> element
  // Sound is disabled when the direct child of the sound icon's <svg> is a <path> element
  return document.querySelector('[data-a-target=player-mute-unmute-button] svg > *').nodeName === 'g'
}

function setSoundEnabled(enabled) {
  if (enabled && !isSoundEnabled())
    toggleSound()
  else if (!enabled && isSoundEnabled())
    toggleSound()
}

function toggleSound() {
  document.querySelector('[data-a-target=player-mute-unmute-button]').click()

  setTimeout(
    () => {
      const soundState = isSoundEnabled() ? 'enabled' : 'disabled'
      console.debug('[twitch-auto-mute] @toggleSound() -> sound ' + soundState)
    },
    100 // after next DOM update, once `click()` has been executed
  )
}

//
// Init
//

init()
