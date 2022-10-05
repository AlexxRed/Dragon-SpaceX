import { Key, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragon, getDragons } from '../../redux/dragonSlice';
import { fetchAllDragons, getOneDragon } from '../../redux/dragonsOperations';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Wrapper } from './DragonsPage.styled';


function DragonsPage() {
    const dispatch = useDispatch<any>()
    const dragon = useSelector(getDragon)
    const allDragons = useSelector(getDragons)

    useEffect(() => {
    dispatch(getOneDragon());
    }, [dispatch]);

    useEffect(() => {
    dispatch(fetchAllDragons());
    }, [dispatch]);
    
    console.log(dragon)
    console.log(allDragons)

    return (
        <Box>
            <Wrapper>
                {allDragons.map((item: any) =>
                    <Wrapper>
                        <Text>{item.name}</Text>
                        <Wrapper>
                            {item.flickr_images.map((item: string) => 
                                <Wrapper >
                                    <img key={item} src={item} alt="" width={200}/>
                                </Wrapper>
                                )}
                        </Wrapper>
                    </Wrapper>
                )}
            </Wrapper>
            <Wrapper>
                <Carousel autoPlay={true} dynamicHeight={true} showArrows={true} infiniteLoop={true} width={800} >
                    {allDragons.map((item: {}| undefined| any) => (
                        <div key={item.name}>
                            <img key={item} src={item.flickr_images} alt="" />
                        </div>
                    ))}
                </Carousel>
            </Wrapper>
            <Text>All available dragons</Text>
        </Box>
        
    )
};

export default DragonsPage;