import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveDragon, getDragons } from '../../redux/dragonSlice';
import { fetchAllDragons, getOneDragon } from '../../redux/dragonsOperations';
import { Box, Shadow, Text, Wrapper } from './HomePage.styled'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function HomePage() {
    const dispatch = useDispatch<any>()
    const dragon = useSelector(getActiveDragon)
    const allDragons = useSelector(getDragons)

    useEffect(() => {
        if (!dragon) {
            dispatch(getOneDragon());
        }
    }, [dispatch, dragon]);

    useEffect(() => {
    dispatch(fetchAllDragons());
    }, [dispatch]);
    
    console.log(dragon)
    console.log(allDragons)

    return (
        <Box>
            {dragon &&
                <>
                <Wrapper>
                <Carousel autoPlay={true} dynamicHeight={true} showArrows={true} infiniteLoop={true} width={800} >
                    {dragon.flickr_images.map((item: string) => (
                        <div key={item}>
                            <img key={item} src={item} alt="" />
                        </div>
                    ))}
                </Carousel>
                </Wrapper>
                <Shadow>
                    <Text>{dragon.name}</Text>
                    <Text>dry mass:{dragon.dry_mass_kg} kg</Text>
                    <Text>first flight: {dragon.first_flight}</Text>
                    <Text>diameter: {dragon.diameter.meters} meters</Text>
                    <Text>launch payload mass: {dragon.launch_payload_mass.kg} kg</Text>
                    <Text>height with trunk: {dragon.height_w_trunk.meters} meters</Text>
                    <Text>{dragon.description}</Text>
                    <Text>wikipedia:  
                        <a href={dragon.wikipedia}> { dragon.wikipedia}</a>
                    </Text>
                </Shadow>

            </>}
        </Box>
    )
};

export default HomePage;