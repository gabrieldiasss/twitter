import React from 'react'

import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, SearchIcon, EmailIcon, HomeIcon, BellIcon } from  './styles'

export default function Main() {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Gabriel Dias</strong>
                    <span>122 Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
}
