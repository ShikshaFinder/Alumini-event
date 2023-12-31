import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  const [name, setName] = useState(""); // Initialize name state as empty string

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const generateLink = async () => {
    const encodedName = encodeURIComponent(name);
    const link = `https://example.com/greet?name=${encodedName}`;

    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied to clipboard: " + link);
    } catch (error) {
      alert("Failed to copy link to clipboard: " + error.message);
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "yellow",
                zIndex: -1,
              }}
            >
              Happy Rakhi From
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              {name || "नाम"} {/* Display entered name or default text */}
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            <Text fontWeight="bold">{/* Text here */}</Text>
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Input
              color="teal"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              _placeholder={{ color: "inherit" }}
            />
            <Button
              onClick={generateLink} // Call generateLink when button is clicked
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              लिंक जनरेट करें
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1659907521212-8bbdfa688aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
          }
        />
      </Flex>
    </Stack>
  );
}
