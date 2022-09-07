import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName, selectToken } from "./app/loginSlice";
import { getproductsAsync, selectproducts } from "./app/productSlice";
import { selectcats, test } from "./app/catSlice";
import { addToCart, sendOrderAsync } from "./app/orderSlice";
const Products = () => {
  let params = useParams();
  const [cat_id, setcat_id] = useState(params.cat_id);
  const userName = useSelector(selectUserName);
  const categories = useSelector(selectcats);
  const allProducts = useSelector(selectproducts);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(1);
  const [myCart, setmyCart] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    dispatch(getproductsAsync(cat_id));
    setmyCart(JSON.parse(localStorage.getItem("myCart")));
  }, [cat_id]);

  useEffect(() => {}, [counter]);

  const addItem = (item) => {
    let tempTotal = 0;
    setcounter(counter + 1);
    let found = false;
    myCart.forEach((element) => {
      if (element.id === item.id) {
        found = true;
        element.amount += 1;
      }
    });
    if (!found) {
      item.amount = 1;
      setmyCart([item, ...myCart]);
    }
    // total calculate
    myCart.forEach((element) => {
      tempTotal += element.amount * element.price;
    });
    settotal(tempTotal);
    localStorage.setItem("myCart", JSON.stringify(myCart));
  };

  const removeItem = (item) => {
    let found = false;
    setcounter(counter + 1);
    myCart.forEach((element) => {
      if (element.id === item.id) {
        found = true;
        if (element.amount === 1) {
          setmyCart(myCart.filter((x) => x.id !== element.id));
        } else {
          element.amount -= 1;
        }
      }
    });
  };

  const show = () => {
    // console.log(myCart);
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>
        Products from &nbsp; {cat_id == 0 && "ALL"}{" "}
        {/* {categories && id > 0 && categories[id - 1].desc} */}
      </h1>

      {allProducts.length > 0 &&
        allProducts.map((prod, i) => (
          <div key={i}>
            Desc:{prod.desc}, id:{prod.cat_id},price:{prod.price}
            <button
              onClick={() =>
                addItem({ desc: prod.desc, id: prod._id, price: prod.price })
              }
            >
              Buy
            </button>
          </div>
        ))}
      <hr></hr>
      <h1>Total: {total} </h1>
      <hr></hr>
      {myCart.map((prod, i) => (
        <div key={i}>
          Desc: {prod.desc},
          <h3>
            Amount:{prod.amount},total {prod.amount * prod.price}{" "}
          </h3>
          <button onClick={() => addItem({ desc: prod.desc, id: prod._id })}>
            +
          </button>
          <button onClick={() => removeItem({ desc: prod.desc, id: prod.id })}>
            -
          </button>
        </div>
      ))}

      <button onClick={() => show()}>Show Cart</button>
      <button onClick={() => setmyCart([])}>clear</button>
      <button onClick={() => dispatch(sendOrderAsync({ myCart, token }))}>
        send order
      </button>
      <h1 className="animate__animated animate__bounceInDown">
        {userName && <div>shopper name {userName}</div>}
      </h1>
    </div>
  );
};

export default Products;
