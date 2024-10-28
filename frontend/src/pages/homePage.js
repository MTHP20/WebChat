import React from 'react'
import { 
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, 
} from "@chakra-ui/react";


const HomePage = () => {
  return <Container maxW='xl' centerContent>
    <Box 
      d='flex'
      justifyContent='center'
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text fontSize="4xl" fontFamily='Work Sans' color='black'>
        WEBCHAT!
      </Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs variant="soft-rounded">
        <TabList mb="1em">
          <Tab width="50%">Login</Tab>
          <Tab width="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
};

export default HomePage;