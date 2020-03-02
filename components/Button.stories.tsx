import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .add('common button', () => (
    <Button
      text={text("text", "通常ボタン")}
    />
  ))
