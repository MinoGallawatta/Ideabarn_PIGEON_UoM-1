import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaSms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";

function Profile() {
  return (
    <React.Fragment>
      <h4>Welcome, John Doe!</h4>
      <Card className="mt-4">
        <CardHeader title="About" />
        <CardContent>
          <div>
            <TiUser />
            John Doe
          </div>
          <div>
            {" "}
            <AiFillPhone />
            0716182950
          </div>
          <div>
            {" "}
            <AiOutlineMail /> johndoe@gmail.com
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader title="Your Plan" />
        <CardContent>
          <h3 className="text-warning">100</h3>
          <div>Emails remaining in the plan</div>
          <h3 className="text-warning">50</h3>
          <div>SMS remaining in the plan</div>
          <Button
            component={Link}
            to={"/Pricing"}
            variant="contained"
            color="primary"
          >
            Buy More
          </Button>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader title="People" />
        <CardContent>
          <div>
            <BsFillPersonFill /> Contacts : 150{" "}
          </div>
          <div>
            <AiOutlineMail /> Total emails: 12{" "}
          </div>
          <div>
            <AiFillPhone />
            Mobile Numbers: 54
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader title="Recent Campaigns" />
        <CardContent>
          <div>
            {" "}
            Christmas wish for all employees : <FaSms />{" "}
          </div>
          <div>
            New Year wish for customers : <MdEmail />{" "}
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default Profile;
