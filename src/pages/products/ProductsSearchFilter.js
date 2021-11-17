import React from "react";
import "./products.scss";
import { FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function ProductsSearchFilter(){
  return (
    <div
      id=""
      className=" text-primary d-flex align-items-center"
    >
          <Dropdown className="text-primary  me-3 d-none d-md-inline">
            <Dropdown.Toggle
              className="text-primary py-0"
              id="dropdown-basic"
              variant="default"
            >
              Products
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <LinkContainer to="/products">
                <Dropdown.Item eventKey="1">All</Dropdown.Item>
              </LinkContainer>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="d-none d-md-inline">
      <Search />
      </span>

    </div>
  );
}




export const Search = () =>{
  return (
    <>
    
  <InputGroup className="d-flex search">
        
        <FormControl id="search" placeholder="Search...." type="search" />
        <InputGroup.Text className="px-2"><span className ="ms-2"><img
                      src="/images/search-interface-symbol.png"
                      alt=""
                      style={{ width: "22px" }}
                    /></span></InputGroup.Text>
      </InputGroup>
      

      </>
  )
}


// <Dropdown className="mx-3 text-primary">
//   <Dropdown.Toggle
//     id="dropdown-basic"
//     variant="default"
//     className="text-primary"
//   >
//     Filter
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//     <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
