import { Link } from "react-router-dom";
import {Box, Text} from './NotFoundPage.styled'

export default function NotFoundPage() {
    return (
        <Box>
            <Text>Sorry, page not found :( <Link to="/">Please go to main page</Link></Text>
        </Box>
    )
};