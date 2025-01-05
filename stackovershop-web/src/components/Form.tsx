import { useEffect, useState } from "react";
import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";
import imgPlant from '../assets/img/image-21.png';
import axios from "axios";
import '../pages/Form/form.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface PlantType {
  id: string;
  plantType: string;
}

interface FormProps {
  onSuccess: (data: FormSchema) => void;
}

const Form = ({ onSuccess }: FormProps) => {
  const { register, handleSubmit, errors, reset } = useForms();
  const [plantTypes, setPlantTypes] = useState<PlantType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/plantTypes")
      .then((response) => {
        setPlantTypes(response.data as PlantType[]);
      })
      .catch((error) => console.error("Erro ao buscar tipos de plantas:", error));
  }, []);

  const onSubmit = async (data: FormSchema) => {
    console.log("Submitting form data:", data);
    try {
      const response = await axios.post(
        "http://localhost:5000/plants", // arrumar depois
        { ...data, labels: [data.labels] }
      );
      console.log("Product successfully sent to backend:", response.data);
      onSuccess(response.data as FormSchema);
      toast.success("Plant registered successfully!", {
        icon: () => <span role="img" aria-label="plant">🌱</span>,
        style: {
          backgroundColor: "#354733",
          color:"#fff"
        }
      })
      reset();
    } catch (error) {
      console.error("Error sending product to backend:", error);
    }
  };

  return (
    <section className="page-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="belowTitle">
          <h1 className="FormTitle">Plant Registration</h1>
        </div>
        {/* Nome da planta */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Plant Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Echinocereus Cactus"
            {...register("name")}
          />
          {errors.name && (
            <small className="error">{errors.name.message}</small>
          )}
        </div>
        {/* Subtítulo */}
        <div className="form-group">
          <label htmlFor="subtitle" className="form-label">Subtitle</label>
          <input
            className="form-input"
            type="text"
            id="subtitle"
            placeholder="A majestic addition to your plant collection"
            {...register("subtitle")}
          />
          {errors.subtitle && (
            <small className="error">{errors.subtitle.message}</small>
          )}
        </div>
        {/* Dropdown de tipos de planta */}
        <div className="form-group">
          <label htmlFor="plantType" className="form-label">Plant Type</label>
          <select
            id="plantType"
            {...register("plantType")}
            className="form-input"
          >
            <option value="">Select Plant Type</option>
            {plantTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.plantType}
              </option>
            ))}
          </select>
          {errors.plantType && (
            <small className="error">{errors.plantType.message}</small>
          )}
        </div>
        {/* Label (Indoor/Outdoor) */}
        <div className="form-group">
          <span className="form-label">Label</span>
          <div className="form-group">
            <label className="label-input">
              <input type="radio" value="indoor" {...register("labels")} />
              <span>Indoor</span>
            </label>
            <label className="label-input">
              <input type="radio" value="outdoor" {...register("labels")} />
              <span>Outdoor</span>
            </label>
            {errors.labels && (
              <small className="error">{errors.labels.message}</small>
            )}
          </div>
        </div>
        {/* Preço */}
        <div className="discount-group">
          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              className="form-input"
              type="number"
              id="price"
              placeholder="50"
              {...register("price", {
                valueAsNumber: true,
              })}
            />
            {errors.price && (
              <small className="error">{errors.price.message}</small>
            )}
          </div>
          {/* Desconto */}
          <div className="form-group">
            <label htmlFor="discountPercentage" className="form-label">Discount Percentage</label>
            <input
              className="form-input"
              type="number"
              id="discountPercentage"
              placeholder="20"
              {...register("discountPercentage", {
                valueAsNumber: true,
              })}
            />
            {errors.discountPercentage && (
              <small className="error">{errors.discountPercentage.message}</small>
            )}
          </div>
        </div>
        {/* Recursos */}
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
        {/* Descrição */}
        <div className="form-group">
          <label htmlFor="description" className="form-label">Plant Description</label>
          <textarea
            className="description-input"
            cols={50}
            rows={6}
            id="description"
            placeholder="The plant is from..."
            {...register("description")}
          ></textarea>
          {errors.description && (
            <small className="error">{errors.description.message}</small>
          )}
        </div>
        {/* URL da Imagem */}
        <div className="form-group">
          <label htmlFor="imgUrl" className="form-label">Plant Image</label>
          <input
            className="form-input"
            type="text"
            id="imgUrl"
            placeholder="URL of the image"
            {...register("imgUrl")}
          />
          {errors.imgUrl && (
            <small className="error">{errors.imgUrl.message}</small>
          )}
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <ToastContainer position="bottom-left" autoClose={5000}/>
      <aside className="image-container">
        <img src={imgPlant} alt="Plant illustration" />
      </aside>
    </section>
  );
};

export default Form;
