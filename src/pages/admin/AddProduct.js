import React, { useState, useEffect, useRef } from "react";
import "./admin.scss";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { adminAddProductAction } from "../../actions/AdminProductsActions";
import {
  getImageAction,
  postImageAction,
} from "../../actions/AdminImageAction";
import { adminUploadFile, adminGetFile } from "../../AxiosCall.js";

function AddProduct() {
  // states used in redenring/manipulating component
  const [validated, setValidated] = useState(false);

  // states strictly for input field
  const [category, setCategory] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  // const [imageDataURL, setImageDataURL] = useState([]);
  const [features, setFeatures] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");

  // const addedProduct = useSelector((state) => state.addedProduct);
  console.log(varieties);
  // const { success } = addedProduct;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
    } else {
      setValidated(true);
      dispatch(
        adminAddProductAction({
          category,
          animal,
          imageUrl,
          features,
          varieties,
          name,
          description,
          brand,
        })
      );
    }
  };

  // const handleImage = (file) => {
  //   if (file && file[0]) {
  //     setImageUrl((prev) => [
  //       ...prev,
  //       {
  //         file: file[0],
  //         url: URL.createObjectURL(file[0]),
  //         name: file[0]?.name,
  //       },
  //     ]);
  //   }
  // };

  return (
    <div id="addProducts" className="">
      <Container className="py-3 w-sm-75 w-md-100">
        <Form
          onSubmit={handleSubmit}
          noValidate
          validated={validated}
          className="mt-3"
        >
          <p>Product Information</p>
          <Row className="my-4">
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="productName"
                label="Product Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="product name"
                />
              </FloatingLabel>{" "}
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="productBrand"
                label="Product Brand"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="product brand"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="my-4">
            <p>Category</p>

            <Col xs={12} md={6}>
              {animal.map((value, id) => (
                <Row key={"animalCategory" + id} className="w-100">
                  <Col xs={10}>
                    <FloatingLabel controlId="animalCategory" className="mb-3">
                      <Form.Select
                        required
                        value={value}
                        onChange={(e) => {
                          setAnimal((prev) => {
                            prev[id] = e.target.value;
                            return [...prev];
                          });
                        }}
                      >
                        <option value="" disabled>
                          Select Animal Category
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={2}>
                    <Button
                      type="button"
                      onClick={() =>
                        setAnimal((prev) => {
                          return [...prev.filter((pre, i) => i !== id)];
                        })
                      }
                    >
                      {" "}
                      Delete
                    </Button>
                  </Col>
                </Row>
              ))}

              <FloatingLabel controlId="animalCategory" className="mb-3">
                <Form.Select
                  value=""
                  onChange={(e) =>
                    setAnimal((prev) => [...prev, e.target.value])
                  }
                >
                  <option value="" disabled>
                    Select Animal Category
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col xs={12} md={6}>
              {category.map((value, id) => (
                <Row key={"productCategory" + id} className="w-100">
                  <Col xs={10}>
                    <FloatingLabel controlId="productCategory" className="mb-3">
                      <Form.Select
                        required
                        value={value}
                        onChange={(e) => {
                          setCategory((prev) => {
                            prev[id] = e.target.value;
                            return [...prev];
                          });
                        }}
                      >
                        <option value="" disabled>
                          Select Product Category
                        </option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={2}>
                    <Button
                      type="button"
                      onClick={() =>
                        setCategory((prev) => {
                          return [...prev.filter((pre, i) => i !== id)];
                        })
                      }
                    >
                      {" "}
                      Delete
                    </Button>
                  </Col>
                </Row>
              ))}

              <FloatingLabel controlId="productCategory" className="mb-3">
                <Form.Select
                  value=""
                  onChange={(e) =>
                    setCategory((prev) => [...prev, e.target.value])
                  }
                >
                  <option value="" disabled>
                    Select Product Category
                  </option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="my-4">
            <p>Product Description</p>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="productDescription"
                className="mb-3"
                label="Product Description"
              >
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  required
                  value={description}
                  placeholder="Product Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="my-4">
            <p>Product Features</p>
            {features.map((value, id) => (
              <Row key={id + "feat"}>
                <Col xs={4}>
                  <FloatingLabel
                    controlId="productFeatures"
                    label="Feature Key"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      // value=""
                      onChange={(e) =>
                        setFeatures((prev) => {
                          prev[id] = { ...prev[id], key: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product features"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel
                    controlId="productFeatures"
                    label="Feature Value"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      // value=""
                      onChange={(e) =>
                        setFeatures((prev) => {
                          prev[id] = { ...prev[id], value: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product features"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={2}>
                  <Button
                    type="button"
                    onClick={() =>
                      setFeatures((prev) => {
                        return [...prev.filter((elm, i) => i !== id)];
                      })
                    }
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}

            <Row>
              <Col>
                <Button
                  type="button"
                  onClick={() =>
                    setFeatures((prev) => [...prev, { key: "", value: "" }])
                  }
                >
                  {" "}
                  Add Features
                </Button>
              </Col>
            </Row>
          </Row>

          <Row className="my-4">
            <p>Product Varieties</p>

            {varieties?.map((value, id) => (
              <Row>
                <Col xs={6}>
                  <FloatingLabel
                    controlId="productVarieties"
                    label="Varieties Key"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      // value=""
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = { ...prev[id], key: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product varieties"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel
                    controlId="productVarieties"
                    label="Varieties Value"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      // value=""
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = { ...prev[id], value: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product features"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  <FloatingLabel
                    controlId="costPrice"
                    label="Product cost price"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      pattern="[0-9]{1,}"
                      // value={costPrice}
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = { ...prev[id], cost: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product price"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  <FloatingLabel
                    controlId="sellingPrice"
                    label="Product selling price"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      pattern="[0-9]{1,}"
                      // value={sellingPrice}
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = { ...prev[id], price: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="product price"
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel
                    controlId="discount"
                    label="Product discount price"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      pattern="[0-9]+(.[0-9]+)?"
                      // value={discountPrice}
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = {
                            ...prev[id],
                            discount: e.target.value,
                          };
                          return [...prev];
                        })
                      }
                      placeholder="discount price"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  <FloatingLabel
                    controlId="noOfStock"
                    label="Number of stock"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required
                      pattern="[0-9]{1,}"
                      // value={quantityInStock}
                      onChange={(e) =>
                        setVarieties((prev) => {
                          prev[id] = { ...prev[id], quantity: e.target.value };
                          return [...prev];
                        })
                      }
                      placeholder="number of stock"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  {value?.imageUrl && (
                    <img
                      src={value?.imageDataURL}
                      alt=""
                      className="img-fluid img-thumbnail"
                      style={{ height: "250px", width: "300px" }}
                    />
                  )}

                  <FloatingLabel controlId="productImages" className="mb-3">
                    <Form.Control
                      // ref="productImage"
                      type="file"
                      accept="image/png, image/jpeg"
                      value=""
                      onChange={async (e) => {
                        try {
                          const response = await adminUploadFile(
                            e.target.files[0]
                          );
                          if (response.status) {
                            const imageDataURL = await adminGetFile(
                              response.data?.data[0]?._id
                            );
                            setVarieties((prev) => {
                              prev[id] = {
                                ...prev[id],
                                imageUrl: response.data?.data[0]?._id,
                                imageDataURL: imageDataURL,
                              };
                              return [...prev];
                            });
                          }
                        } catch (err) {}
                      }}
                      placeholder="product description"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={6}>
                  <Button
                    type="button"
                    className="w-100"
                    onClick={() =>
                      setVarieties((prev) => {
                        return [...prev.filter((elm, i) => i !== id)];
                      })
                    }
                  >
                    Remove Variety
                  </Button>
                </Col>
              </Row>
            ))}
            <Row>
              <Col>
                <Button
                  className="mt-2"
                  type="button"
                  onClick={() =>
                    setVarieties((prev) => [
                      ...prev,
                      {
                        key: "",
                        value: "",
                        quantity: "",
                        imageUrl: "",
                        cost: "",
                        price: "",
                        discount: "",
                      },
                    ])
                  }
                >
                  {" "}
                  Add Variety
                </Button>
              </Col>
            </Row>
          </Row>

          <Row className="my-4">
            <p>Generic Product image</p>
            <Col xs={12} md={6}>
              {imageUrl.map((value, id) => (
                <Row
                  key={"image" + id}
                  className="w-100 my-3"
                  style={{ height: "250px" }}
                >
                  <Col xs={10}>
                    <ImageDisplay imageId={value} />
                  </Col>
                  <Col xs={2}>
                    <Button
                      type="button"
                      onClick={() => {
                        setImageUrl((prev) => {
                          return prev.filter((pre, i) => i !== id);
                        });
                      }}
                    >
                      {" "}
                      Remove{" "}
                    </Button>
                  </Col>
                </Row>
              ))}

              {/*<FloatingLabel controlId="productImages" className="mb-3">
                <Form.Control
                  // ref="productImage"
                  type="file"
                  accept="image/png, image/jpeg"
                  value=""
                  onChange={async (e) => {
                    try {
                      const response = await adminUploadFile(e.target.files[0]);
                      console.log(response);
                      if (response.status) {
                        const imageDataURL = await adminGetFile(
                          response.data?.data[0]?._id
                        );
                        setImageDataURL((prev) => [...prev, imageDataURL]);
                        setImageUrl((prev) => {
                          return [...prev, response.data?.data[0]?._id];
                        });
                      }
                    } catch (err) {}
                  }}
                />
              </FloatingLabel>*/}
              <ImageUpload
                setState={(id) => {
                  console.log("+0000-");
                  setImageUrl((prev) => [...prev, id]);
                  console.log(imageUrl);
                }}
              />
            </Col>
          </Row>

          <Button variant="primary" className="m-4 w-75" type="submit">
            Submit Product
          </Button>
        </Form>

        {/*success && <p>Success!!!!</p>*/}
      </Container>
    </div>
  );
}

export default AddProduct;

const ImageUpload = ({ setState }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.imageReducer);

  useEffect(() => {
    if (id) {
      console.log(".....========");
      setState(id);
    }
  });

  return (
    <FloatingLabel controlId="productImages" className="mb-3">
      <Form.Control
        // ref="productImage"
        type="file"
        accept="image/png, image/jpeg"
        value=""
        onChange={async (e) => dispatch(postImageAction(e.target.files[0]))}
      />
    </FloatingLabel>
  );
};

const ImageDisplay = ({ imageId }) => {
  const dispatch = useDispatch();
  const elementRef = useRef(null);
  // const { loading, error, imageUrl } = useSelector(
  //   (state) => state.imageReducer
  // );

  /*if (imageId) dispatch(getImageAction(imageId));*/
  useEffect(() => {
    if (imageId) dispatch(getImageAction(imageId));
  }, [dispatch, imageId]);

  return (
    <img
      ref={elementRef}
      src=""
      alt="product"
      className="img-fluid img-thumbnail"
      style={{ height: "250px", width: "300px" }}
    />
  );
};
