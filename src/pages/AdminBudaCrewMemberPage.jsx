import check from "../assets/images/checkmark.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';

const AdminBudaCrewMemberPage = (props) => {
    const navigate = useNavigate();
    const [budaCrewMemberInfoEdited, setBudaCrewMemberInfoEdited] = useState(false)
    const [videoAdded, setVideoAdded] = useState(false)
    const [musicAdded, setMusicAdded] = useState(false)
    const [memberBannerImgEdited, setMemberBannerImgEdited] = useState(false)
    const [memberBannerVidEdited, setMemberBannerVidEdited] = useState(false)
    const [memberImgEdited, setMemberImgEdited] = useState(false)
    const [musicList, setMusicList] = useState([])
    const [videoList, setVideoList] = useState([])
    const { loggedIn, setLoggedIn, setTracker } = props
    const {
        memberTitle, setMemberTitle,
        upcomingEventsInfo, setUpcomingEventsInfo,
        videoTitle, setVideoTitle,
        videoLink, setVideoLink,
        homeworkInfo, setHomeworkInfo,
        budaCrewInfo, setBudaCrewInfo,
        contactPhone, setContactPhone,
        musicTitle, setMusicTitle,
        musicLink, setMusicLink } = props
    const {
        memberBannerImg,
        memberBannerVid,
        memberBannerVidOrImg,
        setMemberBannerImg,
        setMemberBannerVid,
        setMemberBannerVidOrImg,
        memberImg, setMemberImg } = props
    const baseUrl = process.env.REACT_APP_BASE_URL

    const backOne = () => {
        navigate(-1)
    }

    //USE EFFECT
    useEffect(() => {
        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
            setTracker(false)
        }
    }, [])



    // HANDLE SESSION INFO
    const handleSubmitBudaCrewInfo = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budacrewmemberinfo/640036108a05725938a87006', {
            memberTitle, upcomingEventsInfo,
            videoTitle, videoLink,
            homeworkInfo, budaCrewInfo,
            contactPhone, musicTitle,
            musicLink
        })
            .then(res => {
                console.log(res)
                setBudaCrewMemberInfoEdited(true)
            })
            .catch(err => {
                console.log(err)
            })
    }


    // HANDLE VIDEO INFO
    const handleSubmitBudaCrewVideoList = (e) => {
        e.preventDefault();
        axios.post(baseUrl + '/api/budacrewvideo', { videoLink, videoTitle })
            .then(res => {
                console.log(res)
                //BUDA CREW MEMBER VIDEO LIST INFO
                axios.get(baseUrl + "/api/budacrewvideo")
                    .then(res => {
                        setVideoList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setVideoAdded(true)
            })
            .catch(err => {
                alert("title and link must be longer than 3 characters")
                console.log(err)
            })
    }

    // HANDLE MIX INFO
    const handleSubmitBudaCrewMixList = (e) => {
        e.preventDefault();
        axios.post(baseUrl+'/api/budacrewmusic', { musicLink, musicTitle })
            .then(res => {
                console.log(res)
                //BUDA CREW MEMBER MUSIC LIST INFO
                axios.get(baseUrl + "/api/budacrewmusic")
                    .then(res => {
                        console.log(res)
                        setMusicList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setMusicAdded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE DELETE MUSIC
    const handleDeleteOneMusic = (e, id) => {
        e.preventDefault()
        console.log(id)
        axios.delete(baseUrl+'/api/budacrewmusic/' + id)
            .then(res => {
                //BUDA CREW MEMBER MUSIC LIST INFO
                axios.get(baseUrl + "/api/budacrewmusic")
                    .then(res => {
                        console.log(res)
                        setMusicList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE DELETE VIDEO
    const handleDeleteOneVideo = (e, id) => {
        e.preventDefault()
        console.log(id)
        axios.delete(baseUrl+'/api/budacrewvideo/' + id)
            .then(res => {
                console.log(res)
                //BUDA CREW MEMBER VIDEO LIST INFO
                axios.get(baseUrl + "/api/budacrewvideo")
                    .then(res => {
                        setVideoList(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE MEMBER BANNER IMAGE
    const handleSubmitMemberBannerImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/memberbannerimg/64079bd924657d47be763a70', { memberBannerImg })
            .then(res => {
                console.log(res)
                axios.put('http://localhost:8000/api/memberbannervidorimg/64079bee24657d47be763a74', { memberBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setMemberBannerImgEdited(true)
                const time = setTimeout(() => setMemberBannerImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE MEMBER BANNER VIDEO
    const handleSubmitMemberBannerVid = (e) => {
        e.preventDefault();
        axios.put(baseUrl+'/api/memberbannervid/64079be224657d47be763a72', { memberBannerVid })
            .then(res => {
                console.log(res)
                axios.put(baseUrl+'/api/memberbannervidorimg/64079bee24657d47be763a74', { memberBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setMemberBannerVidEdited(true)
                const time = setTimeout(() => setMemberBannerVidEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE MEMBER IMG
    const handleMemberImg = (e) => {
        e.preventDefault()
        axios.put(baseUrl+'/api/memberImg/6409506ad7e82977ba97852e', { memberImg })
            .then(res => {
                setMemberImgEdited(true)
                const time = setTimeout(() => setMemberImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    const logout = () => {
        setLoggedIn("does not enter")
        setTracker(false)
        navigate("/")
    }

    console.log(musicList)
    return (
        <div>

            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {memberBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={memberBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={memberBannerImg} alt="people dancing and colors" />}
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
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitMemberBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setMemberBannerImg(base64); setMemberBannerVidOrImg('true') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {memberBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitMemberBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setMemberBannerVid(base64); setMemberBannerVidOrImg('false') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {memberBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>

            {/* BUDA Member Section */}
            <section >
                <div className="w-full flex flex-col items-center sm:items-start">
                    <h1 className='welcome  mt-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-xl mb-3 welcome w-full flex justify-center'>Welcome  <span className='text-indigo-500 mx-2'> BUDA </span>  Crew Members!</h1>
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl  text-xl mb-3 welcome w-full flex justify-center">Congratulations!!</h1>
                    <p className="mb-3 sm:text-3xl md:text-4xl lg:text-4xl text-sm w-full flex justify-center"> {memberTitle}</p>
                    <p className="mb-3 lg:text-2xl w-full flex justify-center">*please read all*</p>
                    <div className="h-content w-full flex flex-col items-center sm:items-start sm:ml-8">
                        <div className="flex w-11/12 justify-center mb-10">
                            <img className="border-2 border-black flex rounded w-[800px] md:w-[900px] lg:w-[1200px]" src={memberImg} />
                        </div>

                        {/* Edit Member Img */}
                        <section className="w-full mb-12">
                            <div className="w-11/12 flex justify-center">
                                <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleMemberImg}>
                                    <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                                    <FileBase64 multiple={false} onDone={({ base64 }) => setMemberImg(base64)} />
                                    <div className="flex justify-center mt-8">
                                        <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                                        {memberImgEdited && <img width="50" src={check} />}
                                    </div>
                                </form>
                            </div>
                        </section>


                        <div className="w-full p-2 md:text-xl lg:text-2xl">
                            <p className="mb-5">
                                <strong>Upcoming Events: </strong> {upcomingEventsInfo}
                            </p>
                            <p className="mb-5">
                                <strong>Below </strong> you will find important info reagarding all BUDA Crew activites, homework, and videos
                            </p>
                            <p className="mb-5">
                                If you have any issues please call me {contactPhone}
                            </p>
                        </div>


                        <div className="flex flex-col sm:flex-row w-11/12 justify-evenly">
                            <div className="rounded-lg h-[900px] sm:w-2/5 w-11/12 flex flex-col items-center border-2  border-black mb-5">
                                <div className="flex shrink items-center justify-center bg-indigo-200 flex-col w-full h-1/6 p-2 border-b-2 border-black border-double">
                                    <p className="text-2xl welcome md:text-xl lg:text-4xl">Music/Videos:</p>
                                </div>
                                <div className=" w-full h-[355px]  p-2 mb-2 border-b-2 border-black border-double aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Music:</strong></p>
                                    {musicList.map((t, i) => {
                                        return (
                                            <div key={i} className="flex justify-between mb-3 aboutInfo md:text-2xl">
                                                <p><a className="text-sky-500 underline" target="_blank" href={t.musicLink}>{t.musicTitle}</a></p>
                                                <button className="bg-red-400 px-2 rounded" onClick={(e) => { handleDeleteOneMusic(e, t._id) }}>Delete</button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="w-full h-[390px] p-2 aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Videos:</strong></p>
                                    {videoList.map((t, i) => {
                                        return (
                                            <div key={i} className="flex justify-between mb-3 aboutInfo md:text-2xl">
                                                <p><a className="text-sky-500 underline" href={t.videoLink}>{t.videoTitle}</a></p>
                                                <button className="bg-red-400 px-2 rounded" onClick={(e) => { handleDeleteOneVideo(e, t._id) }}>Delete</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="rounded-lg h-[900px] sm:w-2/5 w-11/12 flex flex-col items-center border-2  border-black mb-5">
                                <div className="flex shrink items-center justify-center bg-red-200 flex-col w-full h-1/6 p-2 border-b-2 border-black border-double">
                                    <p className="text-2xl welcome md:text-xl lg:text-4xl">Homework/Info:</p>
                                </div>
                                <div className="flex h-[355px]  flex-col w-full p-2 mb-2 border-b-2 border-black border-double aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"><strong>Info:</strong></p>
                                    <p className="md:text-xl">{budaCrewInfo}</p>
                                </div>
                                <div className="flex  h-[390px] flex-col w-full p-2 aboutInfo">
                                    <p className="text-xl mb-2 md:text-2xl lg:text-4xl"> <strong>Homework:</strong> </p>
                                    <p className="md:text-xl">{homeworkInfo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Edit Buda Crew Member Section */}
            <div className="flex flex-row-reverse items-start">
                <section className="w-1/2 h-content mb-10">
                    <div className="w-full h-full items-center flex justify-center md:text-2xl">
                        <form onSubmit={handleSubmitBudaCrewInfo} className="flex bg-slate-200 flex-col w-11/12 h-content p-3 border-2 border-black">
                            <h1 className="mx-auto welcome text-2xl mb-5 md:text-3xl">Edit Your BUDA Crew Info Here:</h1>
                            <label>Title:</label>
                            <textarea
                                rows="5"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => setMemberTitle(e.target.value)}
                                value={memberTitle}
                                className="mb-3 border-2 border-black rounded p-2 text-sm">
                            </textarea>
                            <label>Upcoming Events Info:</label>
                            <textarea
                                rows="5"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => setUpcomingEventsInfo(e.target.value)}
                                value={upcomingEventsInfo}
                                className="mb-3 border-2 border-black rounded p-2 text-sm">
                            </textarea>
                            <label>Extra Info:</label>
                            <textarea
                                rows="5"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => setBudaCrewInfo(e.target.value)}
                                value={budaCrewInfo}
                                className="mb-3 border-2 border-black rounded p-2 text-sm">
                            </textarea>
                            <label>Homework Info:</label>
                            <textarea
                                rows="5"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => setHomeworkInfo(e.target.value)}
                                value={homeworkInfo}
                                className="mb-3 border-2 border-black rounded p-2 text-sm">
                            </textarea>
                            <label>Phone number (if changed):</label>
                            <input
                                type="text"
                                autoComplete="off"
                                onChange={(e) => setContactPhone(e.target.value)}
                                value={contactPhone}
                                className="mb-3 border-2 border-black rounded p-2 text-sm">
                            </input>
                            <div className="flex justify-center">
                                <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                {budaCrewMemberInfoEdited && <img width="50" src={check} />}
                            </div>
                        </form>
                    </div>
                </section>

                {/* ADD A VIDEO FORM */}
                <div className="flex flex-col-reverse w-1/2 items-center md:text-2xl">
                    <section className="w-full h-content mb-10">
                        <div className="w-full h-full items-center flex justify-center">
                            <form onSubmit={handleSubmitBudaCrewVideoList} className="flex bg-slate-200 flex-col w-11/12 h-content p-3 border-2 border-black">
                                <h1 className="mx-auto welcome text-2xl mb-5 md:text-3xl">Add A Buda Video Here:</h1>
                                <label>Video Title:</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                    className="mb-3 border-2 border-black rounded p-2 text-sm">
                                </input>
                                <label>Video Link:</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => setVideoLink(e.target.value)}
                                    className="mb-3 border-2 border-black rounded p-2 text-sm">
                                </input>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                    {videoAdded && <img width="50" src={check} />}
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* ADD A MIX FORM */}
                    <section className="w-full h-content mb-10">
                        <div className="w-full h-full items-center flex justify-center">
                            <form onSubmit={handleSubmitBudaCrewMixList} className="flex bg-slate-200 flex-col w-11/12 h-content p-3 border-2 border-black">
                                <h1 className="mx-auto welcome text-2xl mb-5 md:text-3xl">Add A Buda Mix Here:</h1>
                                <label>Mix Title:</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => setMusicTitle(e.target.value)}
                                    className="mb-3 border-2 border-black rounded p-2 text-sm">
                                </input>
                                <label>Mix Link:</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => setMusicLink(e.target.value)}
                                    className="mb-3 border-2 border-black rounded p-2 text-sm">
                                </input>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                    {musicAdded && <img width="50" src={check} />}
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AdminBudaCrewMemberPage;

