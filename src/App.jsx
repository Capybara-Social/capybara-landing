import {
    BrowserRouter as Router,
    Routes,
    Route,
	Link,
} from "react-router-dom";
import MainPage from "./pages/main";
import SecurityPage from "./pages/security";
import NotFoundPage from "./pages/specials/404";
import React from "react";
import './App.scss'


function App() {
  return (
    <>
    <Router>
	<>
	<div className="menu">
		<Link to="/" className="logo">
			<img src="capi.svg" alt="" />
			<span>Capybara</span>
		</Link>
		<nav className="navigation">
			<ul>
				<li><Link to="/download">Download</Link></li>
				<li><Link to="/security">Security</Link></li>
				<li><Link className='ultranav' to="/getultra">ULTRA</Link></li>
				<li><Link to="/support">Support</Link></li>
				<li><Link to="/faq">FAQ</Link></li>
			</ul>
		</nav>
		<a className="enter" href="/client">Login</a>
	</div>
	</>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/security" element={<SecurityPage />} />
			<Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
