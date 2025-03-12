import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);
const AdminProducts = () => {
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
      <Row>
        <Col>
          <h1>Products</h1>
          <Button className="float-right mr-3">Add Products</Button>
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
    </>
  );
};

export default AdminProducts;
