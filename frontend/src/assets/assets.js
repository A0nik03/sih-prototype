import basket_icon from './basket_icon.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'
import head_video_1 from './head_video_1.mp4'


import dahi from './Dairy/dahi.jpg'
import ghee from './Dairy/ghee.png'
import milk from './Dairy/milk.jpg'
import paneer from './Dairy/paneer.jpg'



import veg_1 from './Vegetables/veg_1.jpg'
import veg_2 from './Vegetables/veg_2.jpg'
import veg_3 from './Vegetables/veg_3.jpg'
import veg_4 from './Vegetables/veg_4.jpg'
import veg_5 from './Vegetables/veg_5.jpg'
import veg_6 from './Vegetables/veg_6.jpg'
import veg_7 from './Vegetables/veg_7.jpg'
import veg_8 from './Vegetables/veg_8.jpg'
import veg_9 from './Vegetables/veg_9.jpg'
import veg_10 from './Vegetables/veg_10.jpg'
import veg_11 from './Vegetables/veg_11.jpg'
import veg_12 from './Vegetables/veg_12.jpg'
import veg_13 from './Vegetables/veg_13.jpg'
import veg_14 from './Vegetables/veg_14.jpg'
import veg_15 from './Vegetables/veg_15.jpg'
import veg_16 from './Vegetables/veg_16.jfif'
import veg_17 from './Vegetables/veg_17.jpg'
import veg_18 from './Vegetables/veg_18.jpg'

import brown_chana from './Cereals/brown-chana.jpg'
import green_moong_dal from './Cereals/green-moong-dal.jpg'
import chana from './Cereals/chana.jpg'
import lobia from './Cereals/lobia.jpg'
import masoor_dal from './Cereals/masoor-dal.jpg'
import red_kidney_beans from './Cereals/red-kidney-beans.jfif'
import tuar_dal from './Cereals/tuar-dal.jpeg'
import urad_dal from './Cereals/urad-dal.jpg'


import fruit_1 from './Fruits/fruit_1.jpg'
import fruit_2 from './Fruits/fruit_2.jpg'
import fruit_3 from './Fruits/fruit_3.jpg'
import fruit_4 from './Fruits/fruit_4.jpg'
import fruit_5 from './Fruits/fruit_5.jpg'
import fruit_6 from './Fruits/fruit_6.jpg'
import fruit_7 from './Fruits/fruit_7.jpg'
import fruit_8 from './Fruits/fruit_8.jpg'
import fruit_9 from './Fruits/fruit_9.jpg'
import fruit_10 from './Fruits/fruit_10.jpg'
import fruit_11 from './Fruits/fruit_11.jpg'
import fruit_12 from './Fruits/fruit_12.jpg'
import fruit_13 from './Fruits/fruit_13.jpg'
import fruit_14 from './Fruits/fruit_14.jpg'
import fruit_15 from './Fruits/fruit_15.jpg'
import fruit_16 from './Fruits/fruit_16.jpg'


import grain_1 from './Grains/grain_1.jpg'
import grain_2 from './Grains/grain_2.jpg'
import grain_3 from './Grains/grain_3.jpg'
import grain_4 from './Grains/grain_4.jpg'
import grain_5 from './Grains/grain_5.jpg'



import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    head_video_1
}

