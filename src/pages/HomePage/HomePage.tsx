import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragon, getDragons } from '../../redux/dragonSlice';
import { fetchAllDragons, getOneDragon } from '../../redux/dragonsOperations';
import { Box, Text } from './HomePage.styled'



function HomePage() {
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
            <Text>Dragons</Text>
        </Box>
    )
};

export default HomePage;