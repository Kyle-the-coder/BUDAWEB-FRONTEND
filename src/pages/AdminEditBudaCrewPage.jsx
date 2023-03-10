import check from "../assets/images/checkmark.png"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';

const AdminEditBudaCrewPage = (props) => {
    const {
        session1Date, setSession1Date,
        session1Tuition, setSession1Tuition,
        session1Includes, setSession1Includes,
        session2Date, setSession2Date,
        session2Tuition, setSession2Tuition,
        session2Includes, setSession2Includes,
        classTime1, setClassTime1,
        classTime2, setClassTime2,
        requirementInfo, setRequirementInfo,
        extraPerformanceInfo, setExtraPerformanceInfo,
        mandatoryClassDates, setMandatoryClassDates,
        extraRehearsalClassDates, setExtraReheearsalClassDates,
        compDateInfo, setCompDateInfo,
        auditionDate, setAuditionDate } = props
    const { crewBannerImg,
        crewBannerVid,
        crewBannerVidOrImg,
        setCrewBannerImg,
        setCrewBannerVid,
        setCrewBannerVidOrImg,
        budaCrewImg, setBudaCrewImg } = props
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = props
    const { setTracker } = props
    const [budaCrewInfo1Edited, setBudaCrewInfo1Edited] = useState(false)
    const [budaCrewInfo2Edited, setBudaCrewInfo2Edited] = useState(false)
    const [crewBannerImgEdited, setCrewBannerImgEdited] = useState(false)
    const [crewBannerVidEdited, setCrewBannerVidEdited] = useState(false)
    const [budaCrewImgEdited, setBudaCrewImgEdited] = useState(false)
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        // SECURITY CHECK
        if (loggedIn != "exist") {
            navigate("/")
            setTracker(false)
        }
    }, [])


    // HANDLE BUDA CREW INFO
    const handleSubmitBudaCrewInfo1 = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budacrewinfo/63ffcc5778b0d2ecd592bcce', {
            session1Date,
            session1Tuition,
            session1Includes,
            session2Date,
            session2Tuition,
            session2Includes,
            classTime1,
            classTime2,
            requirementInfo,
            extraPerformanceInfo,
            mandatoryClassDates,
            extraRehearsalClassDates,
            compDateInfo,
            auditionDate
        })
            .then(res => {
                console.log(res)
                setBudaCrewInfo1Edited(true)
                const time = setTimeout(() => setBudaCrewInfo1Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE BUDA CREW INFO
    const handleSubmitBudaCrewInfo2 = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budacrewinfo/63ffcc5778b0d2ecd592bcce', {
            session1Date,
            session1Tuition,
            session1Includes,
            session2Date,
            session2Tuition,
            session2Includes,
            classTime1,
            classTime2,
            requirementInfo,
            extraPerformanceInfo,
            mandatoryClassDates,
            extraRehearsalClassDates,
            compDateInfo,
            auditionDate
        })
            .then(res => {
                console.log(res)
                setBudaCrewInfo2Edited(true)
                const time = setTimeout(() => setBudaCrewInfo2Edited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE SESSION BANNER IMAGE
    const handleSubmitCrewBannerImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/crewbannerimg/640671eb024ae5b9309208ab', { crewBannerImg })
            .then(res => {
                console.log(res)
                axios.put(baseUrl + '/api/crewbannervidorimg/64067203024ae5b9309208af', { crewBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setCrewBannerImgEdited(true)
                const time = setTimeout(() => setCrewBannerImgEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }
    // HANDLE SESSION BANNER IMAGE
    const handleSubmitCrewBannerVid = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/crewbannervid/640671f8024ae5b9309208ad', { crewBannerVid })
            .then(res => {
                console.log(res)
                axios.put(baseUrl + '/api/crewbannervidorimg/64067203024ae5b9309208af', { crewBannerVidOrImg })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                setCrewBannerVidEdited(true)
                const time = setTimeout(() => setCrewBannerVidEdited(false), 2100);
                return time
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HANDLE BUDA CREW INFO
    const handleSubmitBudaCrewImg = (e) => {
        e.preventDefault();
        axios.put(baseUrl + '/api/budacrewimg/640954b6ee04f09798d82b26', { budaCrewImg })
            .then(res => {
                console.log(res)
                setBudaCrewImgEdited(true)
                const time = setTimeout(() => setBudaCrewImgEdited(false), 2100);
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
        setLoggedIn("does not enter")
        setTracker(false)
        navigate("/")
    }
    return (
        <div>

            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {crewBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={crewBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={crewBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-5 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
                <button className="underline text-sky-500 mr-10" onClick={() => logout()}>Logout</button>
            </section>

            {/* EDIT BANNER SECTION */}
            <section className=" w-full mb-14 flex justify-center items-center">
                <div className="w-full items-center justify-center mt-8  flex h-fit flex-col">
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitCrewBannerImg}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setCrewBannerImg(base64); setCrewBannerVidOrImg('true') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                            {crewBannerImgEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                    <h1>Or</h1>
                    <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitCrewBannerVid}>
                        <h1 className="text-2xl mb-8 welcome">Edit your Banner Video here:</h1>
                        <FileBase64 multiple={false} onDone={({ base64 }) => { setCrewBannerVid(base64); setCrewBannerVidOrImg('false') }} />
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="w-24 py-1 bg-indigo-200 rounded border-2 border-black">Upload</button>
                            {crewBannerVidEdited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>


            {/* Rates Info Section */}
            <section >
                <div className="w-full flex flex-col items-center sm:items-start">
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-3xl mb-3 welcome w-full flex justify-center">BUDA Crew Info:</h1>
                    <p className="mb-3 w-full flex justify-center xl:text-2xl">*please read all*</p>
                    <p className="mb-3 w-full flex justify-center xl:text-2xl">*member login below*</p>
                    <div className="h-content w-full flex flex-col items-center sm:items-start sm:ml-8">
                        <div className="w-full flex flex-col md:flex-row md:justify-evenly">

                            <div className="sm:w-[600px] w-full ">

                                <h4 >
                                    <strong>Session Dates and Tuition:</strong>
                                </h4>
                                <div className="w-full h-96 sm:h-96  flex flex-col items-center justify-center border-2 border-black mb-5">
                                    <div className="flex shrink bg-red-100 flex-col w-full h-1/2 p-2 border-b-2 border-black border-double aboutInfo">
                                        <p className="welcome text-xl xl:text-2xl">Session 1:</p>
                                        <p className="xl:text-xl">
                                            <strong>Date: </strong> {session1Date}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Tuition: </strong> ${session1Tuition}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Includes: </strong> {session1Includes}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Class Time: </strong> {classTime1}
                                        </p>
                                    </div>
                                    <div className="flex shrink flex-col w-full p-2 h-1/2 bg-indigo-100 aboutInfo">
                                        <p className="welcome text-xl xl:text-2xl">Session 2:</p>
                                        <p className="xl:text-xl">
                                            <strong>Date: </strong> {session2Date}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Tuition: </strong> ${session2Tuition}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Includes: </strong> {session2Includes}
                                        </p>
                                        <p className="xl:text-xl">
                                            <strong>Class Time: </strong> {classTime2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mb-10 sm:justify-start sm:w-1/2 ">
                                <img src={budaCrewImg} className="w-[500px] md:w-[700px] infoCard"></img>
                            </div>
                        </div>


                        <div className="w-11/12 flex flex-col md:flex-row-reverse md:justify-evenly">
                            <div className="">
                                <form className="w-[490px] p-3 flex flex-col items-center  bg-slate-200  border-2 border-black" onSubmit={handleSubmitBudaCrewImg}>
                                    <h1 className="text-2xl mb-8 welcome">Edit your Banner photo here:</h1>
                                    <FileBase64 multiple={false} onDone={({ base64 }) => setBudaCrewImg(base64)} />
                                    <div className="flex justify-center mt-8">
                                        <button type="submit" className="w-24 py-1 bg-indigo-200 rounded  border-black">Upload</button>
                                        {budaCrewImgEdited && <img width="50" src={check} />}
                                    </div>
                                </form>
                            </div>
                            {/* Buda Session Edit Info */}
                            <section className=" h-content mb-10">
                                <div className="w-full h-full items-center flex justify-start md:text-2xl">
                                    <form onSubmit={handleSubmitBudaCrewInfo1} className="flex bg-slate-200 flex-col w-[620px] h-[400px] aboutInfo p-3 border-2 border-black">
                                        <h1 className="mx-auto welcome text-2xl md:text-3xl">Edit Your BUDA Crew </h1>
                                        <h1 className="mx-auto welcome text-2xl md:text-3xl mb-5">Session Info Here:</h1>
                                        <label>Session 1 Date:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession1Date(e.target.value)}
                                            value={session1Date}
                                            className="mb-3 border-2 border-black rounded p-1 text-sm">
                                        </input>
                                        <label>Session 1 Tuition:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession1Tuition(e.target.value)}
                                            value={session1Tuition}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <label>Session 1 Includes Info:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession1Includes(e.target.value)}
                                            value={session1Includes}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <label>Session 1 Class Time:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setClassTime1(e.target.value)}
                                            value={classTime1}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <label>Session 2 Date:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession2Date(e.target.value)}
                                            value={session2Date}
                                            className="mb-3 border-2 border-black rounded p-1 text-sm">
                                        </input>
                                        <label>Session 2 Tuition:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession2Tuition(e.target.value)}
                                            value={session2Tuition}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <label>Session 2 Includes Info:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setSession2Includes(e.target.value)}
                                            value={session2Includes}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <label>Session 2 Class Time:</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            onChange={(e) => setClassTime2(e.target.value)}
                                            value={classTime2}
                                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                                        </input>
                                        <div className="flex justify-center">
                                            <button type="submit" className="px-6 md:text-3xl py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                                            {budaCrewInfo1Edited && <img width="50" src={check} />}
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>

                        <div className="w-11/12 p-2 lg:text-xl">
                            <p className="mb-5">
                                <strong>BUDA Crew Audition Date: </strong> {auditionDate}
                            </p>
                            <p className="mb-5">
                                <strong>Requirements: </strong> {requirementInfo}
                            </p>
                            <p className="mb-5">
                                <strong>Extra Performance Info: </strong> {extraPerformanceInfo}
                            </p>
                            <p className="mb-5">
                                <strong>Mandatory Class Dates: </strong> {mandatoryClassDates}
                            </p>
                            <p className="mb-5">
                                <strong>Extra Reheasal Date (if needed): </strong> {extraRehearsalClassDates}
                            </p>
                            <p className="mb-5">
                                <strong>Competition Date and Info: </strong> {compDateInfo}
                            </p>
                        </div>
                        <div className="w-11/12 flex justify-center mb-12">

                            <a className="bg-indigo-800 lg:text-4xl  border-2 border-black hover:bg-gradient-to-l from-indigo-200 to-red-100 transition-all hover:text-black duration-700  text-2xl text-white px-6 py-3 rounded" href="/budacrewadmin">BUDA Crew Member Login</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Buda Crew Info Section */}
            <section className="w-full h-content mb-10">
                <div className="w-full h-full items-center flex justify-center md:text-2xl">
                    <form onSubmit={handleSubmitBudaCrewInfo2} className="flex bg-slate-200 flex-col w-[620px] h-[500px] aboutInfo p-3 border-2 border-black">
                        <h1 className="mx-auto welcome text-2xl md:text-3xl">Edit Your BUDA Crew </h1>
                        <h1 className="mx-auto welcome text-2xl md:text-3xl mb-5">Info Here:</h1>
                        <label>Audition Date and Info:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setAuditionDate(e.target.value)}
                            value={auditionDate}
                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                        </input>
                        <label>Requirement Info:</label>
                        <textarea
                            rows="20"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setRequirementInfo(e.target.value)}
                            value={requirementInfo}
                            className="mb-3 pb-24  border-2 border-black rounded p-1 text-sm">
                        </textarea>
                        <label>Extra Performance Info:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setExtraPerformanceInfo(e.target.value)}
                            value={extraPerformanceInfo}
                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                        </input>
                        <label>Mandatory Class Dates:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setMandatoryClassDates(e.target.value)}
                            value={mandatoryClassDates}
                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                        </input>
                        <label>Extra Rehearsal Info (TBA if none):</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setExtraReheearsalClassDates(e.target.value)}
                            value={extraRehearsalClassDates}
                            className="mb-3 border-2 border-black rounded  p-1 text-sm">
                        </input>
                        <label>Competition Date and Info:</label>
                        <textarea
                            rows="20"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setCompDateInfo(e.target.value)}
                            value={compDateInfo}
                            className="mb-5 border-2 border-black rounded pb-24 p-1 text-sm resize-none">
                        </textarea>
                        <div className="flex justify-center">
                            <button type="submit" className="px-6 md:text-3xl py-1 bg-indigo-200 rounded border-2 border-black">submit</button>
                            {budaCrewInfo2Edited && <img width="50" src={check} />}
                        </div>
                    </form>
                </div>
            </section>


        </div>
    )
}

export default AdminEditBudaCrewPage;