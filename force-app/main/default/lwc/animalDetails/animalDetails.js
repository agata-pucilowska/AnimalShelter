import { LightningElement, wire } from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Animal__c.Name__c';
import ARRIVAL_DATE_FIELD from '@salesforce/schema/Animal__c.Date_of_Arrival__c';
import PICTURE_FIELD from '@salesforce/schema/Animal__c.Pickture_Url__c';
import TYPE_FIELD from '@salesforce/schema/Animal__c.Type__c';
import MAINLEMC from "@salesforce/messageChannel/MainMessageChannel__c";
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';

const fields = [NAME_FIELD,ARRIVAL_DATE_FIELD,PICTURE_FIELD,TYPE_FIELD];

export default class AnimalDetails extends LightningElement {

    animalId;
    subscription=null;


    @wire(MessageContext)
    context

    connectedCallback(){
       this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription= subscribe(this.context, MAINLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.animalId = message.lmsData;
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }

    @wire(getRecord, { recordId: '$animalId', fields})
    animal;

    get isAnimal(){
        if(this.animal.data){
            return true;
        }
        return false;
    }
}