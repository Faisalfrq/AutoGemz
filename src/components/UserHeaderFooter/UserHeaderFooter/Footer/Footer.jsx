import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiMapPinLine } from 'react-icons/ri';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    let link='#'

  return (
    <footer className="bg-dark py-3 fixed-bottom">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6} className=" text-center text-sm-left">
          <p className="text-white fw-bold m-0 follow">Follow us on</p>
          <div className="justify-content-center justify-content-sm-start">
            <a className="mx-3 text-white" href={link}>
              <FaFacebook size={24} />
            </a>
            <a className="mx-3 text-white" href={link}>
              <FaTwitter size={24} />
            </a>
            <a className="mx-3 text-white" href={link}>
              <FaInstagram size={24} />
            </a>
            <a className="mx-3 text-white" href={link}>
              <AiFillLinkedin size={24} />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-right">
          <h6 className="text-white mb-0">Quick links</h6>
          <ul className="list-unstyled d-flex justify-content-center justify-content-sm-end">
            <li className="mx-3">
              <a className="text-white" href={link}>Home</a>
            </li>
            <li className="mx-3">
              <a className="text-white" href={link}>About</a>
            </li>
            <li className="mx-3">
              <a className="text-white" href={link}>Services</a>
            </li>
            <li className="mx-3">
              <a className="text-white" href={link}>Careers</a>
            </li>
            <li className="mx-3">
              <a className="text-white" href={link}>Contact</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center text-white">
          <p className="mb-0">
            <RiMapPinLine size={16} className="mr-2" />
            Address, Islamabad, Pakistan 44000
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center text-white">
          <p className="mb-0">Copyright &copy; 2023</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
