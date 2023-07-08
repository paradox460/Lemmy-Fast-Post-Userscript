# Lemmy Fast Post

Allows you to command/ctrl + enter within the text area to submit a comment.

Note that if your home instance is running 0.18.1-rc.8 or higher, you should [disable fast posting.](#disabling-fast-posting)

## Installation

You'll need a UserScript manager. I like [ViolentMonkey](violentmonkey.github.io/)

# [Click here to install](https://github.com/paradox460/lemmy-fast-post-userscript/releases/latest/download/lemmy-fast-post.user.js)

## Configuration

### Adding Instances

Lemmy instances can have `any` url, so I don't ship this script with URLs configured. In your script manager, you'll need to add overrides for what pages it should match on. In ViolentMonkey, when viewing the script, the overrides are on the `Settings` page, under the `@match` rules.
Add your instance like this: `https://lemdro.id/*`

### Default Language
If you are tired of having to set the language _all_ the time, you can add a default language configuration to the script, and it will attempt to set the language to that automatically each time you invoke fast post.
Simply set the UserScript values `language` configuration to the string numeric id of the language. English, for example, is `"37"`

If no language value is set, the script will not change the language at all.

### Disabling Fast Posting

If your lemmy instance of choice is running 0.18.1-rc.8 or higher, you _should_ disable the fast post functionality. You can still keep the automatic language setting functionality enabled.

Set `fastPost` in the userscript values configuration to `false`, and refresh any pages. The language will still be set, but the post bind will be disabled

### All Configuration Options

| Key        | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| `language` | String  | The string of the numeric ID of the default language to set. |
| `fastPost` | Boolean | Toggles fast posting on or off. *Default is true*            |
