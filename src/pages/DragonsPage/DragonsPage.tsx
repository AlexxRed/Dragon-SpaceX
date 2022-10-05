import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getDragons, getGallery, setActiveDragon, setGallery } from '../../redux/dragonSlice';
import { fetchAllDragons } from '../../redux/dragonsOperations';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Wrapper, DragonList, ImageWrapper } from './DragonsPage.styled';
import { useNavigate } from "react-router-dom";
import { refs } from "../../services/consts/refs";


function DragonsPage() {
    const dispatch = useDispatch<any>()
    const allDragons = useSelector(getDragons);
    const gallery = useSelector(getGallery)
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchAllDragons());
        if (gallery.length === 0) {
            dispatch(setGallery());
        }
        console.log(gallery)
    }, [dispatch, gallery]);
    
    const onImage = (id:string) => {
        dispatch(setActiveDragon(id));
        navigate(refs.home, { replace: true });
    }

    return (
        <Box>
            <Text>All available dragons</Text>
            <DragonList>
                {allDragons.map((item: any) =>
                    <div key={item.id}>
                        <Text>{item.name}</Text>
                        <Wrapper id={item.id} onClick={() => onImage(item.id)}>
                            {item.flickr_images.map((item: string) => 
                                <ImageWrapper key={item}>
                                    <img  src={item} alt="" height={200}/>
                                </ImageWrapper>
                                )}
                        </Wrapper>
                    </div>
                )}
            </DragonList>
            <Text>Gallery</Text>
            {gallery && 
            <Wrapper>
                <Carousel  autoPlay={true} dynamicHeight={true} showArrows={true} infiniteLoop={true} width={1300} >
                    {gallery.map((item: undefined| any) => (
                        <div key={item}>
                            <img key={item} src={item} alt="" />
                        </div>
                    ))}
                </Carousel>
            </Wrapper>
            }

        </Box>
        
    )
};

export default DragonsPage;