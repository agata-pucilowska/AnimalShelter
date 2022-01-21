@isTest
public with sharing class AnimalControllerTest {

    @TestSetup
    private static void setupData(){
        List<Animal__c> testAnimals = new List<Animal__c>();
        testAnimals.add(new Animal__c(Name__c = 'Test 1', Type__c='Dog'));
        testAnimals.add(new Animal__c(Name__c = 'Test 2', Type__c='Dog'));
        testAnimals.add(new Animal__c(Name__c = 'Test 3', Type__c='Dog'));
        testAnimals.add(new Animal__c(Name__c = 'Test 4', Type__c='Cat'));
        testAnimals.add(new Animal__c(Name__c = 'Test 5', Type__c='Cat'));
        testAnimals.add(new Animal__c(Name__c = 'Test 6', Type__c='Rabbit'));
        insert testAnimals;
    }

    @isTest
    private static void testGetAllAnimals(){
        test.startTest();
        List<Animal__c> allAnimals = AnimalController.getAllActiveAnimals();
        test.stopTest();
        System.assertEquals(6, allAnimals.size(),'Error');
    }

    @isTest
    private static void testGetAllAnimalsByType(){
        test.startTest();
        List<Animal__c> dogs = AnimalController.getAnimalsByType('Dog');
        test.stopTest();
        System.assertEquals(3, dogs.size(),'Error');
    }

}
