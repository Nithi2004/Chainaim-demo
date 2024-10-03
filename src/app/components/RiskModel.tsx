import { Box, Button, Grid, GridItem, Text, Input, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const RiskModel = () => {
  const [files, setFiles] = useState<{ [key: string]: { name: string; uploaded: boolean } }>({
    riskAssessment: { name: '', uploaded: false },
    mitigationPlan: { name: '', uploaded: false },
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

  const handleFetchClick = (type: string) => {
    alert(`Fetching ${type}...`);
  };

  const handleGenerateProof = () => {
    alert('Generating Risk Model Proof...');
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Risk Model Prover</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Text fontWeight="bold">Risk Assessment:</Text>
          <Input
            id="riskAssessment-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('riskAssessment', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('riskAssessment')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('riskAssessment')}>
            Fetch
          </Button>
          {files.riskAssessment.uploaded && (
            <Text color="green.500" display="flex" alignItems="center">
              <Icon as={CheckIcon} color="green.500" mr={2} /> {files.riskAssessment.name}
            </Text>
          )}
        </GridItem>

        <GridItem>
          <Text fontWeight="bold">Mitigation Plan:</Text>
          <Input
            id="mitigationPlan-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('mitigationPlan', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('mitigationPlan')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('mitigationPlan')}>
            Fetch
          </Button>
          {files.mitigationPlan.uploaded && (
            <Text color="green.500" display="flex" alignItems="center">
              <Icon as={CheckIcon} color="green.500" mr={2} /> {files.mitigationPlan.name}
            </Text>
          )}
        </GridItem>
      </Grid>

      {/* Generate Risk Model Proof Button */}
      <Box mt={8} textAlign="center">
        <Button colorScheme="teal" size="lg" onClick={handleGenerateProof}>
          Generate Risk Model Proof
        </Button>
      </Box>
    </Box>
  );
};

export default RiskModel;
