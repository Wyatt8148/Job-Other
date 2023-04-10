import { LightningElement, api, track, wire } from 'lwc';
import VEHICLEREG from '@salesforce/schema/Vehicle_Registration__c';
import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import FNAME_FIELD from '@salesforce/schema/User.FirstName';
import LNAME_FIELD from '@salesforce/schema/User.LastName';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import WORK_PHONE_FIELD from '@salesforce/schema/User.formattedPhone__c';
import EMP_ID from '@salesforce/schema/User.EmployeeNumber';
import {getRecord} from 'lightning/uiRecordApi';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class EmployeeInfo extends LightningElement {

    vehReg                  =   VEHICLEREG;
    @track error;
    employeeName;
    firstName;
    lastName;
    employeeNumber;
    employeePhone;
    employeeEmail;
    @track employeeNameValue;
    @track firstNameValue;
    @track lastNameValue;
    @track employeeNumberValue;
    @track employeePhoneValue;
    @track employeeEmailValue
    yearOne;
    yearTwo;
    yearThree;
    yearOneValue;
    yearTwoValue;
    yearThreeValue;
    makeOne;
    makeTwo;
    makeThree;
    modelOne;
    modelTwo;
    modelThree;
    modelOneValue;
    modelTwoValue;
    ModelThreeValue;
    colorOne;
    colorTwo;
    colorThree;
    colorOneValue;
    colorTwoValue;
    colorThreeValue;
    lpOne;
    lpTwo;
    lpThree;
    lpOneValue;
    lpTwoValue;
    lpThreeValue;
    parkPermitNumber;
    placard;
    parkPermitNumberValue;
    placarValue;
    isvalid = false;
    disableFields = false;
    areDetailsVisible = false;
    areDetailsVisible_2 = false;
    hasPermit = false;
    

@wire(getRecord, {recordId: USER_ID, fields: [NAME_FIELD, FNAME_FIELD, LNAME_FIELD, EMAIL_FIELD, WORK_PHONE_FIELD, EMP_ID]})
    wireuser({error, data}) {
        if (error) {
             this.error = error;
        } else if (data) {
            this.firstNameValue = data.fields.FirstName.value;
            this.lastNameValue = data.fields.LastName.value;
            this.employeeNameValue = data.fields.FirstName.value + ' ' + data.fields.LastName.value;
            //this.employeeNameValue = data.fields.Name.value;
            this.employeeNumberValue = data.fields.EmployeeNumber.value;
            this.employeeEmailValue = data.fields.Email.value;
            this.employeePhoneValue = data.fields.formattedPhone__c.value;
        }
    }


    secOne = '<b>Employee</b>';
    secTwo = '<b>\nVehicle(s)</b>';
    secThree = '<b>Handicap Permit (Check for yes)</b>';

    handleVehicleTwo(event){
        this.areDetailsVisible = event.target.checked;
        console.log('vehicle 2:'+ this.areDetailsVisible);
        if(this.areDetailsVisible == false){
            this.yearTwoValue = "";
            this.makeTwoValue = "--None--";
            this.modelTwoValue = "";
            this.colorTwoValue = "";
            this.lpTwoValue = "";
        }
    }

    handleVehicleThree(event){
        this.areDetailsVisible_2 = event.target.checked;
        console.log('vehicle 3:'+ this.areDetailsVisible_2);
        if(this.areDetailsVisible_2 == false){
            this.yearThreeValue = "";
            this.makeThreeValue = "--None--";
            this.modelThreeValue = "";
            this.colorThreeValue = "";
            this.lpThreeValue = "";
        }
    }

    handleHandicapChange(event){
        this.hasPermit = event.target.checked;
        console.log('has permit:'+ this.hasPermit);
        this.fieldValidations();
        if(this.hasPermit == false){
            this.parkPermitNumberValue = "";
            this.placarValue = "";
        }
    }

    handleMakeOneChange(event){
        this.makeOneValue = event.target.value;
        console.log("make one:"+ this.makeOneValue);
    }

    handleMakeTwoChange(event){
        this.makeTwoValue = event.target.value;
        console.log("make two:"+ this.makeTwoValue);
    }

    handleMakeThreeChange(event){
        this.makeThreeValue = event.target.value;
        console.log("make three:"+ this.makeThreeValue);
    }

    handleOnChangeName(event) {
        const field = event.target.name;
         if (field === "employeeName") {
            this.employeeNameValue = event.target.value;
            console.log("employeeName: "+ this.employeeNameValue);
            this.fieldValidations();
        } else if (field === "employeeNumber") {
            this.employeeNumberValue = event.target.value;
            console.log("employeeNumber: "+ this.employeeNumberValue);
            this.fieldValidations();
        } else if (field === "employeePhone") {
            this.employeePhoneValue = event.target.value;
            console.log("employeePhone: "+ this.employeePhoneValue);
            this.fieldValidations();
        } else if (field === "employeeEmail") {
            this.employeeEmailValue = event.target.value;
            console.log("employeeEmail: "+ this.employeeEmailValue);
            this.fieldValidations();
        } else if (field === "yearOne") {
            this.yearOneValue = event.target.value;
            console.log("yearOne: "+ this.yearOneValue);
            this.fieldValidations();
        } else if (field === "modelOne") {
            this.modelOneValue = event.target.value;
            console.log("modelOne: "+ this.modelOneValue);
            this.fieldValidations();
        } else if (field === "colorOne") {
            this.colorOneValue = event.target.value;
            console.log("colorOne: "+ this.colorOneValue);
            this.fieldValidations();
        } else if (field === "lpOne") {
            this.lpOneValue = event.target.value;
            console.log("lpOne: "+ this.lpOneValue);
            this.fieldValidations();
        } else if (field === "parkPermitNumber") {
            this.parkPermitNumberValue = event.target.value;
            console.log("parkPermitNumber: "+ this.parkPermitNumberValue);
            this.fieldValidations();
        } else if (field === "placard") {
            this.placardValue = event.target.value;
            console.log("placard: "+ this.placardValue);
            this.fieldValidations();
        }
    }

    handleOnChangeName_2(event){
        const field = event.target.name;
        if (field === "yearTwo") {
            this.yearTwoValue = event.target.value;
            console.log("yearTwo: "+ this.yearTwoValue);
            this.fieldValidations();
        } else if (field === "modelTwo") {
            this.modelTwoValue = event.target.value;
            console.log("modelTwo: "+ this.modelTwoValue);
            this.fieldValidations();
        } else if (field === "colorTwo") {
            this.colorTwoValue = event.target.value;
            console.log("colorTwo: "+ this.colorTwoValue);
            this.fieldValidations();
        } else if (field === "lpTwo") {
            this.lpTwoValue = event.target.value;
            console.log("lpTwo: "+ this.lpTwoValue);
            this.fieldValidations();
        }
    }

    handleOnChangeName_3(event){
        const field = event.target.name;
        if (field === "yearThree") {
            this.yearThreeValue = event.target.value;
            console.log("yearThree: "+ this.yearThreeValue);
            this.fieldValidations();
        } else if (field === "modelThree") {
            this.modelThreeValue = event.target.value;
            console.log("modelThree: "+ this.modelThreeValue);
            this.fieldValidations();
        } else if (field === "colorThree") {
            this.colorThreeValue = event.target.value;
            console.log("colorThree: "+ this.colorThreeValue);
            this.fieldValidations();
        } else if (field === "lpThree") {
            this.lpThreeValue = event.target.value;
            console.log("lpThree: "+ this.lpThreeValue);
            this.fieldValidations();
        }
    }

    fieldValidations(){
         //validate field entries
        console.log("This is the start: ");
        let re = new RegExp("^[0-9]*$");//only numbers (no text or special characters)
        let re2 = new RegExp("[-a-zA-Z\s\\-\\' ]+");//text with a hyphen (no numbers or special characters)
        let re3 = new RegExp("^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$");//email
        let re4 = new RegExp("^[0-9a-zA-Z]*$");//only alphanumeric
        //let re5 = new RegExp("^[a-zA-Z\s ]*$");//only text
        this.isValid = true;
        if(this.employeeEmailValue == null || this.employeeEmailValue == "" || !this.employeeEmailValue.match(re3)){
            this.isValid = false;
        }
        if(this.employeePhoneValue == null || this.employeePhoneValue == "" || this.employeePhoneValue.length !== 10){
            this.isValid = false;
        }
        if (this.employeeNameValue == null || this.employeeNameValue == "" || !this.employeeNameValue.match(re2)) {
            this.isValid = false;
        }
        if(this.employeeNumberValue == null || this.employeeNumberValue == "" || !this.employeeNumberValue.match(re)){
            this.isValid = false;
        }
        if(this.yearOneValue == null || this.yearOneValue == "" || !this.yearOneValue.match(re) || this.yearOneValue.length !== 4){
            this.isValid = false;
        }
        if(((this.areDetailsVisible == true) && (this.yearTwoValue == null || this.yearTwoValue == "" || !this.yearTwoValue.match(re) || this.yearTwoValue.length !== 4))){
            this.isValid = false;
        }
        if(((this.areDetailsVisible_2 == true) && (this.yearThreeValue == null || this.yearThreeValue == "" || !this.yearThreeValue.match(re) || this.yearThreeValue.length !== 4))){
            this.isValid = false;
        }
        if(this.modelOneValue == null || this.modelOneValue == "" || !this.modelOneValue.match(re4)){
            this.isValid = false;
        }
        if(((this.areDetailsVisible == true) && (this.modelTwoValue == null || this.modelTwoValue == "" || !this.modelTwoValue.match(re4)))){
            this.isValid = false;
        }
        if(((this.areDetailsVisible_2 == true) && (this.modelThreeValue == null || this.modelThreeValue == "" || !this.modelThreeValue.match(re4)))){
             this.isValid = false;
        }
        if(this.lpOneValue == null || this.lpOneValue == "" || this.lpOneValue.length !== 7 || !this.lpOneValue.match(re4)){
            this.isValid = false;
        }
        if(((this.areDetailsVisible == true) && (this.lpTwoValue == null || this.lpTwoValue == "" || this.lpTwoValue.length !== 7 || !this.lpTwoValue.match(re4)))){
            this.isValid = false;
        }
        if(((this.areDetailsVisible_2 == true) && (this.lpThreeValue == null || this.lpThreeValue == "" || this.lpThreeValue.length !== 7 || !this.lpThreeValue.match(re4)))){
            this.isValid = false;
        }
        if((this.hasPermit && (this.parkPermitNumberValue == null || this.parkPermitNumberValue == "" || !this.parkPermitNumberValue.match(re4)))){
            this.isValid = false;
        }
        if((this.hasPermit && (this.placardValue == null || this.placarValue == "" || !this.placardValue.match(re4)))){
            this.isValid = false;
        }
        console.log("This is the end: ");
    }

    createVehicleRegistration() {
    if(this.isValid == true){
        // Creating mapping of fields of Registration with values
        var fields = {      'Employee_Name__c'                              : this.employeeNameValue, 
                            'Email_Address__c'                              : this.employeeEmailValue,
                            'Work_Phone_Number__c'                          : this.employeePhoneValue,
                            'Employee_Number__c'                            : this.employeeNumberValue,
                            'Year_1__c'                                     : this.yearOneValue,
                            'Year_2__c'                                     : this.yearTwoValue,
                            'Year_3__c'                                     : this.yearThreeValue,
                            'Make_1__c'                                     : this.makeOneValue,
                            'Make_2__c'                                     : this.makeTwoValue,
                            'Make_3__c'                                     : this.makeThreeValue,
                            'Model_1__c'                                    : this.modelOneValue,
                            'Model_2__c'                                    : this.modelTwoValue,
                            'Model_3__c'                                    : this.modelThreeValue,
                            'Color_1__c'                                    : this.colorOneValue,
                            'Color_2__c'                                    : this.colorTwoValue,
                            'Color_3__c'                                    : this.colorThreeValue,
                            'License_Plate_Number_1__c'                     : this.lpOneValue,
                            'License_Plate_Number_2__c'                     : this.lpTwoValue,
                            'License_Plate_Number_3__c'                     : this.lpThreeValue,
                            'Handicap_Parking_Permit_Registration__c'       : this.parkPermitNumberValue,
                            'Placard_Number__c'                             : this.placardValue,

                        };
        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Vehicle_Registration__c', fields};
            createRecord(objRecordInput);
            this.disableFields = true;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success!!',
                    message: "Thank you for your submission.  You will receive an email communication with your login information.",
                    variant: 'success',
                    mode: 'sticky'
                }),
            );
        }else{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error!!',
                    message: `Please Complete All Required Fields with Valid Data`,
                    variant: 'error',
                    mode: 'sticky'
                }),
            );
        }

    }
}