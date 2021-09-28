import { Redirect } from 'react-router';

const RedirectHome = () => {

    return  <Redirect to={{ pathname: '/' }} />
}

export default RedirectHome;