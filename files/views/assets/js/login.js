function login() {
   var success = false;
   var username = "username";
   var password = "password";
   var authEndPoint = "https://login.salesforce.com/services/Soap/c/24.0/";

   try {
      var config = new ConnectorConfig();
      config.setUsername(username);
      config.setPassword(password);        

      alert("AuthEndPoint: " + authEndPoint);
      config.setAuthEndpoint(authEndPoint);

      connection = new EnterpriseConnection(config);

      // Print user and session info
      var userInfo = connection.getUserInfo();
      alert("UserID: " + userInfo.getUserId());
      alert("User Full Name: " + userInfo.getUserFullName());
      alert("User Email: " + userInfo.getUserEmail());
      
      alert("SessionID: " + config.getSessionId());
      alert("Auth End Point: " + config.getAuthEndpoint());
      alert("Service End Point: " + config.getServiceEndpoint());
     

      success = true;
   } catch (ConnectionException) {
      alert('Exception');
   }

   return success;
}