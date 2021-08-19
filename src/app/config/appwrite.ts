import { Appwrite } from "appwrite";
import { environment } from '../../environments/environment';
const API_URL = environment.API_URL;
const PROJECT_KEY = environment.PROJECT_KEY;

var appwrite = new Appwrite();

appwrite
    .setEndpoint(API_URL)
    .setProject(PROJECT_KEY)
    ;

export default appwrite;