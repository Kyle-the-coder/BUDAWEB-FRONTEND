import {  useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BudaCrewAdminForm = (props) => {
    const {setMemberLogin} = props;
    const baseUrl = process.env.REACT_APP_BASE_URL
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [errTracker, setErrTracker] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password)
        
        axios.post(baseUrl + '/api/budacrewadmin/check',{password})
            .then(res=>{
                console.log(res)
                if(res.data === "enter"){
                    setMemberLogin(res.data)
                    console.log("logged In")
                    navigate("/budacrewadminpage")
                } else if( res.data == "does not enter"){
                    setErrMsg("password is incorrect")
                    setErrTracker(true)
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
            <div className="w-full flex flex-col  h-96 mb-12">
                <div className="w-full h-full items-center flex justify-center mt-24 mb-14 lg:text-3xl">

                    <form onSubmit={handleSubmit} className="flex p-8 rounded bg-slate-200 flex-col w-[450px] h-content border-2 border-black mb-24">
                        <h1 className="mx-auto welcome text-2xl lg:text-3xl">Buda Crew </h1>
                        <h1 className="mx-auto welcome text-2xl mb-5 lg:text-3xl">Member Page:</h1>
                        {errTracker && 
                        <p className='text-red-400 mx-auto mb-4 text-sm'>{errMsg}</p>}
                        
                        <label className='text-sm'>Enter Password:</label>
                        <input
                            type="password"
                            onChange={(e) => {setPassword(e.target.value); setErrTracker(false)}}
                            value={password}
                            required
                            className="mb-5 border-2 border-black rounded"
                        />


                        <button type="submit" className="w-24 mb-5 py-1 mx-auto bg-indigo-200 text-lg rounded border-2 border-black">Login</button>
                        <p className='text-sky-500 underline mx-auto cursor-pointer text-lg' onClick={()=>backOne() }>Back</p>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default BudaCrewAdminForm;