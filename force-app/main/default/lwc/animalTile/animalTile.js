import { LightningElement, api, wire} from 'lwc';
import MAINLEMC from "@salesforce/messageChannel/MainMessageChannel__c";
import {MessageContext, publish} from 'lightning/messageService'

export default class AnimalTile extends LightningElement {
    @api animal;

    @api animalId;

    @wire(MessageContext)
    context

    handleSelect(event){

        const selected = new CustomEvent('selected',{detail:this.animal.Id});
        this.dispatchEvent(selected);

        const message={lmsData:this.animal.Id}
        publish(this.context, MAINLEMC, message);

    }

    get isSelected(){
        if(this.animal.Id === this.animalId){
            return "tile selected";
        }
        return "tile";
    }
}