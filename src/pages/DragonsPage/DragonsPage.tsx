import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getDragons, getGallery, setActiveDragon, setGallery } from '../../redux/dragonSlice';
import { fetchAllDragons } from '../../redux/dragonsOperations';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, DragonList, ImageWrapper, GalleryWrapper, GalleryText, ItemWrapper } from './DragonsPage.styled';
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
                        <ItemWrapper id={item.id} onClick={() => onImage(item.id)}>
                            {item.flickr_images.map((item: string) => 
                                <ImageWrapper key={item}>
                                    <img  src={item} alt="" height={150}/>
                                </ImageWrapper>
                                )}
                        </ItemWrapper>
                    </div>
                )}
            </DragonList>
            <GalleryText>Gallery</GalleryText>
            {gallery && 
            <GalleryWrapper>
                <Carousel  autoPlay={true} dynamicHeight={true} showArrows={true} infiniteLoop={true} width={1000} >
                    {gallery.map((item: undefined| any) => (
                        <div key={item}>
                            <img key={item} src={item} alt="" />
                        </div>
                    ))}
                </Carousel>
            </GalleryWrapper>
            }

        </Box>
        
    )
};

export default DragonsPage;