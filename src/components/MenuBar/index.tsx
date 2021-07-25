import React from 'react'

import Button from '../Button'

import { Container, TopSide, Logo, HomeIcon, MenuButton, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData, ExitIcon } from './styles'

export default function MenuBar() {
    return (

        <Container>
            <TopSide>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active" >
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
                
            </TopSide>

            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>
                        Gabriel Dias
                    </strong>
                    <span>@guilherme_rodz</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    )
}
