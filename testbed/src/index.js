import './index.css';
import '@emoji-button/core/css/emoji-button.css';

import { EmojiButton } from '@emoji-button/core';
import NativeRenderer from '@emoji-button/renderer-native';
import TwemojiRenderer from '@emoji-button/renderer-twemoji';

document.querySelector('#version').innerHTML = `v${EmojiButton.version}`;

function createPicker(button, options, onEmoji) {
  const picker = new EmojiButton(options);
  picker.on('emoji', onEmoji);
  button.addEventListener('click', () => picker.togglePicker(button));
}

const native = document.querySelector('#native .emoji-button');
createPicker(
  native,
  {
    renderer: new NativeRenderer()
  },
  ({ emoji }) => {
    native.innerHTML = emoji;
  }
);

const twemoji = document.querySelector('#twemoji .emoji-button');
createPicker(
  twemoji,
  {
    renderer: new TwemojiRenderer()
  },
  ({ url }) => {
    twemoji.innerHTML = `<img src="${url}" />`;
  }
);
