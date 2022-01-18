
import React, { useState } from 'react'
import {
    Input, Label, FormGroup, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, CardFooter, Form,

} from 'reactstrap'
import Select from 'react-select';
import { Link } from "react-router-dom";

function EditResume() {


    const [Experiences, setExperiences] = useState([{ company: 'Dunder Mufflin', year: '1997', designation: 'Assistant manager' }])
    const [Educations, setEducations] = useState([{ institute: 'Harvard', year: '1980', degree: 'Econmics' }])

    const [InputField, setInputField] = useState(
        {
            first_name: 'Dwight',
            second_name: 'Schrute',
            email: 'dwight@hotmail.com',
            mobile: '9642096420',
            address: " 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401",     
        })

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputField ({...InputField , [name] : value})
    }


    const handleAddExp = () => {
        let new_exp = [...Experiences]
        new_exp.push({ company: '', year: '', designation: '' })
        setExperiences(new_exp)
    }
    const handleAddEdu = () => {
        let new_edu = [...Educations]
        new_edu.push({ institute: '', year: '', degree: '' })
        setEducations(new_edu)
    }

    const skillOptions = [
        { label: 'php', value: 1 },
        { label: 'JavaScript', value: 2 },
        { label: 'c#', value: 3 },
        { label: 'java', value: 4 },
    ]

    return (
        <div>

            <Form>
                <Row >
                    <Col sm={1} >
                    </Col>
                    <Col sm={10} >
                        <Card style={{ padding: '15px', margin: '20px', borderRadius: '5px' }} >
                            <h1>Edit Resume</h1>
                            <hr />
                            <Row>

                                <Col sm={6} >
                                    <Label>First Name</Label>
                                    <Input required name="first_name" onChange={handleChangeInput} value={InputField.first_name} ></Input>

                                </Col>
                                <Col sm={6} >
                                    <Label>Last Name</Label>
                                    <Input required name='second_name' onChange={handleChangeInput} value={InputField.second_name} ></Input>
                                </Col>

                                <Col sm={6} >
                                    <Label>Email</Label>
                                    <Input required type='email' name='email' onChange={handleChangeInput} value={InputField.email} ></Input>
                                </Col>
                                <Col sm={6} >
                                    <Label>Mobile</Label>
                                    <Input required type='tel'  name='mobile' onChange={handleChangeInput} value={InputField.mobile} ></Input>
                                </Col>
                                <Col sm={12} >
                                    <Label>Address</Label>
                                    <Input required type='textarea' name='address' onChange={handleChangeInput} value={InputField.address} ></Input>
                                </Col>

                                <Col>
                                    <Card className='mt-2 ' >
                                        <CardHeader>Experience</CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col sm={4} >
                                                    <Label>Company</Label>

                                                </Col>

                                                <Col sm={4} >
                                                    <Label>Year</Label>

                                                </Col>

                                                <Col sm={4} >
                                                    <Label>Designation</Label>

                                                </Col>

                                            </Row>
                                            <Row className='mt-2' >
                                                {Experiences.map((exp, i) => {
                                                    return (
                                                        <Row style={{ marginTop: '10px' }} >
                                                            <Col sm={4} >
                                                                <Input required value={exp.company} ></Input>
                                                            </Col>

                                                            <Col sm={4} >
                                                                <Input required value={exp.year} ></Input>
                                                            </Col>

                                                            <Col sm={4} >
                                                                <Input required value={exp.designation} ></Input>
                                                            </Col>
                                                        </Row>
                                                    )
                                                })

                                                }


                                            </Row>
                                            <div className='d-flex justify-content-center mt-2' >
                                                <Button onClick={handleAddExp} >Add More</Button>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className='mt-2 ' >
                                        <CardHeader>Education</CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col sm={4} >
                                                    <Label>Institute</Label>

                                                </Col>

                                                <Col sm={4} >
                                                    <Label>Year</Label>

                                                </Col>

                                                <Col sm={4} >
                                                    <Label>Degree</Label>

                                                </Col>

                                            </Row>
                                            <Row className='mt-2' >
                                                {Educations.map((edu, i) => {
                                                    return (
                                                        <Row style={{ marginTop: '10px' }} >
                                                            <Col sm={4} >
                                                                <Input value={edu.institute} required ></Input>
                                                            </Col>

                                                            <Col sm={4} >
                                                                <Input value={edu.year} required ></Input>
                                                            </Col>

                                                            <Col sm={4} >
                                                                <Input required value={edu.degree} ></Input>
                                                            </Col>
                                                        </Row>
                                                    )
                                                })

                                                }


                                            </Row>
                                            <div className='d-flex justify-content-center mt-2' >
                                                <Button onClick={handleAddEdu} >Add More</Button>
                                            </div>
                                        </CardBody>
                                    </Card>


                                </Col>


                                <Col sm={12} >
                                    <Label>
                                        Skills
                                    </Label>
                                    <Select
                                        defaultValue={[skillOptions[0], skillOptions[1]]}
                                        isMulti
                                        name="skills"
                                        options={skillOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </Col>

                            </Row>
                            <hr />
                            <div className='d-flex justify-content-end' >
                                <Button color='dark' type='submit' >Submit</Button>
                            </div>
                        </Card>

                    </Col>
                    <Col sm={1} >
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default EditResume

