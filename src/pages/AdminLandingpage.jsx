import ImpInfoModal from "../components/ImpModal";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import check from "../assets/images/checkmark.png"
import FileBase64 from 'react-file-base64';
import axios from "axios";
import "../styles/cardHover.css"

const AdminLandingPage = (props) => {
    const { landingPageMainImg,
        setLandingPageMainImg,
        landingPageCard1,
        setLandingPageCard1,
        landingPageCard2,
        setLandingPageCard2,
        landingPageCard3,
        setLandingPageCard3,
        landingPageVid1,
        setLandingPageVid1,
        landingPageVid2,
        setLandingPageVid2,
        loggedIn, setLoggedIn } = props
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [lpMainImgEdited, setLpMainImgEdited] = useState(false)
    const [lpCard1Edited, setlpCard1Edited] = useState(false)
    const [lpCard2Edited, setlpCard2Edited] = useState(false)
    const [lpCard3Edited, setlpCard3Edited] = useState(false)
    const [lpVid1Edited, setlpVid1Edited] = useState(false)
    const [lpVid2Edited, setlpVid2Edited] = useState(false)
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {

        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
        }

    }, [])

    //LANDING PAGE MAIN IMAGE FORM
    const handleLandingPageMainImg = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagemainimg/6407e14c0664c1b35c2630da', { landingPageMainImg })
            .then(res => {
                console.log(res.data)
                setLpMainImgEdited(true)
                const time = setTimeout(() => setLpMainImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //LANDING PAGE CARD 1 FORM
    const handleLandingPageCard1 = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagecard1/6407e1640664c1b35c2630dd', { landingPageCard1 })
            .then(res => {
                console.log(res.data)
                setlpCard1Edited(true)
                const time = setTimeout(() => setlpCard1Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //LANDING PAGE CARD 2 FORM
    const handleLandingPageCard2 = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagecard2/6407e1710664c1b35c2630e0', { landingPageCard2 })
            .then(res => {
                console.log(res.data)
                setlpCard2Edited(true)
                const time = setTimeout(() => setlpCard2Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //LANDING PAGE CARD 3 FORM
    const handleLandingPageCard3 = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagecard3/6407e17d0664c1b35c2630e3', { landingPageCard3 })
            .then(res => {
                console.log(res.data)
                setlpCard3Edited(true)
                const time = setTimeout(() => setlpCard3Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //LANDING PAGE VID 1 FORM
    const handleLandingPageVid1 = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagevid1/6407e18e0664c1b35c2630e6', { landingPageVid1 })
            .then(res => {
                console.log(res.data)
                setlpVid1Edited(true)
                const time = setTimeout(() => setlpVid1Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //LANDING PAGE VID 2 FORM
    const handleLandingPageVid2 = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/landingpagevid2/6407e1960664c1b35c2630e8', { landingPageVid2 })
            .then(res => {
                console.log(res.data)
                setlpVid2Edited(true)
                const time = setTimeout(() => setlpVid2Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>

            {/* LP Img Section */}
            <section className="items-center justify-center flex flex-col relative w-full h-screen bg-gradient-to-r from-indigo-400 to-red-300 flex bg-auto bg-contain " >
                <img src={landingPageMainImg} alt=" Bianca" className="rounded object-cover w-full z-[1] h-full absolute  mix-blend-overlay" />
                <h1 className="welcome sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-3xl font-bold mb-2 relative">Bianca's Urban Dance Academy</h1>
                <a href="/wsp" className="bg-indigo-800 relative   lg:text-2xl text-white px-4 py-3 rounded z-[2] hover:bg-slate-900 hover:text-pink-300 transition-all duration-500">Class Schedule</a>
            </section>

            {/* EDIT LANDING PAGE MAIN IMAGE */}
            <section className=" w-full mb-14 flex justify-end items-center">
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageMainImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit Landing Page photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageMainImg(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpMainImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* Welcome Students Section */}
            <section className="w-full flex h-14 my-6  items-center">
                <div className="flex w-full justify-center  mx-auto">
                    <h2 className="welcome  sm:text-xl md:text-3xl lg:text-4xl text-xl font-medium">Welcome Returning and Future Students!</h2>
                </div>
            </section>

            {/* Class Img Link Section */}
            <section className="mb-5">
                <div className="flex w-full h-content  p-2 justify-evenly">

                    {/* Important Info Card */}
                    <div className="w-fit  h-fit rounded">
                        <img className="infoCard rounded hover:drop-shadow-lg  cursor-pointer border-2 border-black sm:w-48 lg:w-64   w-32 h-auto" src={landingPageCard1} onClick={() => setShow(true)} alt="important info card" />
                        {show && <ImpInfoModal show={show} setShow={setShow} />}
                    </div>

                    {/* Buda Crew Info Card */}
                    <div className="rounded w-fit h-fit hover:drop-shadow-lg">
                        <a href="/bcp"><img className="infoCard rounded border-2 border-black cursor-pointer sm:w-48 lg:w-64 w-32" src={landingPageCard2} alt="buda crew info card" /></a>
                    </div>

                    {/* Summer Camp Info Card */}
                    <div className=" w-fit rounded   h-fit hover:drop-shadow-lg ">
                        <a href="/sp"><img className="infoCard rounded lg:w-64  border-2 border-black cursor-pointer sm:w-48 w-32" src={landingPageCard3} alt="summer camp info card" /></a>
                    </div>
                </div>
            </section>

            {/* EDIT LANDING PAGE CARDS 1, 2, AND 3 */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageCard1}>
                        <h1 className="text-2xl mb-8 welcome">Edit Important Info Card:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageCard1(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpCard1Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageCard2}>
                        <h1 className="text-2xl mb-8 welcome">Edit Buda Crew Card:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageCard2(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpCard2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageCard3}>
                        <h1 className="text-2xl mb-8 welcome">Edit Summer Camp Card:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageCard3(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpCard3Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* Video Content Section */}
            <section className="flex flex-col md:flex-row  justify-evenly m-0 items-center md:items-start mb-7">

                <video className="rounded mb-2 md:m-0  border-2 border-red-200 md:w-[600px] w-[700px]" loop muted autoPlay controls='' src={landingPageVid1}></video>
                <video className="rounded h-full m-0 border-2 border-indigo-300 md:w-[650px] w-[700px]" loop muted autoPlay controls='' src={landingPageVid2}></video>

            </section>
            {/* EDIT LANDING PAGE CARDS 1, 2, AND 3 */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageVid1}>
                        <h1 className="text-2xl mb-8 welcome">Edit Video 1:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageVid1(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpVid1Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className="w-full justify-center mt-12 flex h-fit">
                    <form className="w-[420px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleLandingPageVid2}>
                        <h1 className="text-2xl mb-8 welcome">Edit Video 2:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setLandingPageVid2(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {lpVid2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default AdminLandingPage;