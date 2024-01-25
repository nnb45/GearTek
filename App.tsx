import { View } from 'react-native'
import React from 'react'
import AppNavigation from './src/components/navigation/AppNavigation'
import { AppContextProvider } from './src/components/context/AppContext'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppContextProvider>
                <AppNavigation />
            </AppContextProvider>
        </View>
    )
}

export default App