import React from 'react' //rfc monta uma estrutura base de componente

import { Container, NameText, Progress, UserPicture} from './styles';

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }
