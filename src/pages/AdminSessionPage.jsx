import check from "../assets/images/checkmark.png"
import "../styles/scrollBar.css"
import "../styles/cardHover.css"
import "../styles/bannerSize.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import FileBase64 from 'react-file-base64';


const AdminWinterSpringPage = (props) => {
    const { sessionTitle, setSessionTitle,
        startDate, setStartDate,
        showDate, setShowDate,
        showLocation, setShowLocation,
        showTech, setShowTech,
        showTitle, setShowTitle,
        showTime, setShowTime,
        noClass1, setNoClass1,
        noClass2, setNoClass2,
        noClass3, setNoClass3,
        noClass4, setNoClass4,
        noClass5, setNoClass5,
        noClass6, setNoClass6,
        noClass7, setNoClass7,
        sessionLink, setSessionLink,
        sessionIntro, setSessionIntro } = props
    const { loggedIn, setLoggedIn } = props
    const { sessionMainImg,
        setSessionMainImg,
        sessionImg2,
        setSessionImg2,
        sessionImg3,
        setSessionImg3 } = props
    const { sessionBannerImg, setSessionBannerImg, sessionBannerVid, setSessionBannerVid, sessionBannerVidOrImg, setSessionBannerVidOrImg } = props
    const { setTracker } = props
    const [sessionBannerImgEdited, setSessionBannerImgEdited] = useState(false)
    const [sessionBannerVidEdited, setSessionBannerVidEdited] = useState(false)
    const [sessionInfoEdited, setSessionInfoEdited] = useState(false)
    const [sessionMainImgEdited, setSessionMainImgEdited] = useState(false)
    const [sessionImg2Edited, setSessionImg2Edited] = useState(false)
    const [sessionImg3Edited, setSessionImg3Edited] = useState(false)
    const baseUrl = process.env.REACT_APP_BASE_URL

    const navigate = useNavigate();

    useEffect(() => {
        // SECURITY CHECK
        if (loggedIn != "exist") {
            navigate("/")
        }
    }, [])


    // HANDLE SESSION INFO
    const handleSubmitSessionInfo = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/budasessioninfo/63fea4130c85ca04a51712b0', {
            startDate, showDate,
            showLocation, showTech,
            showTitle, showTime,
            noClass1, noClass2,
            noClass3, noClass4,
            noClass5, noClass6,
            noClass7, sessionLink,
            sessionTitle
        })
            .then(res => {
                console.log(res)
                setSessionInfoEdited(true)
                const time = setTimeout(() => setSessionInfoEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION BANNER IMAGE
    const handleSubmitSessionBannerImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/sessionbannerimg/64062b1c7a2c450f34c661e9', { sessionBannerImg })
            .then(res => {
                console.log(res)
                axios.put(baseUrl+'/api/sessionbannervidorimg/64062b477a2c450f34c661ee', { sessionBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setSessionBannerImgEdited(true)
                const time = setTimeout(() => setSessionBannerImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION BANNER VIDEO
    const handleSubmitSessionBannerVid = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/sessionbannervid/64062b367a2c450f34c661ec', { sessionBannerVid })
            .then(res => {
                console.log(res)
                axios.put(baseUrl+'/api/sessionbannervidorimg/64062b477a2c450f34c661ee', { sessionBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setSessionBannerVidEdited(true)
                const time = setTimeout(() => setSessionBannerVidEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE MAIN IMG 
    const handleSubmitSessionMainImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/sessionmainimg/6408f4688052cc6be08ed98a', { sessionMainImg })
            .then(res => {
                setSessionMainImgEdited(true)
                const time = setTimeout(() => setSessionMainImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION IMG 2
    const handleSubmitSessionImg2 = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/sessionimg2/6408f4778052cc6be08ed98c', { sessionImg2 })
            .then(res => {
                setSessionImg2Edited(true)
                const time = setTimeout(() => setSessionImg2Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION IMG 3
    const handleSubmitSessionImg3 = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/sessionimg3/6408f47f8052cc6be08ed98e', { sessionImg3 })
            .then(res => {
                setSessionImg3Edited(true)
                const time = setTimeout(() => setSessionImg3Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    const backOne = () => {
        navigate(-1)
    }

    const logout = () => {
        setLoggedIn("does not exist")
        setTracker(false)
        navigate("/")
    }
    return (
        <div>
            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {sessionBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={sessionBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={sessionBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-12 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
                <button className="underline text-sky-500 mr-10" onClick={() => logout()}>Logout</button>
            </section>

            {/* EDIT ABOUT BANNER SECTION */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full items-center justify-center mt-8  flex h-fit flex-col">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitSessionBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setSessionBannerImg(base64); setSessionBannerVidOrImg('true') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {sessionBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitSessionBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setSessionBannerVid(base64); setSessionBannerVidOrImg('false') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {sessionBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-5">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl welcome">{sessionTitle}:</h1>
            </section>

            {/* Bianca About Info Section */}
            <section className="mb-10">
                <div className="flex flex-col md:flex-row items-center w-full h-content justify-center">
                    <img className="rounded infoCard2" width="500" src={sessionMainImg} />
                    <div className="w-11/12 sm:w-1/2  h-[700px] flex flex-col items-center">
                        <div className=" aboutInfo w-full px-2 py-1 mb-2 lg:text-2xl">
                            <h2 className="mb-6 lg:text-4xl">
                                {sessionIntro}
                            </h2>
                            <p className="mb-1 text-lg">
                                <strong>Important Dates:</strong>
                            </p>
                            <p className="indent-5">
                                <strong>Start: </strong>{startDate}
                            </p>
                            <p className="indent-5">
                                <strong>Show date:</strong>  {showDate}
                            </p>
                            <p className="indent-5">
                                <strong>Show Location:</strong> {showLocation}
                            </p>
                            <p className=" indent-5">
                                <strong>MANDATORY TECH: </strong> {showTech}
                            </p>
                            <p className="indent-5">
                                <strong>{showTitle}: </strong> {showTime}
                            </p>
                            <p className="indent-5">
                                <strong>{noClass1} </strong>
                            </p>
                            <p className="indent-5">
                                <strong>{noClass2} </strong>
                            </p>
                            <p className="indent-5">
                                <strong>{noClass3}</strong>
                            </p>
                            <p className="indent-5 ">
                                <strong>{noClass4}</strong>
                            </p>
                            <p className="indent-5">
                                <strong>{noClass5}</strong>
                            </p>
                            <p className="indent-5 ">
                                <strong>{noClass6}</strong>
                            </p>
                            <p className="indent-5 mb-5">
                                <strong>{noClass7}</strong>
                            </p>
                            <p className=" text-lg">
                                <strong>Tuition:</strong>
                            </p>
                            <p className="indent-5">
                                Tuition includes all classes plus costume, photos and recital.
                            </p>
                            <p className="indent-5">
                                All tuition is due first week of classes or else subject to $25 late fee.
                            </p>
                            <p className="indent-5 mb-5">
                                <a className="text-sky-500 underline" href="/rp">Click Here</a> for rate pricing.
                            </p>
                            <p className=" text-lg">
                                <strong>Contact:</strong>
                            </p>
                            <p className="indent-5 ">
                                Please <a className="text-sky-500 underline" href="#contactSection">contact</a> Bianca if you have any questions.
                            </p>


                        </div>
                        <div className=" w-full h-32 flex justify-center items-end mt-1">
                            <a target="_blank" href="https://app.thestudiodirector.com/buda7/portal.sd?page=Login" className="bg-indigo-700 text-white cursor-pointer justify-center hover:bg-slate-900 hover:text-pink-300 transition-all duration-500 flex items-center md:text-2xl px-6 h-1/2 rounded">Register Here!</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Summer Section */}
            <section className=" w-full mb-14 flex flex-col sm:flex-row sm:justify-evenly sm:items-start justify-center items-center">
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSessionMainImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSessionMainImg(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {sessionMainImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className=" xl:text-2xl w-content h-content ">
                    <form onSubmit={handleSubmitSessionInfo} className="flex bg-slate-200 flex-col w-[500px] h-[500px] aboutInfo sm:w-[600px] md:w-[650px] h-content p-3 border-2 border-black">
                        <h1 className="mx-auto welcome text-2xl mb-5 md:text-4xl">Edit Your Session Info Here:</h1>
                        <label>Session Title:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setSessionTitle(e.target.value)}
                            value={sessionTitle}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Session Intro:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setSessionIntro(e.target.value)}
                            value={sessionIntro}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Session Start and End Dates:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Show Date:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setShowDate(e.target.value)}
                            value={showDate}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Show Location:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setShowLocation(e.target.value)}
                            value={showLocation}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Show Tech Time:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setShowTech(e.target.value)}
                            value={showTech}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Show Title:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setShowTitle(e.target.value)}
                            value={showTitle}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>Show Time:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setShowTime(e.target.value)}
                            value={showTime}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 1 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass1(e.target.value)}
                            value={noClass1}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 2 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass2(e.target.value)}
                            value={noClass2}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 3 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass3(e.target.value)}
                            value={noClass3}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 4 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass4(e.target.value)}
                            value={noClass4}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 5 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass5(e.target.value)}
                            value={noClass5}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 6 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass6(e.target.value)}
                            value={noClass6}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label>No Class Date 7 (optional):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setNoClass7(e.target.value)}
                            value={noClass7}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>

                        <label>Register Button Link:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setSessionLink(e.target.value)}
                            value={sessionLink}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <div className="flex justify-center">
                            <button type="submit" className="px-6 md:text-3xl py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                            {sessionInfoEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Summer Image Section */}
            <section className="mb-5">
                <div className="w-full flex flex-col sm:flex-row items-center justify-evenly">
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[600px]" src={sessionImg2} />
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[650px]" src={sessionImg3} />
                </div>
            </section>

            {/* EDIT EXTRA PHOTOS SECTION */}
            <section className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-evenly">
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSessionImg2} >
                        <h1 className="text-2xl mb-8 welcome">Edit your photo 1 here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSessionImg2(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {sessionImg2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSessionImg3} >
                        <h1 className="text-2xl mb-8 welcome">Edit your photo 2 here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSessionImg3(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {sessionImg3Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminWinterSpringPage;