import { LightningElement, api, wire } from 'lwc';

import getUser from '@salesforce/apex/UserController.getUser';

export default class ApexWireMethodToProperty extends LightningElement {

   @wire(getUser) users;

   handleButtonClick(){
    this.navigateUserPage();

   }
    navigateUserPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'User',
                actionName: 'view'
            },
        });
    }
  
}