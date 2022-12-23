import { Link } from 'react-router-dom';

import BannerImage from '../../assets/banner.png'
import { Button } from '../../Components/Buttons';
import { Card } from '../../Components/Card';
import { UserInfo } from '../../Components/UserInfo';
import { Header } from '../../Components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={90} nome= "Klayvem" image={"https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4"} />
                <UserInfo percentual={80} nome= "Kleyto" image={"https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4"} />
                <UserInfo percentual={70} nome= "Klakla" image={"https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4"} />
                <UserInfo percentual={90} nome= "Kau" image={"https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4"} />
                <UserInfo percentual={90} nome= "Kaká" image={"https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4"} />
            </Column>
        </Container>
    </>)
}

export { Feed }