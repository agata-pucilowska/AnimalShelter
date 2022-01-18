import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues  } from 'lightning/uiObjectInfoApi';

import ANIMAL_OBJECT from '@salesforce/schema/Animal__c';
import TYPE_FIELD from '@salesforce/schema/Animal__c.Type__c';

export default class AnimalSearchForm extends LightningElement {

    animalTypes=[{label:'All Animals', value:''}];

     @wire(getObjectInfo, { objectApiName: ANIMAL_OBJECT })
     objectInfo;

     @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
     typePicklist({data, error}){
        if(data){
            this.animalTypes = [...this.animalTypes, ...this.generatePicklist(data)];
        } else if(error){
        }
    }

     handleTypeChange(event) {
         const animalType = event.detail.value;

        const animalTypeSelected = new CustomEvent('typeselected', {detail: animalType});
        this.dispatchEvent(animalTypeSelected);
    }

    generatePicklist(data){
        return data.values.map(item=>({label:item.label, value:item.value}));
    }

}



