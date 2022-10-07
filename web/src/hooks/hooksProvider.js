import React from 'react';
import { CharacterProvider } from './useCharacter';
import { TribeProvider } from './useTribe';
import { WsProvider } from './useWS';
import { AuthProvider } from './useAuth';

const HookProvider = ({ children }) => (
    <WsProvider>
        <AuthProvider>
            <CharacterProvider>
                <TribeProvider>
                    {children}
                </TribeProvider>
            </CharacterProvider>
        </AuthProvider>
    </WsProvider>
);

export default HookProvider;