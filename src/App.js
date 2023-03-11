import './App.css';
import LandingPage from './views/LandingPage';
import { Routes, Route } from 'react-router-dom';
import ContactBar from './components/ContactBar';
import AboutPage from './views/AboutPage';
import RatesPage from './views/RatesPage';
import SummerSched from './views/SummerPage';
import WinterSpringPage from './views/SessionPage';
import BuddaCrewPage from './views/BudaCrewPage';
import GalleryPage from './views/GalleryPage';
import AdminForm from './components/AdminForm';
import { useState, useEffect } from 'react'
import axios from 'axios';
import AdminAboutPage from './pages/AdminAboutMe';
import AdminRatesPage from './pages/AdminRatesPage';
import AdminSummerPage from './pages/AdminSummerPage';
import AdminWinterSpringPage from './pages/AdminSessionPage';
import BudaCrewAdminForm from './components/BudaCrewAdminForm';
import BudaCrewMemberPage from './views/BudaCrewMemberPage';
import AdminEditBudaCrewPage from './pages/AdminEditBudaCrewPage';
import AdminBudaCrewMemberPage from './pages/AdminBudaCrewMemberPage';
import BudaNavbar from './components/BudaNavbar';
import AdminNavbar from './components/AdminNavbar';
import AdminGalleryPage from './pages/AdminGallery';
import AdminEditLogin from './pages/AdminEditLogin';
import AdminEditMemberPassword from './pages/AdminEditMemberPassword';
import AdminLandingPage from './pages/AdminLandingpage';


