import {z} from 'zod';


export const formSchema = z.object({
    name : z.string().min(3, "There is no plant with less then 3 letters as a name"),
    subtitle: z.string().min(3, "The subtitle must have more than 3 letters "),
    plantType: z.string().refine((field) => field !== "select" , {
        message : "You need to select a plant type"
    }),
    labels: z.enum(["indoor", "outdoor"], {
      errorMap: () => ({
        message: "You need to select the correct ambient for the plant",
      }),
    }),
    price: z.number()
    .min(5,"The price must be above 5$"),

   
   
    discountPercentage: z.number()
    .min(1," The discount needs to be at least 2"),

    features: z.string().min(5, "The features must have more than 5 letters"),
    description: z.string().min(5, "The description must have more than 5 letters"),
    imgUrl: z.string().min(3, "Write something"),
   
    
});

export type FormSchema = z.infer<typeof formSchema>;