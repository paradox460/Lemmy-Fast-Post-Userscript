if (!GM_getValue('obsoleteAlert')) {
  alert("The lemmy-fast-post userscript is not needed on lemmy instances running 0.18.1-rc.8 or higher.\nKeeping it enabled can lead to duplicate posts.\nThis alert will not be shown again.")
  GM_setValue('obsoleteAlert', true);
}


const keydownHandler = ({ target, key, metaKey, ctrlKey }) => {
  if (key === 'Enter' && (metaKey || ctrlKey)) {
    const parentForm = target.closest('.markdown-textarea');

    target.removeEventListener('keydown', keydownHandler);

    if (GM_getValue('language')) {
      const languageSelect = parentForm.querySelector(".form-select[id^=language-select]");
      ([...languageSelect.options]).find(({ value }) => value === GM_getValue('language')).selected = true;
      languageSelect.dispatchEvent(new Event('change'));
    }
    // Click submit to trigger the `submit` form event, as `submit` doesn't
    parentForm.querySelector('button[type=submit]').click();
  }
}

document.addEventListener('focusin', ({ target }) => {
  if (target.matches('.markdown-textarea textarea')) {
    target.addEventListener('keydown', keydownHandler);
  }
});

document.addEventListener('focusout', ({ target }) => {
  if (target.matches('.markdown-textarea textarea')) {
    target.removeEventListener('keydown', keydownHandler);
  }
})
