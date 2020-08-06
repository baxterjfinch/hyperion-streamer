
import { from } from 'rxjs';
import { timeout } from 'rxjs/operators';
import store from "store";

const hyperionStreamer = async ( stream ) => {

  try{
    const state = store.getState();

    let client = "test"
    return client;
  }catch(err){
    console.error(err);
    throw err;
  }
}

export default ( stream ) => navigator.userAgent !== "ReactSnap" ?
    from(hyperionStreamer(stream)).pipe(timeout(3000000))
  :
    //If we are prerendering using react snap, return a promise that resolved with a repsonse with { repsonse: undefined }
    from(new Promise((resolve, reject)=>{
      resolve({response: undefined});
    }))
