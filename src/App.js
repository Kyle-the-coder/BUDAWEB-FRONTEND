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
    axios.get(baseUrl + "/api/budaaboutme/640cd666bf0f41fdc08d354c")
      .then(res => {
        setAboutMe(res.data.aboutMe)
      })
      .catch(err => {
        console.log(err)
      })

    // ABOUT BUDA INFO
    axios.get(baseUrl + "/api/budaaboutbuda/640cdf28bf0f41fdc08d384b")
      .then(res => {
        setAboutBuda(res.data.aboutBuda)
      })
      .catch(err => {
        console.log(err)
      })

    // RATES PRICING
    axios.get(baseUrl + "/api/budarates/640ce8afbf0f41fdc08d3d71")
      .then(res => {
        setRate1(res.data.rate1)
        setRate2(res.data.rate2)
      })
      .catch(err => {
        console.log(err)
      })

    // RATES INFO 
    axios.get(baseUrl + "/api/budaratesinfo/640cea5abf0f41fdc08d3e0e")
      .then(res => {
        setIncludes(res.data.includes)
      })
      .catch(err => {
        console.log(err)
      })

    //DROP IN PRICE
    axios.get(baseUrl + "/api/budadropin/640ce79abf0f41fdc08d3d3c")
      .then(res => {
        setDropIn(res.data.dropIn)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER INFO
    axios.get(baseUrl + "/api/budasummerinfo/640cebaebf0f41fdc08d3e78")
      .then(res => {
        setSummerTitle(res.data.summerTitle)
        setSummerContent(res.data.summerContent)
        setRegLink(res.data.regLink)
      })
      .catch(err => {
        console.log(err)
      })

    //SESSION INFO
    axios.get(baseUrl + "/api/budasessioninfo/640ceaeebf0f41fdc08d3e43")
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
    axios.get(baseUrl + "/api/budacrewinfo/640ce326bf0f41fdc08d3c03")
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
    axios.get(baseUrl + "/api/budacrewmemberinfo/640ce52cbf0f41fdc08d3c9a")
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
    axios.get(baseUrl + '/api/aboutmeimage/640cde28bf0f41fdc08d3786')
      .then(res => {
        setAboutMeImage(res.data.aboutMeImage)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT BUDA IMAGE BASE64
    axios.get(baseUrl + '/api/aboutbudaimage/640cdb37bf0f41fdc08d361a')
      .then(res => {
        setAboutBudaImage(res.data.aboutBudaImage)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT INFO BANNER IMAGE BASE64
    axios.get(baseUrl + '/api/aboutinfobanner/640cdd25bf0f41fdc08d36ba')
      .then(res => {
        setAboutInfoBannerImg(res.data.aboutInfoBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT INFO BANNER VIDEO BASE64
    axios.get(baseUrl + '/api/aboutinfobannervid/640cdd8bbf0f41fdc08d36ee')
      .then(res => {
        setAboutInfoBannerVid(res.data.aboutInfoBannerVid)
      })
      .catch(err => {
        console.log(err)
      })

    //ABOUT BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/aboutbannervidorimg/640cda27bf0f41fdc08d35e6')
      .then(res => {
        setAboutBannerVidOrImg(res.data.aboutBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //BUDA RATES BANNER IMAGE BASE64
    axios.get(baseUrl + '/api/budaratesbanner/640ce925bf0f41fdc08d3da6')
      .then(res => {
        setBudaRatesBannerImage(res.data.budaRatesBannerImage)
      })
      .catch(err => {
        console.log(err)
      })
    //BUDA RATES BANNER VIDEO BASE64
    axios.get(baseUrl + '/api/budaratesbannervideo/640ce981bf0f41fdc08d3dda')
      .then(res => {
        setBudaRatesBannerVideo(res.data.budaRatesBannerVideo)
      })
      .catch(err => {
        console.log(err)
      })
    //RATES BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/ratesbannervidorimg/640d012bbf0f41fdc08d5220')
      .then(res => {
        setRatesBannerVidOrImg(res.data.ratesBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER BANNER IMAGE
    axios.get(baseUrl + '/api/summerbannerimg/640cfc1bbf0f41fdc08d4ce2')
      .then(res => {
        setSummerBannerImg(res.data.summerBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER BANNER VIDEO
    axios.get(baseUrl + '/api/summerbannervid/640cfc9cbf0f41fdc08d4d4c')
      .then(res => {
        setSummerBannerVid(res.data.summerBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/summerbannervidorimg/640cfc65bf0f41fdc08d4d18')
      .then(res => {
        setSummerBannerVidOrImg(res.data.summerBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //SUMMER MAIN IMAGE 
    axios.get(baseUrl + '/api/summermainimg/640cfda0bf0f41fdc08d4eea')
      .then(res => {
        setSummerMainImg(res.data.summerMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER IMAGE 2  
    axios.get(baseUrl + '/api/summerimg2/640cfd0bbf0f41fdc08d4e1f')
      .then(res => {
        setSummerImg2(res.data.summerImg2)
      })
      .catch(err => {
        console.log(err)
      })
    //SUMMER IMAGE 3
    axios.get(baseUrl + '/api/summerimg3/640cfd55bf0f41fdc08d4eb5')
      .then(res => {
        setSummerImg3(res.data.summerImg3)
      })
      .catch(err => {
        console.log(err)
      })


    //SESSION BANNER IMAGE 
    axios.get(baseUrl + '/api/sessionbannerimg/640cf7acbf0f41fdc08d45ef')
      .then(res => {
        setSessionBannerImg(res.data.sessionBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION BANNER VIDEO 
    axios.get(baseUrl + '/api/sessionbannervid/640cf819bf0f41fdc08d4656')
      .then(res => {
        setSessionBannerVid(res.data.sessionBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/sessionbannervidorimg/640cf7e9bf0f41fdc08d4621')
      .then(res => {
        setSessionBannerVidOrImg(res.data.sessionBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION MAIN IMAGE 
    axios.get(baseUrl + '/api/sessionmainimg/640cfbb9bf0f41fdc08d4bec')
      .then(res => {
        setSessionMainImg(res.data.sessionMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION IMAGE 2 
    axios.get(baseUrl + '/api/sessionimg2/640cfacebf0f41fdc08d49fe')
      .then(res => {
        setSessionImg2(res.data.sessionImg2)
      })
      .catch(err => {
        console.log(err)
      })
    //SESSION IMAGE 3 
    axios.get(baseUrl + '/api/sessionimg3/640cfb4bbf0f41fdc08d4af6')
      .then(res => {
        setSessionImg3(res.data.sessionImg3)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER IMAGE 
    axios.get(baseUrl + '/api/gallerybannerimg/640cedcfbf0f41fdc08d4010')
      .then(res => {
        setGalleryBannerImg(res.data.galleryBannerImg)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER VIDEO
    axios.get(baseUrl + '/api/gallerybannervid/640cee61bf0f41fdc08d4078')
      .then(res => {
        setGalleryBannerVid(res.data.galleryBannerVid)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/gallerybannervidorimg/640cee22bf0f41fdc08d4044')
      .then(res => {
        setGalleryBannerVidOrImg(res.data.galleryBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //CREW BANNER IMAGE 
    axios.get(baseUrl + '/api/crewbannerimg/640cec12bf0f41fdc08d3ead')
      .then(res => {
        setCrewBannerImg(res.data.crewBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //CREW BANNER VIDEO 
    axios.get(baseUrl + '/api/crewbannervid/640ceca9bf0f41fdc08d3f15')
      .then(res => {
        setCrewBannerVid(res.data.crewBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //CREW BANNER VIDEO OR IMAGE TRACKER
    axios.get(baseUrl + '/api/crewbannervidorimg/640cec62bf0f41fdc08d3ee1')
      .then(res => {
        setCrewBannerVidOrImg(res.data.crewBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })


    //MEMBER BANNER IMAGE 
    axios.get(baseUrl + '/api/memberbannerimg/640cf60bbf0f41fdc08d447c')
      .then(res => {
        setMemberBannerImg(res.data.memberBannerImg)
      })
      .catch(err => {
        console.log(err)
      })
    //MEMBER BANNER VIDEO
    axios.get(baseUrl + '/api/memberbannervid/640cf6a7bf0f41fdc08d44b4')
      .then(res => {
        setMemberBannerVid(res.data.memberBannerVid)
      })
      .catch(err => {
        console.log(err)
      })
    //MEMBER BANNER VIDEO OR IMAGE TRACKER 
    axios.get(baseUrl + '/api/memberbannervidorimg/640cf65cbf0f41fdc08d4480')
      .then(res => {
        setMemberBannerVidOrImg(res.data.memberBannerVidOrImg)
      })
      .catch(err => {
        console.log(err)
      })

    //LANDING PAGE MAIN IMG
    axios.get(baseUrl + '/api/landingpagemainimg/640cd5e0bf0f41fdc08d354a')
      .then(res => {
        setLandingPageMainImg(res.data.landingPageMainImg)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 1
    axios.get(baseUrl + '/api/landingpagecard1/640cf01fbf0f41fdc08d40cd')
      .then(res => {
        setLandingPageCard1(res.data.landingPageCard1)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 2
    axios.get(baseUrl + '/api/landingpagecard2/640cf090bf0f41fdc08d4163')
      .then(res => {
        setLandingPageCard2(res.data.landingPageCard2)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE CARD 3
    axios.get(baseUrl + '/api/landingpagecard3/640cf0d0bf0f41fdc08d4198')
      .then(res => {
        setLandingPageCard3(res.data.landingPageCard3)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE VID 1
    axios.get(baseUrl + '/api/landingpagevid1/640cf143bf0f41fdc08d422e')
      .then(res => {
        setLandingPageVid1(res.data.landingPageVid1)
      })
      .catch(err => {
        console.log(err)
      })
    //LANDING PAGE VID 2 
    axios.get(baseUrl + '/api/landingpagevid2/640cf1edbf0f41fdc08d4386')
      .then(res => {
        setLandingPageVid2(res.data.landingPageVid2)
      })
      .catch(err => {
        console.log(err)
      })


    //MEMBER IMG
    axios.get(baseUrl + '/api/memberimg/640cf736bf0f41fdc08d4553')
      .then(res => {
        setMemberImg(res.data.memberImg)
      })
      .catch(err => {
        console.log(err)
      })
    //BUDA CREW IMG
    axios.get(baseUrl + '/api/budacrewimg/640ce1b8bf0f41fdc08d3b69')
      .then(res => {
        setBudaCrewImg(res.data.budaCrewImg)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY VIDS
    axios.get(baseUrl + '/api/galleryvids')
      .then(res => {
        setGalleryVidsList(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    //GALLERY IMGS
    axios.get(baseUrl + '/api/galleryimgs')
      .then(res => {
        setGalleryImgsList(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  console.log(memberBannerVidOrImg)
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
