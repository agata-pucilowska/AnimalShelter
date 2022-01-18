import { LightningElement, api, wire } from 'lwc';
import getAllActiveAnimals from '@salesforce/apex/AnimalController.getAllActiveAnimals';
import getAnimalsByType from '@salesforce/apex/AnimalController.getAnimalsByType';

export default class AnimalList extends LightningElement {

    @api animalType;

    animals;
    error;

    @wire(getAllActiveAnimals)
    allAnimals({data,error}){
        if(data){
            this.animals = data
        }
        else if(error){
            this.error = error;
        }
    }

    @wire(getAnimalsByType, {type:'$animalType'})
    selectedAnimals({data,error}){
        if(data){
            this.animals = data
        }
        else if(error){
            this.error = error;
        }
    }

}