import * as yup from "yup";

const plantSchema = yup.object().shape({
    name: yup.string().required("The name is required."),
    subtitle: yup.string().required("Subtitle is required."),
    price: yup
        .number()
        .typeError("The price must be a number.")
        .positive()
        .required("The price is required."),
    typeId: yup
        .number()
        .integer("The typeId must be a integer.")
        .required("The typeId is required"),
    description: yup.string().required("The description is required."),
    isInSale: yup.boolean().optional(),
    disccountPercentage: yup
        .number()
        .min(0, "Discount must be at least 0.")
        .max(100, "Discount canot exceed 100.")
        .optional(), 
});