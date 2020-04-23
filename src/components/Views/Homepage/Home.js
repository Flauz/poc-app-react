import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/noonoo1.svg'
import logoRappel from '../../../assets/schedule-24px.svg'
import logoConge from '../../../assets/agenda.svg'
import logoContrat from '../../../assets/contrat.svg'
import logoFinContrat from '../../../assets/fin-contrat.svg'
import logoDeclaration from '../../../assets/description-24px.svg'
import './Home.css'


const Home = () => {

    return (
        <div className='Homepage'>


            <article className='container-fluid articleDescription'>
                <div className='row justify-content-center wrap'>
                    <div className='col-10 col-xl-6 d-flex flex-column justify-between articleVision'>
                        <h2>Lorem Ipsum</h2>

                        <div>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                            </ol>
                        </div>

                        <div id="carouselExampleIndicators" className="carousel slide textCarousel" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <p>
                                        Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum
                                        <br /><br />
                                        oppido gnarus, sed splendore liberalium doctrinarum minus quam nobilem decuerat institutus, quo administrante seditiones sunt concitatae graves ob inopiam vini: huius avidis usibus vulgus intentum ad motus asperos excitatur et crebros.
                                        <br /><br />
                                        oppido gnarus, sed splendore liberalium doctrinarum minus quam nobilem decuerat institutus, quo administrante seditiones sunt concitatae graves ob inopiam vini: huius avidis usibus vulgus intentum ad motus asperos excitatur et crebros.
                                    </p>
                                </div>
                                <div className="carousel-item" data-interval="10000">
                                    <p>Seminecem et sordidioris recenti calcibus:</p>
                                    <ul>
                                        <li><a href="#simulateur">Lorem</a></li>
                                        <li><a href="#contract">Ipsum</a></li>
                                        <li><a href="#pajemploi">Lorem</a></li>
                                        <li><a href="#fincontrat">Ipsum</a></li>
                                    </ul>
                                    <p>Summatim seditiones gererentur cum deflexerit perstringam vilitates seditiones seditiones peregrinos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-4 d-flex justify-content-center align-items-center articleMission'>
                        <div className='logo'>
                            <img className='placeholderLogo' src={logo} alt='logo'></img>
                        </div>
                    </div>
                </div>

            </article>

            <h2 id='simulateur' className='h2Simulateur'>Lorem Ipsum</h2>

            <div className='container-fluid simulateur'>
                <div className='row d-flex justify-content-center wrap'>
                    <div className='col-10 col-lg-5 d-flex flex-column justify-content-between align-items-center simulateurDescription'>
                        <h3>Reprehendet ego amicus quis senator.</h3>
                        <p> Edictus egressus metu effectu deinde ripas absque solitudines ripas ante exagitati exagitati dux ullo dux descivere celebritati celebritati invadere suorum descivere invadere metu flagitii solitudines qui suorum metu proditus suorum.Edictus egressus metu effectu deinde ripas absque solitudines ripas ante exagitati exagitati dux ullo dux descivere celebritati celebritati invadere suorum descivere invadere metu flagitii solitudines qui suorum metu proditus suorum.</p>

                        <Link to='/familyform'><input type='button' className='simulateurbtn' value='Try it' /></Link>
                    </div>
                    <div className='col-10 col-lg-5 d-flex flex-column justify-content-between align-items-center simulateurDescription' id='simuDesc2'>
                        <h3>Reprehendet ego amicus quis senator.</h3>
                        <p> Edictus egressus metu effectu deinde ripas absque solitudines ripas ante exagitati exagitati dux ullo dux descivere celebritati celebritati invadere suorum descivere invadere metu flagitii solitudines qui suorum metu proditus suorum.Edictus egressus metu effectu deinde ripas absque solitudines ripas ante exagitati exagitati dux ullo dux descivere celebritati celebritati invadere suorum descivere invadere metu flagitii solitudines qui suorum metu proditus suorum.</p>

                        <Link to='/simform'><input type='button' id='simulateurBtn2' className='simulateurbtn' value='Try it' /></Link>
                    </div>
                </div>
            </div>



            <div id='contract' className='container-fluid screen screenv2' >
                <div className='desc descColor'>

                    <div className='row d-flex justify-content-center flex-wrap'>
                        <div className='col-10 col-lg-4 d-flex justify-content-center align-items-center homepageTitle'>
                            <img className='HomepageIcon' src={logoContrat} alt='logo contrat' />
                            <h2> Lorem</h2>
                        </div>
                        <div className='col-10 col-lg-6 d-flex justify-content-center'>
                            <p>
                            Neque utrumque umquam Attico miraretur praeter mentitum conferebamus audiebamus umquam nominavi quid autem ea ego notae conferebamus inter cum aut atque ego controversia inquam cotidieque inquam sedulitatem quae inter nostro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div id='pajemploi' className='container-fluid screen'>
                <div className='desc'>
                    <div className='row d-flex justify-content-center flex-wrap-reverse'>
                        <div className='col-10 col-lg-6 d-flex justify-content-center'>
                            <p>
                            Seleucia enim civitates coloniam exornant vestigia et Caesar pauca aegre exornant quidem opus admodum Isaura monstrat olim Claudius pauca multa.
                                <br /><br />Saevissima se nullo eluxisse se primo iactitant virtute victu maiores patrimonia puta annuos inmensum ignorantes superasse non virtute nullo feracium superasse gregariis ut solem virtute maiores opposita vilitate primo adsimulata.
                                <br /><br /> Omne propinquabant digressi abierat quiete opulentos concedentes postquam cohortium et conati equestrium abierat acciverunt iuventutis sedibus sunt digressi concedentes victu opulentos adventu et quae resistere vicos acciverunt propinquabant abierat digressi concedentes casu robur vicos nec quae conati retroque opulentos recreati porrecta recreati vicos postquam quae sedibus nec digressi planitie robur.
                            </p>
                        </div>
                        <div className='col-10 col-lg-4 d-flex justify-content-center align-items-center homepageTitle'>
                            <img className='HomepageIcon' src={logoDeclaration} alt='' />
                            <h2>Terga urbis longius familiarium et.</h2>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container-fluid screen screenv2' id='fincontrat'>
                <div className='desc descColor'>


                    <div className='row d-flex justify-content-center flex-wrap'>
                        <div className='col-10 col-lg-4 d-flex justify-content-center align-items-center homepageTitle'>
                            <img className='HomepageIcon' src={logoFinContrat} alt='logo fin contrat' />
                            <h2>Adminicula Montium.</h2>
                        </div>
                        <div className='col-10 col-lg-6 d-flex justify-content-center'>
                            <p>
                            Coepit quis quod ut inferentem mortem amicitiae excusatione post supplicio inferentem mortem futurum tegenda minori tegenda haud sed talis amicitiae est minori aliquando ne bellum sequi ne est improborum quis. Ad nefariis autem ideo autem quod exustus usque haec praecentor.
                                <br /><br /> Legiones rabie viribus quam incendebat rabie comes et amplificatis bellicis efferebantur incendebat bellicis induratae tuebatur saeviore rabie urbium matris legiones matris bellicis desperatio tresque ardore Castricius concepta Castricius amplificatis sudoribus.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container-fluid screen' id='conge'>
                <div className='desc'>
                    <div className='row d-flex justify-content-center flex-wrap-reverse'>
                        <div className='col-10 col-lg-6 d-flex justify-content-center'>
                            <p>
                            Nimias quod quibusdam illi securitatem rerum satis suarum Graecia non esse sapientes caput mirabilia parturiat quas sit ne laxissimas securitatem pro cum placuisse pro molestum habere audio implicari vel esse.
                            </p>
                        </div>
                        <div className='col-10 col-lg-4 d-flex justify-content-center align-items-center homepageTitle'>
                            <img className='HomepageIcon' src={logoConge} alt='logo agenda' />
                            <h2>Multa et observantem coactusque paeniteat.</h2>
                        </div>
                    </div>

                    <div className='row d-flex justify-content-center'>

                    </div>
                </div>
            </div>

            <div className='container-fluid screen screenv2' id='rappel'>
                <div className='desc descColor'>
                    <div className='row d-flex justify-content-center flex-wrap'>
                        <div className='col-10 col-lg-4 d-flex justify-content-center align-items-center homepageTitle'>
                            <img className='HomepageIcon' src={logoRappel} alt='logo rappel' />
                            <h2>Lorem</h2>
                        </div>
                        <div className='col-10 col-lg-6 d-flex justify-content-center'>
                            <p>
                            Egentium poterant poterant quicquid hi cognita egentium habitu peius invitis nuntiabant vilitate adsistendo colligendos egentium quicquid per cavendi habitu et observantes Antiochiae quae quaedam audirent homines Caesaris parum concordi egentium.
                                <br /><br />Spatiis lateri lateri ad frugibus bonis frugibus palmite minutis qui dextro dextro interscindit et Tauri frugibus Tauri eiusque eiusque montis.
                            </p>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}


export default Home