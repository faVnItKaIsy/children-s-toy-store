/**/window.onload = function () {
    let box=document.getElementsByClassName('cardOrder');
    let btn=document.getElementById('buttonPagination');
    for (let i=10; i<box.length; i++) {
        box[i].style.display = "none";
    }

    let countD = 10;

    
    btn.onclick = function() {
       let box=document.getElementsByClassName('cardOrder');
        countD += 10;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            } 
        }
      

    }
}


function sortAscending() {
    let cardOrderPrice = document.getElementsByClassName('cardOrder');
    let arr = [];
    for (let i = 0; i < cardOrderPrice.length; ++i) {
        arr.push(cardOrderPrice[i]);
    }
    arr.sort(function(a, b) {
        return a.dataset.price - b.dataset.price;
    });
    
    let cardOrderAll = document.getElementsByClassName("cardOrderAll")[0];
    arr.forEach(function(el) {
    cardOrderAll.appendChild(el);
        /*bodyd.after(el);*/   
    });
}

function sortDexcending() {
    let cardOrderPrice2 = document.getElementsByClassName('cardOrder');
    let arr = [];
    for (let i = 0; i < cardOrderPrice2.length; ++i) {
        arr.push(cardOrderPrice2[i]);
    }
    arr.sort(function(a, b) {
        return b.dataset.price - a.dataset.price;
    });
    
    let cardOrderAll = document.getElementsByClassName("cardOrderAll")[0];
    arr.forEach(function(el) {
    cardOrderAll.appendChild(el);
      
    });
}

let addToBasket = document.querySelector(".addToBasket");
let added = document.querySelector(".added");
function addToBasketButton(){
    addToBasket.style.display = "none";
    added.style.display = "block";
}

function addedButton(){
    addToBasket.style.display = "block";
    added.style.display = "none";
}












/*let a = new Array;
let [] = dataset.price;

let sortAscending = document.querySelector('#sortAscending');
let sortDexcending = document.querySelector('#sortDexcending');

sortAscending.onclick = function() {
    console.log(a);*/
/*let price = parseInt(book.getAttribute('data-book'));
const nums = [3, 4, 0]
const compareFn = (a, b) => a - b

nums.sort(compareFn);
console.log(nums);
*/
/*
          if ((minPrice === '' || price >= minPrice) && (maxPrice === '' || price <= maxPrice)) {
              book.style.display='block';
          } else {
              book.style.display = 'none';
          }
}*/




/*
document.querySelector('#sortAscending').onclick = function () {

    var list = document.getElementsByClassName('cardOrderAll');
  
    var items = list.childNodes;
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
  
    itemsArr.sort(function(a, b) {
      return parseFloat(a.dataset.price) == parseFloat(b.dataset.price) ?
        0 :
        (parseFloat(a.dataset.price) > parseFloat(b.dataset.price) ? 1 : -1);
    });
  
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }
  */
  /*document.getElementById('ortAscending').addEventListener('click', callback);
*/
/*
document.querySelector('#sortAscending').addEventListener("click", () => {
    const elements = document.querySelectorAll('.cardOrder');
    const sorted = [...elements].sort((a, b) => {
      const priceElA = a.querySelector("#price");
      const priceElB = b.querySelector("#price");
      const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
      return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".results-container");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
  });*/

/*
  function sortList() {
    /*var list, i, switching, b, shouldSwitch;
    let list = document.getElementsByClassName("cardOrderAll");
    let switching = true;
    /* Сделайте петлю, которая будет продолжаться до тех пор, пока
    никакого переключения не было сделано: 
    while (switching) {
      // начните с того, что скажите: никакого переключения не происходит:
      switching = false;
      let b = document.getElementsByClassName("price");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // начните с того, что не должно быть никакого переключения:
        shouldSwitch = false;
        /* проверьте, должен ли следующий элемент
        переключение с текущего элемента: */
        
       /* if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
          /* если следующий элемент численно
          ниже текущего элемента, отметьте как переключатель
          и разорвать петлю: */
       /*   shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* Если переключатель был отмечен, сделайте переключатель
        и отметьте переключатель как сделано: */
     /*   b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }*/





    /*
    function s() { 
        var s = 
            document.querySelectorAll("[data-price]"); 
        var sArray = Array.from(s); 
        let sorted = sArray.sort(comparator); 
        sorted.forEach(e => 
            document.querySelector(".cardOrderAll"). 
                appendChild(e)); 
    } */
/*

    let sortAscending=document.getElementById('sortAscending');
    sortAscending.onclick = function() {
        let bodygf = document.querySelector(".bodyd");
let listElms = document.getElementsByClassName("list");
let sortedElms = Array.prototype.slice.call(listElms).sort(function(a, b) { 
    return a.getAttribute(data-prices) > b.getAttribute(data-prices)
});

for (let i = 0; i < sortedElms.length; i++) {
   bodygf.appendChild(sortedElms[i]);
   console.log(sortedElms[i]);
   console.log(data-prices);
   console.log(dataset.prices);
}
    }*/
    

/*
    console.log("f");      
let bodygf = document.querySelector(".bodyd");
let listElms = document.getElementsByClassName("list");
let sortedElms = Array.prototype.slice.call(listElms).sort(function(a, b) { 
    return a.dataset.prices > b.dataset.prices
});
function s() {     
for (let i = 0; i < sortedElms.length; i++) {
    /*textContent.bodygf(sortedElms[i]);
    console.log(sortedElms[i]);
}
               
 }*/


 /*    document.getElementById('ascending').addEventListener('click', () => {
    [...document.querySelectorAll('p[data-sort]')]
        .sort((a, b) => a.dataset.prices - b.dataset.prices)
        .forEach(e => e.closest('.products-text').append(e));
});
    */         




/*
function s() {
    let classname = document.getElementsByClassName('list');
    let divs = [];
    for (let i = 0; i < classname.length; ++i) {
        divs.push(classname[i]);
    }
    divs.sort(function(a, b) {
        return a.dataset.prices.localeCompare(b.dataset.prices);
    });
    
    let br = document.getElementsByTagName("br")[0];
    let bodyd = document.getElementsByClassName("bodyd")[0];
    divs.forEach(function(el) {
        bodyd.appendChild(el);
        bodyd.after(el);   
    });
}
 text.after(el, bodyd);
      ol.after('after'); // вставить строку "after" после <ol>
        console.log(el, br)*/
       /*document.body.after(el, bodyd);
        console.log(el, br)*/

/*
    function comparator(a, b) { 
        if (a.dataset.prices < b.dataset.prices) 
            return -1; 
        if (a.dataset.prices > b.dataset.prices) 
            return 1; 
        return 0; 
    } 
    let bodyd = document.getElementsByClassName("bodyd")[0];
    function s() { 
        var indexes = document.querySelectorAll("[data-prices]"); 
        var indexesArray = Array.from(indexes); 
        let sorted = indexesArray.sort(comparator); 
        sorted.forEach(e => 
        bodyd.appendChild(e));
           /* document.querySelector("#containerCardOrder").appendChild(e)); 
            console.log(e);*/
 /*   } 
*/