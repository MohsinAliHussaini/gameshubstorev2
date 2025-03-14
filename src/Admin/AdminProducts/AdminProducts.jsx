import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useNavigate } from "react-router-dom";
import { utils } from "../../Utils";
import { getService } from "../../genericPostService";
import AdminHeader from "../AdminHeader/AdminHeader";

ModuleRegistry.registerModules([AllCommunityModule]);
const AdminProducts = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "prod_name", headerName: "Product Name" },
    { field: "prod_price", headerName: "Product Price" },
    { field: "prod_quantity", headerName: "Product Quantity" },
    { field: "prod_add_date", headerName: "Product Add Date" },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const url = "/gamesHubStoreApi/get_all_product.php";
    getService(url, {}, setData);
  };

  const addProductLink = () => {
    navigate(utils.routesName.addProduct);
  };

  const setData = (response) => {
    let data = [...response.products];
    data = data.map((val) => {
      return {
        ...val,
      };
    });
    setRowData(data);
  };

  return (
    <>
      <Container>
        <AdminHeader />
        <Row>
          <Col>
            <h1>Products</h1>
            <Button className="float-right mr-3" onClick={addProductLink}>
              Add Products
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ height: "300px" }} className="mt-3">
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={{ flex: 1 }}
                pagination={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProducts;
