import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";
import imgPlant from '../assets/img/image-21.png';
import axios from "axios";
import '../pages/Form/form.css';

interface FormProps {
  onSuccess: (data: any) => void;
}

const Form = ({ onSuccess }: FormProps) => {
  const { register, handleSubmit, errors } = useForms();
  console.log(errors);
  const onSubmit = async (data: FormSchema) => {
    console.log("Submitting form data:", data);
    try { 
    
      const response = await axios.post(
        "http://localhost:5000/plants",//arrumar depois
        {...data , labels: [data.labels]}
      );
      console.log("Product successfully sent to backend:", response.data);

      onSuccess(response.data);
    } catch (error) {
      console.error("Error sending product to backend:", error);
    }
  };

  return (
    <section
      className="page-container"
      
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
      >
        <div className="belowTitle">
          <h1 className="FormTitle">Plant registration</h1>
        </div>
        {/* name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Plant Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Echinocereus Cactus"
            {...register("name")}
          ></input>
          {errors.name && (
            <small className="error">{errors.name.message}</small>
          )}
        </div>
        {/* subtitle */}
        <div className="form-group">
          <label htmlFor="subtitle" className="form-label">Subtitle</label>
          <input
           className="form-input"
            type="text"
            id="subtitle"
            placeholder="A majestic addition to your plant collection"
            {...register("subtitle")}
          ></input>
          {errors.subtitle && (
            <small className="error">{errors.subtitle.message}</small>
          )}
        </div>
        {/* plantType */}
        <div className="form-group">
          <label htmlFor="plantType" className="form-label">Plant Type</label>
          <select
            id="plantType"
            {...register("plantType")}
           className="form-input"
          >
            <option value={"select"}>Selecione</option>
            <option value={"cactu"}>cactu</option>
            <option value={"girasol"}>girasol</option>
            <option value={"samambaia"}>samambaia</option>
          </select>
          {errors.plantType && (
            <small className="error">{errors.plantType.message}</small>
          )}
        </div>      
        {/* label */}
        <div >
          <span className="form-label">Label</span>
        <div className="form-group ">
          
          <label className="label-input">
            <input type="radio" value="indoor" {...register("labels")} />
           <span>Indoor</span>
          </label>
          <label className="label-input">
            <input type="radio" value="outdoor" {...register("labels")}/>
           <span>Outdoor</span>  
          </label>
          {errors.labels && (
            <small className="error">{errors.labels.message}</small>
          )}
        </div>
      </div>
        {/* price */}
    <div className="discount-group ">
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price</label>
          <input
           className="form-input"
            type="text"
            id="price"
            placeholder="50$"
            {...register("price", {
              valueAsNumber: true,
            })}
            typeof="number"
            
          ></input>
          {errors.price && (
            <small className="error">{errors.price.message}</small>
          )}
        </div>
        {/* discountPercentage */}
        <div className="">
          <label htmlFor="discountPercentage" className="form-label">Discount percentage</label>
          <input
           className="form-input"
            type="text"
            id="discountPercentage"
            placeholder="20$"
            {...register("discountPercentage", {
              valueAsNumber: true,
            })}
            typeof="number"
          ></input>
          {errors.discountPercentage && (
            <small className="error">{errors.discountPercentage.message}</small>
          )}
        </div>
        
     </div>
        {/* features */}
        <div className="form-group">
          <label htmlFor="features" className="form-label">Plant Features</label>
          <textarea
          className="description-input"
            cols={50}
            rows={6}
            id="features"
            placeholder="Needs very little water"
            {...register("features")}
          ></textarea>
          {errors.features && (
            <small className="error">{errors.features.message}</small>
          )}
        </div>
        {/* description */}
        <div className="form-group">
          <label htmlFor="description" className="form-label">Plant Description</label>
          <textarea
            className="description-input"
            cols={50}
            rows={6}
            id="description"
            placeholder="The Plant is from..."
            {...register("description")}
          ></textarea>
          {errors.description && (
            <small className="error">{errors.description.message}</small>
          )}
        </div>
        {/* imagem */}
        <div className="form-group">
          <label htmlFor="imgUrl" className="form-label">Plant Image</label>
          <input
             className="form-input"
            type="text"
            id="imgUrl"
            placeholder="url imagem"
            {...register("imgUrl")}
          /> {errors.imgUrl && (
              <small className="error">{errors.imgUrl.message}</small>
            )}
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <aside className="image-container">
            <img  src={imgPlant}></img> 
          </aside>
    </section>
  );
};

export default Form;
