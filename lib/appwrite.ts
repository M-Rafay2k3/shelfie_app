import {Account,Avatars, Client} from 'react-native-appwrite';

const client = new Client()
    .setProject('688325db001224fca074')
    .setPlatform('com.rafay.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
