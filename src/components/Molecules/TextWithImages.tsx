// src/components/Molecules/TextWithImages.tsx
import React from 'react';
import {Text} from '@/components';
import {Image} from '@/components';
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
        <Image
          src="/images/Glasstel1.png"
          alt="Glasstel1"
          className="Glasstel"
          width={560}
          height={427}
        />
        <Image
          src="/images/Glasstel2.png"
          alt="Glasstel2"
          className="glasstel"
          width={560}
          height={427}
        />
      </Container>
    </div>
  );
};