export const menu_list = [
    {
        menu_name: "Dairy",
        menu_image: menu_1
    },
    {
        menu_name: "Vegetables",
        menu_image: menu_2
    },
    {
        menu_name: "Cereals",
        menu_image: menu_3
    },
    {
        menu_name: "Fruits",
        menu_image: menu_4
    },
    {
        menu_name: "Grains",
        menu_image: menu_5
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Dahi",
        image: dahi,
        price: 50,
        quantity: 1000,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dairy Products"
    },
    {
        _id: "2",
        name: "Ghee",
        image: ghee,
        quantity: 500,
        price: 349,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dairy Products"
    }, {
        _id: "3",
        name: "Cow Milk",
        image: milk,
        price: 51,
        quantity: 1000,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dairy Products"
    }, {
        _id: "4",
        name: "Paneer",
        image: paneer,
        price: 450,
        quantity: 1000,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dairy Products"
    }, {
        _id: "5",
        name: "Onion",
        image: veg_1,
        price: 14,
        description: "A staple in many dishes, onions add a sharp, tangy flavor that enhances the taste of any meal.",
        category: "Vegetables"
    }, {
        _id: "6",
        name: "Potato",
        image: veg_2,
        price: 12,
        description: "Versatile and filling, potatoes are perfect for mashing, frying, or baking in your favorite recipes.",
        category: "Vegetables"
    }, {
        _id: "7",
        name: "Spinach",
        image: veg_3,
        price: 20,
        description: "Rich in iron and vitamins, spinach is a leafy green that boosts the nutritional value of any dish.",
        category: "Vegetables"
    }, {
        _id: "8",
        name: "Tomato",
        image: veg_4,
        price: 15,
        description: "Juicy and full of flavor, tomatoes are essential for salads, sauces, and a wide range of dishes.",
        category: "Vegetables"
    }, {
        _id: "9",
        name: "Capsicum",
        image: veg_5,
        price: 14,
        description: "Colorful and crunchy, capsicums add a sweet and tangy bite to stir-fries, salads, and more.",
        category: "Vegetables"
    }, {
        _id: "10",
        name: "Lemon",
        image: veg_6,
        price: 22,
        description: "Zesty and refreshing, lemons bring a burst of citrus flavor to drinks, marinades, and desserts.",
        category: "Vegetables"
    }, {
        _id: "11",
        name: "Peas",
        image: veg_7,
        price: 10,
        description: "Sweet and tender, peas are a great source of protein and fiber, perfect for soups, stews, and sides.",
        category: "Vegetables"
    }, {
        _id: "12",
        name: "Cauliflower",
        image: veg_8,
        price: 12,
        description: "Mild and versatile, cauliflower can be roasted, steamed, or even turned into low-carb rice.",
        category: "Vegetables"
    }, {
        _id: "13",
        name: "Cabbage",
        image: veg_9,
        price: 12,
        description: "Crisp and hearty, cabbage is perfect for coleslaw, soups, and stir-fries, adding a crunchy texture.",
        category: "Vegetables"
    }, {
        _id: "14",
        name: "Broccoli",
        image: veg_10,
        price: 18,
        description: "Packed with nutrients, broccoli is a healthy choice for steaming, roasting, or adding to casseroles.",
        category: "Vegetables"
    }, {
        _id: "15",
        name: "Beetroot",
        image: veg_11,
        price: 16,
        description: "Earthy and sweet, beetroot is great for salads, juices, and as a natural coloring agent.",
        category: "Vegetables"
    }, {
        _id: "16",
        name: "Bitter Melon",
        image: veg_12,
        price: 24,
        description: "While more decorative, tulip petals can be used to add a splash of color and flavor to salads.",
        category: "Vegetables"
    }, {
        _id: "17",
        name: "Turnip",
        image: veg_13,
        price: 14,
        description: "Crisp and refreshing, lettuce is a salad essential, adding a light and fresh crunch.",
        category: "Vegetables"
    }, {
        _id: "18",
        name: "Lettuce",
        image: veg_14,
        price: 12,
        description: "Sweet and crunchy, carrots are rich in beta-carotene, perfect for snacking, salads, and soups.",
        category: "Vegetables"
    }, {
        _id: "19",
        name: "Carrots",
        image: veg_15,
        price: 20,
        description: "Known for its meaty texture, jackfruit is a popular plant-based alternative in savory dishes.",
        category: "Vegetables"
    }, {
        _id: "20",
        name: "JackFruit",
        image: veg_16,
        price: 15,
        description: "Mild in flavor, bottle gourd is excellent for soups, stews, and curries, offering a light and healthy option.",
        category: "Vegetables"
    }, {
        _id: "21",
        name: "BottleGourd",
        image: veg_17,
        price: 14,
        description: "Rich and sweet, pumpkin is versatile, perfect for pies, soups, and roasting.",
        category: "Vegetables"
    }, {
        _id: "22",
        name: "Pumpkin",
        image: veg_18,
        price: 22,
        description: "Sweet and vibrant, bell peppers are ideal for adding color and flavor to any dish.",
        category: "Vegetables"
    },
    {
        _id: "25",
        name: "Brown Chana",
        image: brown_chana,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    },
    {
        _id: "26",
        name: "Chana",
        image: chana,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "27",
        name: "Green Moong Dal",
        image: green_moong_dal,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "28",
        name: "Lobia",
        image: lobia,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "29",
        name: "Masoor Dal",
        image: masoor_dal,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "30",
        name: "Rajma",
        image: red_kidney_beans,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "31",
        name: "Tuar Dal",
        image: tuar_dal,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    }, {
        _id: "32",
        name: "Urad Dal",
        image: urad_dal,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cereals"
    },
    {
        _id: "33",
        name: "Banana",
        image: fruit_1,
        price: 12,
        description: "Bananas are rich in potassium and fiber, making them a healthy and convenient snack.",
        category: "Fruits"
    }, {
        _id: "34",
        name: "Apples",
        image: fruit_2,
        price: 10,
        description: "Apples are packed with antioxidants and dietary fiber, perfect for a refreshing bite.",
        category: "Fruits"
    }, {
        _id: "35",
        name: "Pear",
        image: fruit_3,
        price: 14,
        description: "Pears offer a sweet, juicy flavor and are a great source of vitamin C and dietary fiber.",
        category: "Fruits"
    }, {
        _id: "36",
        name: "Papaya",
        image: fruit_4,
        price: 18,
        description: "Papayas are rich in enzymes and vitamins, excellent for digestion and boosting immunity.",
        category: "Fruits"
    }, {
        _id: "37",
        name: "Blue Berries",
        image: fruit_5,
        price: 22,
        description: "Blueberries are loaded with antioxidants and vitamins, perfect for adding to cereals or smoothies.",
        category: "Fruits"
    }, {
        _id: "38",
        name: "Peach",
        image: fruit_6,
        price: 15,
        description: "Peaches are juicy and sweet, providing a good source of vitamins A and C.",
        category: "Fruits"
    }, {
        _id: "39",
        name: "Litchi",
        image: fruit_7,
        price: 20,
        description: "Litchis are small, sweet, and aromatic, packed with vitamin C and antioxidants.",
        category: "Fruits"
    }, {
        _id: "40",
        name: "Grapes",
        image: fruit_8,
        price: 12,
        description: "Grapes are sweet and refreshing, perfect for snacking or adding to salads.",
        category: "Fruits"
    }, {
        _id: "41",
        name: "PineApple",
        image: fruit_9,
        price: 18,
        description: "Pineapples are tropical fruits that are rich in vitamins and enzymes, great for digestion.",
        category: "Fruits"
    }, {
        _id: "42",
        name: "Orange",
        image: fruit_10,
        price: 16,
        description: "Oranges are known for their high vitamin C content, perfect for boosting immunity.",
        category: "Fruits"
    }, {
        _id: "43",
        name: "Guava",
        image: fruit_11,
        price: 14,
        description: "Guavas are tropical fruits rich in dietary fiber and vitamin C, offering a sweet and tangy flavor.",
        category: "Fruits"
    }, {
        _id: "44",
        name: "Strawberry",
        image: fruit_12,
        price: 25,
        description: "Strawberries are vibrant and sweet, packed with antioxidants and perfect for desserts.",
        category: "Fruits"
    }, {
        _id: "45",
        name: "Custard Apple",
        image: fruit_13,
        price: 28,
        description: "Custard apples have a creamy texture and are rich in vitamins and minerals.",
        category: "Fruits"
    }, {
        _id: "46",
        name: "Avocado",
        image: fruit_14,
        price: 30,
        description: "Avocados are creamy and nutritious, rich in healthy fats and fiber.",
        category: "Fruits"
    }, {
        _id: "47",
        name: "Kiwi",
        image: fruit_15,
        price: 20,
        description: "Kiwis are tangy and packed with vitamin C, perfect for adding to fruit salads.",
        category: "Fruits"
    }, {
        _id: "48",
        name: "Mangoes",
        image: fruit_16,
        price: 35,
        description: "Mangoes are sweet and juicy, known as the king of fruits, packed with vitamins and fiber.",
        category: "Fruits"
    },
    {
        _id: "49",
        name: "Basmati Rice",
        image: grain_1,
        price: 20,
        description: "Basmati rice is known for its long grains and fragrant aroma, ideal for biryanis and pilafs.",
        category: "Grains"
    }, {
        _id: "50",
        name: "Brown Rice",
        image: grain_2,
        price: 18,
        description: "Brown rice retains its bran and germ, providing more fiber and nutrients compared to white rice.",
        category: "Grains"
    }, {
        _id: "51",
        name: "Wheat",
        image: grain_3,
        price: 15,
        description: "Wheat is a versatile grain used to make bread, pasta, and a variety of other baked goods.",
        category: "Grains"
    }, {
        _id: "52",
        name: "Oats",
        image: grain_4,
        price: 17,
        description: "Oats are a great source of soluble fiber, perfect for breakfast or as an ingredient in healthy recipes.",
        category: "Grains"
    }, {
        _id: "53",
        name: "Barley",
        image: grain_5,
        price: 16,
        description: "Barley is a nutritious grain, rich in fiber, and great for soups, stews, and salads.",
        category: "Grains"
    }
]
