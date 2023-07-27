import {useNavigate,useLocation} from "react-router-dom";
const Home=()=>{
    const location = useLocation();
    const navigateTo = useNavigate();
    const revealMsg = async()=>{
        try{
            const account = location.state.address ;
            const res = await fetch(`http://localhost:3000/members`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({from:account})
            }); 
            const data = await res.json();
            if(data.status ===200){
                navigateTo("/members")
            }
            else{
                window.alert("You Currently do not have any NFT")
            }
        }catch(error){
            console.error(error)
        }
    }
    return(
        <button onClick={revealMsg}>Reveal Message</button>
    )
}

export default Home ;