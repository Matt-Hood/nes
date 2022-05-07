import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import React from 'react';

import Body from '../../components/fields/Body';
import Title from '../../components/fields/Title';
import typography from './_typography.scss';

const headings = [1, 2, 3, 4, 5, 6];
export const SectionHeading = ({ children }) => (
  <h2 style={{ borderBottom: '1px solid gray' }}>{children}</h2>
);

// Convert the color key to the color variable name.
const fontVariable = (font) => {
  const array = font.split('-')[1].split(/(?=[A-Z])/);
  return `$font-${array.join('-').toLowerCase()}`;
};

// Convert the color key to the color proper name.
const fontName = (font) => {
  const array = font.split('-')[1].split(/(?=[A-Z])/);
  return `${array.join(' ').toLowerCase()}`;
};

const filterGroup = (filter) =>
  Object.keys(typography).filter((item) => item.indexOf(filter) === 0);

storiesOf('Global|Typography', module)
  .add('All', () => (
    <>
      <SectionHeading>Font Families</SectionHeading>
      {filterGroup('fontFamilies').map((family) => (
        <div style={{ margin: '15px' }}>
          <div>{fontVariable(family)}</div>
          <div style={{ fontFamily: typography[family] }}>
            {typography[family]}
          </div>
        </div>
      ))}
      <SectionHeading>Headings</SectionHeading>
      {/* Level doesn't seem to do anything here */}
      {headings.map((level) => {
        return <Title level={level}>Heading {level}</Title>;
      })}
      <SectionHeading>Body</SectionHeading>
      <Body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nihil
        debitis, totam veniam dignissimos maiores natus quam nemo suscipit et
        earum? Nobis reiciendis perspiciatis sit expedita nemo repudiandae
        assumenda ipsum!
      </Body>
    </>
  ))
  .add('Headings', () => (
    <>
      {headings.map((level) => {
        return <Title level={level}>Heading {level}</Title>;
      })}
    </>
  ));
