/*
 * Service settings
 */
var locations_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "558db172e4b0123f047dcada"
}
var Twilio_settings = {
    "accountSid": "AC67aceeec4a9b99f283be179ccc9991d9",
    "version": "2010-04-01",
    "phoneNumber": "+13852194471"
}
var Salesforce_settings = {
    "client_id": "3MVG9dPGzpc3kWyfE01q6AMENGZ5d9hJvAzrucIDkpTBHPnoel6aiDTU0__aDfEbMzL6NGP1PubdukbIbT2s.",
    "redirect_url": "https://appery.io/app/salesforce/apperyio-salesforce-callback",
    "login_url": "https://test.salesforce.com/services/oauth2/authorize",
    "salesforce_instance_url": "https://cs15.salesforce.com",
    "salesforce_access_token": "Bearer 00D18000000CnTx!AQQAQAdihFlrY4RO0W71sP7u5LdSfIDULnn3TesjjZzJhQt0g8syuwfLsFDf_0ZBi.BGUaCe1bDtNhWwnSeTICf5opYzeSiS",
    "salesforce_api_version": "v34.0"
}

/*
 * Services
 */

var Suncrest_project_query_service_test = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461495',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var locations_locations_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings
});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',
});

var Twilio_sendMessage = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://api.twilio.com/{version}/Accounts/{accountSid}/Messages.json',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461495',
        'appery-rest': 'd5cfa1bf-9c2f-4a9c-8755-0e8927353b25'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': Twilio_settings
});

var Twilio_showMessages = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://api.twilio.com/{version}/Accounts/{accountSid}/SMS/Messages.json',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461495',
        'appery-rest': 'd5cfa1bf-9c2f-4a9c-8755-0e8927353b25'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Twilio_settings
});

var Suncrest_project_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461495',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/User/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/User/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Account',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Account/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Account/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Account/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Contact',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Contact/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Contact/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Contact/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/User',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Suncrest_user_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_GetCurrent_User_Service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461496',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});
var GeolocationService = new Apperyio.GeolocationService({});

var ETAService = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://sc-asapdata-stage.herokuapp.com/api/v1.0/DriveETA',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461497',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

var getUser = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/apexrest/ApperyFindCurrentUser/',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1436994461497',
        'appery-rest': 'd8f137bc-37b2-4468-b317-c024f7216b14'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});