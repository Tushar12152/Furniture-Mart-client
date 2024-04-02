import Title from "../Hooks/Title";

const AddProduct = () => {

  const handleSubmit=e=>{
    
    e.preventDefault()
    const form=e.target;

    const description=form.description.value;
    const price= form.price.value;
    const condition=form.condition.value;
    const item= form.item.value;

    const product ={
        description,price,condition,item
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


                 <div className="flex gap-6 w-full my-5">
                 <input type="text" name="condition" placeholder="condition" className="input input-bordered input-info  max-w-xs w-[50%]" />

                 <input type="text" name="item" placeholder="item type" className="input input-bordered input-info w-[50%] max-w-xs" />
                 </div>


                    <button className="btn bg-red-400" type="submit">Add Product</button>
             </form>
        </div>


        </div>
    );
};

export default AddProduct;