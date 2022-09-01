import fetch from 'node-fetch'

export async function getApi(req, res, next) {
    try{
        const info = 'https://mobile-app-challenge.herokuapp.com/data'
        // console.log("info", info);

        const result = await fetch(info);
        

        const messageData = await result.json()
        res.status(200).json(messageData);
        // const {status} = result
        // return status
        // console.log("result",result.json());
    }
    catch(e){

        console.log("error coming",e);
    }
}