import { IRegisterError, IValidateRegister } from "@/types";

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const nameRegex = /^[A-Za-z\s]+$/;

const validateRegister = (value: IValidateRegister): IRegisterError => {
    let errors: IRegisterError = {};

    if (!value.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(value.email)) {
        errors.email = "Email is not valid";
    }

    if (!value.password) {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(value.password)) {
        errors.password = "Minimum eight characters, at least one letter, one number and one special character";
    }

    if (!value.name) {
        errors.name = "Name is required";
    } else if (!nameRegex.test(value.name)) {
        errors.name = "Name is not valid";
    }

    if (!value.address) {
        errors.address = "Address is required";
    }

    if (!value.phone) {
        errors.phone = "Phone is required";
    }

    return errors;
};

export default validateRegister;
