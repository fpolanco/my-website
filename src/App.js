
import './App.css';
import './App.scss';

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

// styles
import { Alert } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

// import Modal from "./Modal";

// import ModalBody from "./ModalBody";
// import ModalHeader from "./ModalHeader";
// import ModalFooter from "./ModalFooter";

// export { Modal };
//ModalBody, ModalHeader, ModalFooter };
 //import Navbar from "./Navbar";
// import NavbarBrand from "./NavbarBrand";
// import NavbarToggler from "./NavbarToggler";

// export { Navbar, NavbarBrand, NavbarToggler };



function App() {
  return (
    <div className="App">
export default function BasicCardExample() {
  //return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
 // );
}
    </div>
  );
}

export default App;
