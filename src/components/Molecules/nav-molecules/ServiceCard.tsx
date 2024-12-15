import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Icon from '../atoms/Icon';
import Description from '../atoms/Description';
import Text from '../atoms/Text';

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

