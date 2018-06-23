export class Registration {
    firstName: String;
    lastName: String;
    userType: Number;
    emailId: String;
    mobileNumber: Number;
    userName: String;
    password: String;
    constructor(
        firstName: String,
        lastName: String,
        userType: Number,
        emailId: String,
        mobileNumber: Number,
        userName: string,
        password: string,) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
        this.emailId = emailId;
        this.mobileNumber = mobileNumber;
        this.userName = userName;
        this.password = password;
    }
}
