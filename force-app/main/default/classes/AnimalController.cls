public with sharing class AnimalController {

    @AuraEnabled(cacheable=true)
    public static List<Animal__c> getAllActiveAnimals(){
        return [SELECT Id, Name, Name__c,Pickture_Url__c FROM Animal__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Animal__c> getAnimalsByType(String type){
        String animalType = '%'+ type + '%';

        return [SELECT Id, Name, Name__c,Pickture_Url__c FROM Animal__c WHERE Type__c LIKE:animalType];
    }

}
