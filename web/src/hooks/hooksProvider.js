import React from 'react';
import { CharacterProvider } from './useCharacter';
import { TribeProvider } from './useTribe';
import { AuthProvider } from './useAuth';
import { MapProvider } from './useMap';

const HookProvider = ({ children }) => (
    <AuthProvider>
        <CharacterProvider>
            <MapProvider>
                <TribeProvider>
                    {children}
                </TribeProvider>
            </MapProvider>
        </CharacterProvider>
    </AuthProvider>
);

export default HookProvider;