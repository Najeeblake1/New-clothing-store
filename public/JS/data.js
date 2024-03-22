const products = [
    {
        id: 1,
        title: "stick",
        price: 20.00,
        stock: 2,
        picurl: "https://5.imimg.com/data5/UL/CU/DW/SELLER-92216638/stick.png",
        desc: "A stick is a slender, elongated piece of wood or other material, often found in nature or crafted for various purposes. It serves as a versatile tool, used for support, stirring, playing, or as a basic tool in a variety of activities."
    },
    {
        id: 2,
        title: "bucket",
        price: 60.00,
        stock: 20,
        picurl: "https://pluspng.com/img-png/bucket-png-plastic-red-bucket-png-image-930.png",
        desc: "A bucket is a sturdy, open-top container usually made of plastic or metal, designed with a handle for easy carrying. It is commonly used for transporting liquids, collecting items, or various household and outdoor tasks."
    },
    {
        id: 3,
        title: "can",
        price: 3.00,
        stock: 59,
        picurl: "https://images2.pics4learning.com/catalog/c/coke.jpg",
        desc: "A tin can is a cylindrical container made of thin metal, typically steel, often used for preserving and packaging food items. Its airtight seal ensures product freshness and durability."
    },
    {
        id: 4,
        title: "can",
        price: 3.00,
        stock: 59,
        picurl: "https://images2.pics4learning.com/catalog/c/coke.jpg",
        desc: "A tin can is a cylindrical container made of thin metal, typically steel, often used for preserving and packaging food items. Its airtight seal ensures product freshness and durability."
    },
];

module.exports=products;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }