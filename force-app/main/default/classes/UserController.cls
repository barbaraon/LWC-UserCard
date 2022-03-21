public with sharing class UserController {

    @AuraEnabled(cacheable=true)
    public static List<User> getUser() {
        return [ SELECT Name, AboutMe, SmallPhotoUrl FROM User WITH SECURITY_ENFORCED];
    }

    /*@AuraEnabled(cacheable=true)
    public static Map<Id,User> getMapUser() {
        return new Map<Id, User>(getUser());
    }*/






}
