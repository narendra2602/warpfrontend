import React, { Component } from 'react';

import LicenseService from '../services/LicenseService';
import Select from 'react-select';




const optionsrem = [
    { value: 1, label: '1 weeks of expiry' },
    { value: 2, label: '2 weeks of expiry' },
    { value: 3, label: '3 weeks of expiry' },
    { value: 4, label: 'Dont Remind' }
  ]

class LicenseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            id:'',
            in_cust_id: '',
            in_cat_id: '',
            in_p_name: '',
            in_p_expdt: '',
            in_p_rem: '1',
            in_p_dop: '',
            in_p_dealname: '',
            in_p_dealcontact: '',
            in_p_sscontact : '',
            in_p_warranty : '',
            in_p_issuer: '',
            in_p_agentname: '',
            in_p_agentcontact: '',
            in_p_imgcode: '',
            options: optionsrem


        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

 

    handleChange = selectedOption => {
        this.setState({ in_p_rem: selectedOption.value });
    };

    changeNameHandler = (event) => {
        this.setState({ in_p_name: event.target.value });
    }
    changeDateHandler = (event) => {
        this.setState({ in_p_expdt: event.target.value });
    }
    

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
             
//         let product = { name: this.state.name, description: this.state.description, price: this.state.price, mrp: this.state.mrp, image: base64String, category: this.state.category };
           
           let product={
            custid:2,
            cat_id:1,
            p_name:this.state.in_p_name,
            p_expdt:this.state.in_p_expdt,
            p_rem:this.state.in_p_rem,
            p_dop:this.p_dop,
            p_dealname:this.state.in_p_dealname,
            p_dealcontact:this.state.in_p_dealcontact,
            p_sscontact:this.state.in_p_sscontact,
            p_warranty:this.state.in_p_warranty,
            p_issuer:this.state.in_p_issuer,
            p_agentname:this.state.in_p_agentname,
            p_agentcontact:this.state.in_p_agentcontact,
            p_imgcode:this.state.in_p_imgcode
           }
        if (this.state.id === -1) {
            LicenseService.addProduct(product).then(res => {
 //                this.props.history.push('/product');
                console.log("save successfully");
            }).catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
        });;
            console.log("Add product");

        } else {
            LicenseService.updateProduct(product, this.state.id).then(res => {
                this.props.history.push('/product');
            });
        }
    }

    cancel() {
        this.props.history.push('/product');
    }


    getTitle() {
        if (this.state.id === -1) {
            return <h2 className='text-left'>Add Licence</h2>

        }
        else {
            return <h2 className='text-left'>Add Licence</h2>
        }
    }



    render() {
       
        return (


            <div className='content' style={{backgroundColor:'#D7D7D7', position:'sticky' }} >
                  
                 
                    <div className='row'>
                      
                       
                            {this.getTitle()}
                         
                                <form >

                                    <div className="row mb-3">
 
                                        <div className='col'>


                                        <div className="row mb-3">
                                                <div className='col-5'>
                                                    <label className="form-label" > Licence Name</label>
                                                </div>
                                        <div className="row">        
                                               
                                                    <input  autoComplete='off' style=
                                                    {{
                                                    height: 40,  borderWidth: 4, color : "blue"
                                                    }} placeholder='Licence Name'   
                                                        value={this.state.in_p_name} onChange={this.changeNameHandler} />
                                                </div>
                                            </div>
                                           

                                            <div className="row mb-3">
                                                <div className='col-5' >
                                                    <label className="form-label" > Date of expiry*:</label>
                                                </div>
                                                <div className="row ">
                                               
                                                    <input  type='date' style=
                                                    {{
                                                    height: 40,  borderWidth: 4, color : "blue"
                                                    }} 
                                                    placeholder='DD/MM/YYYY' name="name" 
                                                        value={this.state.in_p_expdt} onChange={this.changeDateHandler} />
                                                </div>
                                            </div>
                                           

                                            <div className="row">
                                            <div className='col-5' >
                                                <label  className="form-label" > Start Reminding Before*:</label>
                                             </div>  
                                                <div className="row">
                                               
                                                    <Select
                                                        value={this.state.options.filter(({ value }) => value === this.state.in_p_rem)}
                                                        onChange={this.handleChange}
                                                        selectedValue={this.state.in_p_rem}
                                                        options={this.state.options}
                                                    />
                                                </div>
                                            </div>
                                           





                                            <div className="row">
                                           
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-primary' style={{ marginLeft:"0px",marginTop: "10px" }} onClick={this.saveOrUpdateProduct}>Submit</button>
                                               </div>
                                               </div>
                                              
                                              <div className="row">
                                              <div className='d-grid gap-2' >
                                                    <button className='btn btn-light' style={{ marginTop: "10px", marginLeft: "0px" }} onClick={this.cancel.bind(this)} >Cancel</button>
                                                </div>
                                                </div>
                                                

      


                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                     
           
        );
    }
}

export default LicenseComponent;