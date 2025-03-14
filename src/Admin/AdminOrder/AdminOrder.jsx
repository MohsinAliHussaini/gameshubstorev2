import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import AdminHeader from "../AdminHeader/AdminHeader";

ModuleRegistry.registerModules([AllCommunityModule]);
const AdminOrder = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <>
      <Container>
        <AdminHeader />
        <Row>
          <Col>
            <h1>Order</h1>
            <Button className="float-right mr-3">Add Order</Button>
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

export default AdminOrder;
