export default function handelResponseFromAPI(promise) {
    return promise
    .then(() => {return({status: 200, body: success})})
    .catch(() => {return(Error())})
    .finally(() => { console.log("Got a response from the API")});
}