if (!GM_getValue('seenUpdateWarning', false) && GM_getValue('fastPost', 'unset') === 'unset') {
  alert(`By default the lemmy-fast-post userscript will add a keybinding for fast submit.

If your instance is using a version of lemmy frontend newer than v0.18.1-rc.8 or higher, you should disable fast posting.

In your userscript configuration, set the "fastPost" value to false.
See the readme for details.


This warning will not be shown again
`)
GM_setValue('seenUpdateWarning', true)
}
