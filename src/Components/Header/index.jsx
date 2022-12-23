import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Buttons'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight, 
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4' />
                ) : (
                <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }