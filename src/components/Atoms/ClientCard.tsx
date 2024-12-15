import React from 'react';
import { Card, CardContent, Typography } from '@mui/joy';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

interface ClientCardProps {
  photo: string;
  description: string;
  rating: number;
}

const ClientCard: React.FC<ClientCardProps> = ({ photo, description, rating }) => {
  return (
    <Card className="card">
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Image
          src={photo}
          alt="image"
          width={40}
          height={40}
          style={{
            borderRadius: '50%',
          }}
        />
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          {description}
        </Typography>
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
};

export default ClientCard;