import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import useServices from '../../../hooks/useServices';


/* const services = [
    {
        "_id": "618b5ed115b6daa4a5ec6351",
        "img": "https://i.ibb.co/mNym1q0/best-bike-1.png",
        "name": "Mercedez Benz",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 1050
    },
    {
        "_id": "618b5ed1de54e48c85ebbfcb",
        "img": "https://i.ibb.co/WVW9LRr/best-bike-3.png",
        "name": "Honda Civic",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 1250
    },
    {
        "_id": "618b5ed13af61c97d5048e4b",
        "img": "https://i.ibb.co/CttVS9M/bike-1.jpg",
        "name": "79 ADVENTURE 2019",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 1300
    },
    {
        "_id": "618b5ed1ac156c34dacac6b8",
        "img": "https://i.ibb.co/CKTXGpM/t-bike-4.jpg",
        "name": "79 ADVENTURE 2018",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 1440
    },
    {
        "_id": "618b5ed1832dc4ff57a7675a",
        "img": "https://i.ibb.co/z8b5Kr8/t-bike-5.jpg",
        "name": "79 ADVENTURE 2010",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 2250
    },
    {
        "_id": "618b5ed1b05397e322988c1d",
        "img": "https://i.ibb.co/M8q9r2s/t-bike-6.jpg",
        "name": "TSK 950CC Two Disk",
        "description": "Velit ad nulla commodo aliquip enim pariatur. Qui veniam consequat consectetur eiusmod eiusmod sunt minim esse. Et aliqua id dolor enim dolore tempor cupidatat labore in ipsum exercitation incididunt. Non minim adipisicing excepteur cillum aliquip. Tempor anim irure sit veniam et velit ea duis elit.\r\n",
        "price": 2100
    }
] */

const Services = () => {
    // const [packages] = usePackages();
    const [services] = useServices();

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ pl: 65, py: 5 }} variant="h3">Bikes </Typography>
                <Container>

                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.slice(0, 6).map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;


