
const products = [{
        id: 0,
        name: "notebook_1",
        price: 5000,
        imgName: "notebook_1.jpg"
    },
    {
        id: 1,
        name: "notebook_2",
        price: 6500,
        imgName: "notebook_2.jpg"
    },
    {
        id: 2,
        name: "phone_1",
        price: 1000,
        imgName: "phone_1.jpg"
    },
    {
        id: 3,
        name: "phone_2",
        price: 1200,
        imgName: "phone_2.jpg"
    },
    {
        id: 4,
        name: "phone_3",
        price: 2000,
        imgName: "phone_3.jpg"
    },
    {
        id: 5,
        name: "phone_4",
        price: 1750,
        imgName: "phone_4.jpg"
    },
    {
        id: 6,
        name: "pc_desktop_1",
        price: 3500,
        imgName: "pc_desktop_1.jpg"
    },
    {
        id: 7,
        name: "mouse",
        price: 150,
        imgName: "mouse.jpg"
    },
    {
        id: 8,
        name: "keyboard",
        price: 220,
        imgName: "keyboard.jpg"
    },
    {
        id: 9,
        name: "keyboard_2",
        price: 250,
        imgName: "keyboard_2.jpg"
    },
    {
        id: 10,
        name: "headset_1",
        price: 80,
        imgName: "headset_1.jpg"
    },
    {
        id: 11,
        name: "headset_2",
        price: 110,
        imgName: "headset_2.jpg"
    },
]

const Products = () => {


    return(<div className="products-container">
        {products.map((product, i) => {
            return(<div key={i} className="img-container">
                <img src={`../public/images/${product.imgName}`} alt=""/>
                <div className="info-product">
                    <span>{product.imgName.split(".")[0].replaceAll("_", " ")}</span>
                    <span>${product.price}</span>
                </div>
                <div>
                    <button>+</button>
                </div>
            </div>)
        })}
    </div>)

}

export default Products;