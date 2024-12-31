import {useForms} from '../hooks/useForms';
import { FormSchema } from '../schemas/formSchema';
import img from '../assets/img/image-21.png';

const Form = () => {
  const {register, handleSubmit, errors} = useForms();

  const onSubmit = (data : FormSchema) => {
    console.log(data);
//alterar depois para isso enviar ao backend, via fech ou axios
  }
  return (<section className='sectionForm FormFont  '>
  <form onSubmit={handleSubmit(onSubmit)} className='containerSectionForm ,Form'  >
    <div className='belowTitle'>
  <h1 className="FormTitle">Plant registration </h1>
  </div>
{/* name */}
    <div className='formGaps'>
    <label htmlFor='name'>Plant Name</label>
    <input className='' type='text' 
    id='name'
     placeholder='Echinocereus Cactus'{...register('name')}></input>
     {errors.name && <small className='error'>{errors.name.message}</small>}
     </div>
{/* subtitle */}
     <div className='formGaps'>
    <label htmlFor='subtitle'>Subtitle</label>
    <input className='' type='text' 
    id='subtitle'
     placeholder='A majestic addition to your plant collection'{...register('subtitle')}></input>
     {errors.subtitle && <small className='error'>{errors.subtitle.message}</small>}
     </div>
{/* plantType */}
<div className='formGaps'>
    <label htmlFor='plantType'>Plant Type</label>
    <select id='plantType' {...register('plantType')} className='h-10 pl-1 rounded-md border border-slate-300'>
    <option value={'select'}>Selecione</option>
    <option value={'cactu'}>cactu</option>
    <option value={'girasol'}>girasol</option>
    <option value={'samambaia'}>samambaia</option>
    </select>   
     {errors.plantType && <small className='error'>{errors.plantType.message}</small>}
     </div>
{/* label */}
<div className='formGaps formRadio' >
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
     {errors.label && <small className='error'>{errors.label.message}</small>}
     </div>
{/* discountPercentage*/}
     <div className=''>
    <label htmlFor=' discountPercentage'>Dicount percentage</label>
    <input className='h-10 pl-2 rounded-md border border-slate-300' type='text' 
    id=' discountPercentage'
     placeholder='20$'{...register('discountPercentage', {
      valueAsNumber: true
    })} typeof='number'></input>
     {errors. discountPercentage && <small className='error'>{errors. discountPercentage.message}</small>}
     </div>
{/* features */}
<div className='formGaps'>
    <label htmlFor='features'>Plant Features</label>
    <input className='' type='text' 
    id='features'
     placeholder='Needs very little water'{...register('features')}></input>
     {errors.features && <small className=''>{errors.features.message}</small>}
     </div>
     {/* description */}
<div className='formGaps'>
    <label htmlFor='description'>Plant Description</label>
    <input className='' type='text' 
    id='description'
     placeholder='The Plant is from...'{...register('description')}></input>
     {errors.description && <small className=''>{errors.description.message}</small>}
     </div>
     <button type='submit' className='formButton'>Register</button>
  </form>
  <aside className='containerImgForm' style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>     
  </aside>
  </section>
  )
}

export default Form
