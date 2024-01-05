import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Preview = ({ formData }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={4}
      boxShadow="md"
      w="100%"
      maxW="400px"
    >
      <Heading as="h3" size="md" bg="purple.500" color="white" p={2} borderRadius="md">
        Draft
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={2}>
        New requisition
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="purple.500">
        OPENINGS {formData?.numberOfOpenings || '-'}
      </Text>
      
      <VStack spacing={4} align="stretch" mt={4}>
        <Section title="Requisition Details">
          <Detail title="Urgency" value={formData?.urgency || '-'} />
          <Detail title="Gender" value={formData?.gender || '-'} />
        </Section>
        <Section title="Job Detail">
          <Detail title="Job Title" value={formData?.jobTitle || '-'} />
          <Detail title="Job Details" value={formData?.jobDetails || '-'} />
          <Detail title="Job Location" value={formData?.jobLocation || '-'} />
        </Section>
        <Section title="Interview Settings">
          <Detail title="Interview Duration" value={formData?.interviewDuration || '-'} />
          <Detail title="Interview Language" value={formData?.language || '-'} />
          <Detail title="Interview Mode" value={formData?.interviewMode || '-'} />
        </Section>
      </VStack>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box>
    <Text fontWeight="bold">{title}</Text>
    {children}
  </Box>
);

const Detail = ({ title, value }) => (
  <Box>
    <Text as="span" fontWeight="bold">
      {title}:
    </Text>{' '}
    <Text as="span" color="gray.600">
      {value}
    </Text>
  </Box>
);

export default Preview;
