"use client"
import { useState, useEffect } from "react"
export default function Header() {
    function initTheme() {
        let darkMode = localStorage.getItem("darkSwitch") !== null && localStorage.getItem("darkSwitch") === "dark"
        setChecked(darkMode)
        if(darkMode) {
            document.body.setAttribute("data-theme", "dark")
        }
        else {
            document.body.removeAttribute("data-theme")
        }
    }

    useEffect(() => {
        initTheme()
    }, [])


    const [isChecked, setChecked] = useState(false)
    const handleCheckboxChange = () => {
        setChecked(!isChecked)
        if(!isChecked) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("darkSwitch", "dark");
        }
        else {
            document.body.removeAttribute("data-theme");
            localStorage.removeItem("darkSwitch");
        }
    }
    return <header className="header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">     
                    <img className="profile-image img-fluid float-start rounded-circle mt-2" src="images/foto.jpg" alt="profile image" />    
                    <div className="profile-content">
                        <h1 className="name">Junianto Ichwan Dwi Wicaksono</h1>
                        <h2 className="desc">Fullstack Developer</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://github.com/juniantowicaksono06"><i className="fab fa-github"></i></a></li>
                            <li className="list-inline-item"><a href="https://linkedin.com/in/junianto-wicaksono-1655a415b"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-auto">
		            <div className="dark-mode-switch d-flex">
						<div className="form-check form-switch mx-auto mx-md-0">
							<input type="checkbox" className="form-check-input me-2" id="darkSwitch" checked={isChecked} onChange={handleCheckboxChange} />
							<label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
						</div>
			        </div>
                    <div className="mb-1">
	                    <a className="btn btn-primary" href="https://t.me/juniantowicaksono06" target="_blank"><i className="fab fa-telegram"></i> Telegram</a>        
                    </div>
                    <div>
	                    <a className="btn btn-success" href="https://wa.me/6281354070748" target="_blank" style={{marginTop: '0'}}><i className="fab fa-whatsapp"></i> WhatsApp</a>        
                    </div>
	            </div>
            </div>
        </div>
    </header>
}