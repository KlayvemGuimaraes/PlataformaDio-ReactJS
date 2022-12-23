import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content, 
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://media.licdn.com/dms/image/D4D16AQF3UJN2jjhRIg/profile-displaybackgroundimage-shrink_350_1400/0/1669260568151?e=1677110400&v=beta&t=uDaxxC6FhsNwE4Co3cd56-nXPIBYukbVMfvlXZ_d6d0'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/105517014?s=400&u=e3115d0f3cae20bdb6aaa308cd5025d8425c8882&v=4' />
                    <div>
                        <h4>Klayvem Guimarães</h4>
                        <p>Há 8 minutos </p>
                    </div>
            </UserInfo>
            <PostInfo>
                    <h4>Projeto para curso de React</h4>
                    <p>Projeto feito com o curso de React Javascript da DIO global... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#React #Css #Html #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 90
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
    )
}

export { Card }