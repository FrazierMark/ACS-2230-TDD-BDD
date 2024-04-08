// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
	return 'Hello';
};

const area = (w, h) => {
	// should return the area
	return w * h;
};

const perimeter = (w, h) => {
	// should return the perimeter
	return (w + h) * 2;
};

const circleArea = (r) => {
	// should return the area of the circle
	return Math.PI * r * r;
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

// An array of objects to represent shopping cart
const shoppingCart = [];

const clearCart = () => {
	shoppingCart.length = 0;
};

const createItem = (name, price) => {
	return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
	// should return the current state of shopping cart
	return shoppingCart;
};

const addItemToCart = (item) => {
	// should add item to shopping cart
	shoppingCart.push(item);
};

const getNumItemsInCart = () => {
	// should return the total quantity of items in cart
	// Sums up all the quantities of all items in the shopping cart
	return shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
};

const removeItemFromCart = (item) => {
	// should remove item from shopping cart
	shoppingCart.splice(shoppingCart.indexOf(item), 1);
};

// ========================================================
// Stretch Challenges
// ========================================================

const updateCartItem = (item, name, price) => {
	// Update the item's name and/or price
	item.name = name;
	item.price = price;
};

const isCartEmpty = () => {
	// should return true if the cart is empty
	return shoppingCart.length === 0;
};

const calculateTotalCartPrice = () => {
	// should return the total cost of all items in the cart
	return shoppingCart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
};

module.exports = {
	sayHello,
	area,
	perimeter,
	circleArea,
	clearCart,
	createItem,
	getShoppingCart,
	addItemToCart,
	getNumItemsInCart,
	removeItemFromCart,
	updateCartItem,
	isCartEmpty,
	calculateTotalCartPrice,
};
