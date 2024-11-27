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
                projectDescription: "Vmedis is a Clinical Pharmacy web app Software to help manage drug stock and finances of pharmacies and clinicks",
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
                projectDescription: "Nagita is a project management application develop to track project progress in PT. Telkomsel IT Jatim Balnus Division",
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
                projectDescription: "Gracita is a web application used to perform checklist for server devices monitoring and maintenance in PT. Telkomsel IT Jatim Balnus",
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
                projectDescription: "Hamengkubowono is a telegram bot used to report an incident in PT. Telkomsel Grapari or Gerai IT Jatim Balnus",
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
                        <li>Laravel Versi 8.83.27</li>
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
                projectDescription: "Montiro is a service for ordering mechanic or tow truck services on the BTN Smart Residence application",
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
                projectDescription: "Mojopait is a HRIS web application developed for PT. Telkomsel IT Jatim Balnus Division to track project progress, attendance, overtime, and employee performance",
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
                projectDescription: "Developing the frontend of the CRM application for PT Sinergi Digital Koneksi (Diginect).",
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
                            <p>Hello, my name is Junianto Ichwan Dwi Wicaksono. I am a self taught developer. I always love learn something new. Love coding and watching anime. I have worked as a Fullstack Developer for about { myExperience } years</p>
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
                                    <p>Mojopait is a HRIS web application developed for PT. Telkomsel IT Jatim Balnus Division to track project progress, attendance, overtime, and employee performance</p>
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
                                    <p>Nagita is a project management application develop to track project progress at PT. Telkomsel IT Jatim Balnus Division</p>
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
                                    <p>Gracita is a web application used to perform checklist for server devices monitoring and maintenance in PT. Telkomsel IT Jatim Balnus</p>
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
                                    <p>Hamengkubowono is a telegram bot used to report an incident at PT. Telkomsel Grapari or Gerai IT Jatim Balnus</p>
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
                                <h2 className="title mb-3">Customer Relationship Management (CRM) PT Sinergi Digital Koneksi</h2>
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
                <section className="experience section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Work Experience</h2>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Freelance Frontend Developer - <span className="place">PT. Sinergi Digital Koneksi</span> <span className="year">(Sep 2024 - Nov 2024)</span></h3>
                                <p>Here is the project I worked on at PT. Sinergi Digital Koneksi:</p>
                                <ul>
                                    <li>Developing the frontend of the CRM application for PT Sinergi Digital Koneksi, encompassing design implementation, component management, and performance optimization.</li>
                                    <li>Performing design slicing from Figma to HTML using the Alpine.js library, ensuring alignment with the desired design and optimal responsiveness.</li>
                                    <li>Integrating all functionalities across all pages of the CRM application with APIs and Socket.IO, including testing to ensure a seamless user experience.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">Freelance Developer - <span className="place"><Link href="https://ptkam.co.id/id/" target='_blank'>PT. Vascomm Solusi Teknologi</Link></span> <span className="year">(Feb 2024 - Apr 2024)</span></h3>
                                <p>At PT. Vascomm Solusi Teknologi I worked as a freelance developer to develop new feature on the existing application for PT. Bank Tabungan Negara Tbk. Here is the project I worked on:</p>
                                <ul>
                                    <li>Creating and integrating new API endpoints with Laravel to support front-end applicationneeds.</li>
                                    <li>Create API documentation for internal and external use.</li>
                                    <li>Conducting unit and integration testing to ensure code quality and troubleshooting issues in development and production.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">IT Programmer - <span className="place"><Link href="https://ptkam.co.id/id/" target='_blank'>PT. Kinarya Alihdaya Mandiri</Link></span> <span className="year">(Apr 2022 - Dec 2023)</span></h3>
                                <p>At PT. Kinarya Alihdaya Mandiri I worked as an outsource programmer for PT. Telekomunikasi Seluler (Telkomsel). My task here is to develop new app such as web app named Nagita and maintenance existing app such as:</p>
                                <ul>
                                    <li>Advanced Web Programmer: Designing and implementing robust web solutions tailored to meet diverse client needs, leveraging expertise in front-end and back-end development to ensure optimal user experiences and functionality.</li>
                                    <li>Aspiring Android Developer: Gaining proficiency in Android app development through hands-on projects and learning initiatives, with a focus on creating intuitive mobile applications that integrate seamlessly with various platforms.</li>
                                    <li>ETL Specialist: Spearheading the development and maintenance of Extract, Transform, Load (ETL) processes utilizing advanced tools like Pandas for data manipulation, Selenium for web scraping, BeautifulSoup for parsing, and Matplotlib for data visualization, ensuring efficient data workflows and analytics capabilities.</li>
                                    <li>Python Developer: Innovating with Python to build and enhance Telegram bots that automate tasks, provide real-time information, and enhance user engagement through intuitive bot functionalities and integrations with external APIs.</li>
                                    <li>Robotic Project Engineer: Leading a Raspberry Pi 4 Model B-based robotic project, applying technical expertise in hardware interfacing, sensor integration, and software development to create autonomous systems that solve practical challenges in automation and robotics.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h3 className="title">Web Developer - <span className="place"><Link href="https://vmedis.com" target='_blank'>PT. Virtual Medis Internasional</Link></span> <span className="year">(Oct 2020 - Apr 2022)</span></h3>
                                <p>At PT. Virtual Medis Internasional I worked as a web developer. My task here is to develop new feature on the existing web app and as well maintenance the web app</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Admin Staff - <span className="place">PT. Angkasa Aviasi Servis</span> <span className="year">(Oct 2019 - Oct 2020)</span></h3>
                                <p>At PT. Angkasa Aviasi Servis I worked as an admin staff. My task is to manage the office required asset</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Service Area Engineer - <span className="place"><Link href="https://www.visionet.co.id/id/beranda/" target="_blank">PT. Visionet Data Internasional</Link></span> <span className="year">(Mar 2019 - May 2019)</span></h3>
                                <p>At PT. Visionet Data Internasional I worked as an engineer to monitoring BRI (Bank Rakyat Indonesia) IT Asset.</p>
                            </div>
                        </div>
                    </div>                
                </section>
            </div>
            <div className="secondary col-lg-4 col-12">
                <aside className="info aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading sr-only">Basic Information</h2>
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
                                        <h3 className="level-title">Programming Language</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Python</li>
                                            <li className="list-group-item">JavaScript</li>
                                            <li className="list-group-item">PHP</li>
                                        </ul>
                                    </div>
                                    <div className="item">
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
                                    </div>
                                </div>              
                            </div>
                    </div>
                </aside>
                <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Information Tehcnology | S1</h3>
                                <h4 className="university">Universitas Narotama <span className="year">(2024-2025)</span></h4>
                            </div>
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Information Tehcnology | D3</h3>
                                <h4 className="university">Politeknik Amamapare Timika <span className="year">(2016-2019)</span></h4>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
}