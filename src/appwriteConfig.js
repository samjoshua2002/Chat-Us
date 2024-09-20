import { Client,Databases,Account} from 'appwrite';
export const PROJECT_ID = '65b4f050b322cd5cc534'
export const DATABASE_ID = '65b4f1b66bbd8d6cdb3c'
export const COLLECTION_ID_MESSAGES = '65b4f1c8642cb3aad252'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b4f050b322cd5cc534');    


export const databases = new Databases(client)
export const account =new Account(client)

export default client;




/*
import { Client } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b4f050b322cd5cc534');
*/