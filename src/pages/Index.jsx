import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="blue.600" color="white" py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            ChemTech Labs
          </Heading>
          <HStack spacing={4}>
            <Link href="#home" color="white">
              Home
            </Link>
            <Link href="#about" color="white">
              About Us
            </Link>
            <Link href="#services" color="white">
              Services
            </Link>
            <Link href="#contact" color="white">
              Contact
            </Link>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" id="home" py={10} textAlign="center">
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Welcome to ChemTech Labs
          </Heading>
          <Text fontSize="lg">Innovative Solutions for a Better Tomorrow</Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* About Us Section */}
      <Box as="section" id="about" py={10} bg="gray.100">
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          <Text fontSize="lg">ChemTech Labs is a leading provider of chemical solutions and services. Our mission is to deliver innovative and sustainable solutions to our clients.</Text>
          <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5fGVufDB8fHx8MTcxNTgwNDc1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Laboratory" borderRadius="md" />
        </VStack>
      </Box>

      {/* Services Section */}
      <Box as="section" id="services" py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            Our Services
          </Heading>
          <HStack spacing={8} justifyContent="center">
            <Box p={4} borderWidth={1} borderRadius="md" width="250px">
              <Heading as="h3" size="md">
                Chemical Analysis
              </Heading>
              <Text>We provide comprehensive chemical analysis services to ensure the quality and safety of your products.</Text>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="md" width="250px">
              <Heading as="h3" size="md">
                Research & Development
              </Heading>
              <Text>Our R&D team is dedicated to developing innovative solutions to meet your specific needs.</Text>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="md" width="250px">
              <Heading as="h3" size="md">
                Consulting Services
              </Heading>
              <Text>We offer expert consulting services to help you navigate the complexities of the chemical industry.</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={10} bg="gray.100">
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            Contact Us
          </Heading>
          <Text fontSize="lg">Have questions or need more information? Get in touch with us!</Text>
          <Button colorScheme="blue" size="lg">
            Contact Us
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" py={4} mt={10}>
        <VStack spacing={4}>
          <Text>&copy; {new Date().getFullYear()} ChemTech Labs. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="linkedin" />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
