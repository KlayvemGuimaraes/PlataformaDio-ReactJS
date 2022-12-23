import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Buttons';

import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubitleLogin, Title, TitleLogin, Wrapper  } from './styles';

    const schema = yup.object({
        email: yup.string().email('Email não é valido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
    }).required();

const Login = () => {
        const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode:'onChange',
        });


const onSubmit = async FormData => {
    try{
        const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`);
        if(data.length === 1){
            navigate('/feed')

        } else {
            alert('Email ou senha inválido')
        }
    }catch{
        alert('houve um erro, tente novamente')
    }
};

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais 
                    tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubitleLogin>Faça seu login e make the change._</SubitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
