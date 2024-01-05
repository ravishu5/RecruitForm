import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button, FormControl, FormLabel, FormErrorMessage, Input, Select, Heading } from '@chakra-ui/react';
import * as Yup from 'yup';
import {validationSchemas} from './Schema';

import {Flex, Text } from '@chakra-ui/react';
import Preview from './Preview';
import FormHeader from './FormHeader';

const MultiStepForm = () => {
  const [step, setStep] = useState(0); // Start at the first form step
  const [formData, setFormData] = useState({
    requisitionTitle: '',
    numberOfOpenings: '',
    gender: '',
    urgency: '',
    jobTitle: '',
    jobDetails: '',
    jobLocation: '',
    interviewMode: '',
    interviewDuration: '',
    language: '',
  });

  const currentValidationSchema = validationSchemas[step];

  // Handler for form submission
  const handleSubmit = (values, actions) => {
    const isLastStep = step === validationSchemas.length - 1;
    if (isLastStep) {
      alert('Form Successfully Submitted'); // Alert the user
      actions.resetForm(); // Reset the form after submission
      setStep(0);
    } else {
      // Not the last step, just go to the next step
      setStep(s => s + 1);
    }
    actions.setSubmitting(false);
  };

  // Handler for previous button
  const handleBack = () => {
    setStep(current => current - 1);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={currentValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, values, isSubmitting }) => (
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="center"
          align="flex-start"
          wrap="wrap"
          p={5}
        >
          <Box flex="1" p={5}>
            <Heading mb={5}>Create Candidate Requisition</Heading>
            <Form>
              <FormHeader currentStep={step} />
              {step === 0 && (
                  // Requisition Details Fields
                  <>
                    <FormControl isInvalid={!!errors.requisitionTitle && touched.requisitionTitle}>
                      <FormLabel htmlFor="requisitionTitle">Requisition Title</FormLabel>
                      <Field as={Input} id="requisitionTitle" name="requisitionTitle" />
                      <FormErrorMessage><ErrorMessage name="requisitionTitle" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.numberOfOpenings && touched.numberOfOpenings}>
                      <FormLabel htmlFor="numberOfOpenings">Number of Openings</FormLabel>
                      <Field as={Input} id="numberOfOpenings" name="numberOfOpenings" type="number" />
                      <FormErrorMessage><ErrorMessage name="numberOfOpenings" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.gender && touched.gender}>
                      <FormLabel htmlFor="gender">Gender</FormLabel>
                      <Field as={Select} id="gender" name="gender" placeholder="Select gender">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      <FormErrorMessage><ErrorMessage name="gender" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.urgency && touched.urgency}>
                      <FormLabel htmlFor="urgency">Urgency</FormLabel>
                      <Field as={Select} id="urgency" name="urgency" placeholder="Select urgency">
                        <option value="">Select urgency</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </Field>
                      <FormErrorMessage><ErrorMessage name="urgency" /></FormErrorMessage>
                    </FormControl>
                  </>
                )}

                {step === 1 && (
                  <>
                    <FormControl isInvalid={!!errors.jobTitle && touched.jobTitle}>
                      <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                      <Field as={Input} id="jobTitle" name="jobTitle" placeholder="Enter job title" />
                      <FormErrorMessage><ErrorMessage name="jobTitle" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.jobDetails && touched.jobDetails}>
                      <FormLabel htmlFor="jobDetails">Job Details</FormLabel>
                      <Field as={Input} id="jobDetails" name="jobDetails" placeholder="Enter job details" />
                      <FormErrorMessage><ErrorMessage name="jobDetails" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.jobLocation && touched.jobLocation}>
                      <FormLabel htmlFor="jobLocation">Job Location</FormLabel>
                      <Field as={Input} id="jobLocation" name="jobLocation" placeholder="Enter job location" />
                      <FormErrorMessage><ErrorMessage name="jobLocation" /></FormErrorMessage>
                    </FormControl>
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormControl isInvalid={!!errors.interviewMode && touched.interviewMode}>
                      <FormLabel htmlFor="interviewMode">Interview Mode</FormLabel>
                      <Field as={Select} id="interviewMode" name="interviewMode" placeholder="Select interview mode">
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </Field>
                      <FormErrorMessage><ErrorMessage name="interviewMode" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.interviewDuration && touched.interviewDuration}>
                      <FormLabel htmlFor="interviewDuration">Interview Duration</FormLabel>
                      <Field as={Select} id="interviewDuration" name="interviewDuration" placeholder="Select duration">
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                      </Field>
                      <FormErrorMessage><ErrorMessage name="interviewDuration" /></FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.language && touched.language}>
                      <FormLabel htmlFor="language">Language</FormLabel>
                      <Field as={Select} id="language" name="language" placeholder="Select language">
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                      </Field>
                      <FormErrorMessage><ErrorMessage name="language" /></FormErrorMessage>
                    </FormControl>
                  </>
                )}
              <Flex justify="space-between" mt={4}>
                {step > 0 && (
                  <Button colorScheme="teal" variant="outline" onClick={handleBack}>
                    Previous
                  </Button>
                )}
                <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
                  {step === validationSchemas.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Flex>
            </Form>
          </Box>
          {/* The Preview component must be rendered within the scope of Formik's render method */}
          <Box flex="1" p={5}>
            <Preview formData={values} />
          </Box>
        </Flex>
      )}
    </Formik>
  );
};

export default MultiStepForm;

