import React, {Component} from "react";
import Button from "../Button/Button";
import { Container, Box, Img, Title } from "./Cities.styled";
import CitiesList from "./CitiesList/CitiesList";
import Input from '../Input/Input';
import Form from '../Form/Form';
import data from "../../data/university.json";
import src from "./img/pin.png";

export default class Cities extends Component {

  state = {
    isShow: false,
    cities: data.cities,
    inputValue: '',
  }

  handlerClick = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  }

  handlerChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    })
  }
  
  
  handlerSubmit = (e) => {
     e.preventDefault();
    this.setState((prevState) => ({
      cities: [...prevState.cities, this.state.inputValue],
      inputValue: '',
      isShow: false,
    }))
  }

  render() {
    const { isShow, cities , inputValue} = this.state;
    return (
      <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Города</Title>
      </Box>
        <CitiesList cities={cities}/>
        <Button text={"Добавить город"} onClick={this.handlerClick} />
        {isShow &&(
          <Form onSubmit={this.handlerSubmit}>
            <Input
              type='text'
              name='city'
              value={inputValue}
              placeholder='Введите город'
              onChange={this.handlerChange}
            ></Input>
          </Form>
        )
        }
    </Container>
    )
  }
}

