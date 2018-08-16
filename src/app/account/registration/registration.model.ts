export class Registration {
    name: String;
    location: String;
    mobileNumber: Number;
    userType: String;
    constructor(
        name: String,
        userType: String,
        location: String,
        mobileNumber: Number)
        {
            this.name=name;
            this.location=location;
            this.userType=userType;
            this.mobileNumber=mobileNumber;
        }
    
}
