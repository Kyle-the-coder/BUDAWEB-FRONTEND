import { useNavigate } from "react-router-dom"
import "../styles/bannerSize.css"
import "../styles/cardHover.css"


const GalleryPage = (props) => {
    const { galleryBannerImg,
        galleryBannerVid,
        galleryBannerVidOrImg, galleryVidsList, galleryImgsList } = props
    const navigate = useNavigate();


    const backOne = () => {
        navigate(-1)
    }

    return (
        <div>
            {/* Banner Section */}
            <section className="w-screen bg-slate-200 h-32 mb-5 flex justify-center ">
                {galleryBannerVidOrImg == "false" ? <video className="shrink ratesBanner w-full h-full  bg-slate-200" loop muted autoPlay controls='' src={galleryBannerVid} alt="people dancing and colors" ></video>
                    :
                    <img className="shrink ratesBanner w-full h-full  bg-slate-200" src={galleryBannerImg} alt="people dancing and colors" />}
            </section>

            {/* Back One Page Section */}
            <section className="w-full h-5 flex items-center justify-end">
                <p className=" w-12 text-sm underline text-sky-500 cursor-pointer" onClick={() => backOne()} >
                    Back
                </p>
            </section>

            {/* BUDA Name Section */}
            <section className="w-full h-12 flex justify-center mb-14">
                <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-2xl welcome">Bianca's Urban Dance Academy</h1>
            </section>

            {/* Video Section */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center m-8">
                {galleryVidsList.map((vid, i) => (
                    <div key={i} className="flex flex-col justify-center items-center">
                        <video className="rounded transition-all duration-400 md:m-2 border-2 border-indigo-200 m-8 w-[700px] hover:border-red-200" loop muted autoPlay controls='' src={vid.galleryVids} >video loading...</video>
                    </div>
                )
                )}

            </section>

            {/* Img Section */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center m-8 relative">
                {galleryImgsList.map((img, i) => (
                    <div key={i} className="flex  flex-col justify-center items-center justify-start relative">
                        <img className="rounded  w-[480px] md:m-2 border-2 border-indigo-200 m-8  infoCard" src={img.galleryImgs} />
                    </div>
                )
                )}

            </section>
        </div>
    )
}

export default GalleryPage;