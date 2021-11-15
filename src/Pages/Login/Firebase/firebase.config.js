const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY.slice(0, -1),
    authDomain: process.env.REACT_APP_AUTH_DOMAIN.slice(0, -1),
    projectId: process.env.REACT_APP_PROJECT_ID.slice(0, -1),
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET.slice(0, -1),
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID.slice(0, -1),
    appId: process.env.REACT_APP_APP_ID.slice(0, -1),
};
export default firebaseConfig;
