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


const PRODUCT_QUERIES = gql`
    query productsQuery{
        products{
            _id
            name
            type
            category
            image
            cost_price
            sales_price
            product_tax
            alert_quantity
            date
            tax_method
        }
    }
`

export default class Products extends Component {

  constructor(props){
    super(props)
    this.reg_status_ref = React.createRef()
    this.audition_status_ref = React.createRef()
  }

  state={
    baseURL:process.env.REACT_APP_SERVER_ENDPOINT,
    events:[],
    showRegStatusModal:false,
    showAuditionStatusModal:false,
    reg_update_obj: {},
    audition_update_obj: {},
    
  }

  render() {
    // const listOfEvent = this.state.events.map((event, key) => {
    //   return (
    //     <tr key={key}>
    //         <td>{event.id}</td>
    //         <td>{event.title}</td>
    //         <td>{event.stage_text}</td>
    //         <td>{event.tour}</td>
    //         <td>{event.registration_status}</td>
    //         <td>{event.audition_status}</td>
    //         <td>{event.visibility ? "Yes":"No"}</td>
    //         <td>{event.total_regs}</td>
    //         <td>{event.total_audition_centers}</td>
           
    //         <td>
    //           <Nav>
    //             <NavDropdown
    //               title="Action"
    //               id="basic-nav-dropdown-right"
    //             >
    //               <MenuItem>
    //                 <i className="pe-7s-camera"></i> View Audition Centers
    //               </MenuItem>
    //               <MenuItem divider />
    //               <MenuItem >
    //                 <i className="pe-7s-culture"></i> Registered Talents
    //               </MenuItem>
    //               {!event.visibility && (<React.Fragment>
    //                 <MenuItem divider />
    //                 <MenuItem>
    //                   <i className="pe-7s-notebook"></i> Enable Visibility
    //                 </MenuItem>
    //               </React.Fragment>
    //               )}
    //               {event.visibility && (<React.Fragment>
    //                 <MenuItem divider />
    //                  <MenuItem>
    //                 <i className="pe-7s-notebook"></i> Disable Visibility
    //               </MenuItem>
    //               </React.Fragment>
    //               )}
    //               <MenuItem divider />
    //               <MenuItem>
    //                 <i className="pe-7s-musiclist"></i> Change Registration Status
    //               </MenuItem>
    //               <MenuItem divider />
    //               <MenuItem>
    //                 <i className="pe-7s-global"></i> Change Audition Status
    //               </MenuItem>
    //              </NavDropdown>
    //           </Nav>
    //         </td>
    //     </tr>
    //   );
    // })
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Products"
                category="List of all products"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      <th>ID #</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Category</th>
                      <th>Cost Price</th>
                      <th>Sales Price</th>
                      <th>Product Tax</th>
                      <th>Alert Quantity</th>
                      <th>Tax Method</th>
                      <th>Date</th>
                      <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <Query query={PRODUCT_QUERIES}>
                        {
                          ({loading,data,error}) => {
                            if(loading) return <tr>
                                <td>
                                <h1>Loading...</h1>
                                </td>
                              </tr>
                            if (error) console.log(error);
                            return data.products.map(product =>{
                              return (
                                <tr key={product._id}>
                                  <td>{product._id}</td>
                                  <td>{product.name}</td>
                                  <td>{product.type}</td>
                                  <td>{product.category}</td>
                                  <td>{product.cost_price}</td>
                                  <td>{product.sales_price}</td>
                                  <td>{product.product_tax}</td>
                                  <td>{product.alert_quantity}</td>
                                  <td>{product.tax_method}</td>
                                  <td>{product.date}</td>
                                </tr>
                              )
                            })
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
        

        {/* <Modal show={this.state.showAuditionStatusModal} onHide={this.handleUpdateAuditionStatus}>
          <Modal.Header closeButton>
            <Modal.Title>Update Audition Status</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleUpdateAuditionStatus}>
          <Modal.Body>
            <label>Select the Audition status</label>
              <select ref={this.audition_status_ref} className="form-control">
                <option value="pending">Pending</option>
                <option value="open">Open</option>
                <option value="closed">Close</option>
              </select>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-default" onClick={this.handleUpdateAuditionStatus}>
              Close
            </Button>
            <Button className="btn-primary" type="submit">
              Update Status
            </Button>
          </Modal.Footer>
          </form>
        </Modal> */}
      </div>
    );
  }
}
