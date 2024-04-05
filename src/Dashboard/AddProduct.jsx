import Title from "../Hooks/Title";
import { imageUpload } from "../Hooks/UploadImage";

const AddProduct = () => {

  const handleSubmit= async e=>{
    
    e.preventDefault()
    const form=e.target;

    const description=form.description.value;
    const price= form.price.value;
    const condition=form.condition.value;
    const item= form.item.value;
    const photo=form.photo.files[0]
    const img=await imageUpload(photo)
    const image=img?.data?.display_url;

    const product ={
        description,price,condition,item,image
    }

    console.log(product);


  }


    return (
        <div>
            <Title heading={'Add Product'}></Title>


        <div className="mt-10">
        <form onSubmit={handleSubmit}>
                 <div className="flex gap-6 w-full">
                 <input type="text" name="description" placeholder="description" className="input input-bordered input-info  max-w-xs w-[50%]" />

                 <input type="text" name="price" placeholder="price" className="input input-bordered input-info w-[50%] max-w-xs" />
                 </div>


                 <div className="flex gap-6 w-full my-2">
                 <input type="text" name="condition" placeholder="condition" className="input input-bordered input-info  max-w-xs w-[50%]" />

                 <input type="text" name="item" placeholder="item type" className="input input-bordered input-info w-[50%] max-w-xs" />
                 </div>

                 <div className="flex gap-6 w-full my-2 ">
         
          <input
                className="input input-bordered input-info  max-w-xs w-[50%]"
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
         <button className="input input-bordered input-info  max-w-xs w-[50%] bg-red-400" type="submit">Add Product</button>


        </div>


                   
             </form>
        </div>


        </div>
    );
};

export default AddProduct;