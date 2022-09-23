import React from 'react';
import { CharacterProvider } from './useCharacter';
import { TribeProvider } from './useTribe';
import { WsProvider } from './useWS';

const HookProvider = ({ children }) => (
    <WsProvider>
        <CharacterProvider>
            <TribeProvider>
                {children}
            </TribeProvider>
        </CharacterProvider>
    </WsProvider>
);

export default HookProvider;