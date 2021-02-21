import React from "react";
import Navbar from "../components/UIComponents/navbar/Navbar";
import Footer from "../components/UIComponents/footer/Footer";
import { Container } from "@material-ui/core";


const LandingLayout = (ViewComponent) => {

    return class extends React.Component {
        render() {
            return (
                <>
                    {/* <Import the nav bar> */}
                    <Navbar auth={true}/>
                    <Container className="py-5">
                        <ViewComponent />
                    </Container>
                    {/* <Import the Footer /> */}
                    <Footer />
                </>
            );
        }
    };
};

export default LandingLayout;
