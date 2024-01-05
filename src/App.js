import './index.css';
import {BrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import Preview from './components/Preview';

const App = () => {
    return (
        <ChakraProvider>
            <MultiStepForm />
        </ChakraProvider>
    )
}

export default App;