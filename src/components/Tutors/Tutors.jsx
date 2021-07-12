import React, { Component } from "react";
import TutorList from "./TutorsList/TutorsList";
import Button from "../Button/Button";
import { Container, Box, Title, Img } from "./Tutors.styled";
import Form from '../Form/Form';
import Input from '../Input/Input';
import src from "./img/cat.png";
import data from "../../data/university.json";
// import { fireEvent } from "@testing-library/dom";

export class Tutors extends Component {

  state = {
    isFormShow: false,
    lastName: '',
    fistName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
    tutors: data.tutors,
  }

    toggleFrom = () => {
    this.setState((prevState) => ({
      isFormShow: !prevState.isFormShow,
    }));
  }
  
  handlerChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    })
  }

  ////////////////////////?????/////////////////////
  
  handlerSubmit = (e) => {
    const name = e.target.name;
    // const value = e.target.value;
     e.preventDefault();
    this.setState((prevState) => ({
      tutors: [...prevState.tutors, this.state[name]],
      [name]: '',
      isFormShow: false,
    }))
  }

  render() {
    const { isFormShow, lastName, firstName, patronymic ,phone, city, email, tutors } = this.state;
    return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Преподаватели</Title>
      </Box>
        <TutorList tutors={tutors} />
        <Button text={isFormShow ? 'Закрыть' : "Добавить преподавателя" } onClick={this.toggleFrom} />
        {isFormShow &&
          <Form onSubmit={ this.handlerSubmit}>
          <Input type='text' name='lastName' value={lastName} placeholder='Фамилия' onChange={this.handlerChange} />
          <Input type='text' name='firstName' value={ firstName } placeholder='Имя'onChange={this.handlerChange}/>
          <Input type='text' name='patronymic' value={ patronymic } placeholder='Отсечтво'onChange={this.handlerChange}/>
          <Input type='text' name='phone' value={ phone } placeholder='Телефон'onChange={this.handlerChange}/>
          <Input type='email' name='email' value={ email } placeholder='Мейл'onChange={this.handlerChange}/>
          <Input type='text' name='city' value={ city } placeholder='Город'onChange={this.handlerChange}/>
          </Form>}
    </Container>
    )
  }
}

export default Tutors;
