import  { ImHome, ImStack, ImSmile, ImDrive, ImDatabase, ImCool2 } from 'react-icons/im';
import NavItem from "./NavItem";

const items = [
	{ label: 'Home', icon: <ImHome />, active: true },
	{ label: 'Showcase', icon: <ImStack /> },
	{ label: 'Services', icon: <ImSmile /> },
    { label: 'Designers', icon: <ImDrive /> },
    { label: 'Packages', icon: <ImDatabase /> },
    { label: 'Contact', icon: <ImCool2 /> }
]

function Nav() {

    return ( 
        <nav>
            {items.map((item, index) => <NavItem item={item} key={index} />)}
        </nav>
     );
}

export default Nav;