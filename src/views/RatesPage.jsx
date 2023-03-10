import { useNavigate } from "react-router-dom"
import "../styles/bannerSize.css"
import "../styles/cardHover.css"


const RatesPage = (props) => {
    const { rate1, rate2, includes, dropIn, budaRatesBannerImage, budaRatesBannerVideo, ratesBannerVidOrImg } = props;
    const navigate = useNavigate();

    const backOne = () => {
        navigate(-1)
    }
    return (
        <div>

            {/* Rates Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {ratesBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={budaRatesBannerVideo} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={budaRatesBannerImage} alt="people dancing and colors" />}
            </section>
            {/* Rates Info Section */}
            <section >
                <div className="w-full flex flex-col items-center">
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl mb-3 welcome">Session Rates:</h1>
                    <div className="w-2/3 h-content xl:text-2xl">

                        <h4 className="xl:text-3xl">
                            <strong>Tuition:</strong>
                        </h4>
                        <p>
                            ${rate1} for 1hr classes
                        </p>
                        <p className="mb-5">
                            ${rate2} for 45min classes
                        </p>
                        <p className="mb-5  ">
                            <strong >Includes: </strong> {includes}
                        </p>
                        <p className="mb-5">
                            <strong>Please</strong> be aware that there is a $25 late fee if tuition isn't paid in full during the first week of classes.
                        </p>
                        <p className="mb-5">
                            <strong>Message</strong> me personally if you need to do monthly payments.
                        </p>
                        <p className="mb-5">
                            <strong>Drop</strong> in Price: ${dropIn}
                        </p>
                        <p className="mb-5">
                            <strong>Please</strong> note that drop ins are only good for a 1 time basis and then you will have to pay remaining tuition.
                        </p>
                        <p className="mb-5">
                            <strong>No</strong> refunds are available at this time.
                        </p>
                        <p className="mb-5">
                            <strong>Need</strong> a zoom class, private lesson, or a teacher for a birthday party? Please <a className="underline text-sky-500" href="#contactSection">contact</a> me for prices
                        </p>
                        <p onClick={() => backOne()} className="mb-5 underline text-sky-500 cursor-pointer">
                            Back
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RatesPage;