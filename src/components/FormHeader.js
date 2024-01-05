import { Box, Flex, Text } from '@chakra-ui/react';

const FormHeader = ({ currentStep }) => {
  const steps = ['Requisition Details', 'Job Details', 'Interview Settings'];

  return (
    <Flex justify="space-evenly" align="center" mb={6}>
      {steps.map((step, index) => (
        <Box key={index} position="relative" textAlign="center" width="100%">
          <Text
            fontWeight={currentStep === index ? 'bold' : 'normal'}
            pb={2}
            color={currentStep === index ? 'blue.600' : 'gray.500'}
          >
            {step}
          </Text>
          {currentStep === index && (
            <Box
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              width="50%"
              height="2px"
              bgColor="blue.600"
            />
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default FormHeader;