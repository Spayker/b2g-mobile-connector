export default {

    // Server Dedicated Related Info

    // B2G GE account: create new account
    // 148.251.138.115:6000/accounts/ 
    GE_SERVER_CREATE_NEW_ACCOUNT_URL_ADDRESS:  'http://148.251.138.115:6000/accounts/',

    // B2G GE account: get account token
    // http://148.251.138.115:5000/mservicet/oauth/token
    GE_SERVER_GET_ACCOUNT_TOKEN_URL_ADDRESS:    'http://148.251.138.115:5000/mservicet/oauth/token',

    // B2G GE account: post new training
    // http://148.251.138.115:6000/accounts/trainings/
    GE_SERVER_POST_NEW_TRAINING_URL_ADDRESS:    'http://148.251.138.115:6000/accounts/trainings/',


    XIAOMI_LOGIN_URL: 'https://account.xiaomi.com/oauth2/authorize?skip_confirm=false&client_id=2882303761517383915&pt=0&scope=1+6000+16001+20000&redirect_uri=https%3A%2F%2Fhm.xiaomi.com%2Fwatch.do&_locale=en_US&response_type=code',

    
    // Async Storage Keys
    ACCESS_TOKEN_KEY:   '@AccessToken',
    USERNAME_TOKEN_KEY: '@UserName',
    
    // Device section
    DEVICES_KEY:        '@Devices',
    PAIRED_DEVICES_KEY: '@PairedDevices',

    // Service section
    SERVICES_KEY:       '@Services',

    // Account section
    ACCOUNTS_KEY:       '@Accounts',

    // AUTH PROCESS DATA
    AUTHORIZED_STATE:   'authorized',
    UNAUTHORIZED_STATE: 'unauthorized'


};