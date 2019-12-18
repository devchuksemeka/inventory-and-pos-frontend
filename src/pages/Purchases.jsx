import React, { Component } from "react";
import { Grid, 
  Row, 
  Col,
  Table,
  NavDropdown, 
  MenuItem, 
  Nav,
  Modal,
  Button  } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import gql from 'graphql-tag'
import {Query} from 'react-apollo'


const PURCHASE_QUERIES = gql`
    query purchaseQuery{
      inventoriesCategories(category:"PURCHASE"){
            _id
            product
            quantity
            quantity
            unit_price
            total_price
            date
            category
        }
    }
`

export default class Purchases extends Component {

  constructor(props){
    super(props)
    this.reg_status_ref = React.createRef()
    this.audition_status_ref = React.createRef()
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Purchases"
                category="List of all purchases"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      <th>ID #</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <Query query={PURCHASE_QUERIES}>
                        {
                          ({loading,data,error}) => {
                            if(loading) return <tr>
                                <td>
                                <h1>Loading...</h1>
                                </td>
                              </tr>
                            if (error) console.log(error);
                            if(data){
                              return data.inventoriesCategories.map(product =>{
                                return (
                                  <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.product}</td>
                                    <td>{product.quantiy}</td>
                                    <td>{product.unit_price}</td>
                                    <td>{product.total_price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.date}</td>
                                  </tr>
                                )
                              })
                            }
                            
                          }
                        }
                      </Query>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
