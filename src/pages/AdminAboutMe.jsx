import "../styles/scrollBar.css"
import "../styles/cardHover.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import check from "../assets/images/checkmark.png"
import FileBase64 from 'react-file-base64';






const AdminAboutPage = (props) => {
    const { aboutMe, setAboutMe, aboutBuda, setAboutBuda } = props
    const [aboutMeEdited, setAboutMeEdited] = useState(false)
    const [aboutBudaEdited, setAboutBudaEdited] = useState(false)
    const [aboutMeImageEdited, setAboutMeImageEdited] = useState(false)
    const [aboutBudaImageEdited, setAboutBudaImageEdited] = useState(false)
    const [aboutInfoBannerImgEdited, setAboutInfoBannerImgEdited] = useState(false)
    const [aboutInfoBannerVidEdited, setAboutInfoBannerVidEdited] = useState(false)
    const { aboutMeImage, setAboutMeImage } = props
    const { aboutBudaImage, setAboutBudaImage } = props
    const { aboutInfoBannerImg, setAboutInfoBannerImg } = props
    const { aboutInfoBannerVid, setAboutInfoBannerVid } = props
    const { aboutBannerVidOrImg, setAboutBannerVidOrImg } = props
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = props
    const { setTracker } = props
    const baseUrl = process.env.REACT_APP_BASE_URL



    const backOne = () => {
        navigate(-1)
    }

    useEffect(() => {

        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
        }

    }, [])

    const logout = () => {
        setLoggedIn("does not exist")
        setTracker(false)
        navigate("/")
    }

    //ABOUT ME FORM
    const handleSubmitAboutMe = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000api/budaaboutme/63fd525b3abd1fa6fcfc4c20', { aboutMe })
            .then(res => {
                console.log(res)
                setAboutMeEdited(true)
                const time = setTimeout(() => setAboutMeEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ABOUT BUDA FORM
    const handleSubmitAboutBuda = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000api/budaaboutbuda/63fd53b2de8ca70c9270d386', { aboutBuda })
            .then(res => {
                console.log(res.data)
                setAboutBudaEdited(true)
                const time = setTimeout(() => setAboutBudaEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ABOUT ME IMAGE FORM
    const handleAboutMeImg = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000api/aboutmeimage/64027ad06b1988b83080eb7f', { aboutMeImage })
            .then(res => {
                console.log(res.data)
                setAboutMeImageEdited(true)
                const time = setTimeout(() => setAboutMeImageEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ABOUT BUDA IMAGE FORM
    const handleAboutBudaImg = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000api/aboutbudaimage/6402a78b452c5a04826234ca', { aboutBudaImage })
            .then(res => {
                console.log(res.data)
                setAboutBudaImageEdited(true)
                const time = setTimeout(() => setAboutBudaImageEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ABOUT INFO BANNER IMAGE FORM
    const handleAboutInfoBannerImg = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000api/aboutInfoBanner/6403c5642309f12867c2f6c1', { aboutInfoBannerImg })
            .then(res => {
                console.log(res.data)
                axios.put('http://localhost:8000/api/aboutbannervidorimg/6403cac55b9ed745d8260490', { aboutBannerVidOrImg })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setAboutInfoBannerImgEdited(true)
                const time = setTimeout(() => setAboutInfoBannerImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ABOUT INFO BANNER VIDEO FORM
    const handleAboutInfoBannerVid = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/aboutinfobannervid/6403c81b58556ea0422468ab', { aboutInfoBannerVid })
            .then(res => {
                console.log(res.data)
                axios.put('http://localhost:8000/api/aboutbannervidorimg/6403cac55b9ed745d8260490', { aboutBannerVidOrImg })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                        console.log("inner")
                    })
                setAboutInfoBannerVidEdited(true)
                const time = setTimeout(() => setAboutInfoBannerVidEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
                alert("file size is too big")
            })
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
                <button className="underline text-sky-500 mr-10" onClick={() => logout()}>Logout</button>
            </section>

            {/* EDIT ABOUT BANNER SECTION */}
            <section className=" w-full mb-14 flex justify-end items-center">
                <div className="w-full justify-center mt-8  flex flex-col items-center h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleAboutInfoBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner PHOTO here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setAboutInfoBannerImg(base64); setAboutBannerVidOrImg("true") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {aboutInfoBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1> Or </h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleAboutInfoBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner VIDEO here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setAboutInfoBannerVid(base64); setAboutBannerVidOrImg("false") }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {aboutInfoBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>



            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-8">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl welcome">About Bianca:</h1>
            </section>

            {/* Bianca About Info Section */}
            <section className="mb-10">
                <div className="flex flex-col md:flex-row items-center sm:items-start w-full h-content justify-center">
                    <img className="rounded infoCard2 hover:drop-shadow-lg" width="500" src={aboutMeImage} />
                    <div className="sm:w-1/2 w-11/12 h-[640px] flex flex-col items-center">
                        <div className=" aboutInfo p-2">
                            <p className="mb-8 indent-5 lg:text-lg">
                                {aboutMe}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDIT ABOUT ME IMAGE */}
            <section className=" w-full mb-14 flex flex-col sm:flex-row sm:justify-evenly sm:items-start justify-center items-center">
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleAboutMeImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your About Me photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setAboutMeImage(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {aboutMeImageEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className=" xl:text-2xl w-content h-content ">
                    <form onSubmit={handleSubmitAboutMe} className="flex bg-slate-200 flex-col w-[500px] sm:w-[600px] md:w-[650px] h-content p-3 border-2 border-black">
                        <label className="mx-auto welcome text-xl xl:text-2xl mb-5">Edit Your About Me Here:</label>
                        <textarea
                            rows="10"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setAboutMe(e.target.value)}
                            value={aboutMe}
                            className="mb-3 border-2 border-black rounded p-1 text-sm">
                        </textarea>
                        <div className="flex justify-center">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                            {aboutMeEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-8">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl  text-2xl welcome">About BUDA:</h1>
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

            {/* EDIT ABOUT BUDA IMAGE */}
            <section className=" w-full mb-14 flex flex-col sm:flex-row-reverse sm:justify-around sm:items-start justify-center items-center">
                <div className="w-content flex h-fit">
                    <form className="w-[490px] p-3 flex flex-col items-center bg-slate-200 border-2 border-black mb-10" onSubmit={handleAboutBudaImg}>
                        <h1 className="text-2xl welcome">Edit your About BUDA </h1>
                        <h1 className="text-2xl mb-8 welcome" >photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => setAboutBudaImage(base64)} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {aboutBudaImageEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
                <div className=" xl:text-2xl w-content h-content ">
                    <form onSubmit={handleSubmitAboutBuda} className="flex bg-slate-200 flex-col w-[500px] sm:w-[600px] md:w-[650px] h-content p-3 border-2 border-black">
                        <label className="mx-auto welcome text-xl xl:text-2xl mb-5">Edit Your About Buda Here:</label>
                        <textarea
                            rows="10"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setAboutBuda(e.target.value)}
                            value={aboutBuda}
                            className="mb-3 border-2 border-black rounded p-1 text-sm">
                        </textarea>
                        <div className="flex justify-center">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                            {aboutBudaEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminAboutPage;