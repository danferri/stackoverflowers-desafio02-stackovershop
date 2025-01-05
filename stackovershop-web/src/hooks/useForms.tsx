import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {FormSchema , formSchema} from "../schemas/formSchema";

export const useForms = () => {

    const {register, handleSubmit, reset, formState:{errors} } = useForm<FormSchema>({
        resolver:zodResolver(formSchema),
    });

    return{register, handleSubmit, reset, errors};
};