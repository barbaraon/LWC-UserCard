public with sharing class UserController {

    @AuraEnabled(cacheable=true)
    public static List<User> getUser() {
        return [ SELECT Name, AboutMe FROM User WITH SECURITY_ENFORCED];
    }
}
