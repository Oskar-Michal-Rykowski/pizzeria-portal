import { select, templates, classNames } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
    thisProduct.getElements();
    thisProduct.initAccordion();
    thisProduct.initOrderForm();
    thisProduct.initAmountWidget();
    thisProduct.processOrder();

    ////console.log('new Product:', thisProduct);
  }

  renderInMenu() {
    const thisProduct = this;

    // generate HTML based on template
    const generatedHTML = templates.menuProduct(thisProduct.data);
    //create element using utils.createElementFromHTML
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    //find menu container
    const menuContainer = document.querySelector(select.containerOf.menu);
    //add element to menu
    menuContainer.appendChild(thisProduct.element);
  }

  getElements() {
    const thisProduct = this;

    thisProduct.dom = {};

    thisProduct.dom.accordionTrigger = thisProduct.element.querySelector(
      select.menuProduct.clickable
    );
    thisProduct.dom.form = thisProduct.element.querySelector(
      select.menuProduct.form
    );
    ////console.log('thisProduct.dom.form', thisProduct.dom.form);
    thisProduct.dom.formInputs = thisProduct.dom.form.querySelectorAll(
      select.all.formInputs
    );
    ////console.log('thisProduct.dom.formInputs', thisProduct.dom.formInputs);
    thisProduct.dom.cartButton = thisProduct.element.querySelector(
      select.menuProduct.cartButton
    );
    thisProduct.dom.priceElem = thisProduct.element.querySelector(
      select.menuProduct.priceElem
    );

    thisProduct.dom.imageWrapper = thisProduct.element.querySelector(
      select.menuProduct.imageWrapper
    );

    thisProduct.dom.amountWidgetElem = thisProduct.element.querySelector(
      select.menuProduct.amountWidget
    );
  }

  initAccordion() {
    const thisProduct = this;
    /* find the clickable trigger (the element that should react to clicking) */

    /* START: add event listener to clickable trigger on event click */
    thisProduct.dom.accordionTrigger.addEventListener(
      'click',
      function (event) {
        /* prevent default action for event */
        event.preventDefault();
        /* find active product (product that has active class) */
        const activeProduct = document.querySelector(
          select.all.menuProductsActive
        );
        ////console.log('activeProduct', activeProduct);
        /* if there is active product and it's not thisProduct.element, remove class active from it */
        if (activeProduct && activeProduct != thisProduct.element) {
          activeProduct.classList.remove(classNames.menuProduct.wrapperActive);
        }
        /* toggle active class on thisProduct.element */
        thisProduct.element.classList.toggle(
          classNames.menuProduct.wrapperActive
        );
      }
    );
  }

  initOrderForm() {
    const thisProduct = this;
    ////console.log('initOrderForm');

    // thisProduct.dom.form.addEventListener('submit', function (event) {
    //   event.preventDefault();
    //   thisProduct.processOrder();
    //   ////console.log('Form Event Lintener added');
    // });

    for (let input of thisProduct.dom.formInputs) {
      input.addEventListener('change', function () {
        thisProduct.processOrder();
        ////console.log('Process after change in form');
      });
    }

    thisProduct.dom.cartButton.addEventListener('click', function (event) {
      event.preventDefault();
      thisProduct.processOrder();
      ////console.log('Process after click');
      thisProduct.addToCart();
    });
  }

  initAmountWidget() {
    const thisProduct = this;

    thisProduct.amountWidget = new AmountWidget(
      thisProduct.dom.amountWidgetElem
    );
    thisProduct.dom.amountWidgetElem.addEventListener('updated', function () {
      thisProduct.processOrder();
    });
  }

  processOrder() {
    const thisProduct = this;
    //console.log('processOrder');
    //What options has been choosen?
    const formData = utils.serializeFormToObject(thisProduct.dom.form);
    //console.log('formData', formData);

    // Default price of the product with default options
    let price = thisProduct.data.price;

    // for every category (param)...
    for (let paramId in thisProduct.data.params) {
      // determine param value, e.g. paramId = 'toppings', param = { label: 'Toppings', type: 'checkboxes'... }
      const param = thisProduct.data.params[paramId];
      //console.log(paramId, param);

      // for every option in this category
      for (let optionId in param.options) {
        // determine option value, e.g. optionId = 'olives', option = { label: 'Olives', price: 2, default: true }
        const option = param.options[optionId];
        //console.log(optionId, option);
        let optionSelected =
          formData[paramId] && formData[paramId].includes(optionId);
        // check if there is param with a name of paramId in formData and if it includes optionId
        let optionImg = thisProduct.dom.imageWrapper.querySelector(
          '.' + paramId + '-' + optionId
        );

        if (optionImg) {
          if (optionSelected)
            optionImg.classList.add(classNames.menuProduct.imageVisible);
          else {
            optionImg.classList.remove(classNames.menuProduct.imageVisible);
          }
        }
        if (optionSelected && !option.default) {
          price += option.price;
        }

        if (!optionSelected && option.default) {
          price -= option.price;
        }
      }
    } // multiply price by amount
    thisProduct.priceSingle = price;
    price *= thisProduct.amountWidget.value;

    //Save price for Cart

    // update calculated price in the HTML
    thisProduct.dom.priceElem.innerHTML = price;
  }

  addToCart() {
    const thisProduct = this;

    const event = new CustomEvent('add-to-cart', {
      bubbles: true,
      detail: {
        product: thisProduct.prepareCartProduct(),
      },
    });

    thisProduct.element.dispatchEvent(event);
  }

  prepareCartProduct() {
    const thisProduct = this;
    const productSummary = {
      id: thisProduct.id,
      name: thisProduct.data.name,
      amount: thisProduct.amountWidget.value,
      priceSingle: thisProduct.priceSingle,
      price: thisProduct.priceSingle * thisProduct.amountWidget.value,
      params: thisProduct.prepareCartProductParams(),
    };

    return productSummary;
  }

  prepareCartProductParams() {
    const thisProduct = this;
    console.log('prepareCartProductParams');
    const formData = utils.serializeFormToObject(thisProduct.dom.form);

    const params = {};

    for (let paramId in thisProduct.data.params) {
      const param = thisProduct.data.params[paramId];

      params[paramId] = {
        label: param.label,
        options: {},
      };

      for (let optionId in param.options) {
        const option = param.options[optionId];
        console.log(optionId, option);
        let optionSelected =
          formData[paramId] && formData[paramId].includes(optionId);

        if (optionSelected) {
          params[paramId].options[optionId] = option.label;
        }
      }
    }
    return params;
  }
}

export default Product;
