Proshop DJANGO-REACT ecommerce applicarion

complete products and product_details page with backend using django-cors-headers and axios `version 0.5`

Done: (cart)

-   complete redux to Add To Cart (save to local storage so user can go back and continue pervious purching)
-   complete redux to Remove from Cart (save to local storage so user can go back and continue pervious purching)

The backend ports are

FontEnd:

    <Route path="/" component={HomeScreen} exact />
    <Route path="/product/:id" component={ProductScreen} />
    <Route path="/cart/:id?" component={CartScreen} />

<!--
| Method | Route            |
| ------ | ---------------- |
| GET    | /api/products    |
| GET    | /api/products/25 | -->

<!--
| POST   | /api/products/create    |
| PUT    | /api/products/update/25 |
| DELETE | /api/products/delete/25 | -->

<br> <br>

<!-- [database dyagram link:](https://drawsql.app/monad-wizard/diagrams/ecommerce-proshop)

![image](https://drive.google.com/uc?export=view&id=1EWnKfyhlqU75s_IBe5_zEQZlNv_cwIpC) -->
