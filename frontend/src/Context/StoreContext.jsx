import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000";
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userId, setUserId] = useState("");
    const [farmers_list, setFarmersList] = useState([]);
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    const fetchUserRole = async (userId) => {
        try {
            const response = await axios.get(`${url}/api/user/role`, {
                params: { userId },
            });
            console.log("Full Response Data:", response.data);
            console.log("Fetched UserRole:", response.data.role);
            setUserRole(response.data.role);
        } catch (error) {
            console.error("Error fetching user role:", error.message);
        }
    };

    const fetchFarmersList = async () => {
        try {
            const response = await axios.get(url + "/api/admins");
            console.log("Server Response Data:", response.data);
            setFarmersList(response.data || []);
        } catch (error) {
            console.error("Error fetching farmers list:", error.message);
        }
    };
    

    useEffect(() => {
        const loadData = async () => {
            await fetchFoodList();
            await fetchFarmersList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                const decoded = jwtDecode(storedToken);
                console.log(decoded.id);
                setUserId(decoded.id);
                await loadCartData(storedToken);
                await fetchUserRole(decoded.id);
            }
        };

        loadData();
    }, []);


    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        userRole,
        userId,
        location,
        farmers_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
