import { ContentBlock } from 'components/ContactLayout/ContactLayout.styled';
import React from 'react';
import TypedText from './TypedText/TypedText';


function Home() {


  return (
    <ContentBlock>
      <TypedText text="Welcome to the best Phonebook app in your life! :)" delay={100}/>
    </ContentBlock>
  );
}

export default Home;
