
const images = ["notebook_1.jpg", "notebook_2.jpg", "phone_1.jpg", "phone_2.jpg", 
"phone_3.jpg", "phone_4.jpg", "pc_desktop_1.jpg", "mouse.jpg", "keyboard.jpg", 
"keyboard_2.jpg", "headset_1.jpg", "headset_2.jpg"];

const Products = () => {


    return(<div className="products-container">
        {images.map((imgName, i) => {
            return(<div key={i} className="img-container">
                <img src={`../public/images/${imgName}`} alt=""/>
                <span>{imgName.split(".")[0].replaceAll("_", " ")}</span>
                <div>
                    <button>+</button>
                </div>
            </div>)
        })}
    </div>)

}

export default Products;