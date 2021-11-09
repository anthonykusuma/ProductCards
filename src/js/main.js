let inCart = 0;
let wishlist = 0;

// Wishlist
function addToWishlist(el) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function(e) {
          if (this.classList.contains('added') === true) {
            this.classList.remove('added');
            wishlist -= 1;
            showSnackBar(`Removed from wishlist.`);
            updateWishlist();
          } else {
            this.classList.add('added');
            wishlist += 1;
            showSnackBar(`Added to wishlist.`);
            updateWishlist();
          }

        e.preventDefault();
      });
    };
  }
addToWishlist(document.querySelectorAll('.add-wishlist'));

// Quickbuy action call
function openSizeSelection(el) {
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function(e) {
            this.style.display = "none";
            this.parentNode.querySelector('.size-selection').style.display = 'block';
          e.preventDefault();
        });
      };
}
openSizeSelection(document.getElementsByClassName('quickbuy'));

// Variant selector
function selectSize(el) {
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function(e) {
            const addToBag = this.parentNode.parentNode.querySelector('.add-to-bag');
                for (var i = 0; i < el.length; i++) {
                    if (this != el[i]) {
                        el[i].classList.remove('selected');
                    } else if(this.classList.contains('selected') === true) {
                        this.classList.remove('selected');
                        addToBag.classList.add('disabled');
                        addToBag.disabled = true;
                        addToBag.innerText = 'Select Size';
                    } else if(this.classList.contains('oos') === true) {
                        addToBag.classList.add('disabled');
                        addToBag.disabled = true;
                        addToBag.innerText = 'Out of Stock';
                    }
                    else {
                        this.classList.add('selected');
                        addToBag.innerText = 'Add to Bag';
                        addToBag.disabled = false;
                        addToBag.classList.remove('disabled');
                    }
                } 
          e.preventDefault();
        });
    };
}
selectSize(document.querySelectorAll('.size-list button'));

// Add to Bag
function addToBag(el) {
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function(e) {
            this.parentNode.style.display = "none";
            this.parentNode.parentNode.querySelector('.quickbuy').style.display = "block";
            showSnackBar(`Added to the cart.`);
            inCart += 1;
            updateCart();
            e.preventDefault();
        });
      };
}
addToBag(document.getElementsByClassName('add-to-bag'));

// Snackbar
function showSnackBar(str) {
    const el = document.querySelector('.snackbar');
    el.innerText = str;
    el.classList.add('show');
    setTimeout(function(){ el.classList.remove('show'); }, 2000);
}

// Update Qty
function updateWishlist() {
    document.querySelector('.wishlist-qty').innerText = wishlist;
}
function updateCart() {
    document.querySelector('.cart-qty').innerText = inCart;
}