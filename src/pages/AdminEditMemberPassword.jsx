import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminEditMemberPassword = (props) => {
    const { loggedIn, setLoggedIn } = props;
    const { setTracker } = props
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errTracker, setErrTracker] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const baseUrl = process.env.REACT_APP_BASE_URL


    useEffect(() => {

        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
        }

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrMsg("passwords don't match")
            setErrTracker(true)
        } else if (password === confirmPassword) {
            axios.put('http://localhost:8000/api/budacrewadmin/63feff5bfbd1f19da3f899e7', { password })
                .then(res => {
                    console.log(res)
                    alert("Buda Crew member password has been succesfully edited")
                    navigate('/adminabout')

                })
                .catch(err => {
                    console.log(err)

                })
        }

    }

    const backOne = () => {
        navigate(-1)
    }

    return (
        <section>
            <div className="w-full flex flex-col  h-content mb-12">
                <div className="w-full h-1/2 items-center flex justify-center">

                    <form onSubmit={handleSubmit} className="flex mt-12 bg-slate-200 flex-col w-[400px] sm:w-[600px] md:w-[800px]  p-3 border-4 border-black">
                        <h1 className="mx-auto welcome text-2xl mb-2 lg:text-4xl">Edit Buda Members Password:</h1>
                        {errTracker &&
                            <p className='text-red-400 mx-auto mb-4'>{errMsg}</p>}
                        <label className='lg:text-2xl'>New Password</label>
                        <input
                            type="password"
                            onChange={(e) => { setPassword(e.target.value); setErrTracker(false) }}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />
                        <label className='lg:text-2xl'>Confirm New Password:</label>
                        <input
                            type="password"
                            onChange={(e) => { setConfirmPassword(e.target.value); setErrTracker(false) }}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />


                        <button type="submit" className="px-6 lg:text-2xl py-1 mx-auto bg-indigo-200 rounded border-2 border-black mb-2">Submit</button>
                        <p className='text-sky-500 underline mx-auto cursor-pointer lg:text-2xl' onClick={() => backOne()}>Back</p>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminEditMemberPassword