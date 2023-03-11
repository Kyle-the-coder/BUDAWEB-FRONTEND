import "../styles/bannerSize.css"
import "../styles/cardHover.css"
import check from "../assets/images/checkmark.png"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import FileBase64 from 'react-file-base64';

const AdminRatesPage = (props) => {
    const navigate = useNavigate();
    const { rate1, setRate1, rate2, setRate2 } = props
    const { loggedIn, setLoggedIn } = props
    const { setTracker } = props
    const { includes, setIncludes } = props
    const { dropIn, setDropIn } = props
    const { budaRatesBannerImage, setBudaRatesBannerImage } = props
    const { budaRatesBannerVideo, setBudaRatesBannerVideo } = props
    const { ratesBannerVidOrImg, setRatesBannerVidOrImg } = props
    const [budaRatesBannerImageEdited, setBudaRatesBannerImageEdited] = useState(false)
    const [budaRatesBannerVideoEdited, setBudaRatesBannerVideoEdited] = useState(false)
    const [budaRatesEdited, setBudaRatesEdited] = useState(false)
    const [budaRatesInfoEdited, setBudaRatesInfoEdited] = useState(false)
    const [budaDropInEdited, setBudaDropInEdited] = useState(false)
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {

        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
        }
    }, [])

    const backOne = () => {
        navigate(-1)
    }
    // HANDLE BUDA RATES
    const handleSubmitBudaRates = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budarates/640ce8afbf0f41fdc08d3d71', { rate1, rate2 })
            .then(res => {
                console.log(res)
                setBudaRatesEdited(true)
                const time = setTimeout(() => setBudaRatesEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE INCLUDES INFO
    const handleSubmitIncludes = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budaratesinfo/640cea5abf0f41fdc08d3e0e', { includes })
            .then(res => {
                console.log(res)
                setBudaRatesInfoEdited(true)
                const time = setTimeout(() => setBudaRatesInfoEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE DROP IN PRICE
    const handleSubmitDropIn = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budadropin/640ce79abf0f41fdc08d3d3c', { dropIn })
            .then(res => {
                console.log(res)
                setBudaDropInEdited(true)
                const time = setTimeout(() => setBudaDropInEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //BUDA RATES BANNER IMAGE FORM
    const handleBudaRatesBannerImage = (e) => {
        e.preventDefault()
        axios.put(baseUrl + '/api/budaratesbanner/640ce925bf0f41fdc08d3da6', { budaRatesBannerImage })
            .then(res => {
                console.log(res.data)
                setBudaRatesBannerImageEdited(true)
                //HANDLE VID OR PIC TRACKER
                axios.put(baseUrl + '/api/ratesbannervidorimg/6403b80f9ec53042773d7450', { ratesBannerVidOrImg })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })

                const time = setTimeout(() => setBudaRatesBannerImageEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    //BUDA RATES BANNER VIDEO FORM
    const handleBudaRatesBannerVideo = (e) => {
        e.preventDefault()
        axios.put(baseUrl + '/api/budaratesbannervideo/640ce981bf0f41fdc08d3dda', { budaRatesBannerVideo })
            .then(res => {
                console.log(res.data)
                setBudaRatesBannerVideoEdited(true)
                //HANDLE VID OR PIC TRACKER
                axios.put(baseUrl + '/api/ratesbannervidorimg/6403b80f9ec53042773d7450', { ratesBannerVidOrImg })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })

                const time = setTimeout(() => setBudaRatesBannerVideoEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    const logout = () => {
        setLoggedIn("does not exist")
        setTracker(false)
        navigate("/")
    }

    return (
        <div>
            {/* Rates Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {ratesBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={budaRatesBannerVideo} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={budaRatesBannerImage} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-5 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
                <button className="underline text-sky-500 mr-10" onClick={() => logout()}>Logout</button>
            </section>

            {/* EDIT ABOUT BANNER SECTION */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full items-center justify-center mt-8  flex h-fit flex-col">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleBudaRatesBannerImage}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setBudaRatesBannerImage(base64); setRatesBannerVidOrImg("true") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {budaRatesBannerImageEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleBudaRatesBannerVideo}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setBudaRatesBannerVideo(base64); setRatesBannerVidOrImg("false") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {budaRatesBannerVideoEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* Rates Info Section */}
            <section >
                <div className="w-full flex flex-col items-center">
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl mb-3 welcome">Session Rates:</h1>
                    <div className="w-2/3 h-content xl:text-2xl">

                        <h4 className="xl:text-3xl">
                            <strong>Tuition:</strong>
                        </h4>
                        <p className="xl:text-3xl">
                            ${rate1} for 1hr classes
                        </p>
                        <p className="mb-5  xl:text-3xl">
                            ${rate2} for 45min classes
                        </p>

                        {/* BUDA RATES EDIT FORM */}
                        <div className="w-full h-full items-center flex  mb-5">
                            <form onSubmit={handleSubmitBudaRates} className="flex bg-slate-200 flex-col w-1/2 h-content p-3 border-2 border-black">
                                <h1 className="mx-auto welcome text-2xl mb-5 lg:text-3xl">Edit Your Rates:</h1>
                                <label className="md:text-2xl">1 Hour Class Rate</label>
                                <input
                                    type="number"
                                    autoComplete="off"
                                    onChange={(e) => setRate1(e.target.value)}
                                    value={rate1}
                                    className="mb-3 border-2 border-black rounded p-2 ">
                                </input>
                                <label className="md:text-2xl">45 Minute Class Rate</label>
                                <input
                                    type="number"
                                    autoComplete="off"
                                    onChange={(e) => setRate2(e.target.value)}
                                    value={rate2}
                                    className="mb-3 border-2 border-black rounded p-2">
                                </input>
                                <div className="flex justify-center">
                                    <button type="submit" className="px-6 md:text-2xl py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                    {budaRatesEdited && <img width="50" src={check} />}
                                </div>
                            </form>
                        </div>


                        <p className="mb-5">
                            <strong>Includes</strong> {includes}
                        </p>

                        {/* BUDA INCLUDES EDIT FORM */}
                        <div className="w-full h-full items-center flex mb-5">
                            <form onSubmit={handleSubmitIncludes} className="flex bg-slate-200 flex-col w-11/12 h-content p-3 border-2 border-black">
                                <label className="mx-auto welcome text-2xl mb-5">Edit Your Includes Info:</label>
                                <textarea
                                    rows="7"
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => setIncludes(e.target.value)}
                                    value={includes}
                                    className="mb-3 border-2 border-black rounded">
                                </textarea>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                    {budaRatesInfoEdited && <img width="50" src={check} />}
                                </div>
                            </form>
                        </div>

                        <p className="mb-5">
                            <strong>Please</strong> be aware that there is a $25 late fee if tuition isn't paid in full during the first week of classes.
                        </p>
                        <p className="mb-5">
                            <strong>Message</strong> me personally if you need to do monthly payments.
                        </p>
                        <p className="mb-5">
                            <strong>Drop</strong> in Price: ${dropIn}
                        </p>

                        {/* BUDA DROP IN EDIT FORM */}
                        <div className="w-full h-full items-center flex mb-5">
                            <form onSubmit={handleSubmitDropIn} className="flex bg-slate-200 flex-col w-[400px] h-content p-3 border-2 border-black">
                                <label className="mx-auto welcome text-2xl mb-5">Edit Your Drop In Rate:</label>
                                <input
                                    type="number"
                                    autoComplete="off"
                                    onChange={(e) => setDropIn(e.target.value)}
                                    value={dropIn}
                                    className="mb-3 border-2 border-black rounded">
                                </input>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                    {budaDropInEdited && <img width="50" src={check} />}
                                </div>
                            </form>
                        </div>

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

export default AdminRatesPage;