import "../styles/scrollBar.css"
import "../styles/cardHover.css"
import "../styles/bannerSize.css"
import { useNavigate } from "react-router-dom"


const WinterSpringPage = (props) => {
    const { sessionTitle, sessionLink,
        startDate, showDate,
        showLocation, showTech, sessionIntro,
        showTitle, showTime,
        noClass1, noClass2,
        noClass3, noClass4,
        noClass5, noClass6,
        noClass7 } = props
    const { sessionBannerImg, sessionBannerVid, sessionBannerVidOrImg } = props
    const {
        sessionMainImg,
        sessionImg2,
        sessionImg3 } = props
    const navigate = useNavigate();

    const backOne = () => {
        navigate(-1)
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
            <section className="w-full h-5 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-8">
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
                            <p className="mb-1 lg:text-3xl">
                                <strong>Important Dates:</strong>
                            </p>
                            <p className="indent-5">
                                <strong>Start: </strong>{startDate}
                            </p>
                            <p className="indent-5">
                                <strong>Show date:</strong> {showDate}
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
                            <p className="indent-5">
                                <strong>{noClass4}</strong>
                            </p>
                            <p className="indent-5">
                                <strong>{noClass5}</strong>
                            </p>
                            <p className="indent-5">
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

            {/* BUDA Summer Image Section */}
            <section className="mb-5">
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-evenly">
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[600px]" src={sessionImg2} />
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[650px]" src={sessionImg3} />
                </div>
            </section>
        </div>
    )
}

export default WinterSpringPage;