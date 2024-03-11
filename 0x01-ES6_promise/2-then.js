export default function handelResponseFromAPI(promise) {
    promise.then((successMessage) => {return({status: 200, body: success});}).catch((error) => {return({});}).then((error) => { console.log("Got a response from the API"); });
}