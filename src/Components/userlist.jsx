import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { supabase } from "./supabaseClient";
import Link from "@mui/material/Link";
import {

  Box,

} from "@mui/material";
export default function Userlist() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("Instructor_details")
        .select("*");

      if (error) throw error;
      if (data != null) {
        setProducts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
    <Box sx={{pt:12,px:8}}>
    <Paper sx={{px: 6}}>
      <TableContainer sx={{ px: 6 }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((products) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>{products.name}</TableCell>
                      <TableCell>{products.email}</TableCell>
                      <TableCell>{products.mobile}</TableCell>
                      <TableCell>
                        <Link
                          href={products.link}
                          underline="none"
                          target="_blank"
                        >
                          {products.link}
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
    </>
  );
}
