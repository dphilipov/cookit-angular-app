import { Appwrite } from "appwrite";
import { environment } from '../../environments/environment';
const apiURL = environment.apiURL;
const apiTOKEN = environment.apiTOKEN;

var appwrite = new Appwrite();

appwrite
    .setEndpoint(apiURL)
    .setProject(apiTOKEN)
    ;

export default appwrite;