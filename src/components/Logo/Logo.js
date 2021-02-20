import React from 'react';
import './Logo.css'
import Tilt from 'react-tilt';
import icon from './Logo.jpg'

const Logo=()=>

{
	return (
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
					 <div className="Tilt-inner pa3"> 
					 	<img style={{paddingTop:'1px'}} src= {icon} alt='Logo' />
					 </div>
				</Tilt>
			</div>



		);
}

export default Logo;