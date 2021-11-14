import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';


const Gallery = () => {
    return (
        <>
            <Typography sx={{ py: 5, textAlign: 'center' }} variant="h3">Bike Gallery</Typography>
            <div sx={{ my: 10 }} style={{ paddingLeft: "300px" }}>

                <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
};

export default Gallery;

// export default function QuiltedImageList() {

const itemData = [
    {
        img: 'https://i.ibb.co/mNym1q0/best-bike-1.png',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/WVW9LRr/best-bike-3.png',
        title: 'Burger',
    },
    {
        img: 'https://i.ibb.co/CttVS9M/bike-1.jpg',
        title: 'Camera',
    },
    {
        img: 'https://i.ibb.co/CKTXGpM/t-bike-4.jpg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/z8b5Kr8/t-bike-5.jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/M8q9r2s/t-bike-6.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    }

];
/* https://i.ibb.co/mNym1q0/best-bike-1.png
https://i.ibb.co/WVW9LRr/best-bike-3.png
https://i.ibb.co/CttVS9M/bike-1.jpg
https://i.ibb.co/CKTXGpM/t-bike-4.jpg
https://i.ibb.co/z8b5Kr8/t-bike-5.jpg
https://i.ibb.co/M8q9r2s/t-bike-6.jpg */