import Logo from './logo/Logo';
import './Navigation.css';
import profPic from './profilePicture.jpg'; /*this is temp until the DB is made*/

export default function Navigation() {
	return(
		<div className='navbar'>
			<Logo />
			<nav>
				<img className='profPic' alt="Profile Picture" src={profPic} /> {/*will add drop down menu for nav*/}
			</nav>
		</div>
	)
}