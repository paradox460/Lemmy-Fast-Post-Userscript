const keydownHandler = ({ target, key, metaKey, ctrlKey }) => {
  if (key === 'Enter' && (metaKey || ctrlKey)) {
    target.removeEventListener('keydown', keydownHandler)
    // Click submit to trigger the `submit` form event, as `submit` doesn't
    target.closest('.markdown-textarea').querySelector('button[type=submit]').click()
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
