import {  useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminForm = (props) => {
    const {setLoggedIn} = props;
    const {setTracker} = props
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName)
        console.log(password)
        
        axios.post(baseUrl + '/api/budaadmin/check',{userName, password})
            .then(res=>{
                if(res.data === "exist"){
                    setLoggedIn(res.data)
                    setTracker(true)
                    navigate("/adminabout")
                } else if( res.data == "does not exist"){
                    setErrMsg(true)
                }
            })
            .catch(err=>{
                console.log(err)

            })
    }

    const backOne = () =>{
        navigate(-1)
    }

    return (
        <section>
            <div className="w-full flex flex-col  h-content mb-12">
                <div className="w-full h-full items-center flex justify-center">

                    <form onSubmit={handleSubmit} className="flex mt-12 bg-slate-200 flex-col w-1/3 h-content p-3 border-2 border-black">
                        <h1 className="mx-auto welcome text-2xl mb-2 lg:text-4xl">Admin Info:</h1>
                        {errMsg && 
                        <p className='text-red-400 mx-auto mb-4 '>User name or password is incorrect</p>}
                        <label className='lg:text-2xl'>User Name:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />


                        <label className='lg:text-2xl'>Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="mb-3 border-2 border-black rounded p-2"
                        />


                        <button type="submit" className="px-6 lg:text-2xl py-1 mx-auto bg-indigo-200 rounded border-2 border-black mb-2">Login</button>
                        <p className='text-sky-500 underline mx-auto cursor-pointer lg:text-2xl' onClick={()=>backOne() }>Back</p>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminForm;