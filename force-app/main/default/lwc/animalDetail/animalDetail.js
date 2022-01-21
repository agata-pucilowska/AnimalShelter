import { LightningElement, api} from 'lwc';

export default class AnimalDetail extends LightningElement {
    @api animal;

    get animalName(){
        try{
            return this.animal.data.fields.Name__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get animalDateOfArrival(){
        try{
            return this.animal.data.fields.Date_of_Arrival__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get animalType(){
        try{
            return this.animal.data.fields.Type__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get animalPicture(){
        try{
            return this.animal.data.fields.Pickture_Url__c.value;
        }catch(error){
            return 'NA';
        }
    }

}