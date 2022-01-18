
import React, { useState } from 'react'
import {
  Input, Label, FormGroup, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, CardFooter, Form,
 
} from 'reactstrap'
import Select from 'react-select';
import { Link } from "react-router-dom";

function CreateResume() {

    
  const [Experiences, setExperiences] = useState([{ company: '', year: '', designation: '' }])
  const [Educations, setEducations] = useState([{ institute: '', year: '', degree: '' }])

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
              <h1>Create Resume</h1>
              <hr />
              <Row>

                <Col sm={6} >
                  <Label>First Name</Label>
                  <Input required ></Input>

                </Col>
                <Col sm={6} >
                  <Label>Last Name</Label>
                  <Input required ></Input>
                </Col>

                <Col sm={6} >
                  <Label>Email</Label>
                  <Input required type='email' ></Input>
                </Col>
                <Col sm={6} >
                  <Label>Mobile</Label>
                  <Input required type='tel' ></Input>
                </Col>
                <Col sm={12} >
                  <Label>Address</Label>
                  <Input required type='textarea' ></Input>
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
                                <Input required ></Input>
                              </Col>

                              <Col sm={4} >
                                <Input required ></Input>
                              </Col>

                              <Col sm={4} >
                                <Input required ></Input>
                              </Col>
                            </Row>
                          )
                        })

                        }


                      </Row>
                      <div className='d-flex justify-content-center mt-2' >
                        <Button  onClick={handleAddExp} >Add More</Button>
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
                                <Input required ></Input>
                              </Col>

                              <Col sm={4} >
                                <Input required ></Input>
                              </Col>

                              <Col sm={4} >
                                <Input required ></Input>
                              </Col>
                            </Row>
                          )
                        })

                        }


                      </Row>
                      <div className='d-flex justify-content-center mt-2' >
                        <Button  onClick={handleAddEdu} >Add More</Button>
                      </div>
                    </CardBody>
                  </Card>


                </Col>


                <Col sm={12} >
                  <Label>
                    Skills
                  </Label>
                  <Select
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

export default CreateResume
