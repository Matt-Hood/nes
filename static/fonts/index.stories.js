import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  fluidRelatedGatsbyImage,
  callToAction
} from '../../../utilities/storybookHelpers';
import ParagraphHero from './index';

/* eslint-disable camelcase */
export const data = {
  field_title: `An Open Source Product Agency`,
  // field_cta: callToAction,
  field_intro: {
    value:
      'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
  },
  // field_eyebrow: 'eyebrow',
  relationships: {
    field_background_image: fluidRelatedGatsbyImage
  }
};

export const withVideo = {
  field_title: 'Title',
  field_cta: callToAction,
  field_intro: {
    value:
      'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
  },
  field_eyebrow: 'eyebrow',
  home_video_hero: true
};

/* eslint-disable camelcase */
storiesOf('Paragraphs|Hero', module)
  .add('Default', () => <ParagraphHero {...data} />)
  .add('Homepage Video', () => <ParagraphHero {...withVideo} />);
