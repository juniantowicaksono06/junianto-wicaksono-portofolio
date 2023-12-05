"use client"
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Content() {
    const startWorking = 2020
    const currentDate = new Date()
    const [myExperience, setMyExperience] = useState(currentDate.getFullYear() - startWorking)
    const [projectModal, setProjectModal] = useState({
        "projectTitle": "",
        "projectDescription": "",
        "projectTechStack": null,
        "projectWhatToDo": <></>,
        "projectImages": []
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
            "projectImages": []
        })
        if(id == -1) {
            techStacks = (
                <>
                    <p>Frontend: JQuery & JavaScript</p>
                    <p>Backend: Yii2 / PHP</p>
                    <p>Database: MySQL & PostgreSQL</p>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Vmedis",
                projectDescription: "Vmedis is a Clinical Pharmacy web app Software to help manage drug stock and finances of pharmacies and clinicks",
                projectWhatToDo: <>
                    <p>At Vmedis i am working as a web developer to develop new feature and fixing bug on the existing Vmedis web app</p>
                    <p>For the demo of the vmedis web app you can click <a href="https://demo.vmedis.com" target='_blank'>this link</a></p>
                    <p>User Demo</p>
                    <p>Username: dika98</p>
                    <p>Password: Abcd1234</p>
                </>,
                projectImages: [
                    "images/vmedis/vmedis-login.png",
                    "images/vmedis/vmedis-obat.png",
                    "images/vmedis/vmedis-dokter.png",
                    "images/vmedis/vmedis-dashboard.png",
                ]
            }))
        }
        else if(id == 1) {
            techStacks = (
                <>
                    <p>Frontend: NuxtJS 2</p>
                    <p>Backend: Express</p>
                    <p>Database: MongoDB</p>
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
                ]
            }))
        }
        else if(id == 2) {
            techStacks = (
                <>
                    <p>Frontend: Vue 3</p>
                    <p>Backend: Laravel</p>
                    <p>Database: MySQL</p>
                </>
            )
            setProjectModal(prevState => ({
                ...prevState,
                projectTitle: "Gracita",
                projectDescription: "Gracita is a web application used to perform checklist for server devices monitoring and maintenance in PT. Telkomsel IT Jatim Balnus",
                projectImages: [
                    "images/gracita/gracita-login.png",
                    "images/gracita/gracita-checklist.png",
                ]
            }))
        }
        else if(id == 3) {
            techStacks = (
                <>
                    <p>Backend: Python Telegram Bot</p>
                    <p>Database: MySQL</p>
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
                ]
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
            "projectImages": []
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
                            <p>Hello, my name is Junianto Ichwan Dwi Wicaksono. I am a self taught developer. I always love learn something new. Love coding and watching anime. I already work as a Fullstack Developer for { myExperience } years</p>
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
                                <div className="desc text-start">                                    
                                    <p>Vmedis is a Clinical Pharmacy web app software to help manage drug stock and finances of pharmacies and clinics</p>
                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(-1)}>
                                        <span><i className="fa fa-info"></i></span> Click for details
                                    </button>
                                </div>
                            </div>
                            <div className="item featured">
                                <div className="featured-image has-ribbon">
                                    <img src="images/nagita/nagita-board.png" alt="Nagita Screenshot" className="img-fluid project-image rounded shadow-sm" />
                                </div>
                                <h2 className="title mb-3">Nagita</h2>
                                <div className="desc text-start">                                    
                                    <p>Nagita is a project management application develop to track project progress in PT. Telkomsel IT Jatim Balnus Division</p>
                                </div>
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
                                <div className="desc text-start">                                    
                                    <p>Gracita is a web application used to perform checklist for server devices monitoring and maintenance in PT. Telkomsel IT Jatim Balnus</p>
                                </div>
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
                                <div className="desc text-start">                                    
                                    <p>Hamengkubowono is a telegram bot used to report an incident in PT. Telkomsel Grapari or Gerai IT Jatim Balnus</p>
                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={() => handleProjectDetail(3)}>
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
                                <h3 className="title">IT Programmer - <span className="place"><a href="#">PT. Kinarya Alihdaya Mandiri</a></span> <span className="year">(Apr 2022 - Now)</span></h3>
                                <p>At PT. Kinarya Alihdaya Mandiri i work as an outsource programmer for PT. Telekomunikasi Seluler (Telkomsel). My task here is to develop new app such as web app named Nagita and maintenance existing app</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Web Developer - <span className="place"><a href="#">PT. Virtual Medis Internasional</a></span> <span className="year">(Oct 2020 - Apr 2022)</span></h3>
                                <p>At PT. Virtual Medis Internasional i work as a web developer. My task here is to develop new feature on the existing web app and as well maintenance the web app</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Admin Staff - <span className="place"><a href="#">PT. Angkasa Aviasi Servis</a></span> <span className="year">(Oct 2019 - Oct 2020)</span></h3>
                                <p>At PT. Angkasa Aviasi Servis i work as an admin staff. My task is to manage the office required asset</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Service Area Engineer - <span className="place"><a href="#">PT. Visionet Data Internasional</a></span> <span className="year">(Mar 2019 - May 2019)</span></h3>
                                <p>At PT. Visionet Data Internasional i work as an engineer to monitoring BRI (Bank Rakyat Indonesia) IT Asset.</p>
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
                                <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="mailto:juniantowicaksono22@gmail.com">juniantowicaksono22@gmail.com</a></li>
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
                                            <li className="list-group-item">Jenkins (Novice)</li>
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
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Information Tehcnology</h3>
                                <h4 className="university">Politeknik Amamapare Timika <span className="year">(2016-2019)</span></h4>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
}