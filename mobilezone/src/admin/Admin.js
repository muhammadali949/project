import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Icon, Col, Card, Row, Button } from "antd";
import Navbar from '../components/Navbar'
import axios from "axios";

const { Meta } = Card;
function Admin() {
  const [req, setReq] = useState([]);
  useEffect(() => {
    axios.post("/api/admin/getrequest").then((response) => {
      if (response.data.success) {
        setReq(response.data.admins);
      } else {
        alert("Failed to fetch request datas");
      }
    });
  }, [req]);

  return (
    <div>      
    <Navbar />
      <Table req={req} />
    </div>
  );
}

export default Admin;
