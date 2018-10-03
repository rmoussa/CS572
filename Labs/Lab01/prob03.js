const item = {
  name: "Biscuits",
  type: "regular",
  category: "food",
  price: 2.0
};

//Apply discount then return the item
let applyCoupon = x => y => Itm => {
  if (Itm.category === "food") {
    Itm.price = Itm.price - Itm.price * y;
  }
  return Itm;
};

var checkPrice = applyCoupon("food")(0.1)(item).price === 1.8;
console.log("Item after applyCoupon price Match logic is: " + checkPrice);
