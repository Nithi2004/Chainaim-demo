import { Box, Button, Text, Input, Icon, Divider, Grid, FormControl, FormLabel, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

const BusinessProcessProver = () => {
  const [files, setFiles] = useState<{ [key: string]: { name: string; uploaded: boolean } }>({
    document1: { name: '', uploaded: false },
    document2: { name: '', uploaded: false },
  });

  const handleFileChange = (type: string, file: File | null) => {
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [type]: { name: file.name, uploaded: true },
      }));
    }
  };

  const handleUploadClick = (type: string) => {
    const inputElement = document.getElementById(`${type}-input`) as HTMLInputElement;
    inputElement.click();
  };

  const handleGenerateProofs = () => {
    if (files.document1.uploaded && files.document2.uploaded) {
      alert('Business process proofs generated!');
    } else {
      alert('Please upload all required documents.');
    }
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Business Process Prover</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={8} mb={8}>
        <GridItem>
          <FormControl mb={4}>
            <FormLabel>Document 1</FormLabel>
            <Input
              id="document1-input"
              type="file"
              accept=".pdf,.doc,.docx,.json"
              onChange={(e) => handleFileChange('document1', e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
            <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('document1')}>
              Upload
            </Button>
            {files.document1.uploaded && (
              <Text color="green.500" display="flex" alignItems="center">
                <Icon as={CheckIcon} color="green.500" mr={2} /> {files.document1.name}
              </Text>
            )}
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl mb={4}>
            <FormLabel>Document 2</FormLabel>
            <Input
              id="document2-input"
              type="file"
              accept=".pdf,.doc,.docx,.json"
              onChange={(e) => handleFileChange('document2', e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
            <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('document2')}>
              Upload
            </Button>
            {files.document2.uploaded && (
              <Text color="green.500" display="flex" alignItems="center">
                <Icon as={CheckIcon} color="green.500" mr={2} /> {files.document2.name}
              </Text>
            )}
          </FormControl>
        </GridItem>
      </Grid>

      <Button colorScheme="teal" size="lg" onClick={handleGenerateProofs}>
        Generate Business Process Proofs
      </Button>

      <Divider borderColor="black" my={8} />

      <Text fontSize="xl" fontWeight="bold">Additional Information</Text>
      {/* Add any other specific sections for this page */}
    </Box>
  );
};

export default BusinessProcessProver;
