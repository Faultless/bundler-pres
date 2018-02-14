import React from 'react';
import styled from 'styled-components';
import { Deck, Slide, Heading, List, ListItem, Text, Image, Link } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
    darkblue: 'darkblue',
  },
  {
    primary: { name: 'Roboto', googleFont: true, styles: ['400', '700i'] },
    secondary: { name: 'Droid Serif', googleFont: true, styles: ['400', '700i'] },
  },
);

/* eslint-disable global-require */
const images = {
  webpack: require('../../assets/webpack.svg'),
  rollup: require('../../assets/rollup.svg'),
  parcel: require('../../assets/parcel.png'),
  issue: require('../../assets/issue.png'),
  next: require('../../assets/next.svg'),
  thatIsAll: require('../../assets/that-is-all.jpg'),
};
/* eslint-enable global-require */

const RedDash = () => <span style={{ color: 'red' }}>-</span>;
const GreenPlus = () => <span style={{ color: 'green' }}>+</span>;

const NoBulletList = styled(List)`
  list-style-type: none;
  padding-left: 20px;
`;

const FlexListItem = styled(ListItem)`
  display: flex;
  margin-bottom: 10px;
`;

const PaddedText = styled(Text)`
  padding-left: 20px;
  margin: 0 !important;
`;

const SpecialHeading = styled(Heading)`
  padding-bottom: 30px;
  margin-bottom: 30px !important;
  border-bottom: 3px solid lightgray;
`;

const Presentation = () => (
  <Deck transition={['slide']} transitionDuration={500} theme={theme}>
    <Slide>
      <Heading size={2}>The Future of Web App Bundlers</Heading>
      <Heading size={6} italic textColor="tertiary">
        A quick study
      </Heading>
    </Slide>
    <Slide>
      <Heading size={3}>Bundlers have shaped web dev over the years</Heading>
      <NoBulletList>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Launching a simple website became <b>trivial</b>
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            New <b>Libraries</b> shipped everyday
          </PaddedText>
        </FlexListItem>
      </NoBulletList>
      <Text margin="10px 0 0" textColor="tertiary" size={4} bold italic>
        Consequence: Amount of overhead became ridiculous for small & large Apps alike.
      </Text>
    </Slide>
    <Slide>
      <div style={{ display: 'flex' }}>
        <div>
          <Heading size={4}>The good and the bad:</Heading>
          <Heading size={3} italic textColor="tertiary">
            Webpack
          </Heading>
        </div>
        <Image src={images.webpack.replace('/', '')} width="200" height="200" />
      </div>

      <NoBulletList>
        <FlexListItem>
          <GreenPlus />{' '}
          <PaddedText>
            Huge Support from a <b>large community</b>
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          <GreenPlus />{' '}
          <PaddedText>
            Supports <b>Lazy loading, HMR</b>
          </PaddedText>
        </FlexListItem>
      </NoBulletList>
      <NoBulletList>
        <FlexListItem>
          <RedDash />{' '}
          <PaddedText>
            re-compiling <b>speed</b>
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          <RedDash />{' '}
          <PaddedText>
            <b>complex config</b> syntax
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          <RedDash />{' '}
          <PaddedText>no real way to put together a quick JS web app without a config</PaddedText>
        </FlexListItem>
      </NoBulletList>
    </Slide>
    <Slide>
      <div style={{ display: 'flex' }}>
        <div>
          <Heading size={4}>A different Approach: </Heading>
          <Heading size={3} italic textColor="tertiary">
            Rollup
          </Heading>
        </div>
        <Image src={images.rollup.replace('/', '')} width="200" height="200" />
      </div>
      <NoBulletList>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Make use of ES6 modules for simpler, <b>faster code</b>
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            No wrapping of modules into functions, resulting in <b>cleaner code</b>
          </PaddedText>
        </FlexListItem>
      </NoBulletList>
      <Text margin="10px 0 0" textColor="tertiary" size={4} bold italic>
        This comes at a price however, as the resulting bundle will not support HMR or on-demand
        loading.
      </Text>
    </Slide>
    <Slide>
      <div style={{ display: 'flex' }}>
        <div>
          <Heading size={4}>The newcomer: </Heading>
          <Heading size={3} italic textColor="tertiary">
            Parcel
          </Heading>
        </div>
        <Image src={images.parcel.replace('/', '')} width="250" height="200" />
      </div>
      <NoBulletList>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Comes with the <b>zero config</b> promise
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Out of the box <b>HMR</b>
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Cleanly <b>extensible</b> with a revolutionary <b>plugins</b> system
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Blazing <b>fast</b> bundling (esp. with Cache)
          </PaddedText>
        </FlexListItem>
      </NoBulletList>
    </Slide>
    <Slide>
      <Heading size={4}>There is no Silver Bullet</Heading>
      <NoBulletList>
        <FlexListItem>
          -{' '}
          <PaddedText>
            Parcel is still in its <b>early stages</b> of dev despite the push for a major release
          </PaddedText>
        </FlexListItem>
        <FlexListItem>
          -{' '}
          <PaddedText>
            <b>Webpack is learning</b> from this new competition, as can be seen in their
            <Link href="https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2">
              {' '}
              4.0 beta{' '}
            </Link>
            currently underway
          </PaddedText>
        </FlexListItem>
      </NoBulletList>
    </Slide>
    <Slide>
      <Heading size={4}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text bold textSize="2em" textColor="quarternary">
            CRA
          </Text>
          <Image src={images.next.replace('/', '')} width="300" height="100" />
          <Text bold textSize="2em" textColor="darkblue">
            CWA
          </Text>
        </div>
      </Heading>
    </Slide>
    <Slide>
      <SpecialHeading size={4}>It&apos;s everyone&apos;s problem</SpecialHeading>
      <Image src={images.issue.replace('/', '')} />
    </Slide>
    <Slide>
      <Image src={images.thatIsAll.replace('/', '')} />
    </Slide>
  </Deck>
);

export default Presentation;
