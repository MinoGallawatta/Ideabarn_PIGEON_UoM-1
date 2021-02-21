import React from "react";
import Navbar from "../components/UIComponents/navbar/Navbar";



const AuthLayout = (ViewComponent) => {

    return class extends React.Component {
        render() {
            return (
                <>
                    <Navbar />
                    <ViewComponent />
                </>
            );
        }
    };
};

export default AuthLayout;
