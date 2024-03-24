
const Lamp = () => {
    return (
        <div className="flex justify-between items-center mt-10">
             <div className="hover:border-t-2 hover:border-l-2 border-black duration-1000">
                <div className="relative">
                     <img src="https://i.ibb.co/cwqFbrj/22-450x572.jpg" alt="" />

                      <div className="absolute top-24 left-9 p-5">
                         <h1 className="font-bold text-4xl pb-5">Upto 40% off Top Brand Lamp</h1>

                          <a href="#" className="hover:border-black hover:border-b-2">Show more</a>
                        </div>      


                </div>

                <div>

                </div>
             </div>


             <div>
                    <img src="https://i.ibb.co/MVTwwQp/32-450x572.jpg" alt="" />
             </div>
        </div>
    );
};

export default Lamp;