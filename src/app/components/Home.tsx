import { Box, Button, Grid, GridItem, Text, Input, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [files, setFiles] = useState<{ [key: string]: { name: string; uploaded: boolean } }>({
    purchaseOrder: { name: '', uploaded: false },
    bookings: { name: '', uploaded: false },
    shippingInstructions: { name: '', uploaded: false },
    invoice: { name: '', uploaded: false },
    billOfLading: { name: '', uploaded: false },
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

  const handleFetchClick = (type: string) => {
    alert(`Fetching ${type}...`);
  };

  const handleGenerateProof = () => {
    alert('Generating Data Integrity Proof...');
  };

  return (
    <Box p={6}>
      {/* Existing ZKPET Components */}
      <Box mb={8}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Link href="/deep-composition-prover" passHref>
            <Box
              bgGradient="linear(to-r, orange.300, orange.400)"
              height="150px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              cursor="pointer"
            >
              <Text color="white" fontSize="lg">ZKPET Deep Composition</Text>
            </Box>
          </Link>

          <Link href="/domain-registry" passHref>
            <Box
              bgGradient="linear(to-r, orange.300, orange.400)"
              height="150px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              cursor="pointer"
            >
              <Text color="white" fontSize="lg">ZKPET Domain Registry</Text>
            </Box>
          </Link>
        </Grid>
      </Box>

      {/* Prover Sections */}
      <Box mb={8}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Link href="/business-process-prover" passHref>
            <Box
              bgGradient="linear(to-r, orange.300, orange.400)"
              height="150px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              cursor="pointer"
            >
              <Text color="white" fontSize="lg">ZKPET Business Process Prover</Text>
            </Box>
          </Link>

          <Link href="/riskmodel" passHref>
  <Box
    bgGradient="linear(to-r, orange.300, orange.400)"
    height="150px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="md"
    cursor="pointer"
  >
    <Text color="white" fontSize="lg">ZKPET Risk Model Prover</Text>
  </Box>
</Link>
        </Grid>
      </Box>

      {/* Upload Section */}
      <Text fontSize="xl" mb={4}>
        Upload your process information (supply chain finance documents and data). Standards supported are:
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

        {/* Right Side */}
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

      {/* Other Buttons */}
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
          Generate Data Integrity Proof
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
