
const Blogs = () => {
    return (
        <div>
              <h1 className="py-8 font-bold text-xl mt-16"> O u r   B l o g s </h1>



                <div className="mt-16">
                     <div className="flex  ">
                         <div className="w-[50%]">

                             <img className="h-[500px] w-full" src="https://i.ibb.co/RNrpDZF/blog-1-1536x1112.jpg" alt="" />
                         </div>
                         <div className="w-[50%] mt-20 pl-20">
                            <p className="text-gray-400 my-4">Furniture, Tables</p>
                             <h1 className="font-bold text-2xl mb-10"> Enjoy With Our Products Wood Made </h1>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga repudiandae odio labore, doloremque illum quidem vel voluptas et corporis.</p>

                                <button className="hover:underline mt-10 text-lg">Read more</button>
                         </div>
                     </div>


                     <div className="flex flex-row-reverse  ">
                         <div className="w-[50%]">

                             <img className="h-[500px] w-full" src="https://i.ibb.co/xJ4JGqF/blog-detail-2.jpg" alt="" />
                         </div>
                         <div className="w-[50%] mt-20">
                            <p className="text-gray-400 my-4">Furniture, Tables</p>
                             <h1 className="font-bold text-2xl mb-10"> Enjoy With Our Products Wood Made </h1>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga repudiandae odio labore, doloremque illum quidem vel voluptas et corporis.</p>

                                <button className="hover:underline mt-10 text-lg">Read more</button>
                         </div>
                     </div>
                    
                </div>

        </div>
    );
};

export default Blogs;