/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "candidates": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "item_street": {
                    "type": "string"
                },
                "item_city": {
                    "type": "string"
                },
                "item_phone": {
                    "type": "string"
                },
                "item_zip": {
                    "type": "string"
                },
                "item_dest_lat": {
                    "type": "string"
                },
                "item_state": {
                    "type": "string"
                },
                "proj_item_name": {
                    "type": "string"
                },
                "item_dest_lng": {
                    "type": "string"
                }
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "SearchTerm": new $a.SessionStorage("SearchTerm", "String"),

    "CustomMessage": new $a.SessionStorage("CustomMessage", "String"),

    "DestinationProjectName": new $a.SessionStorage("DestinationProjectName", "String"),

    "DestinationCity": new $a.SessionStorage("DestinationCity", "String"),

    "DestinationLat": new $a.SessionStorage("DestinationLat", "String"),

    "DestinationLng": new $a.SessionStorage("DestinationLng", "String"),

    "DestinationStreet": new $a.SessionStorage("DestinationStreet", "String"),

    "DestinationZip": new $a.SessionStorage("DestinationZip", "String"),

    "DestinationState": new $a.SessionStorage("DestinationState", "String"),

    "DestinationPhone": new $a.SessionStorage("DestinationPhone", "Number"),

    "DestinationSearchTerm": new $a.SessionStorage("DestinationSearchTerm", "String"),

    "SendMessage": new $a.SessionStorage("SendMessage", "String"),

    "SendETA": new $a.SessionStorage("SendETA", "String"),

    "Navigate": new $a.SessionStorage("Navigate", "String"),

    "ETA": new $a.SessionStorage("ETA", "String"),

    "markerLat": new $a.SessionStorage("markerLat", "String"),

    "markerLng": new $a.SessionStorage("markerLng", "String"),

    "currentLat": new $a.SessionStorage("currentLat", "String"),

    "currentLng": new $a.SessionStorage("currentLng", "String"),

    "SendCustomOnly": new $a.SessionStorage("SendCustomOnly", "String"),

    "showAddress": new $a.SessionStorage("showAddress", "String"),

    "CurrentAddress": new $a.SessionStorage("CurrentAddress", "String"),

    "UserId": new $a.SessionStorage("UserId", "String"),

    "AccessToken": new $a.SessionStorage("AccessToken", "String"),

    "InstanceUrl": new $a.SessionStorage("InstanceUrl", "String"),

    "dateTime": new $a.SessionStorage("dateTime", "String"),

    "CurrentUser": new $a.SessionStorage("CurrentUser", "String"),

    "DestinationName": new $a.SessionStorage("DestinationName", "String"),

    "Distance": new $a.SessionStorage("Distance", "String"),

    "Duration": new $a.SessionStorage("Duration", "String"),

    "MessageResult": new $a.SessionStorage("MessageResult", "String"),

    "SessionToken": new $a.LocalStorage("SessionToken", "String"),

    "userName": new $a.LocalStorage("userName", "String"),

    "salesforce_access_Token": new $a.LocalStorage("salesforce_access_Token", "String"),

    "salesforce_instance_Url": new $a.LocalStorage("salesforce_instance_Url", "String"),

    "LoginUrl": new $a.LocalStorage("LoginUrl", "String"),

    "ReturnTextMessage": new $a.SessionStorage("ReturnTextMessage", "String"),

    "candidates_array": new $a.LocalStorage("candidates_array", "candidates")
};