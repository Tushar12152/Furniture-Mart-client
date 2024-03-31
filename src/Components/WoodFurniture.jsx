
const WoodFurniture = () => {


    const mordernProduct = [
        {
          id: 1,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 2,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 3,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 4,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 5,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 6,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 7,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 8,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 9,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 10,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 11,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 12,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 13,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 14,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 15,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "hot",
        },
        {
          id: 16,
          image: "https://i.ibb.co/JyRkXJC/01-2-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sell",
        },
        {
          id: 17,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 18,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 19,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 20,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
        {
          id: 21,
          image: "https://i.ibb.co/YQywdHc/10-450x572.jpg",
          title: "Garden Chair With Armrests",
          price: 100,
          status: "sold out",
        },
      ];


    return (
        <div>
             <h1 className="py-8 font-bold text-xl ">
        W o o d F u r n i t u r e s
      </h1>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {mordernProduct.map((card) => (
    <div key={card.id}>
      <div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img className="h-80 w-80 rounded-md p-5" src={card?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     
      <div className="badge badge-error text-white">{card?.status}</div>
    </h2>
    <p>{card?.title}</p>
    <h1 className="font-bold">$ {card?.price}</h1>
    <div className="card-actions justify-end">
     <button className="bg-red-400 p-2 text-white rounded-lg ">Add To Cart </button>
    </div>
  </div>
</div>
    </div>
  ))}
</div>






        </div>
    );
};

export default WoodFurniture;