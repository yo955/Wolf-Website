import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import {Icon,Description,Text} from '@/components/Atoms/slider';


interface ServiceCardProps {
  icon: React.ReactNode;
  description: string;
  name: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, description, name }) => {
  return (
    <Card>
      <CardContent>
        <Icon svg={icon} />
        <Text text={name} />
        <Description text={description} />
      </CardContent>
    </Card>
  );
};

