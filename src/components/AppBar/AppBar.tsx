import { Header, Navigation, Box, Logo, ArchiveLogo, StatisticLogo } from './AppBar.styled';//Logo,LogoIcon 
import { Link, NavLink } from 'react-router-dom';
import { refs } from "../../services/consts/refs";



export function AppBar() {
    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.home}><Logo></Logo></NavLink>
                </Box>
                <Box>
                    <Link to={refs.archive}><ArchiveLogo></ArchiveLogo></Link>
                    <Link to={refs.staistic}><StatisticLogo></StatisticLogo></Link>
                </Box>
            </Navigation>
        </Header>
        
    )
};