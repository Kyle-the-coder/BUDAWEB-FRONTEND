import ImpInfoModal from "../components/ImpModal";
import { useState } from 'react';
import "../styles/cardHover.css"


const LandingPage = (props) => {
    const {landingPageMainImg, landingPageCard1, landingPageCard2, landingPageCard3, landingPageVid1, landingPageVid2}=props
    const [show, setShow] = useState(false);


    return (
        <div>

            {/* LP Img Section */}
            <section className="items-center justify-center flex flex-col relative w-full h-screen bg-gradient-to-r from-indigo-400 to-red-300 flex bg-auto bg-contain " >
                <img src={landingPageMainImg} alt=" Bianca" className="rounded object-cover w-full z-[1] h-full absolute  mix-blend-overlay" />
                <h1 className="welcome sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-3xl font-bold mb-2 relative">Bianca's Urban Dance Academy</h1>
                <a target="_blank" href="https://app.thestudiodirector.com/buda7/portal.sd?page=Enroll&meth=search&SEASON=Spring+2023" className="bg-indigo-800 relative   lg:text-2xl text-white px-4 py-3 rounded z-[2] hover:bg-slate-900 hover:text-pink-300 transition-all duration-500">Class Schedule</a>
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

            {/* Video Content Section */}
            <section className="flex flex-col md:flex-row  justify-evenly m-0 items-center md:items-start mb-7">

                <video className="rounded mb-2 md:m-0  border-2 border-red-200 md:w-[600px] w-[700px]"  loop muted autoPlay controls='' src={landingPageVid1}></video>
                <video className="rounded h-full m-0 border-2 border-indigo-300 md:w-[650px] w-[700px]"  loop muted autoPlay controls='' src={landingPageVid2}></video>

            </section>

        </div>
    )
}

export default LandingPage;