import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {FormSchema , formSchema} from "../schemas/formSchema";

export const useForms = () => {
//handlesubmit colocar pra onde o usuario vai depois de cadastrar a pagina
    const {register , handleSubmit , 
        formState:{errors} } = useForm<FormSchema>({
        resolver:zodResolver(formSchema),
    });

    return{register, handleSubmit, errors};
};