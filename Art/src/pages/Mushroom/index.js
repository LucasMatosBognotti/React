import React from 'react';

import { Page, Mushroom, Brain, Mark, Head, EyeLeft, EyeRight } from './styles';

export default function Mushrrom() {
  return (
    <Page>
      <Mushroom>

        <Brain>
          <Mark></Mark>
        </Brain>

        <Head>
          <EyeLeft></EyeLeft>
          <EyeRight></EyeRight>
        </Head>

      </Mushroom>
    </Page>
  );
}