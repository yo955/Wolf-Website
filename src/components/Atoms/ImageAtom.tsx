import Image from 'next/image';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

export const ImageAtom: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
  return <Image src={src} alt={alt} className={className} width={width} height={height} />;
};


