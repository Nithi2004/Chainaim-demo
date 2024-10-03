import { Box, Button, Text, Input, Icon, FormControl, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

const BusinessProcessProver = () => {
  const [files, setFiles] = useState<{ [key: string]: { name: string; uploaded: boolean } }>({
    xmlFile: { name: '', uploaded: false },
    purchaseOrder: { name: '', uploaded: false },
    invoice: { name: '', uploaded: false },
    bookings: { name: '', uploaded: false },
    billOfLading: { name: '', uploaded: false },
    shippingInstructions: { name: '', uploaded: false },
    otherInstruments: { name: '', uploaded: false },
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

  const handleApproveClick = () => {
    alert('Template approved!');
  };

  const handleFetchClick = (type: string) => {
    alert(`Fetched data for ${type}`);
  };

  const handleGenerateProof = () => {
    alert('Data integrity proof generated!');
  };

  return (
    <Box p={6}>
      {/* Header Section */}
      <Text fontSize="2xl" fontWeight="bold" mb={4}>ZK_PET Business Process Prover</Text>

      {/* Instruction Section */}
      <Text fontSize="lg" mb={4}>Verify the sequence of your documents</Text>

      {/* BPMN Instruction */}
      <Text fontSize="md" mb={4}>
        1. Select the BPMN 2.0 (Business Process Modelling Notation) process definition template for the expected sequence of activities
      </Text>

      {/* Upload XML Button */}
      <FormControl mb={4}>
        <FormLabel>Upload XML</FormLabel>
        <Input
          id="xmlFile-input"
          type="file"
          accept=".xml"
          onChange={(e) => handleFileChange('xmlFile', e.target.files?.[0] || null)}
          style={{ display: 'none' }}
        />
        <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('xmlFile')}>
          Upload XML
        </Button>
        {files.xmlFile.uploaded && (
          <Text color="green.500" display="flex" alignItems="center">
            <Icon as={CheckIcon} color="green.500" mr={2} /> {files.xmlFile.name}
          </Text>
        )}
      </FormControl>

      {/* Fine-tune Instruction */}
      <Text fontSize="md" mb={4}>2. Fine-tune the template and approve</Text>

      {/* Approve Button */}
      <Button colorScheme="blue" size="lg" onClick={handleApproveClick}>
        Approve
      </Button>

      {/* Additional Section Below */}
      <Text fontSize="md" mb={4} mt={3}>
        3. Upload your process information (supply chain finance documents and data). Standards supported are:
      </Text>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Text fontWeight="bold">Purchase Order:</Text>
          <Input
            id="purchaseOrder-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('purchaseOrder', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('purchaseOrder')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('purchaseOrder')}>
            Fetch
          </Button>
          {files.purchaseOrder.uploaded && (
            <Text color="green.500" display="flex" alignItems="center">
              <Icon as={CheckIcon} color="green.500" mr={2} /> {files.purchaseOrder.name}
            </Text>
          )}
        </GridItem>

        <GridItem>
          <Text fontWeight="bold">Invoice (PEPPOL):</Text>
          <Input
            id="invoice-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('invoice', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('invoice')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('invoice')}>
            Fetch
          </Button>
          {files.invoice.uploaded && (
            <Text color="green.500" display="flex" alignItems="center">
              <Icon as={CheckIcon} color="green.500" mr={2} /> {files.invoice.name}
            </Text>
          )}
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
        <GridItem>
          <Text fontWeight="bold">Bookings (DCSA.org):</Text>
          <Input
            id="bookings-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('bookings', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('bookings')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('bookings')}>
            Fetch
          </Button>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold">Bill of Lading (DCSA.org):</Text>
          <Input
            id="billOfLading-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('billOfLading', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('billOfLading')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('billOfLading')}>
            Fetch
          </Button>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
        <GridItem>
          <Text fontWeight="bold">Shipping Instructions (DCSA.org):</Text>
          <Input
            id="shippingInstructions-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('shippingInstructions', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('shippingInstructions')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('shippingInstructions')}>
            Fetch
          </Button>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold">Other Instruments:</Text>
          <Input
            id="otherInstruments-input"
            type="file"
            accept=".json"
            onChange={(e) => handleFileChange('otherInstruments', e.target.files?.[0] || null)}
            style={{ display: 'none' }}
          />
          <Button colorScheme="blue" mr={4} onClick={() => handleUploadClick('otherInstruments')}>
            Upload
          </Button>
          <Button colorScheme="green" onClick={() => handleFetchClick('otherInstruments')}>
            Fetch
          </Button>
        </GridItem>
      </Grid>

      {/* Generate Data Integrity Proof Button */}
      <Box mt={8} ml={10} textAlign="center">
        <Button colorScheme="teal" size="lg" onClick={handleGenerateProof}>
          Generate Proof of Business Process Execution
        </Button>
      </Box>
    </Box>
  );
};

export default BusinessProcessProver;
