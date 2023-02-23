import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
const BackToTopBtn = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button id='scrolltopbtn' onClick={scrollToTop}
	style={{display: visible ? 'block' : 'none'}}>
	<FaArrowCircleUp color='white'size={20} />
	</button>
);
}

export default BackToTopBtn;
