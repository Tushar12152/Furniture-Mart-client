import { useContext } from "react";
import { AuthContext } from "../Peovider/AuthProvider";

const UseAuth = () => {
 
    const result = useContext(AuthContext)

    return result;
};

export default UseAuth;