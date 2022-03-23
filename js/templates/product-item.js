export const item = (product) => {

  return `
    <li class="item swiper-slide">

      
  <div class="product__block js_product glass glass-m" id="${product.id}">

  <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="policy__btn btn--first"><span>details</span>             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve">
   <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
     345.606,368.713 476.213,238.106 "/>
   </svg>
  </a>

  <button class="policy__btn js_add-to-cart"><span>buy</span>             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" xml:space="preserve">
<polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
 345.606,368.713 476.213,238.106 "/>
</svg>
</button>
    </div>
      </div>

 
    
</div>

  </li>
    `
}


