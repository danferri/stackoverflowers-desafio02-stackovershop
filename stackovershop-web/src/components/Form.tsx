import {useForms} from '../hooks/useForms';
import { FormSchema } from '../schemas/formSchema';

const Form = () => {
  const {register, handleSubmit, errors} = useForms();

  const onSubmit = (data : FormSchema) => {
    console.log(data);
//alterar depois para isso enviar ao backend, via fech ou axios
  }
  return (
  <form onSubmit={handleSubmit(onSubmit)} className='wd-96 bg-white p-4 rounded-md border slate-300'>
{/* name */}
    <div className='flex flex-col gap-2 md-2'>
    <label htmlFor='name'>Plant Name</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id='name'
     placeholder='Echinocereus Cactus'{...register('name')}></input>
     {errors.name && <small className='text-red-500 italic'>{errors.name.message}</small>}
     </div>
{/* subtitle */}
     <div className='flex flex-col gap-2 md-2'>
    <label htmlFor='subtitle'>Subtitle</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id='subtitle'
     placeholder='A majestic addition to your plant collection'{...register('subtitle')}></input>
     {errors.subtitle && <small className='text-red-500 italic'>{errors.subtitle.message}</small>}
     </div>
{/* plantType */}
<div className='flex flex-col gap-2 md-2'>
    <label htmlFor='plantType'>Plant Type</label>
    <select id='plantType' {...register('plantType')} className='h-10 pl-1 rounded-md border border-slate-300'>
    <option value={'select'}>Selecione</option>
    <option value={'cactu'}>cactu</option>
    <option value={'girasol'}>girasol</option>
    <option value={'samambaia'}>samambaia</option>
    </select>   
     {errors.plantType && <small className='text-red-500 italic'>{errors.plantType.message}</small>}
     </div>
{/* label */}
<div className='flex flex-col gap-2 md-2'>
    <label htmlFor='label'>Label</label><div id=' label'>
    <label>
            <input type="radio" value="indoor" {...register("label")} />
            Indoor
          </label>
          <label>
            <input type="radio" value="outdoor" {...register("label")} />
            Outdoor
          </label>
   </div>
     {errors.label && <small className='text-red-500 italic'>{errors.label.message}</small>}
     </div>
{/* discountPercentage*/}
     <div className='flex flex-col gap-2 md-2'>
    <label htmlFor=' discountPercentage'>Dicount percentage</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id=' discountPercentage'
     placeholder='20$'{...register('discountPercentage', {
      valueAsNumber: true
    })} typeof='number'></input>
     {errors. discountPercentage && <small className='text-red-500 italic'>{errors. discountPercentage.message}</small>}
     </div>
{/* features */}
<div className='flex flex-col gap-2 md-2'>
    <label htmlFor='features'>Plant Features</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id='features'
     placeholder='Needs very little water'{...register('features')}></input>
     {errors.features && <small className='text-red-500 italic'>{errors.features.message}</small>}
     </div>
     {/* description */}
<div className='flex flex-col gap-2 md-2'>
    <label htmlFor='description'>Plant Description</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id='description'
     placeholder='The Plant is from...'{...register('description')}></input>
     {errors.description && <small className='text-red-500 italic'>{errors.description.message}</small>}
     </div>
     <button type='submit' className='w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all'>Register</button>
  </form>
  )
}

export default Form
