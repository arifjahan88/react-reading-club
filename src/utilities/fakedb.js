// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("Break-Value");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("Break-Value", JSON.stringify(shoppingCart));
};

const getstoredcarddata = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("Break-Value");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const getstoreddata = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("Break-Value");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("Break-Value");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("Break-Value", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("Break-Value");
};

export {
  addToDb,
  getstoredcarddata,
  removeFromDb,
  deleteShoppingCart,
  getstoreddata,
};
