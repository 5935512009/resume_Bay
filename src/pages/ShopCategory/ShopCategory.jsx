import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/item/Item";
import './shopCategory.css'
const ShopCategory =(props)=>{
    const {Mock_data} = useContext(ShopContext);
    // console.log(Mock_data)
    return(<>
        <div className="shopcategory-text">
            Showing 1-12 out 
        </div>
        <div className="shopcategory-indexSort">
            Sort by
        </div>
        <div className="shopcategory">
            
            <div className="shopcategory-products">
                {Mock_data.map((item,i)=>{
        // console.log(props)
                    if(props.category===item.banner){
                        
                        return <Item key={i} id={item.id} name={item.name} banner={item.banner} price={item.price} img={item.img}/>;
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    </>)
}
export default ShopCategory;