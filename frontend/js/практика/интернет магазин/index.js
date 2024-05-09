let activeTabId="cart";

let goodsInCart = []

const initialTab = getActiveTab();

initialTab.classList.add('active');


renderTubContentById(activeTabId); 

//---


const tabWithCounter = document.querySelector(
	'button[data-goods-count="0"]'
	);

const tabs = document.querySelectorAll('button.tab');
addClickListeners(tabs,clickHandler);


//---

function clickHandler(event){
    const activeTab = getActiveTab();
   
    activeTab.classList.remove('active');
    event.target.classList.add('active');
   
    activeTabId = event.target.dataset.tabId;
    removeActiveTabContent();
    renderTubContentById(activeTabId);
    

}
function getActiveTab(){
    return document.querySelector(
        `button[data-tab-id="${activeTabId}"]`
        );
}
function addInCartHandler(product) {
	return () =>{
		let hasProduct = false;
		let index = null;
		let count = 1;

		for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart  = goodsInCart[i];

			if (product.id === productInCart.id) {
				hasProduct = true;
				index = i;
				count = productInCart.count;
			}
		}

		if (hasProduct) {
            goodsInCart[index].count = count+1;
		}
		else {
			const productWithCount = product;
			productWithCount.count = count;

			goodsInCart.push(productWithCount);
		}
		let fullSize = 0;

        for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart  = goodsInCart[i];
			fullSize += productInCart.count;

		
		}

		tabWithCounter.dataset.goodsCount = fullSize;
};
}
	
function removeInCartHandler(productId) {
    return () => {
		const newGoodsInCart = [];

		for (let i = 0; i < goodsInCart.length; i++) {
			const product = goodsInCart[i]

			if (productId === product.id) {
				if (product.count > 1) {
					newGoodsInCart.push({
						id:product.id,
						name: product.name,
						price: product.price,
    					imgSrc: product.imgSrc,
						count: product.count-1,
					});
				}

				 updateCartItem(product.id,product.count);
			}
			else {
				newGoodsInCart.push(product);
			}
		}
		goodsInCart = newGoodsInCart;
		
		//--
		let fullSize = 0;
		for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart  = goodsInCart[i];
			fullSize += productInCart.count;

		
		}

		tabWithCounter.dataset.goodsCount = fullSize;
		
	
		
	};
}


function addClickListeners(elements,callback) {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];

		element.addEventListener('click',callback);
	}
}

function createProduct(product){
	return {
		id: product.id,
		name: product.name ? product.name : 'Имя неизвестно',
		price: product.price ? product.price : null,
		imgSrc: product.imgSrc ? product.imgSrc : 'Нет изображения',
	};
}



function renderTubContentById(tabId){
    const tabsContainer = document.querySelector('.tabs');
	let html = null;

	if (tabId === 'goods') {
		html = renderGoods();
		
	}
	else {
		html = renderCart();
		
		
	 }
	if (html !== null) {
		tabsContainer.after(html);
	 }
	
}

function removeActiveTabContent(){
	const activeContent=document.querySelector(
		`[data-active-tab-content='true']`
		);
	  activeContent.remove();
}

function renderGoods() {
	const div = document.createElement('div');
	div.dataset.activeTabContent = 'true';
	div.className = 'product-items';
	
	
	for (let i = 0; i < GOODS.length; i++) {
		const product = createProduct(GOODS[i]);
		// const product = createProduct();

		
		const price = product.price === null 
			? '<p>товар закончился</p>' 
			: `<p class="price">₽ ${product.price}</p>`;

		const productBlock = document.createElement('div');
	    productBlock.className = 'product-item';
		productBlock.innerHTML = `
			<img src=${product.imgSrc}>
			<div class="product-list">
			<h3>${product.name}</h3>
			${price}
			</div>
			
	    `;
		if (product.price !==null) {
			clikHandler = addInCartHandler(product);

			const button = document.createElement('button');
			button.className = 'button';
			button.textContent = 'В корзину';
			button.addEventListener('click', clikHandler);

			productBlock.querySelector('.product-list').append(button);
		}
		
		div.append(productBlock);

		
	}
	


	return div;
	


}
function renderCart() {
	const container = document.createElement('div');
	container.dataset.activeTabContent = 'true';
	container.className = 'cart-items'

	for (let i = 0; i < goodsInCart.length; i++) {
		const product = goodsInCart[i];

		const cartItem = document.createElement('div');
		cartItem.dataset.elementId = product.id;
		cartItem.className = 'cart-item';
		cartItem.innerHTML=`
			<div class="cart-item-title">${product.name}</div>
			<div class="cart-item-count">${product.count} штук.</div>
			<div class="cart-item-price">${product.price}</div>
		`;

		const clickHandler = removeInCartHandler(product.id)

		const button = document.createElement('button');
		button.className = 'cart-item-delete';
		button.textContent = 'x';
		button.addEventListener('click', clickHandler);
		
		cartItem.append(button);

	    container.append(cartItem);

	
	}
	return container;
	
}
function updateCartItem(id, count) {
	const cartItem = document.querySelector(`[data-element-id="${id}"]`);

	if (count > 1) {
		const countElement = cartItem.querySelector('.cart-item-count');
		countElement.textContent = `${count-1} шт.`;
	}
	else {
		cartItem.remove();
	}
	
	
}

