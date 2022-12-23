import { MdEmail, MdLock, MdPeopleAlt } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Buttons';

import { api } from '../../services/api';

import { Column, Container, Row, SubitleLogin, Title, TitleLogin, Wrapper, TextJáTenhoConta, TextConta, FazerLogin} from './styles';

    const schema = yup.object({
        email: yup.string().email('Email não é valido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
    
    }).required();

const Cadastro = () => {
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubitleLogin>Crie sua conta e make the change._</SubitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPeopleAlt />} />
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <TextConta>
                        Ao clicar em "criar minha conta grátis",
                        declaro que aceito as Políticas de Privacidade
                        e os Termos de Uso da DIO.
                        </TextConta>
                        <Row>
                        <TextJáTenhoConta>
                            <strong>Já tenho conta.<FazerLogin>Fazer login</FazerLogin></strong>   
                        </TextJáTenhoConta>
                        </Row>
                    </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }