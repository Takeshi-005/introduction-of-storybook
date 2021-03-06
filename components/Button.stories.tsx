import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Button from './Button';
import { BUTTON } from '../constants/style';

storiesOf('Button', module)
  .add('primary button', () => (
    <Button
      text={text("text", "primaryボタン")}
      types={text("types", "primary") as keyof typeof BUTTON}
    />
  ))
  .add('secondary button', () => (
    <Button
      text={text("text", "secondaryボタン")}
      types={text("types", "secondary") as keyof typeof BUTTON}
    />
  ))
