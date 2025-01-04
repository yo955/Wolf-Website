import React from 'react';
import { Text, ImageAtom } from '@/components';
import Container from '@mui/material/Container';

export const TextWithImages: React.FC = () => {
  return (
    <div style={{ marginBottom: '50px' }} id="work">
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Our work</span>
            <span className="textclients">Over view of what we have done</span>
          </div>
        }
        className="textListen"
      />
      <Container className="containerImg">
        <div className="imageWrapper">
          <ImageAtom
            src="/images/glass1.png"
            alt="Glasstel1"
            className="scrollImage"
            width={560}
            height={427}
          />
        </div>
        <div className="imageWrapper">
          <ImageAtom
            src="/images/glass2.png"
            alt="Glasstel2"
            className="scrollImage"
            width={560}
            height={427}
          />
        </div>
      </Container>
    </div>
  );
};
