"use client"
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Link from 'next/link';

export default function Content() {
    const startWorking = 2020
    const currentDate = new Date()
    const [myExperience, setMyExperience] = useState(currentDate.getFullYear() - startWorking)
    const [projectModal, setProjectModal] = useState({
        "projectTitle": "",
        "projectDescription": "",
        "projectTechStack": null,
        "projectWhatToDo": <></>,
        "projectImages": [],
        "projectVideos": []
    })
    const [isModalShown, setIsModalShown] = useState(false)
    const handleProjectDetail = (id) => {
        if(id == "" || id == undefined || id == null) return
        var techStacks
        setProjectModal({
            "projectTitle": "",
            "projectDescription": "",
            "projectTechStack": null,
            "projectWhatToDo": <></>,
            "projectImages": [],
            "projectVideos": []
        })
        if(id == -1) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>JQuery & JavaScript</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>Yii2 / PHP</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MySQL & PostgreSQL</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Vmedis",
                projectDescription: "Vmedis is a complete solution to help pharmacies and clinics manage various aspects of their business. Starting from management, stock, procurement, finance, taxes, even HR.",
                projectWhatToDo: <>
                    <p>At Vmedis i worked as a web developer to develop new feature and fixing bug on the existing Vmedis web app</p>
                    <p>For the demo of the vmedis web app you can click <Link href="https://demo.vmedis.com" target='_blank'>this link</Link></p>
                    <p>User Demo</p>
                    <p>Username: dika98</p>
                    <p>Password: Abcd1234</p>
                </>,
                projectImages: [
                    "images/vmedis/vmedis-login.png",
                    "images/vmedis/vmedis-obat.png",
                    "images/vmedis/vmedis-dokter.png",
                    "images/vmedis/vmedis-dashboard.png",
                ],
                projectVideos: []
            }))
        }
        else if(id == 1) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>NuxtJS 2</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>Express</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MongoDB</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Nagita",
                projectDescription: "Nagita is a project management tool made for Telkomsel Indonesia to help staff track the progress of their tasks in real time using MEVN Stack.",
                projectImages: [
                    "images/nagita/nagita-login.png",
                    "images/nagita/nagita-board.png",
                    "images/nagita/nagita-card.png",
                    "images/nagita/nagita-ganttchart.jpg",
                ],
                projectVideos: []
            }))
        }
        else if(id == 2) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>Vue 3</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>Laravel</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Gracita",
                projectDescription: "Gracita is an operational checklist management app made for Telkomsel Indonesia to help staff create daily server maintenance reports.",
                projectImages: [
                    "images/gracita/gracita-login.png",
                    "images/gracita/gracita-checklist.png",
                ],
                projectVideos: []
            }))
        }
        else if(id == 3) {
            techStacks = (
                <>
                    <h5>Backend</h5>
                    <ul>
                        <li>Python Telegram Bot</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Telegram Bot Hamengkubuwono",
                projectDescription: "Hamengkubuwono is a Telegram bot made for Telkomsel Indonesia to help staff perform daily checklist on the site",
                projectImages: [
                    "images/hamengkubuwono/hamengkubuwono-welcome.png",
                    "images/hamengkubuwono/hamengkubuwono-incident.png",
                    "images/hamengkubuwono/hamengkubuwono-area.png",
                    "images/hamengkubuwono/hamengkubuwono-grapari.png",
                ],
                projectVideos: []
            }))
        }
        else if(id == 4) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>Laravel Livewire</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>Laravel 8</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "BTN Smart Residence X Montiro",
                projectDescription: "Integrate Montiro service with BTN Smart Residence APP. Montiro is a service for ordering mechanic or tow truck services.",
                projectImages: [
                    "images/montiro/1.png",
                    "images/montiro/2.png",
                    "images/montiro/3.png",
                    "images/montiro/4.png",
                    "images/montiro/5.png",
                    "images/montiro/6.png",
                    "images/montiro/7.png",
                    "images/montiro/8.png",
                    "images/montiro/9.png",
                    "images/montiro/10.png",
                    "images/montiro/11.png",
                    "images/montiro/12.png",
                ],
                projectVideos: []
            }))
        }
        else if(id == 5) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>NuxtJS 2</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>CodeIgniter 4</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MySQL</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Mojopait",
                projectDescription: "Mojopait is a HRIS web application developed for Telkomsel IT Jatim Balnus Division to track project progress, attendance, overtime, and employee performance",
                projectImages: [
                    "images/mojopait/1.jpg",
                    "images/mojopait/2.jpg",
                    "images/mojopait/3.jpg",
                ],
                projectVideos: []
            }))
        }
        else if(id == 6) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>Laravel + Alpine.JS</li>
                    </ul>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Diginect CRM",
                projectDescription: "Develop the CRM application for Sinergi Digital Koneksi from the frontend side.",
                projectImages: [
                    "images/diginect-crm/crm-1.png",
                    "images/diginect-crm/crm-2.png",
                    "images/diginect-crm/crm-3.png",
                    "images/diginect-crm/crm-4.png",
                    "images/diginect-crm/crm-5.png",
                ],
                projectVideos: []
            }))
        }
        else if(id == 100) {
            techStacks = (
                <>
                    <h5>Programming Language</h5>
                    <ul>
                        <li>Python 3.10.2</li>
                    </ul>
                    <h5>Large Language Model</h5>
                    <ul>
                        <li>Vicuna 13B GGUF</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>ChromaDB</li>
                    </ul>
                    <p>You can access the source from <Link href="https://colab.research.google.com/drive/196wbsxYIt3ghrLZo11APukyD_YyT6yyn?usp=sharing" target='_blank'>here</Link></p>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Generative Bot using Vicuna 13B Model",
                projectDescription: "This is a hobby project for me to lern how to run Vicuna 13B with python langchain library. In this project I learned how to run Vicuna 13B with python langchain library. I also learned how to use chromadb to store and query large language model.",
                projectImages: [
                    "images/gen-bot/ss_gen_bot1.png",
                    "images/gen-bot/ss_gen_bot2.png",
                ],
                projectVideos: [
                    "videos/gen-bot/vid_gen_bot1.mp4",
                ]
            }))
        }
        else if(id == 101) {
            techStacks = (
                <>
                    <h5>Frontend</h5>
                    <ul>
                        <li>Next.js + React</li>
                    </ul>
                    <h5>Backend</h5>
                    <ul>
                        <li>Next.js 14</li>
                    </ul>
                    <h5>Database</h5>
                    <ul>
                        <li>MongoDB Atlas</li>
                    </ul>
                    <p>You can access the site from <Link href="https://my-password-theta.vercel.app/" target="_blank">here</Link></p>
                    <p>You can access the source from <Link href="https://github.com/juniantowicaksono06/my-password" target='_blank'>here</Link></p>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "My Password",
                projectDescription: "This is a hobby project for me to lern how to run Next.js with React. In this project I learned how to run Next.js with React. I also learned more how to use MongoDB Atlas with Next.js to store and query database.",
                projectImages: [
                    "images/my-password/1.png",
                    "images/my-password/2.png",
                    "images/my-password/3.png",
                    "images/my-password/4.png",
                ],
                projectVideos: []
            }))
        }
        setProjectModal(prevState => ({
            ...prevState, 
            projectTechStack: techStacks
        }))
        setIsModalShown(true)
    }
    const handleCloseModal = () => {
        setIsModalShown(false)
    }
    const onModalClose = () => {
        handleCloseModal()
        setProjectModal({
            "projectTitle": "",
            "projectDescription": "",
            "projectTechStack": null,
            "projectWhatToDo": <></>,
            "projectImages": [],
            "projectVideos": []
        })
    }
    return <div className="container sections-wrapper py-5">
        <div className="row">
            {/* <ProjectModal showModal={isModalShown} handleClose={handleModalClose} /> */}
            <Modal show={isModalShown} onHide={onModalClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{projectModal['projectTitle']}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div id="projectCarousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {
                                            projectModal['projectImages'].map((imageName, index) => {
                                                let activeClass = ''
                                                if(index == 0) {
                                                    activeClass = 'active'
                                                }
                                                return (
                                                    <div className={`carousel-item ${activeClass}`} key={index}>
                                                        <img src={imageName} alt="Slide" className="d-block w-100" />
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            projectModal['projectVideos'].map((videoName, index) => {
                                                return (
                                                    <div className={`carousel-item`} key={index}>
                                                        <video className="d-block w-100" controls>
                                                            <source src={videoName} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div id="ProjectDescription" className='mt-3'>
                                    <p>{projectModal['projectDescription']}
                                    </p>
                                </div>
                                <div id="ProjectTechStack" className="mt-3">
                                    {projectModal['projectTechStack']}
                                </div>
                                <div id="projectWhatToDo" className="mt-3">
                                    {projectModal['projectWhatToDo']}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleCloseModal}>Close</button>
                </Modal.Footer>
            </Modal>
            <div className="primary col-lg-8 col-12">
                <section className="about section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">About Me</h2>
                        <div className="content">
                            <p>I am an enthusiastic Full Stack Developer with an educational background in Computer Science. I have a strong understanding of computer science, programming, and the practical skills needed to excel in the professional world.</p>
                        </div>
                    </div>
                </section>
                
                <section className="experience section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Work Experience</h2>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Freelance Frontend Developer - <span className="place">Sinergi Digital Koneksi</span> <span className="year">(Sep 2024 - Nov 2024)</span></h3>
                                <ul>
                                    <li>Develop the CRM application for Sinergi Digital Koneksi from the frontend side.</li>
                                    <li>Perform design slicing from Figma to HTML using the Alpine.js library.</li>
                                    <li>Integrate all functionalities of all pages in the CRM application with the API and Socket.IO,including testing to ensure a good user experience.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">Freelance Developer - <span className="place"><Link href="https://ptkam.co.id/id/" target='_blank'>Vascomm Solusi Teknologi</Link></span> <span className="year">(Feb 2024 - Apr 2024)</span></h3>
                                <ul>
                                    <li>Integrate Montiro API with BTN Smart Residence to provide mechanic and towing bookingfeatures, expanding the app's service reach using Laravel 8.</li>
                                    <li>Perform API testing and ensuring that all functionalities of the API are working well.</li>
                                    <li>Create structured API documentation using Postman collection.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">IT Programmer - <span className="place"><Link href="https://ptkam.co.id/id/" target='_blank'>Kinarya Alihdaya Mandiri</Link></span> <span className="year">(Apr 2022 - Dec 2023)</span></h3>
                                <ul>
                                    <li>Develop a brand new project management application called Nagita for Telkomsel Indonesia tohelp staff track the progress of their tasks in real-time using MEVN Stack.</li>
                                    <li>Developing an operational checklist management app called Gracita for Telkomsel Indonesia tohelp staff create daily server maintenance reports.</li>
                                    <li>Identifiy and resolve SQL Injection Query in one of the existing telegram bot.</li>
                                    <li>Create and maintain a Telegram bot for message automation, data collection, and integrationwith external services for Telkomsel Indonesia.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">Web Developer - <span className="place"><Link href="https://vmedis.com" target='_blank'>Virtual Medis Internasional</Link></span> <span className="year">(Oct 2020 - Apr 2022)</span></h3>
                                <ul>
                                    <li>Design and implement new features in the Vmedis web application, including requirementsanalysis, technical design, and code development using Yii2 Framework.</li>
                                    <li>Collaborate with developers, designers, and product managers to ensure new features and bugfixes meet project requirements and quality standards.</li>
                                    <li>Optimize MySQL Query to increase the web app response by 40%.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">Admin Staff - <span className="place">Angkasa Aviasi Servis</span> <span className="year">(Oct 2019 - Oct 2020)</span></h3>
                                <ul>
                                    <li>Manage daily administrative tasks such as document management, record updates, andgeneral administration to support Pasasi operations.</li>
                                    <li>Process and analyze data related to Pasasi activities, including database management andreporting to provide accurate and timely information.</li>
                                </ul>
                            </div>
                        </div>
                    </div>                
                </section>
                <section className="latest section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Projects</h2>
                        <div className="content">
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/vmedis/vmedis-dashboard.png" alt="Vmedis Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Vmedis</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Vmedis is a Clinical Pharmacy web app software to help manage drug stock and finances of pharmacies and clinics</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(-1)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/mojopait/1.jpg" alt="Mojopait Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Mojopait</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Mojopait is a HRIS web application developed for Telkomsel IT Jatim Balnus Division to track project progress, attendance, overtime, and employee performance</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(5)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/nagita/nagita-board.png" alt="Nagita Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Nagita</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Nagita is a project management application develop to track project progress at Telkomsel IT Jatim Balnus Division</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(1)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/gracita/gracita-checklist.png" alt="Gracita Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Gracita</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Gracita is a web application used to perform checklist for server devices monitoring and maintenance in Telkomsel IT Jatim Balnus</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(2)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/hamengkubuwono/hamengkubuwono-grapari.png" alt="Hamengkubwono Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Telegram Bot Hamengkubuwono</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Hamengkubowono is a telegram bot used to report an incident at Telkomsel Grapari or Gerai IT Jatim Balnus</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(3)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>     
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/montiro/1.png" alt="Montiro Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">BTN Smart Residence X Montiro Webview</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Montiro is a service for ordering mechanic or tow truck services on the BTN Smart Residence application</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(4)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/diginect-crm/crm-1.png" alt="Diginect CRM Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Customer Relationship Management (CRM) Sinergi Digital Koneksi</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>Montiro is a service for ordering mechanic or tow truck services on the BTN Smart Residence application</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(6)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <h2 className="heading">Side Projects</h2>
                        <div className="content">
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/gen-bot/ss_gen_bot1.png" alt="Generative Bot Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Generative Bot using Vicuna 13B Model</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>This is a hobby project for me to lern how to run Vicuna 13B with python langchain library</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(100)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/my-password/1.png" alt="My Password" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">My Password</h2>
                                {/* <div className="desc text-start">                                    
                                    <p>This is a hobby project for me to lern how to run Vicuna 13B with python langchain library</p>
                                </div> */}
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(101)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="secondary col-lg-4 col-12">
                <aside className="info aside section">
                    <div className="section-inner shadow-sm rounded">
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>Surabaya, Indonesia</li>
                                <li><i className="fas fa-phone"></i><span className="sr-only">Phone:</span>+62 813 5407 0748</li>
                                <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><Link href="mailto:juniantowicaksono22@gmail.com">juniantowicaksono22@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>             
                </aside>
                <aside className="skills aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Skills</h2>
                            <div className="content">
                                <p className="intro">Here are list of my skill as a Fullstack Developer</p>
                                <div className="skillset">
                                    <div className="item">
                                        <h3 className="level-title">Frontend</h3>
                                        <div className="row">
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" width={24} height={24} />
                                                    <span>HTML</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" width={24} height={24} />
                                                    <span>CSS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" width={24} height={24} />
                                                    <span>JavaScript</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" width={24} height={24} />
                                                    <span>Bootstrap</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://zaeem9233.github.io/portfolio/static/media/tailwind-css.fb395485ba53b8dbafcf.png" alt="" width={24} height={24} />
                                                    <span>Tailwind CSS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png" alt="" width={24} height={24} />
                                                    <span>JQuery</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/vue-js-icon-2048x1766-btrgkrhi.png" alt="" width={20} height={20} />
                                                    <span>Vue JS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" alt="" width={24} height={24} />
                                                    <span>React JS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://sperovita.gallerycdn.vsassets.io/extensions/sperovita/alpinejs-syntax-highlight/1.0.1/1642647041367/Microsoft.VisualStudio.Services.Icons.Default" alt="" width={24} height={24} />
                                                    <span>Alpine.JS</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">Backend</h3>
                                        <div className="row">
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://zaeem9233.github.io/portfolio/static/media/php.2c20492acd42411e3b10.png" alt="" width={24} height={24} />
                                                    <span>PHP</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="" width={24} height={24} />
                                                    <span>Python</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png" alt="" width={24} height={24} />
                                                    <span>Flutter</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/laravel-icon-995x1024-dk77ahh4.png" alt="" width={24} height={24} />
                                                    <span>Laravel</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/codeigniter-icon-1729x2048-xy6rlkco.png" alt="" width={24} height={24} />
                                                    <span>CodeIgniter</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png" alt="" width={24} height={24} />
                                                    <span>Flask</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://img.icons8.com/color/512/express-js.png" alt="" width={24} height={24} />
                                                    <span>Express</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x1234-85gmuivx.png" alt="" width={24} height={24} />
                                                    <span>Next JS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://zaeem9233.github.io/portfolio/static/media/restapi.1ff48fd733c946ab0d59.png" alt="" width={20} height={20} />
                                                    <span>Rest API</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" alt="" width={24} height={24} />
                                                    <span>Redis</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">Database</h3>
                                        <div className="row">
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="" width={24} height={24} />
                                                    <span>MySQL</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png" alt="" width={24} height={24} />
                                                    <span>MariaDB</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png" alt="" width={24} height={24} />
                                                    <span>PostgreSQL</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" width={24} height={24} />
                                                    <span>MongoDB</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">DevOps</h3>
                                        <div className="row">
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png" alt="" width={24} height={24} />
                                                    <span>Jenkins</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" alt="" width={24} height={24} />
                                                    <span>Docker</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png" alt="" width={24} height={24} />
                                                    <span>AWS</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/apache-icon-1024x2048-c1uxmyjc.png" alt="" width={24} height={24} />
                                                    <span>Apache</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/file-type-nginx-icon-1793x2048-yt5u3fm7.png" alt="" width={24} height={24} />
                                                    <span>Nginx</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">Others</h3>
                                        <div className="row">
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" width={24} height={24} />
                                                    <span>VS Code</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="" width={24} height={24} />
                                                    <span>Git</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width={24} height={24} />
                                                    <span>Github</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5yPOAbr-LrEa8ANO47RBo4f2txsvjPL-fw&s" alt="" width={24} height={24} />
                                                    <span>Postman</span>
                                                </span>
                                            </div>
                                            <div className="col-4 col-lg-6 mb-2">
                                                <span className="rounded-pill bg-transparent w-100 badge-skill">
                                                    <img src="https://static-00.iconduck.com/assets.00/apps-figma-icon-1024x1024-cb4t8vyj.png" alt="" width={24} height={24} />
                                                    <span>Figma</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="item">
                                        <h3 className="level-title">Frameworks &amp; Library</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">NuxtJS</li>
                                            <li className="list-group-item">ReactJS</li>
                                            <li className="list-group-item">NextJS</li>
                                            <li className="list-group-item">Codeigniter</li>
                                            <li className="list-group-item">Laravel</li>
                                            <li className="list-group-item">Flask</li>
                                            <li className="list-group-item">JQuery</li>
                                            <li className="list-group-item">Yii2</li>
                                            <li className="list-group-item">Bootstrap</li>
                                            <li className="list-group-item">Vue</li>
                                            <li className="list-group-item">Socket.IO</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">Database</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">MySQL</li>
                                            <li className="list-group-item">MariaDB</li>
                                            <li className="list-group-item">MongoDB</li>
                                            <li className="list-group-item">Redis</li>
                                            <li className="list-group-item">PostgreSQL</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h3 className="level-title">Other Skills</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Docker</li>
                                            <li className="list-group-item">Linux</li>
                                            <li className="list-group-item">Git</li>
                                            <li className="list-group-item">Jenkins</li>
                                        </ul>
                                    </div> */}
                                </div>              
                            </div>
                    </div>
                </aside>
                <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Informatics Engineering | Bachelor Degree</h3>
                                <h4 className="university">Universitas Narotama <span className="year">(2024-2025)</span></h4>
                            </div>
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Informatics Engineering | Associate Degree</h3>
                                <h4 className="university">Politeknik Amamapare Timika <span className="year">(2016-2019)</span></h4>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
}