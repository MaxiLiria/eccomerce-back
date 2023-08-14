const mongoose = require('mongoose');

const Products = require('../models/products.model');

const arrayProducts = [
    {
      "name": "iPhone 13 Pro",
      "price": "773,32",
      "description": "The latest flagship smartphone from Apple, featuring advanced camera technology and powerful performance.",
      "category": "Electronics",
      "image": "https://img.pccomponentes.com/articles/57/578926/3736-apple-iphone-13-pro-128gb-grafito-libre-mejor-precio.jpg"
    },
    {
      "name": "Samsung Galaxy Z Fold 3",
      "price": "1909",
      "description": "A cutting-edge foldable smartphone that offers a large flexible display and multitasking capabilities.",
      "category": "Electronics",
      "image": "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1628095659/yk7nqmgy7ammr3inv2pa.png"
    },
    {
      "name": "PlayStation 5",
      "price": "549",
      "description": "Next-gen gaming console from Sony with stunning graphics and immersive gaming experiences.",
      "category": "Electronics",
      "image": "https://www.powerplanetonline.com/cdnassets/playstation_5_ps5_standard_002_ad_l.jpg"
    },
    {
      "name": "DJI Air 2S",
      "price": "799",
      "description": "A high-performance drone with advanced camera features for capturing breathtaking aerial shots.",
      "category": "Electronics",
      "image": "https://www.provideosevilla.com/wp-content/uploads/2021/04/dji-mavic-air2s-.jpg"
    },
    {
      "name": "MacBook Pro M1",
      "price": "1995",
      "description": "Apple's powerful laptop featuring the M1 chip for exceptional performance and battery life.",
      "category": "Electronics",
      "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_ES?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621711000"
    },
    {
      "name": "Samsung Odyssey G9",
      "price": "1152",
      "description": "A curved gaming monitor with ultra-wide QHD resolution and high refresh rates for a smooth gaming experience.",
      "category": "Electronics",
      "image": "https://cdn.idealo.com/folder/Product/201248/0/201248005/s11_produktbild_gross_4/samsung-odyssey-g9-c49g95tssr.jpg"
    },
    {
      "name": "Oculus Quest 2",
      "price": "550",
      "description": "A popular VR headset that offers wireless virtual reality experiences and a wide range of games and apps.",
      "category": "Electronics",
      "image": "https://img.pccomponentes.com/articles/33/335119/2814-oculus-quest-2-64gb-gafas-de-realidad-virtual-blancas-comprar.jpg"
    },
    {
      "name": "Sony WH-1000XM4",
      "price": "253,90",
      "description": "Premium wireless noise-canceling headphones with exceptional sound quality and long battery life.",
      "category": "Electronics",
      "image": "https://www.powerplanetonline.com/cdnassets/sony_wh-1000xm4_blanco_auriculares_inalambricos_001_l.jpg"
    },
    {
      "name": "Google Nest Hub (2nd Gen)",
      "price": "85",
      "description": "A smart display with Google Assistant integration, capable of controlling smart home devices and providing visual information.",
      "category": "Electronics",
      "image": "https://cdn.idealo.com/folder/Product/201186/9/201186931/s11_produktbild_gross/google-nest-hub-2nd-gen.jpg"
    },
    {
      "name": "NVIDIA GeForce RTX 3080",
      "price": "669,90",
      "description": "High-end graphics card designed for gaming and content creation, delivering exceptional graphics performance.",
      "category": "Electronics",
      "image": "https://img.pccomponentes.com/articles/41/412026/1662-asus-rog-strix-geforce-rtx-3080-ti-oc-edition-12gb-gddr6x-82a7178b-202b-4564-8d02-3cd5c5b554cd.jpg"
    },
    {
        "name": "Levi's 501 Original Fit Jeans",
        "price": "120",
        "description": "Classic and timeless jeans with a straight-leg fit, perfect for a versatile casual look.",
        "category": "Clothes",
        "image": "https://cdn.def-shop.com/pic530x705/levis-vaqueros-rectos-azul-911042__1.jpg"
      },
      {
        "name": "Adidas Originals Trefoil Hoodie",
        "price": "64,95",
        "description": "Iconic hoodie featuring the Adidas trefoil logo, offering a comfortable and sporty style.",
        "category": "Clothes",
        "image": "https://cdn.idealo.com/folder/Product/200975/1/200975154/s11_produktbild_gross/adidas-kids-unisex-originals-trefoil-hoodie.jpg"
      },
      {
        "name": "Lululemon Align Leggings",
        "price": "98",
        "description": "High-quality leggings known for their buttery-soft fabric and versatility for both athletic and leisure activities.",
        "category": "Clothes",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71Gs2-1mcOL._AC_UL600_SR600,600_.jpg"
      },
      {
        "name": "Zara Basic Trench Coat",
        "price": "69",
        "description": "Classic trench coat with a modern twist, suitable for adding a stylish layer to various outfits.",
        "category": "Clothes",
        "image": "https://media.karousell.com/media/photos/products/2022/3/20/zara_trench_coat_1647790061_4116cbf9_progressive.jpg"
      },
      {
        "name": "H&M Slim Fit Suit",
        "price": "149,95",
        "description": "Elegant slim-fit suit for formal occasions, offering a modern and tailored appearance.",
        "category": "Clothes",
        "image": "https://media.karousell.com/media/photos/products/2018/11/09/hm__suit_trousers_slim_fit__blue_marl_dark_blue_1541734742_a6de7c22.jpg"
      },
      {
        "name": "Urban Outfitters Graphic T-Shirt",
        "price": "34,95",
        "description": "Trendy graphic t-shirt with unique designs, perfect for expressing personal style.",
        "category": "Clothes",
        "image": "https://i.pinimg.com/564x/c1/d0/75/c1d075e291c0f71bf9a375e6d6f8e2fa.jpg"
      },
      {
        "name": "Victoria's Secret Lace Bralette",
        "price": "48",
        "description": "Comfortable and fashionable lace bralette, offering light support and a touch of femininity.",
        "category": "Clothes",
        "image": "https://es.victoriassecret.com/p/760x1013/tif/f0/91/f0916993197a4a7c9c89bd98c564d56e/1121594828P7_OF_F.jpg"
      },
      {
        "name": "Tommy Hilfiger Classic Polo Shirt",
        "price": "63",
        "description": "Timeless polo shirt with the iconic Tommy Hilfiger logo, suitable for a preppy and casual style.",
        "category": "Clothes",
        "image": "https://www.kamiceria.com/media/catalog/product/cache/77fa05ee1c24c380906545840523d8cf/k/e/ke-tommy-hilfiger-dm0dm16219_nero_bds_01.jpg"
      },
      {
        "name": "Forever 21 High-Waisted Jeans",
        "price": "59",
        "description": "Trendy high-waisted jeans that offer a flattering fit and are great for various casual outfits.",
        "category": "Clothes",
        "image": "https://i.pinimg.com/originals/ec/29/53/ec29533349d5ce8cb242d642c7bc566e.jpg"
      },
      {
        "name": "H&M Basic White T-Shirt",
        "price": "4,49",
        "description": "A classic white t-shirt that serves as a wardrobe staple, suitable for creating a variety of looks.",
        "category": "Clothes",
        "image": "https://static.independent.co.uk/2021/03/17/08/HM.jpeg"
      },
      {
        "name": "Nike Air Max 270",
        "price": "130",
        "description": "Popular sneakers known for their comfort and stylish design, suitable for both casual wear and light sports.",
        "category": "Shoes",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-zapatillas-P0j2DN.png"
      },
      {
        "name": "Adidas Ultraboost 21",
        "price": "123,95",
        "description": "High-performance running shoes with responsive cushioning and modern design.",
        "category": "Shoes",
        "image": "https://bikila.com/23653/adidas-ultraboost-21.jpg"
      },
      {
        "name": "Converse Chuck Taylor All Star",
        "price": "75",
        "description": "Iconic canvas sneakers that offer a timeless and versatile look for everyday wear.",
        "category": "Shoes",
        "image": "https://chemasport.es/26535-thickbox_default/deportivas-converse-chuck-taylor-all-star-lift-plataforma-blancas.jpg"
      },
      {
        "name": "Vans Old Skool",
        "price": "79,95",
        "description": "Classic skate shoes known for their signature side stripe and retro aesthetic.",
        "category": "Shoes",
        "image": "https://img.eobuwie.cloud/eob_product_512w_512h(5/5/d/c/55dc6f939ea937085ff598632a06ef12566285be_0000197850310_5__1.jpg,jpg)/zapatillas-de-tenis-vans-old-skool-vn000d3hy28-black-white.jpg"
      },
      {
        "name": "Puma Cali",
        "price": "54,95",
        "description": "Fashionable sneakers with a sporty yet sleek silhouette, suitable for street-style outfits.",
        "category": "Shoes",
        "image": "https://www.tradeinn.com/f/13735/137359135/puma-zapatillas-cali-sport-mix.jpg"
      },
      {
        "name": "New Balance 990v5",
        "price": "134,95",
        "description": "A popular choice for comfort and style, these sneakers offer a classic and casual look.",
        "category": "Shoes",
        "image": "https://img.mytheresa.com/1094/1236/90/jpeg/catalog/product/e6/P00608529.jpg"
      },
      {
        "name": "Reebok Classic Leather",
        "price": "90",
        "description": "Timeless sneakers with a leather upper, providing a retro vibe and everyday comfort.",
        "category": "Shoes",
        "image": "https://m.media-amazon.com/images/I/51-xCOGoq0L._AC_UY300_.jpg"
      },
      {
        "name": "Fila Disruptor II",
        "price": "60",
        "description": "Chunky sneakers that embrace the 'dad shoe' trend, making a bold statement in street fashion.",
        "category": "Shoes",
        "image": "https://cdn.idealo.com/folder/Product/6009/9/6009952/s11_produktbild_gross/fila-disruptor-ii.jpg"
      },
      {
        "name": "Under Armour HOVR Phantom 2",
        "price": "97,97",
        "description": "Running shoes with advanced cushioning technology for a responsive and comfortable stride.",
        "category": "Shoes",
        "image": "https://hips.hearstapps.com/hmg-prod/images/zapatilla-running-under-armour-hovr-phantom-2-1598878390.jpg"
      },
      {
        "name": "Dr. Martens 1460",
        "price": "199",
        "description": "Classic leather boots with a distinctive design, suitable for both casual and edgy styles.",
        "category": "Shoes",
        "image": "https://www.tradeinn.com/f/13722/137226812/dr-martens-botas-1460-bex-smooth.jpg"
      },
      {
        "name": "IKEA Hemnes Bed",
        "price": "399",
        "description": "Stylish and versatile bed frame with storage drawers, perfect for optimizing space in your bedroom.",
        "category": "Furnitures",
        "image": "https://www.ikea.com/es/en/images/products/hemnes-day-bed-frame-with-3-drawers-white__1078996_pe857423_s5.jpg"
      },
      {
        "name": "West Elm Mid-Century Sofa",
        "price": "799",
        "description": "Elegant mid-century modern sofa with clean lines and comfortable cushions, suitable for various living spaces.",
        "category": "Furnitures",
        "image": "https://p.turbosquid.com/ts-thumb/D5/JBzWII/QcvbAwUR/westelmmonroemidcenturysofa_01/jpg/1580070098/600x600/fit_q87/08ffe9eb3b64697ee7dc6952f718925a47efbbfa/westelmmonroemidcenturysofa_01.jpg"
      },
      {
        "name": "Wayfair L-Shaped Desk",
        "price": "119",
        "description": "Functional L-shaped desk with ample workspace, perfect for creating an organized and efficient home office.",
        "category": "Furnitures",
        "image": "https://assets.wfcdn.com/im/71687602/resize-h755-w755%5Ecompr-r85/8504/85043333/Enprise+54.3%27%27+Desk.jpg"
      },
      {
        "name": "Pottery Barn Farmhouse Dining Table",
        "price": "439",
        "description": "Classic farmhouse-style dining table with rustic charm, suitable for family gatherings and meals.",
        "category": "Furnitures",
        "image": "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202310/0034/rustic-farmhouse-dining-table-1-l.jpg"
      },
      {
        "name": "Crate & Barrel Bookshelf",
        "price": "359,95",
        "description": "Modern bookshelf with adjustable shelves, providing a stylish way to display books and decor.",
        "category": "Furnitures",
        "image": "https://cb.scene7.com/is/image/Crate/Beckett5HighShelfSSS20_1x1/$web_pdp_main_carousel_low$/200616114648/beckett-5-high-shelf-sable.jpg"
      },
      {
        "name": "Eames Lounge Chair and Ottoman",
        "price": "9700",
        "description": "Iconic mid-century lounge chair and ottoman known for their comfort and timeless design.",
        "category": "Furnitures",
        "image": "https://www.muebledesign.com/4414-large_default/james-lounge-chair-ottoman.jpg"
      },
      {
        "name": "Ashley Furniture Dresser",
        "price": "799",
        "description": "Spacious dresser with multiple drawers for storing clothes and accessories, adding functionality to your bedroom.",
        "category": "Furnitures",
        "image": "https://m.media-amazon.com/images/I/61v7feLn4GL._AC_UF894,1000_QL80_.jpg"
      },
      {
        "name": "CB2 Bar Stools",
        "price": "79",
        "description": "Sleek and modern bar stools with a minimalist design, perfect for kitchen islands or bar counters.",
        "category": "Furnitures",
        "image": "https://cb2.scene7.com/is/image/CB2/StrutBarstoolGroupGryFHS20_1x1/$web_pdp_main_carousel_sm$/191119112958/strut-grey-bar-stools.jpg"
      },
      {
        "name": "HomeGoods Accent Chair",
        "price": "199,95",
        "description": "Statement accent chair with unique patterns, ideal for adding a pop of color and style to any room.",
        "category": "Furnitures",
        "image": "https://i.pinimg.com/736x/6c/6e/0b/6c6e0b62a81fdf3e0cdfb1ff850936df.jpg"
      },
      {
        "name": "Room & Board Sectional Sofa",
        "price": "649",
        "description": "Modular sectional sofa that offers flexibility in configuration, providing comfortable seating for a modern living room.",
        "category": "Furnitures",
        "image": "https://i.pinimg.com/originals/14/18/2b/14182b5a73ef35dd266d3920a72ad0ed.jpg"
      },
      {
        "name": "Bose QuietComfort Earbuds",
        "price": "259,50",
        "description": "Wireless noise-canceling earbuds known for their premium sound quality and effective noise reduction.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/61cFlHsNj2L.jpg"
      },
      {
        "name": "Roomba Robot Vacuum",
        "price": "340",
        "description": "Smart robot vacuum that autonomously cleans your home, making daily chores easier.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/715j7iyVLXL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "name": "Yeti Rambler Tumbler",
        "price": "35",
        "description": "Durable stainless steel tumbler that keeps your drinks hot or cold for hours, perfect for on-the-go.",
        "category": "Others",
        "image": "https://momoarchery.com/5593-thickbox_default/vaso-yeti-rambler-20oz-591ml-tumbler-rescue-red.jpg"
      },
      {
        "name": "Fitbit Versa Smartwatch",
        "price": "223",
        "description": "Versatile smartwatch that tracks fitness activities, monitors health, and offers smart features.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/71dDZbfjkBL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "name": "Anker PowerCore Portable Charger",
        "price": "29,99",
        "description": "High-capacity portable charger that keeps your devices powered while on the move.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/51Ul3F0Wu5L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "name": "Instant Pot Multi-Cooker",
        "price": "219",
        "description": "Versatile kitchen appliance that combines multiple cooking functions, saving time and space.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/71WtwEvYDOS.jpg"
      },
      {
        "name": "Kindle Paperwhite",
        "price": "119",
        "description": "E-reader with a high-resolution display, providing a convenient way to read digital books and documents.",
        "category": "Others",
        "image": "https://www.powerplanetonline.com/cdnassets/amazon_kindle_paperwhite_-6_8gb_azul_001_l.jpg"
      },
      {
        "name": "Roku Streaming Stick+",
        "price": "73",
        "description": "Compact streaming device that turns your TV into a smart TV, offering access to various streaming services.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/718qFOvv8RL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "name": "Nespresso Vertuo Coffee Maker",
        "price": "109,90",
        "description": "Coffee maker that brews both espresso and regular coffee using Nespresso's unique capsules.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/71xXLEP3XwL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        "name": "Fujifilm Instax Mini 11",
        "price": "81,99",
        "description": "Instant camera that captures and prints photos in the classic Polaroid style, perfect for capturing memories.",
        "category": "Others",
        "image": "https://m.media-amazon.com/images/I/71t0oKFSZIL.jpg"
      }
  ]
  


mongoose.connect("mongodb+srv://root:root@cluster0.c5krolu.mongodb.net/eccomerce?retryWrites=true&w=majority")
.then(async () => {
    const allProducts = await Products.find();
    if(allProducts.length > 0){
        await Products.collection.drop();
        console.log("Products borradas");
    }
})
.catch((error) => console.log("error borrando products", error))
.then(async () => {
    const productMap = arrayProducts.map((product) => new Products(product));
    await Products.insertMany(productMap);
    console.log("Productos insertadas");
})
.catch((error) => console.log("error insertando productos", error))
.finally(() => mongoose.disconnect());