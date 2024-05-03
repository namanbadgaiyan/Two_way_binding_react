import { useState } from "react";


function Right() {
    const[username, setusername] = useState("");
    const[email, setemail] = useState("");
    const[gender, setgender] = useState("male");
    const[terms, setterms] = useState("true");


    const submitHandler = (event) => {
        event.preventDefault();
        
    }
    
    return (
        <div className="w-[60vw] h-full flex px-[18vw] text-center py-[14vh]">
            <div className=" py-[4vh] px-[2vw] border-[1px] rounded-[2vw] border-green-600">
                <h1 className="text-green-500 text-[3vw] mb-[1.5vw] font-bold">Two-Way-Form</h1>
                <form className='' onSubmit={submitHandler}>
                    <input className="border-[2px] border-green-500 py-[1vh] px-[2vw] rounded-[2vh] bg-transparent text-[1.7vw]" 
                        type="text" 
                        placeholder="Enter ur Name"
                        name="name"
                        onChange={(e)=>{setusername(e.target.value)}} 
                        value={username}
                    />
                    <br /><br />
                    <input className="border-[2px] border-green-500 py-[1vh] px-[2vw] rounded-[2vh] bg-transparent text-[1.7vw]" 
                        type="email"
                        placeholder="Enter ur Email"      
                        name="email"
                        onChange={(e)=>{setemail(e.target.value)}} 
                        value={email}
                    />
                    <br /><br />
                    <h3 className="text-green-500 font-semibold mb-[3vh] text-[1.5vw]">Choose ur gender</h3>
                    <div className="flex gap-[0.5vw]">

                        <div className="flex gap-[0.5vw] ml-[4vw]">
                            <input type="radio"
                                name="gender"
                                className="bg-green-600"
                                value={gender}
                                onChange={(e)=>{setgender(e.target.value)}}
                                checked={gender === "male" ? true : false} 
                            /> 
                        <p className="font-semibold text-green-600 text-[1.2vw]">Male</p>
                        </div>
                        <div className="flex gap-[0.5vw]">
                            <input type="radio"
                                name="gender" 
                                value={gender}
                                className="bg-green-600"                                 
                                onChange={(e)=>{setgender(e.target.value)}}
                                checked={gender === "female" ? true : false} 
                            /> 
                        <p className="font-semibold text-green-600 text-[1.2vw]">Female</p>
                        </div>
                        <div className="flex gap-[0.5vw]">
                            <input type="radio" 
                                name="gender" 
                                value={gender}
                                className="bg-green-600"                            
                                onChange={(e)=>{setgender(e.target.value)}}
                                checked={gender === "other" ? true : false} 
                            /> 
                        <p className="font-semibold text-green-600 text-[1.2vw]">Others</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex gap-[1vw] ml-[5vw]">
                    <input 
                        type="checkbox"
                        className=""
                        name = "termsandconditions"
                        value={terms}
                        onChange={(e)=>{setterms(e.target.checked)}}
                        checked = {terms ? true : false} />
                    <p className="font-semibold text-green-600 text-[1.2vw]">Terms and Condition</p>
                    </div>
                    <br />
                    <br />
                    <button className='py-[0.9vh] px-[2vw] bg-green-600 border-2 border-green-400 rounded-[3vh] text-[2.5vh] text-slate-300'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Right