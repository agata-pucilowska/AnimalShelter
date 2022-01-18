import { LightningElement } from 'lwc';

export default class AnimalSearch extends LightningElement {

    animalType;

    handleTypeSelected(event){
        this.animalType = event.detail;
    }
}