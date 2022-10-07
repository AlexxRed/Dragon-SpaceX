import { Header, Navigation, Box, Logo, ArchiveLogo, LogoText, StatisticLogo } from './AppBar.styled';//Logo,LogoIcon 
import { Link, NavLink } from 'react-router-dom';
import { refs } from "../../services/consts/refs";
import { Text } from '../../pages/LoginPage/LoginPage.styled';



export function AppBar() {
    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.home}>
                        <Logo></Logo>
                        <LogoText>Dragon</LogoText>
                    </NavLink>
                </Box>
                <Box>
                    <Text>SpaceX
                        <Link to={refs.dragons}>
                            <StatisticLogo></StatisticLogo>
                        </Link>Dragons</Text>
                </Box>
                <Box>
                    <Link to={refs.dragons}>
                        <ArchiveLogo></ArchiveLogo>
                        <LogoText>Dragons</LogoText>
                    </Link>
                </Box>
            </Navigation>
        </Header>
        
    )
};