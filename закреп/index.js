let activeTabId = 'goods';

let goodsInCart =[];

const initialTab = getActiveTab();

initialTab.classList.add('active');

renderTubContentById(activeTabId)

//---------

const tabWithCounter = document.querySelector(
    'button[data-goods-count = "0"]'
)
const tabs = document.querySelectorAll('button.tab');
console.log(tabs)
addClickListeners(tabs,clickHandler);

//-----

function clickHandler(event){
    const activeTab = getActiveTab();

    activeTab.classList.remove('active');
    event.target.classList.add('active');

    activeTabId = event.target.dataset.tabId;

}

function getActiveTab() {
    return document.querySelector(
        `button[data-tab-id='${activeTabId}']`
    )
}

function renderTubContentById(tabId){
    const tabsContainer = document.querySelector('.tabs');
    let html = null;

    switch(tabId) {
        case 'goods':
            html = renderGoods();
            break;
        default:
            html = renderCart();
            break;
    }
    if (html !== null){
        tabsContainer.after(html);
    }
}

function addClickListeners(elements,callback) {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];

		element.addEventListener('click',callback);
	}
}


function createProduct(product) {
    return {
        id: product.id,
        name: product.name ? product.name : 'Имя неизвестно',
        price:product.price ? product.price : null,
        imgSrc: product.imgSrc ? product.imgSrc : 'No picture',

    };
}

function addInCartHandler(product) {

}

function renderGoods() {
    const div = document.createElement('div');
    div.dataset.activeTabContent = 'true';
    div.className = 'product-items';

    
    for (let i = 0; i < GOODS.length; i++) {
        const product = createProduct(GOODS[i]);
   


        const price = product.price === null
            ? '<p>товар закончился</p>'
            : `<p class ='price'>₽ ${product.price}</p>`;
        
        const productBlock = document.createElement('div');
        productBlock.className = 'product-item';
        productBlock.innerHTML = `
            <imd src=${product.imgSrc}>
            <div class='product-list'
            <h3>${product.name}</h3>
            ${price}
            </div>

        `;
        if (product.price !== null) {
            clikHandler = addInCartHandler(product);

            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = 'В корзину';
            button.addEventListener('click',clikHandler);

            productBlock.querySelector('.product-list').append(button);
        }

        div.append(productBlock);
    
    }
    return div;
}