import React from 'react';
import { CharacterProvider } from './useCharacter';
import { TribeProvider } from './useTribe';
import { WsProvider } from './useWS';
import { AuthProvider } from './useAuth';
import { MapProvider } from './useMap';

const HookProvider = ({ children }) => (
    <WsProvider>
        <AuthProvider>
            <CharacterProvider>
                <MapProvider>
                    <TribeProvider>
                        {children}
                    </TribeProvider>
                </MapProvider>
            </CharacterProvider>
        </AuthProvider>
    </WsProvider>
);

export default HookProvider;