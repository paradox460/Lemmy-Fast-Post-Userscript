import "./warning.js"

// Handles submit for older lemmy instances
const keydownHandler = ({ target, key, metaKey, ctrlKey }) => {
  if (key === 'Enter' && (metaKey || ctrlKey)) {
    target.removeEventListener('keydown', keydownHandler);

    // Click submit to trigger the `submit` form event, as `submit` doesn't, and
    // LemmyUI is written in Inferno, which binds to the submit event.
    target.closest('.markdown-textarea').querySelector('button[type=submit]').click();
  }
}

document.addEventListener('focusin', ({ target }) => {
  if (target.matches('.markdown-textarea textarea')) {
    GM_getValue('fastPost', true) && target.addEventListener('keydown', keydownHandler);
    if (GM_getValue('language')) {
      const languageSelect = target.closest('.markdown-textarea').querySelector(".form-select[id^=language-select]");
      if (languageSelect.value === 'undefined') {
        ([...languageSelect.options]).find(({ value }) => value === GM_getValue('language')).selected = true;
        languageSelect.dispatchEvent(new Event('change'));
      }
    }
  }
});

document.addEventListener('focusout', ({ target }) => {
  if (target.matches('.markdown-textarea textarea')) {
    target.removeEventListener('keydown', keydownHandler);
  }
})
