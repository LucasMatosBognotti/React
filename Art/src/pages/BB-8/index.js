import React from 'react';

import { Page, B8, B8Body, Dot1, Dot2, Line1, Line2, Line3, Circle1, Circle2, Circle3, BodyShadowCrop, BodyShadow, B8Head,
         HeadBottom, HeadSide1, HeadSide2, HeadBottomBase, HeadTopCrop, HeadTop, Lens, Fleckle, Speedlines, OneTail, TwoTail, Three,
         Four, FiveTail, Ground, Gone, BumpMove1
       } from './styles';

export default function BB8() {
  return(
    <Page>
      <B8>

        <B8Body>
          <Dot1></Dot1>
            <Line1></Line1>
            <Line2></Line2>
            <Line3></Line3>
          <Dot2></Dot2>

          <Circle1></Circle1>
          <Circle2></Circle2>
          <Circle3></Circle3>
        </B8Body>

        <BodyShadowCrop>
          <BodyShadow></BodyShadow>
        </BodyShadowCrop>

        <B8Head>
          <HeadBottom>
            <HeadSide1></HeadSide1>
            <HeadSide2></HeadSide2>
            <HeadBottomBase></HeadBottomBase>
          </HeadBottom>

          <HeadTopCrop>
            <HeadTop></HeadTop>
          </HeadTopCrop>

          <Lens></Lens>
          <Fleckle></Fleckle>

        </B8Head>

        <Speedlines>
          <OneTail></OneTail>
          <TwoTail></TwoTail>
          <Three></Three>
          <Four></Four>
          <FiveTail></FiveTail>
        </Speedlines>

        <Ground>
          <Gone>
            <BumpMove1></BumpMove1>
          </Gone>
        </Ground>

      </B8>
    </Page>
  );
}