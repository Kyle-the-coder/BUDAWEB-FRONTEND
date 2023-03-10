import check from "../assets/images/checkmark.png"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/bannerSize.css"
import "../styles/cardHover.css"
import FileBase64 from 'react-file-base64';

const AdminGalleryPage = (props) => {
    const { galleryBannerImg,
        galleryBannerVid,
        galleryBannerVidOrImg,
        setGalleryBannerImg,
        setGalleryBannerVid,
        setGalleryBannerVidOrImg,
        galleryVids, setGalleryVids,
        galleryVidsList, setGalleryVidsList,
        galleryImgs, setGalleryImgs,
        galleryImgsList, setGalleryImgsList } = props
    const { loggedIn, setLoggedIn } = props
    const { setTracker } = props
    const [galleryBannerImgEdited, setGalleryBannerImgEdited] = useState('')
    const [galleryBannerVidEdited, setGalleryBannerVidEdited] = useState('')
    const [galleryVidAdded, setGalleryVidAdded] = useState(false)
    const [galleryImgAdded, setGalleryImgAdded] = useState(false)
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
            setTracker(false)
        }

    }, [])

    const backOne = () => {
        navigate(-1)
    }

    // HANDLE DELETE VID
    const handleDeleteOneGalleryVideo = (e, id) => {
        e.preventDefault()
        console.log(id)
        axios.delete(baseUrl + '/api/galleryVids/' + id)
            .then(res => {
                console.log(res)
                axios.get(baseUrl + '/api/galleryvids')
                    .then(res => {
                        console.log(res)
                        setGalleryVidsList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE DELETE IMG
    const handleDeleteOneGalleryImage = (e, id) => {
        e.preventDefault()
        console.log(id)
        axios.delete(baseUrl + '/api/galleryimgs/' + id)
            .then(res => {
                console.log(res)
                axios.get(baseUrl + '/api/galleryimgs')
                    .then(res => {
                        console.log(res)
                        setGalleryImgsList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE SESSION BANNER IMAGE
    const handleSubmitGalleryBannerImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/gallerybannerimg/64066082c580e625b8639818', { galleryBannerImg })
            .then(res => {
                console.log(res)
                axios.put(baseUrl + '/api/gallerybannervidorimg/64066155e628c7b9b066dee5', { galleryBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setGalleryBannerImgEdited(true)
                const time = setTimeout(() => setGalleryBannerImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION BANNER VIDEO
    const handleSubmitGalleryBannerVid = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/gallerybannervid/64066145e628c7b9b066dee3', { galleryBannerVid })
            .then(res => {
                console.log(res)
                axios.put(baseUrl + '/api/gallerybannervidorimg/64066155e628c7b9b066dee5', { galleryBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setGalleryBannerVidEdited(true)
                const time = setTimeout(() => setGalleryBannerVidEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE GALLERY VIDS
    const handleSubmitGalleryVids = (e) => {
        e.preventDefault();
        axios.post(baseUrl + '/api/galleryvids', { galleryVids })
            .then(res => {
                console.log(res)
                axios.get(baseUrl + '/api/galleryvids')
                    .then(res => {
                        console.log(res)
                        setGalleryVidsList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setGalleryVidAdded(true)
                const time = setTimeout(() => setGalleryVidAdded(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
                alert('file is too big, files must be 10mb or less')
            })
    }

    // HANDLE GALLERY IMGS
    const handleSubmitGalleryImgs = (e) => {
        e.preventDefault();
        axios.post(baseUrl + '/api/galleryimgs', { galleryImgs })
            .then(res => {
                console.log(res)
                axios.get(baseUrl + '/api/galleryimgs')
                    .then(res => {
                        console.log(res)
                        setGalleryImgsList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setGalleryImgAdded(true)
                const time = setTimeout(() => setGalleryImgAdded(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
                alert('file is too big, files must be 10mb or less')
            })
    }

    const logout = () => {
        setLoggedIn("does not exist")
        setTracker(false)
        navigate("/")
    }

    console.log(galleryVids)
    return (
        <div>
            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {galleryBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={galleryBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={galleryBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-12 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
                <button className="underline text-sky-500 mr-10" onClick={() => logout()}>Logout</button>
            </section>

            {/* EDIT BANNER SECTION */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full items-center justify-center mt-8  flex h-fit flex-col">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitGalleryBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setGalleryBannerImg(base64); setGalleryBannerVidOrImg('true') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {galleryBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitGalleryBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setGalleryBannerVid(base64); setGalleryBannerVidOrImg('false') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {galleryBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-12">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-2xl welcome">Bianca's Urban Dance Academy</h1>
            </section>

            {/* SUBMIT NEW VIDEO SECTION */}
            <section className="w-full flex justify-center mb-10">
                <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitGalleryVids}>
                    <h1 className="text-2xl mb-8 welcome">Add a video here:</h1>
                    <FileBase64 multiple={false} onDone={({ base64 }) => setGalleryVids(base64)} />
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                        {galleryVidAdded && <img width="50" src={check} />}
                    </div>
                </form>
            </section>

            {/* Video Section */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center m-8">
                {galleryVidsList.map((vid, i) => (
                    <div key={i} className="flex flex-col justify-center items-center">
                        <video className="rounded md:m-2 border-2 border-indigo-200 m-8 w-[700px]" loop muted autoPlay controls='' src={vid.galleryVids} >video loading...</video>
                        <button className="bg-red-400 px-2 rounded w-[120px] mb-10" onClick={(e) => { handleDeleteOneGalleryVideo(e, vid._id) }}>Delete</button>
                    </div>
                )
                )}
            </section>

            {/* SUBMIT NEW IMG SECTION */}
            <section className="w-full flex justify-center mb-10">
                <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitGalleryImgs}>
                    <h1 className="text-2xl mb-8 welcome">Add a photo here:</h1>
                    <FileBase64 multiple={false} onDone={({ base64 }) => setGalleryImgs(base64)} />
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                        {galleryImgAdded && <img width="50" src={check} />}
                    </div>
                </form>
            </section>

            {/* Img Section */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center m-8">
                {galleryImgsList.map((img, i) => (
                    <div key={i} className="flex flex-col justify-center items-center justify-start">
                        <img className="rounded md:m-2 border-2 border-indigo-200 m-8 w-[480px]" src={img.galleryImgs} />
                        <button className="bg-red-400 px-2 rounded w-[120px] mb-10" onClick={(e) => { handleDeleteOneGalleryImage(e, img._id) }}>Delete</button>
                    </div>
                )
                )}

            </section>
        </div>
    )
}

export default AdminGalleryPage;