import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { utils } from "../../Utils";
import { resources_EN } from "../../componentUtils";
import Swal from "sweetalert2";
import { PostServiceWithFile } from "../../genericPostService";
import AdminHeader from "../AdminHeader/AdminHeader";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: null,
    productAddDate: "",
    productCategory: "1",
    productQuantity: "",
  });
  const [imageError, setImageError] = useState("");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "image/jpeg") {
        setImageError("Only JPG images are allowed.");
        return;
      }
      setImageError("");
      setFormData({ ...formData, productImage: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validation();
    if (valid) {
      submitData();
    }
    console.log("Form Data Submitted", formData);
  };

  const validation = () => {
    if (formData.productName.trim() === "") {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.productNameValid
      );
      return false;
    }
    if (formData.productAddDate.trim() === "") {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.productDateValid
      );
      return false;
    }
    if (formData.productPrice.trim() === "") {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.productPriceValid
      );
      return false;
    }
    if (formData.productDescription.trim() === "") {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.productDescritpionValid
      );
      return false;
    }
    if (!formData.productImage) {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.productImageValid
      );
      return false;
    }
    return true;
  };

  /* Error or Success Modal */
  const modal = (icon, title, message) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    }).then((response) => {
      if (response.isConfirmed && icon === resources_EN.success) {
        console.log("Success");
        navigate(utils.routesName.adminProducts);
      }
    });
  };

  /* Submit Data */
  const submitData = () => {
    const data = new FormData();
    data.append("prod_name", formData.productName);
    data.append("prod_descrp", formData.productDescription);
    data.append("prod_price", formData.productPrice.toString());
    data.append("prod_quantity", formData.productQuantity.toString()); // Correct way to attach a file
    data.append("prod_add_date", formData.productAddDate);
    data.append("cat_id", +formData.productCategory);
    data.append("prod_img", formData.productQuantity);

    const url = "/gamesHubStoreApi/add_product.php";
    PostServiceWithFile(url, data, modal);
  };

  const goBack = () => {
    navigate(utils.routesName.adminProducts);
  };

  return (
    <>
      <Container>
        <AdminHeader />
      </Container>
      <Container className="d-flex justify-content-center mt-5">
        <div
          style={{
            width: "50%",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-center mb-4">Add Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName" className="mb-3">
              <Form.Label className="d-block">Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="rounded p-2"
              />
            </Form.Group>

            <Form.Group controlId="productPrice" className="mb-3">
              <Form.Label className="d-block">Product Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                required
                className="rounded p-2"
              />
            </Form.Group>

            <Form.Group controlId="productDescription" className="mb-3">
              <Form.Label className="d-block">Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                required
                className="rounded p-2"
              />
            </Form.Group>
            <Form.Group controlId="productQuantity" className="mb-3">
              <Form.Label className="d-block">Product Quantity</Form.Label>
              <Form.Control
                type="number"
                name="productQuantity"
                value={formData.productQuantity}
                onChange={handleChange}
                required
                className="rounded p-2"
              />
            </Form.Group>

            <Form.Group controlId="productCategory" className="mb-3">
              <Form.Label className="d-block">Product Category</Form.Label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                required
                className="form-control rounded p-2"
              >
                {category && category.length > 0 ? (
                  category.map((val) => {
                    return <option value="1">Electronics</option>;
                  })
                ) : (
                  <option value="1">No Category Available</option>
                )}
              </select>
            </Form.Group>

            <Form.Group controlId="productImage" className="mb-3">
              <Form.Label className="d-block">Product Image</Form.Label>
              <input
                type="file"
                name="productImage"
                onChange={handleFileChange}
                accept=".jpg"
                required
                className="rounded p-2"
              />
              {imageError && (
                <Alert variant="danger" className="mt-2">
                  {imageError}
                </Alert>
              )}
            </Form.Group>

            <Form.Group controlId="productAddDate" className="mb-3">
              <Form.Label className="d-block">Product Add Date</Form.Label>
              <Form.Control
                type="date"
                name="productAddDate"
                value={formData.productAddDate}
                onChange={handleChange}
                required
                className="p-2"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-25 float-right rounded p-2"
            >
              Submit
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={goBack}
              className="w-25 mr-3 float-right rounded p-2"
            >
              Back
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default AddProduct;
