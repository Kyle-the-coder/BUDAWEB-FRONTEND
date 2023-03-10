import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminEditLogin = (props) => {
    const { loggedIn } = props;
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errTracker, setErrTracker] = useState(false)
    const [errMsg, setErrMsg] = useState('')


    useEffect(() => {

        // GET ABOUT ME INFO
        if (loggedIn != "exist") {
            navigate("/")
        }

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName)
        console.log(password)
        if (password !== confirmPassword) {
            setErrMsg("passwords don't match")
            setErrTracker(true)
        } else if (password === confirmPassword) {
            axios.put(baseUrl+'/api/budaadmin/63fd25eec828334db266e621', { userName, password })
                .then(res => {
                    console.log(res)
                    alert("Your admin info has been succesfully edited")
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
                        <h1 className="mx-auto welcome text-2xl mb-2 lg:text-4xl">Edit Admin Info:</h1>
                        {errTracker &&
                            <p className='text-red-400 mx-auto mb-4'>{errMsg}</p>}
                        <label className='lg:text-2xl'>New User Name:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => {setUserName(e.target.value); setErrTracker(false)}}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />


                        <label className='lg:text-2xl'>New Password</label>
                        <input
                            type="password"
                            onChange={(e) => {setPassword(e.target.value); setErrTracker(false)}}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />
                        <label className='lg:text-2xl'>Confirm New Password:</label>
                        <input
                            type="password"
                            onChange={(e) => {setConfirmPassword(e.target.value); setErrTracker(false)}}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />


                        <button type="submit" className="px-6 lg:text-2xl py-1 mx-auto bg-indigo-200 rounded border-2 border-black mb-2">Submit Edit</button>
                        <p className='text-sky-500 underline mx-auto cursor-pointer lg:text-2xl' onClick={() => backOne()}>Back</p>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminEditLogin;