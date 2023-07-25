const express = require('express');
const {Web3} = require("web3");
const ABI = require("./ABI.json");

const app = express() ;

// app.listen(3000,()=>{
//     console.log('server is running')
// })

const web3 = new Web3("https://tiniest-nameless-bridge.ethereum-sepolia.discover.quiknode.pro/f0ecbf7c66c6175d53139ca79936f787cfa8bc39/")

const contractAddress = "0xD4d2faaEB0666BDb8efF7893f4e0F068d83caCbD"

const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs = async()=>{
    try{
    const nftBalance = await contract.methods.balanceOf("0x5c7778b577bD533985e86974793a7D25EC01933A").call();
    return {usernfts:nftBalance}
    }
    catch(error){
        console.log("Error in fetching balance"+error)
    }
}

app.post('/members',async(req,res)=>{
try{
    
}
catch(error){
    res.status(500).json({error:"Internal Server Error"})
}
})
