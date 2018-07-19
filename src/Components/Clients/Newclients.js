import React, { Component } from 'react';
import { Panel,FormGroup} from 'react-bootstrap';
import {Col,Form,Input,Label} from 'reactstrap';
import fire from '../../fire';
import '../../App.css';

class Newclients extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            nationality:[{
                id:'',
                nationality:''
            }],
            area:[{
                id:'',
                location:''
            }]
        };
    }

     getNationality() {
         //get data from fire base
            let self=this;
            fire.database().ref('Nationality').on('value', snapshot => {
                snapshot.forEach(function(childSnapshot) {
                    let nationality={
                        id:childSnapshot.key,
                        nationality :childSnapshot.val().Nationality,
                    }
                    //this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] }) //another array
                    self.setState({nationality:[... self.state.nationality, ...[nationality]]});
    
                });    
                
            })
    }

    getArea(){
        let self=this;
        fire.database().ref('Area').on('value', snapshot => {
            snapshot.forEach(function(childSnapshot) {
                let area={
                    id:childSnapshot.key,
                    location :childSnapshot.val().LOCATION,
                }
                //this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] }) //another array
                self.setState({area:[... self.state.area, ...[area]]});
                
            });    
            
        })
    }

    getProperty(){
        
    }




    

    componentDidMount() {
        this.getNationality();
        this.getArea();
        this.getProperty();
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        
        let optionItems = this.state.nationality.map((nationality) =>
                <option key={nationality.id} value={nationality.id}>{nationality.nationality}</option>
            ); 

        let Area = this.state.area.map((area) =>
            <option key={area.id} value={area.id}>{area.location}</option>
        );     
     
        return (

            <div className="container">
                <Panel>
                    <Panel.Heading>New Clients</Panel.Heading>

                    <Panel.Body>
                        <Form>
                            <h5 className="card-title">Personal Information</h5>
                            <hr />
                            <Col xs={6} md={4}>
                                <FormGroup>
                                    <Label htmlFor="name">Name (English)</Label>
                                     <Input type="text" id="NameEn" placeholder="Enter your name" required />
                                </FormGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="name">Name (Korean)</Label>
                                     <Input type="text" id="NameKn" placeholder="Enter your name" required />
                                </FormGroup>
                            </Col>
                            <Col  md={4}>
                                <FormGroup>
                                    <Label htmlFor="Nationality">Nationality</Label>
                                    <Input type="select" name="Nationality" id="Nationality">
                                   {optionItems}
                                    </Input>
                                    
                                    
                                </FormGroup>
                            </Col>

                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="Mobile">Mobile</Label>
                                     <Input type="text" id="Mobile" placeholder="Enter your mobile" required />
                                </FormGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="Email">Email</Label>
                                     <Input type="email" id="Email" placeholder="Enter your Email" required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                <Label htmlFor="Kakaoid">Kakao Id</Label>
                                     <Input type="text" id="Kakaoid" placeholder="Enter your Kakaoid" required />
                                </FormGroup>
                            </Col>

                            <h5 className="card-title">Address</h5>
                            <hr />

                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="HouseNo">House No.</Label>
                                     <Input type="text" id="HouseNo" placeholder="Enter your House Number" required />
                                </FormGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="BuidlingNo">Building / House Address</Label>
                                     <Input type="text" id="BuidlingNo" placeholder="Enter your House Buidling or House Number" required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                <Label htmlFor="Area">Area</Label>
                                <Input type="select" name="Nationality" id="Nationality">
                                   {Area}
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col xs={6} md={4}>
                                <FormGroup>
                                <Label htmlFor="Areacode">Area Code</Label>
                                     <Input type="text" id="Areacode" placeholder="Enter your Areacode" required />
                                </FormGroup>
                            </Col>
                            <Col xs={6} md={4}>
                                <FormGroup>
                                    <Label htmlFor="Propertytype">Property Type</Label>
                                    <Input type="select" name="Propertytype" id="Propertytype">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </Input>
                                </FormGroup>
                                
                            </Col>









                        </Form>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Newclients;
