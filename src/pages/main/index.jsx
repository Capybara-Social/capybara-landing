import '../../assets/generals/fonts.scss'
import './index.scss'
import React, { useEffect, useState } from "react";

export default function MainPage({lang}){
	if(!lang){
		lang = navigator.language;
	}

	let [isShowing, setShow] = useState("");
	function showImage(element){
		window.addEventListener('scroll', function() {
			var position = element.getBoundingClientRect();
			if(position.top < window.innerHeight && position.bottom >= 0) {
				element.classList.add('show');
			}
		});
	}
	useEffect(() => {
		window.scrollY = 0
		setShow("show");
		showImage(document.getElementById('securityImg'));
		showImage(document.getElementById('freespeechimg'));
		showImage(document.getElementById('aplace'));


	})

	
		return <>
		<div className='mainTitle'>
			<h1>A PLACE TO BE <span>YOURSELF</span></h1>
			<img src="leafb.svg" className={`leafs leafb ${isShowing}`}/>
			<img src="leafl.svg" className={`leafs leafl ${isShowing}`}/>
			<img src="leafr.svg" className={`leafs leafr ${isShowing}`}/>
		</div>

		<div className='aplace' id='aplace'>
			<h2>No wrong <span>opinions</span></h2>
			<div className='aplaceExplanation'>
				<p>
					In Capybara, there are no wrong opinions. <br/>
					We encourage users to express themselves as much as they can! <br />
				</p>
				<img src="freespeech.svg" alt="" id='freespeechimg'/>
			</div>
			<img src="voicesl.svg" className='voices voicesl' alt="" />
			<img src="voicesr.svg" className='voices voicesr' alt="" />
		</div>

		<div className='secure'>
			<h2>Advanced <span>Security</span> System</h2>
			<div className='secureExplanation'>
				<img src="/security.svg" alt="" id='securityImg'/>
				<p>
					We have a hard encryption system based on Diffie-Hellman with elliptic curve cryptography (and AES-256)<br/>
					This makes us <span>one of most secure and private social medias</span> around the internet <br/>
				</p>
			</div>
		</div>
		</>

}