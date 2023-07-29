const express = require('express');
const {Web3} = require("web3");
const ABI = require("./ABI.json");

const app = express() ;
app.use(express.json())
// app.listen(3000,()=>{
//     console.log('server is running')
// })

const web3 = new Web3("https://tiniest-nameless-bridge.ethereum-sepolia.discover.quiknode.pro/f0ecbf7c66c6175d53139ca79936f787cfa8bc39/")

const contractAddress = "0xd73E449f8EC580637C622494B8f5c4023771841E"

const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs = async(account)=>{
    try{
    const nftBalance = await contract.methods.balanceOf(account).call();
       return  {userNFTs:Number(nftBalance)}
    }
    catch(error){
        console.log("Error in fetching balance"+error)
    }
}

app.post('/members',async(req,res)=>{
try{
    const account = req.body.from;
    const numNFTs = await fetchNFTs(account);
    console.log(numNFTs)
    if(numNFTs.userNFTs>0){
        res.status(200).json({status:200,numNFTs})
    }else{
        res.status(400).json({status:400,message:"You have 0 nft"})
    }
}
catch(error){
    res.status(500).json({error:"Internal Server Error"})
}
})

const PORT=3000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})


