import React from 'react'

import Feed from '../Feed'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'

export default function ProfilePage() {
    
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton>Editar perfil</EditButton>

                <h1>Gabriel Dias</h1>
                <h2>@gabrieldias</h2>

                <p>Desenvolvedor</p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 17 de março de 2005
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo<strong>94</strong>
                    </span>

                    <span>
                        <strong>94 </strong> Seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}