function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [loggedIn, setLoggedIn] = useState('')
  const [memberLogin, setMemberLogin] = useState('')
  const [tracker, setTracker] = useState(false)
  // EDIT IMAGES/VIDEOS INFO
  const [aboutMeImage, setAboutMeImage] = useState('')
  const [aboutBudaImage, setAboutBudaImage] = useState('')
  const [aboutInfoBannerImg, setAboutInfoBannerImg] = useState('')
  const [aboutInfoBannerVid, setAboutInfoBannerVid] = useState('')
  const [aboutBannerVidOrImg, setAboutBannerVidOrImg] = useState('')
  const [budaRatesBannerImage, setBudaRatesBannerImage] = useState('')
  const [budaRatesBannerVideo, setBudaRatesBannerVideo] = useState('')
  const [ratesBannerVidOrImg, setRatesBannerVidOrImg] = useState('')
  const [summerBannerImg, setSummerBannerImg] = useState('')
  const [summerBannerVid, setSummerBannerVid] = useState('')
  const [summerBannerVidOrImg, setSummerBannerVidOrImg] = useState('')
  const [summerMainImg, setSummerMainImg] = useState('')
  const [summerImg2, setSummerImg2] = useState('')
  const [summerImg3, setSummerImg3] = useState('')
  const [sessionBannerImg, setSessionBannerImg] = useState('')
  const [sessionBannerVid, setSessionBannerVid] = useState('')
  const [sessionBannerVidOrImg, setSessionBannerVidOrImg] = useState('')
  const [sessionMainImg, setSessionMainImg] = useState('')
  const [sessionImg2, setSessionImg2] = useState('')
  const [sessionImg3, setSessionImg3] = useState('')
  const [galleryBannerImg, setGalleryBannerImg] = useState('')
  const [galleryBannerVid, setGalleryBannerVid] = useState('')
  const [galleryBannerVidOrImg, setGalleryBannerVidOrImg] = useState('')
  const [galleryVids, setGalleryVids] = useState([])
  const [galleryVidsList, setGalleryVidsList] = useState([])
  const [galleryImgs, setGalleryImgs] = useState([])
  const [galleryImgsList, setGalleryImgsList] = useState([])
  const [crewBannerImg, setCrewBannerImg] = useState('')
  const [crewBannerVid, setCrewBannerVid] = useState('')
  const [crewBannerVidOrImg, setCrewBannerVidOrImg] = useState('')
  const [budaCrewImg, setBudaCrewImg] = useState('')
  const [memberBannerImg, setMemberBannerImg] = useState('')
  const [memberBannerVid, setMemberBannerVid] = useState('')
  const [memberBannerVidOrImg, setMemberBannerVidOrImg] = useState('')
  const [memberImg, setMemberImg] = useState('')

  // ABOUT INFO
  const [aboutMe, setAboutMe] = useState('')
  const [aboutBuda, setAboutBuda] = useState('')
  // RATES INFO
  const [rate1, setRate1] = useState('')
  const [rate2, setRate2] = useState('')
  const [includes, setIncludes] = useState('')
  const [dropIn, setDropIn] = useState('')
  // SUMMER INFO
  const [summerTitle, setSummerTitle] = useState('')
  const [summerContent, setSummerContent] = useState('')
  const [regLink, setRegLink] = useState('')
  // SESSION INFO
  const [sessionTitle, setSessionTitle] = useState('')
  const [sessionIntro, setSessionIntro] = useState('')
  const [sessionLink, setSessionLink] = useState('')
  const [startDate, setStartDate] = useState('')
  const [showDate, setShowDate] = useState('')
  const [showLocation, setShowLocation] = useState('')
  const [showTech, setShowTech] = useState('')
  const [showTitle, setShowTitle] = useState('')
  const [showTime, setShowTime] = useState('')
  const [noClass1, setNoClass1] = useState('')
  const [noClass2, setNoClass2] = useState('')
  const [noClass3, setNoClass3] = useState('')
  const [noClass4, setNoClass4] = useState('')
  const [noClass5, setNoClass5] = useState('')
  const [noClass6, setNoClass6] = useState('')
  const [noClass7, setNoClass7] = useState('')
  //BUDA CREW INFO 
  const [session1Date, setSession1Date] = useState('')
  const [session1Tuition, setSession1Tuition] = useState('')
  const [session1Includes, setSession1Includes] = useState('')
  const [session2Date, setSession2Date] = useState('')
  const [session2Tuition, setSession2Tuition] = useState('')
  const [session2Includes, setSession2Includes] = useState('')
  const [classTime1, setClassTime1] = useState('')
  const [classTime2, setClassTime2] = useState('')
  const [requirementInfo, setRequirementInfo] = useState('')
  const [extraPerformanceInfo, setExtraPerformanceInfo] = useState('')
  const [mandatoryClassDates, setMandatoryClassDates] = useState('')
  const [extraRehearsalClassDates, setExtraReheearsalClassDates] = useState('')
  const [compDateInfo, setCompDateInfo] = useState('')
  const [auditionDate, setAuditionDate] = useState('')
  //BUDA CREW MEMBER INFO
  const [memberTitle, setMemberTitle] = useState('')
  const [upcomingEventsInfo, setUpcomingEventsInfo] = useState('')
  const [homeworkInfo, setHomeworkInfo] = useState('')
  const [budaCrewInfo, setBudaCrewInfo] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  //BUDA CREW VIDEO INFO
  const [videoTitle, setVideoTitle] = useState('')
  const [videoLink, setVideoLink] = useState('')
  //BUDA CREW MUSIC INFO
  const [musicTitle, setMusicTitle] = useState('')
  const [musicLink, setMusicLink] = useState('')
  //LANDING PAGE EDIT INFO
  const [landingPageMainImg, setLandingPageMainImg] = useState('')
  const [landingPageCard1, setLandingPageCard1] = useState('')
  const [landingPageCard2, setLandingPageCard2] = useState('')
  const [landingPageCard3, setLandingPageCard3] = useState('')
  const [landingPageVid1, setLandingPageVid1] = useState('')
  const [landingPageVid2, setLandingPageVid2] = useState('')



  useEffect(() => {

    // ABOUT ME INFO
    axios.get("http://localhost:8000/api/budaaboutme/63fd525b3abd1fa6fcfc4c20")
      .then(res => {
        setAboutMe(res.data.aboutMe)
      })
      .catch(err => {
        console.log(err)
      })

    // ABOUT BUDA INFO
    axios.get("http://localhost:8000/api/budaaboutbuda/63fd53b2de8ca70c9270d386")
      .then(res => {
        setAboutBuda(res.data.aboutBuda)
      })
      .catch(err => {
        console.log(err)
      })

    // RATES PRICING
    axios.get("http://localhost:8000/api/budarates/63fd6216a5f556178ab5ed83")
      .then(res => {
        setRate1(res.data.rate1)
        setRate2(res.data.rate2)
      })
      .catch(err => {
        console.log(err)
      })

    // RATES INFO 
    axios.get("http://localhost:8000/api/budaratesinfo/63fe42dec9fe2eb7d79b0988")
      .then(res => {
        setIncludes(res.data.includes)
      })
      .catch(err => {
        console.log(err)
      })

    //DROP IN PRICE
    axios.get("http://localhost:8000/api/budadropin/63fe4a37bb1ada7084a4b897")
      .then(res => {
        setDropIn(res.data.dropIn)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER INFO
    axios.get("http://localhost:8000/api/budasummerinfo/63fe5383578d73e2dc2a012b")
      .then(res => {
        setSummerTitle(res.data.summerTitle)
        setSummerContent(res.data.summerContent)
        setRegLink(res.data.regLink)
      })
      .catch(err => {
        console.log(err)
      })

    //SESSION INFO
    axios.get("http://localhost:8000/api/budasessioninfo/640b7444a4e078342704c59b")
      .then(res => {
        setSessionTitle(res.data.sessionTitle)
        setSessionIntro(res.data.sessionIntro)
        setSessionLink(res.data.sessionLink)
        setStartDate(res.data.startDate)
        setShowDate(res.data.showDate)
        setShowLocation(res.data.showLocation)
        setShowTech(res.data.showTech)
        setShowTitle(res.data.showTitle)
        setShowTime(res.data.showTime)
        setNoClass1(res.data.noClass1)
        setNoClass2(res.data.noClass2)
        setNoClass3(res.data.noClass3)
        setNoClass4(res.data.noClass4)
        setNoClass5(res.data.noClass5)
        setNoClass6(res.data.noClass6)
        setNoClass7(res.data.noClass7)
      })
      .catch(err => {
        console.log(err)
      })
    //BUDA CREW INFO
    axios.get("http://localhost:8000/api/budacrewinfo/63ffcc5778b0d2ecd592bcce")
      .then(res => {
        setSession1Date(res.data.session1Date)
        setSession1Tuition(res.data.session1Tuition)
        setSession1Includes(res.data.session1Includes)
        setSession2Date(res.data.session2Date)
        setSession2Tuition(res.data.session2Tuition)
        setSession2Includes(res.data.session2Includes)
        setClassTime1(res.data.classTime1)
        setClassTime2(res.data.classTime2)
        setRequirementInfo(res.data.requirementInfo)
        setExtraPerformanceInfo(res.data.extraPerformanceInfo)
        setMandatoryClassDates(res.data.mandatoryClassDates)
        setExtraReheearsalClassDates(res.data.extraRehearsalClassDates)
        setCompDateInfo(res.data.compDateInfo)
        setAuditionDate(res.data.auditionDate)
      })
      .catch(err => {
        console.log(err)
      })

    //BUDA CREW MEMBER INFO
    axios.get("http://localhost:8000/api/budacrewmemberinfo/640036108a05725938a87006")
      .then(res => {
        setMemberTitle(res.data.memberTitle)
        setUpcomingEventsInfo(res.data.upcomingEventsInfo)
        setVideoTitle(res.data.videoTitle)
        setVideoLink(res.data.videoLink)
        setHomeworkInfo(res.data.homeworkInfo)
        setBudaCrewInfo(res.data.budaCrewInfo)
        setContactPhone(res.data.contactPhone)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT ME IMAGE BASE64
    axios.get('http://localhost:8000/api/aboutmeimage/64027ad06b1988b83080eb7f')
      .then(res => {
        setAboutMeImage(res.data.aboutMeImage)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT BUDA IMAGE BASE64
    axios.get('http://localhost:8000/api/aboutbudaimage/6402a78b452c5a04826234ca')
      .then(res => {
        setAboutBudaImage(res.data.aboutBudaImage)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT INFO BANNER IMAGE BASE64
    axios.get('http://localhost:8000/api/aboutinfobanner/6403c5642309f12867c2f6c1')
      .then(res => {
        setAboutInfoBannerImg(res.data.aboutInfoBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT INFO BANNER VIDEO BASE64
    axios.get('http://localhost:8000/api/aboutinfobannervid/6403c81b58556ea0422468ab')
      .then(res => {
        setAboutInfoBannerVid(res.data.aboutInfoBannerVid)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/aboutbannervidorimg/6403cac55b9ed745d8260490')
      .then(res => {
        setAboutBannerVidOrImg(res.data.aboutBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //BUDA RATES BANNER IMAGE BASE64
    axios.get('http://localhost:8000/api/budaratesbanner/6403ac41050d9afc0eac3c3e')
      .then(res => {
        setBudaRatesBannerImage(res.data.budaRatesBannerImage)
      })
      .catch(err => {
        console.log(err)
      })
    //BUDA RATES BANNER VIDEO BASE64
    axios.get('http://localhost:8000/api/budaratesbannervideo/6403ae7c72725433143e5f1f')
      .then(res => {
        setBudaRatesBannerVideo(res.data.budaRatesBannerVideo)
      })
      .catch(err => {
        console.log(err)
      })
    //RATES BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/ratesbannervidorimg/6403b80f9ec53042773d7450')
      .then(res => {
        setRatesBannerVidOrImg(res.data.ratesBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER BANNER IMAGE
    axios.get('http://localhost:8000/api/summerbannerimg/6404e45fe889de2a637a05f7')
      .then(res => {
        setSummerBannerImg(res.data.summerBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER BANNER VIDEO
    axios.get('http://localhost:8000/api/summerbannervid/6404e6c383edfcb691afce47')
      .then(res => {
        setSummerBannerVid(res.data.summerBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/summerbannervidorimg/6404e858e50d41ae5e663a30')
      .then(res => {
        setSummerBannerVidOrImg(res.data.summerBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER MAIN IMAGE 
    axios.get('http://localhost:8000/api/summermainimg/6408eb04ebee3285b5743758')
      .then(res => {
        setSummerMainImg(res.data.summerMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER IMAGE 2  
    axios.get('http://localhost:8000/api/summerimg2/6408eb18ebee3285b574375b')
      .then(res => {
        setSummerImg2(res.data.summerImg2)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER IMAGE 3
    axios.get('http://localhost:8000/api/summerimg3/6408eb24ebee3285b574375e')
      .then(res => {
        setSummerImg3(res.data.summerImg3)
      })
      .catch(err => {
        console.log(err)
      })


    //SESSION BANNER IMAGE 
    axios.get('http://localhost:8000/api/sessionbannerimg/64062b1c7a2c450f34c661e9')
      .then(res => {
        setSessionBannerImg(res.data.sessionBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION BANNER VIDEO 
    axios.get('http://localhost:8000/api/sessionbannervid/64062b367a2c450f34c661ec')
      .then(res => {
        setSessionBannerVid(res.data.sessionBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/sessionbannervidorimg/64062b477a2c450f34c661ee')
      .then(res => {
        setSessionBannerVidOrImg(res.data.sessionBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION MAIN IMAGE 
    axios.get('http://localhost:8000/api/sessionmainimg/6408f4688052cc6be08ed98a')
      .then(res => {
        setSessionMainImg(res.data.sessionMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION IMAGE 2 
    axios.get('http://localhost:8000/api/sessionimg2/6408f4778052cc6be08ed98c')
      .then(res => {
        setSessionImg2(res.data.sessionImg2)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION IMAGE 3 
    axios.get('http://localhost:8000/api/sessionimg3/6408f47f8052cc6be08ed98e')
      .then(res => {
        setSessionImg3(res.data.sessionImg3)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER IMAGE 
    axios.get('http://localhost:8000/api/gallerybannerimg/64066082c580e625b8639818')
      .then(res => {
        setGalleryBannerImg(res.data.galleryBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER VIDEO
    axios.get('http://localhost:8000/api/gallerybannervid/64066145e628c7b9b066dee3')
      .then(res => {
        setGalleryBannerVid(res.data.galleryBannerVid)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/gallerybannervidorimg/64066155e628c7b9b066dee5')
      .then(res => {
        setGalleryBannerVidOrImg(res.data.galleryBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //CREW BANNER IMAGE 
    axios.get('http://localhost:8000/api/crewbannerimg/640671eb024ae5b9309208ab')
      .then(res => {
        setCrewBannerImg(res.data.crewBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //CREW BANNER VIDEO 
    axios.get('http://localhost:8000/api/crewbannervid/640671f8024ae5b9309208ad')
      .then(res => {
        setCrewBannerVid(res.data.crewBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //CREW BANNER VIDEO OR IMAGE TRACKER
    axios.get('http://localhost:8000/api/crewbannervidorimg/64067203024ae5b9309208af')
      .then(res => {
        setCrewBannerVidOrImg(res.data.crewBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })


    //MEMBER BANNER IMAGE 
    axios.get('http://localhost:8000/api/memberbannerimg/64079bd924657d47be763a70')
      .then(res => {
        setMemberBannerImg(res.data.memberBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //MEMBER BANNER VIDEO
    axios.get('http://localhost:8000/api/memberbannervid/64079be224657d47be763a72')
      .then(res => {
        setMemberBannerVid(res.data.memberBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //MEMBER BANNER VIDEO OR IMAGE TRACKER 
    axios.get('http://localhost:8000/api/memberbannervidorimg/64079bee24657d47be763a74')
      .then(res => {
        setMemberBannerVidOrImg(res.data.memberBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //LANDING PAGE MAIN IMG
    axios.get('http://localhost:8000/api/landingpagemainimg/6407e14c0664c1b35c2630da')
      .then(res => {
        setLandingPageMainImg(res.data.landingPageMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 1
    axios.get('http://localhost:8000/api/landingpagecard1/6407e1640664c1b35c2630dd')
      .then(res => {
        setLandingPageCard1(res.data.landingPageCard1)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 2
    axios.get('http://localhost:8000/api/landingpagecard2/6407e1710664c1b35c2630e0')
      .then(res => {
        setLandingPageCard2(res.data.landingPageCard2)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 3
    axios.get( 'http://localhost:8000/api/landingpagecard3/6407e17d0664c1b35c2630e3')
      .then(res => {
        setLandingPageCard3(res.data.landingPageCard3)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE VID 1
    axios.get( 'http://localhost:8000/api/landingpagevid1/6407e18e0664c1b35c2630e6')
      .then(res => {
        setLandingPageVid1(res.data.landingPageVid1)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE VID 2 
    axios.get('http://localhost:8000/api/landingpagevid2/6407e1960664c1b35c2630e8')
      .then(res => {
        setLandingPageVid2(res.data.landingPageVid2)
      })
      .catch(err => {
        console.log(err)
      })


    //MEMBER IMG
    axios.get('http://localhost:8000/api/memberImg/6409506ad7e82977ba97852e')
      .then(res => {
        setMemberImg(res.data.memberImg)
      })
      .catch(err => {
        console.log(err)
      })
    //BUDA CREW IMG
    axios.get( 'http://localhost:8000/api/budacrewimg/640954b6ee04f09798d82b26')
      .then(res => {
        setBudaCrewImg(res.data.budaCrewImg)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY VIDS
    axios.get( 'http://localhost:8000/api/galleryvids')
      .then(res => {
        setGalleryVidsList(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY IMGS
    axios.get('http://localhost:8000/api/galleryimgs')
      .then(res => {
        setGalleryImgsList(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
console.log("url is", baseUrl)
  return (
    <div className="App">
      {!tracker ? <BudaNavbar /> : <AdminNavbar />}

      <Routes>


        <Route path="/" element={<LandingPage
          landingPageMainImg={landingPageMainImg}
          landingPageCard1={landingPageCard1}
          landingPageCard2={landingPageCard2}
          landingPageCard3={landingPageCard3}
          landingPageVid1={landingPageVid1}
          landingPageVid2={landingPageVid2}
        />} />

        <Route path="/ap" element={<AboutPage aboutMe={aboutMe} aboutBuda={aboutBuda} aboutMeImage={aboutMeImage} aboutBudaImage={aboutBudaImage} aboutInfoBannerImg={aboutInfoBannerImg} aboutBannerVidOrImg={aboutBannerVidOrImg} aboutInfoBannerVid={aboutInfoBannerVid} />} />
        <Route path="/rp" element={<RatesPage rate1={rate1} rate2={rate2} includes={includes} dropIn={dropIn} budaRatesBannerImage={budaRatesBannerImage} budaRatesBannerVideo={budaRatesBannerVideo} ratesBannerVidOrImg={ratesBannerVidOrImg} />} />
        <Route path="/sp" element={<SummerSched summerTitle={summerTitle}
          summerContent={summerContent}
          regLink={regLink}
          summerBannerImg={summerBannerImg}
          summerBannerVid={summerBannerVid}
          summerBannerVidOrImg={summerBannerVidOrImg}
          summerMainImg={summerMainImg}
          summerImg2={summerImg2}
          summerImg3={summerImg3}
        />} />

        <Route path="/wsp" element=
          {<WinterSpringPage
            sessionTitle={sessionTitle}
            sessionIntro={sessionIntro}
            sessionLink={sessionLink}
            startDate={startDate}
            showDate={showDate}
            showLocation={showLocation}
            showTech={showTech}
            showTitle={showTitle}
            showTime={showTime}
            noClass1={noClass1}
            noClass2={noClass2}
            noClass3={noClass3}
            noClass4={noClass4}
            noClass5={noClass5}
            noClass6={noClass6}
            sessionBannerImg={sessionBannerImg}
            sessionBannerVid={sessionBannerVid}
            sessionBannerVidOrImg={sessionBannerVidOrImg}
            sessionMainImg={sessionMainImg}
            sessionImg2={sessionImg2}
            sessionImg3={sessionImg3}
          />} />

        <Route path="/bcp" element=
          {<BuddaCrewPage
            session1Date={session1Date}
            session1Tuition={session1Tuition}
            session1Includes={session1Includes}
            session2Date={session2Date}
            session2Tuition={session2Tuition}
            session2Includes={session2Includes}
            classTime1={classTime1}
            classTime2={classTime2}
            requirementInfo={requirementInfo}
            extraPerformanceInfo={extraPerformanceInfo}
            mandatoryClassDates={mandatoryClassDates}
            extraRehearsalClassDates={extraRehearsalClassDates}
            compDateInfo={compDateInfo}
            auditionDate={auditionDate}
            crewBannerImg={crewBannerImg}
            crewBannerVid={crewBannerVid}
            crewBannerVidOrImg={crewBannerVidOrImg}
            budaCrewImg={budaCrewImg}
          />} />


        <Route path="/gp" element={<GalleryPage
          galleryBannerImg={galleryBannerImg}
          galleryBannerVid={galleryBannerVid}
          galleryBannerVidOrImg={galleryBannerVidOrImg}
          galleryVidsList={galleryVidsList}
          galleryImgsList={galleryImgsList}
        />} />

        <Route path="/budaAdmin" element={<AdminForm setLoggedIn={setLoggedIn} setTracker={setTracker} />} />

        {/* Admin Routes */}
        <Route path="/adminabout"
          element={<AdminAboutPage
            aboutMe={aboutMe}
            setAboutMe={setAboutMe}
            aboutBuda={aboutBuda}
            setAboutBuda={setAboutBuda}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            aboutMeImage={aboutMeImage}
            setAboutMeImage={setAboutMeImage}
            aboutBudaImage={aboutBudaImage}
            setAboutBudaImage={setAboutBudaImage}
            aboutInfoBannerImg={aboutInfoBannerImg}
            setAboutInfoBannerImg={setAboutInfoBannerImg}
            aboutInfoBannerVid={aboutInfoBannerVid}
            setAboutInfoBannerVid={setAboutInfoBannerVid}
            aboutBannerVidOrImg={aboutBannerVidOrImg}
            setAboutBannerVidOrImg={setAboutBannerVidOrImg}
          />}
        />

        <Route path="/adminrates"
          element={<AdminRatesPage
            rate1={rate1}
            setRate1={setRate1}
            rate2={rate2}
            setRate2={setRate2}
            includes={includes}
            setIncludes={setIncludes}
            dropIn={dropIn}
            setDropIn={setDropIn}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            budaRatesBannerImage={budaRatesBannerImage}
            setBudaRatesBannerImage={setBudaRatesBannerImage}
            budaRatesBannerVideo={budaRatesBannerVideo}
            setBudaRatesBannerVideo={setBudaRatesBannerVideo}
            ratesBannerVidOrImg={ratesBannerVidOrImg}
            setRatesBannerVidOrImg={setRatesBannerVidOrImg}
          />} />



        <Route path="/adminsummer"
          element={<AdminSummerPage
            summerTitle={summerTitle}
            setSummerTitle={setSummerTitle}
            summerContent={summerContent}
            setSummerContent={setSummerContent}
            regLink={regLink}
            setRegLink={setRegLink}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            summerBannerImg={summerBannerImg}
            setSummerBannerImg={setSummerBannerImg}
            summerBannerVid={summerBannerVid}
            setSummerBannerVid={setSummerBannerVid}
            summerBannerVidOrImg={summerBannerVidOrImg}
            setSummerBannerVidOrImg={setSummerBannerVidOrImg}
            summerMainImg={summerMainImg}
            setSummerMainImg={setSummerMainImg}
            summerImg2={summerImg2}
            setSummerImg2={setSummerImg2}
            summerImg3={summerImg3}
            setSummerImg3={setSummerImg3}
          />}
        />

        <Route path="/adminsession"
          element={<AdminWinterSpringPage
            sessionTitle={sessionTitle}
            sessionIntro={sessionIntro}
            setSessionIntro={setSessionIntro}
            setSessionTitle={setSessionTitle}
            sessionLink={sessionLink}
            setSessionLink={setSessionLink}
            startDate={startDate}
            setStartDate={setStartDate}
            showDate={showDate}
            setShowDate={setShowDate}
            showLocation={showLocation}
            setShowLocation={setShowLocation}
            showTech={showTech}
            setShowTech={setShowTech}
            showTitle={showTitle}
            setShowTitle={setShowTitle}
            showTime={showTime}
            setShowTime={setShowTime}
            noClass1={noClass1}
            setNoClass1={setNoClass1}
            noClass2={noClass2}
            setNoClass2={setNoClass2}
            noClass3={noClass3}
            setNoClass3={setNoClass3}
            noClass4={noClass4}
            setNoClass4={setNoClass4}
            noClass5={noClass5}
            setNoClass5={setNoClass5}
            noClass6={noClass6}
            setNoClass6={setNoClass6}
            noClass7={noClass7}
            setNoClass7={setNoClass7}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            sessionBannerImg={sessionBannerImg}
            setSessionBannerImg={setSessionBannerImg}
            sessionBannerVid={sessionBannerVid}
            setSessionBannerVid={setSessionBannerVid}
            setSessionBannerVidOrImg={setSessionBannerVidOrImg}
            sessionBannerVidOrImg={sessionBannerVidOrImg}
            sessionMainImg={sessionMainImg}
            setSessionMainImg={setSessionMainImg}
            sessionImg2={sessionImg2}
            setSessionImg2={setSessionImg2}
            sessionImg3={sessionImg3}
            setSessionImg3={setSessionImg3}
          />} />

        <Route path="admingallery" element={<AdminGalleryPage
          galleryBannerImg={galleryBannerImg}
          galleryBannerVid={galleryBannerVid}
          galleryBannerVidOrImg={galleryBannerVidOrImg}
          setGalleryBannerImg={setGalleryBannerImg}
          setGalleryBannerVid={setGalleryBannerVid}
          setGalleryBannerVidOrImg={setGalleryBannerVidOrImg}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setTracker={setTracker}
          galleryVids={galleryVids}
          setGalleryVids={setGalleryVids}
          galleryVidsList={galleryVidsList}
          setGalleryVidsList={setGalleryVidsList}
          galleryImgs={galleryImgs}
          setGalleryImgs={setGalleryImgs}
          galleryImgsList={galleryImgsList}
          setGalleryImgsList={setGalleryImgsList}
        />} />

        <Route path="budacrewmember" element={<BudaCrewAdminForm setMemberLogin={setMemberLogin} />} />

        <Route path="budacrewadminpage"
          element={<BudaCrewMemberPage
            memberLogin={memberLogin}
            setMemberLogin={setMemberLogin}
            memberTitle={memberTitle}
            upcomingEventsInfo={upcomingEventsInfo}
            homeworkInfo={homeworkInfo}
            budaCrewInfo={budaCrewInfo}
            contactPhone={contactPhone}
            memberBannerImg={memberBannerImg}
            memberBannerVid={memberBannerVid}
            memberBannerVidOrImg={memberBannerVidOrImg}
            memberImg={memberImg}
          />} />

        <Route path="budacrewmemberadminpage" element=
          {<AdminBudaCrewMemberPage
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            memberLogin={memberLogin}
            setMemberLogin={setMemberLogin}
            memberTitle={memberTitle}
            setMemberTitle={setMemberTitle}
            upcomingEventsInfo={upcomingEventsInfo}
            setUpcomingEventsInfo={setUpcomingEventsInfo}
            videoTitle={videoTitle}
            setVideoTitle={setVideoTitle}
            videoLink={videoLink}
            setVideoLink={setVideoLink}
            homeworkInfo={homeworkInfo}
            setHomeworkInfo={setHomeworkInfo}
            budaCrewInfo={budaCrewInfo}
            setBudaCrewInfo={setBudaCrewInfo}
            contactPhone={contactPhone}
            setContactPhone={setContactPhone}
            musicTitle={musicTitle}
            setMusicTitle={setMusicTitle}
            musicLink={musicLink}
            setMusicLink={setMusicLink}
            memberBannerImg={memberBannerImg}
            memberBannerVid={memberBannerVid}
            memberBannerVidOrImg={memberBannerVidOrImg}
            setMemberBannerImg={setMemberBannerImg}
            setMemberBannerVid={setMemberBannerVid}
            setMemberBannerVidOrImg={setMemberBannerVidOrImg}
            memberImg={memberImg}
            setMemberImg={setMemberImg}
          />} />


        <Route path="budacreweditadminpage" element=
          {<AdminEditBudaCrewPage
            session1Date={session1Date}
            setSession1Date={setSession1Date}
            session1Tuition={session1Tuition}
            setSession1Tuition={setSession1Tuition}
            session1Includes={session1Includes}
            setSession1Includes={setSession1Includes}
            session2Date={session2Date}
            setSession2Date={setSession2Date}
            session2Tuition={session2Tuition}
            setSession2Tuition={setSession2Tuition}
            session2Includes={session2Includes}
            setSession2Includes={setSession2Includes}
            classTime1={classTime1}
            setClassTime1={setClassTime1}
            classTime2={classTime2}
            setClassTime2={setClassTime2}
            requirementInfo={requirementInfo}
            setRequirementInfo={setRequirementInfo}
            extraPerformanceInfo={extraPerformanceInfo}
            setExtraPerformanceInfo={setExtraPerformanceInfo}
            mandatoryClassDates={mandatoryClassDates}
            setMandatoryClassDates={setMandatoryClassDates}
            extraRehearsalClassDates={extraRehearsalClassDates}
            setExtraReheearsalClassDates={setExtraReheearsalClassDates}
            compDateInfo={compDateInfo}
            setCompDateInfo={setCompDateInfo}
            auditionDate={auditionDate}
            setAuditionDate={setAuditionDate}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setTracker={setTracker}
            crewBannerImg={crewBannerImg}
            crewBannerVid={crewBannerVid}
            crewBannerVidOrImg={crewBannerVidOrImg}
            setCrewBannerImg={setCrewBannerImg}
            setCrewBannerVid={setCrewBannerVid}
            setCrewBannerVidOrImg={setCrewBannerVidOrImg}
            budaCrewImg={budaCrewImg}
            setBudaCrewImg={setBudaCrewImg}
          />} />

        <Route path="editlogin" element={<AdminEditLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setTracker={setTracker} />} />

        <Route path="editbclogin" element={<AdminEditMemberPassword loggedIn={loggedIn} setLoggedIn={setLoggedIn} setTracker={setTracker} />} />

        <Route path="adminhomepage" element={
          <AdminLandingPage
            landingPageMainImg={landingPageMainImg}
            setLandingPageMainImg={setLandingPageMainImg}
            landingPageCard1={landingPageCard1}
            setLandingPageCard1={setLandingPageCard1}
            landingPageCard2={landingPageCard2}
            setLandingPageCard2={setLandingPageCard2}
            landingPageCard3={landingPageCard3}
            setLandingPageCard3={setLandingPageCard3}
            landingPageVid1={landingPageVid1}
            setLandingPageVid1={setLandingPageVid1}
            landingPageVid2={landingPageVid2}
            setLandingPageVid2={setLandingPageVid2}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />

      



      </Routes>
      <ContactBar />
    </div>
  );
}

export default App;
