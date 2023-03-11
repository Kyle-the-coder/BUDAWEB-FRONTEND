import check from "../assets/images/checkmark.png"
import "../styles/cardHover.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"
import FileBase64 from 'react-file-base64';



const AdminSummerPage = (props) => {
    const { summerTitle, setSummerTitle, summerContent, setSummerContent, regLink, setRegLink } = props
    const { summerBannerImg, setSummerBannerImg } = props
    const { summerBannerVid, setSummerBannerVid } = props
    const { summerBannerVidOrImg, setSummerBannerVidOrImg } = props
    const { loggedIn, setLoggedIn } = props
    const { setTracker } = props
    const { summerMainImg,
        setSummerMainImg,
        summerImg2,
        setSummerImg2,
        summerImg3,
        setSummerImg3 } = props
    const [summerInfoEdited, setsummerInfoEdited] = useState(false)
    const [summerBannerImgEdited, setSummerBannerImgEdited] = useState(false)
    const [summerBannerVidEdited, setSummerBannerVidEdited] = useState(false)
    const [summerMainImgEdited, setSummerMainImgEdited] = useState(false)
    const [summerImg2Edited, setSummerImg2Edited] = useState(false)
    const [summerImg3Edited, setSummerImg3Edited] = useState(false)
    const baseUrl = process.env.REACT_APP_BASE_URL

    const navigate = useNavigate();

    useEffect(() => {
        // SECURITY CHECK
        if (loggedIn != "exist") {
            navigate("/")
        }
    }, [])

    // HANDLE INCLUDES INFO
    const handleSubmitSummerInfo = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/budasummerinfo/640cebaebf0f41fdc08d3e78', { summerTitle, summerContent, regLink })
            .then(res => {
                console.log(res)
                setsummerInfoEdited(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE SUMMER BANNER IMG
    const handleSummerBannerImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/summerbannerimg/640cfc1bbf0f41fdc08d4ce2', { summerBannerImg })
            .then(res => {
                console.log(res)
                axios.put(baseUrl+'/api/summerbannervidorimg/640cfc65bf0f41fdc08d4d18', { summerBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setSummerBannerImgEdited(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE SUMMER BANNER VID
    const handleSummerBannerVid = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/summerbannervid/640cfc9cbf0f41fdc08d4d4c', { summerBannerVid })
            .then(res => {
                console.log(res)
                axios.put(baseUrl+'/api/summerbannervidorimg/640cfc65bf0f41fdc08d4d18', { summerBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setSummerBannerVidEdited(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE SUMMER MAIN IMG
    const handleSubmitSummerMainImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/summermainimg/640cfda0bf0f41fdc08d4eea', { summerMainImg  })
            .then(res => {
                console.log(res)
                setSummerMainImgEdited(true)
                const time = setTimeout(() => setSummerMainImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SUMMER IMG 2
    const handleSubmitSummerImg2 = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/summerimg2/640cfd0bbf0f41fdc08d4e1f', { summerImg2 })
            .then(res => {
                console.log(res)
                setSummerImg2Edited(true)
                const time = setTimeout(() => setSummerImg2Edited(false), 2100);
                return time
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SUMMER IMG 3
    const handleSubmitSummerImg3 = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/summerimg3/640cfd55bf0f41fdc08d4eb5', {  summerImg3 })
            .then(res => {
                console.log(res)
                setSummerImg3Edited(true)
                const time = setTimeout(() => setSummerImg3Edited(false), 2100);
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
                {summerBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={summerBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={summerBannerImg} alt="people dancing and colors" />}
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
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSummerBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setSummerBannerImg(base64); setSummerBannerVidOrImg("true") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {summerBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSummerBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setSummerBannerVid(base64); setSummerBannerVidOrImg("false") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {summerBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-5">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl welcome">Summer Info</h1>
            </section>


            {/* Summer Info Section */}
            <section className="mb-10">
                <div className="flex flex-col md:flex-row items-center sm:items-start w-full h-content justify-center">
                    <img className="rounded infoCard2 m-2" width="600" src={summerMainImg} />
                    <div className="w-11/12 sm:w-1/2  h-96 flex flex-col items-center">
                        <div className=" aboutInfo w-full px-2 py-1 mb-2 ">
                            <h2 className="mb-6 xl:text-3xl">
                                <strong>{summerTitle}</strong>
                            </h2>
                            <p className="mb-1 xl:text-xl">
                                {summerContent}
                            </p>
                        </div>
                        <div className=" w-full h-content flex justify-center">
                            <a target="_blank" href={regLink} className="bg-indigo-700 py-2 px-5 text-white cursor-pointer transition-all duration-500 hover:bg-slate-900 hover:text-pink-300 justify-center flex items-center  rounded xl:text-2xl">Register Here!</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Edit Summer Section */}
            <section className=" w-full mb-14 flex flex-col sm:flex-row sm:justify-evenly sm:items-start justify-center items-center">
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSummerMainImg} >
                        <h1 className="text-2xl mb-8 welcome">Edit your About Me photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSummerMainImg(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {summerMainImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className=" xl:text-2xl w-content h-content ">
                    <form onSubmit={handleSubmitSummerInfo} className="flex bg-slate-200 flex-col w-[500px] sm:w-[600px] md:w-[650px] h-content p-3 border-2 border-black">
                        <h1 className="mx-auto welcome text-2xl lg:text-4xl">Edit Your </h1>
                        <h1 className="mx-auto welcome text-2xl mb-5 lg:text-4xl">Summer Info Here:</h1>
                        <label className="lg:text-2xl">Summer Title:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setSummerTitle(e.target.value)}
                            value={summerTitle}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <label className="lg:text-2xl">Summer Content:</label>
                        <textarea
                            rows="6"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setSummerContent(e.target.value)}
                            value={summerContent}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </textarea>
                        <label className="lg:text-2xl">Register Button Link:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setRegLink(e.target.value)}
                            value={regLink}
                            className="mb-3 border-2 border-black rounded p-2 text-sm">
                        </input>
                        <div className="flex justify-center">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                            {summerInfoEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>

            </section>

            {/* BUDA Summer Image Section */}
            <section className="mb-5">
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-evenly">
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[650px]" src={summerImg2} />
                    <img className="rounded infoCard hover:drop-shadow-lg mb-5 w-[650px]" src={summerImg3} />
                </div>
            </section>

            {/* BUDA EDIT EXTRA PHOTOS SECTION */}
            <section className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-evenly">
            <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSummerImg2} >
                        <h1 className="text-2xl mb-8 welcome">Edit your photo 1 here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSummerImg2(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {summerImg2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleSubmitSummerImg3} >
                        <h1 className="text-2xl mb-8 welcome">Edit your photo 2 here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setSummerImg3(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {summerImg3Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminSummerPage;