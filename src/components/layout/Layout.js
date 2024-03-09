// import React, { useContext } from "react";

// import Navigation from "./Navigation";
// import Footer from "./Footer";
// import { ContextData } from "../../App_03";

// function Layout({children}){
//     const {isLogged, setIsLogged} = useContext(ContextData);
    
//     return(
//         <div>
//             <Navigation></Navigation>
//             {children}
//             <Footer></Footer>
//         </div>
//     )
// }
// export default Layout;

import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({children, ...props}){

    const {isLogged, setIsLogged} = props;

    return(
        <div>
            <Navigation
            isLogged={isLogged}
            handlesetIsLogged={setIsLogged}
            ></Navigation>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default Layout;