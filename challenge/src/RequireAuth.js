import {useHistory} from 'react-router-dom'

const RequireAuth = ({Component}) => {
    const myHistory = useHistory()
    
    if(!localStorage.getItem('token')) {
        myHistory.push('/')
    }
    
    return (
        <Component/>
    );
}
 
export default RequireAuth;