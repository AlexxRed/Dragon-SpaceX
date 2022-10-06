const getIsLoggedIn = (state:any)=> state.auth.isLoggedIn;
const getUsername = (state:any) => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
export default authSelectors;