'use client'; // Required if using in app directory in Next.js
import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';
import React, { lazy } from 'react';
import Slider from 'react-slick';
import "./carousel.css";
import "slick-carousel/slick/slick.css"; // Import slick carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme

const Carousel = ({ title, data }) => {
  const settings = {
    dots: true, 
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{mb: 5}}>
      <Typography
        variant="h1"
        sx={{ color: "#FFF", mb: 2 }}
      >
        {title}
      </Typography>
      {data?.length > 0 ? (
        <Slider {...settings}>
        {data?.map((item, index) => (
          <Box
          key={index}
          sx={{
            padding: "10px"
          }}>
          <Box
            sx={{
              position: "relative",
              height: "700px",
            }}
          >
            <Image
              src={item.image_url}
              alt={item.title}
              fill
              style={{ borderRadius: 8, objectFit: 'cover' }}
              loading="lazy"
            />
            </Box>
            <Typography variant="h6" sx={{ color: '#FFF', mt: 1 }}>{item.title}</Typography>
            <Typography variant="body2" sx={{ color: '#FFF', mt: 1 }}>{item.short_description}</Typography>
          </Box>
        ))}
      </Slider>
      ) : (
        <CircularProgress color="inherit" size={20} />
      )}
      
    </Box>
  );
};

export default Carousel;
