import React from 'react';


import { Page, Head, Face, Eye, Mouth, TLeft, TCenter, TRight, Tongue, CLeft, CRight } from './styles';

export default function Finn() {
  return (
    <Page>
      <Head>
        <Face>
          <Eye></Eye>
          <Eye></Eye>
          <Mouth>
            <TLeft></TLeft>
            <TCenter></TCenter>
            <TRight></TRight>
            <Tongue></Tongue>
          </Mouth>
          <CLeft></CLeft>
          <CRight></CRight>
        </Face>
      </Head>
    </Page>
  );
}