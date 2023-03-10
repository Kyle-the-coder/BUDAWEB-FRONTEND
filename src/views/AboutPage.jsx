import "../styles/scrollBar.css"
import "../styles/cardHover.css"
import { useNavigate } from "react-router-dom"




const AboutPage = (props) => {
    const { aboutMe, aboutBuda, aboutMeImage, aboutBudaImage, aboutInfoBannerImg, aboutBannerVidOrImg, aboutInfoBannerVid } = props;
    const navigate = useNavigate();

    const backOne = () => {
        navigate(-1)
    }
    return (
        <div>

            {/* ABOUT BANNER SECTION */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {aboutBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={aboutInfoBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={aboutInfoBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-5 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-8">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl welcome">About Bianca:</h1>
            </section>

            {/* Bianca About Info Section */}
            <section className="mb-14 ">
                <div className="flex flex-col md:flex-row items-center sm:items-start w-full h-content justify-center">
                    <img className="rounded infoCard2 hover:drop-shadow-lg" width="500" src={aboutMeImage} />
                    <div className="sm:w-1/2 w-11/12 h-[640px] flex flex-col items-center">
                        <div className=" aboutInfo p-2 ">
                            <p className="mb-8 indent-5 lg:text-lg">
                                {aboutMe}
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-8">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-2xl welcome">About BUDA:</h1>
            </section>


            {/* BUDA About Info Section */}
            <section className="mb-10">
                <div className="flex flex-col-reverse md:flex-row items-center w-full h-content justify-center ">
                    <div className="sm:w-1/2 h-[590px] px-2 flex flex-col items-center">
                        <div className=" aboutInfo px-5 py-2">
                            <p className="mb-8 indent-5 lg:text-lg">
                                {aboutBuda}
                            </p>
                        </div>
                    </div>
                    <img className="mb-1 rounded infoCard hover:drop-shadow-lg" width="800" src={aboutBudaImage} />
                </div>
            </section>
        </div>
    )
}

export default AboutPage;