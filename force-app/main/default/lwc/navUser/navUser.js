import { LightningElement, wire,track } from 'lwc';
import getUser from '@salesforce/apex/UserController.getUser';

export default class navUser extends LightningElement {

    @track data = [];

    @wire(getUser)
    loadUser({ data }) {
        if (data && data.length) {
            this.data = data.map(result => {
                return {
                    ...result,
                    url: window.location.origin + '/lightning/r/User/' + result.Id + '/view'
                    
                };
            });
        }
        
    };

   
  
   
}

    
   
    
