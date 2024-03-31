import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {Box, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

function App() {
    return (
        <FullScreenSection isDarkBackground="black"
                           backgroundColor="#2A4365"
                           justifyContent="center"
                           alignItems="flex-start"
        >
            <Box>
                <VStack>
                    <main>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </main>
                </VStack>
            </Box>
        </FullScreenSection>
    );
}

export default App;
