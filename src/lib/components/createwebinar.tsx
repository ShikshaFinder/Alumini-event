import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {};

function alumni({}: Props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [enroll, setEnroll] = useState("");
  const [passout, setPassout] = useState("");

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create A Webinar
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="discription" isRequired>
                <FormLabel>Discription</FormLabel>
                <Textarea
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
                {/* </FormControl>
              <FormControl id="enroll" isRequired>
                <FormLabel>Enrollment number</FormLabel>
                <Input
                  type="number"
                  value={enroll}
                  onChange={(e) => {
                    setEnroll(e.target.value);
                  }}
                /> */}
                {/* </FormControl>
              <FormControl id="passoutyear" isRequired>
                <FormLabel>Passout Year</FormLabel>
                <Input
                  type="number"
                  value={passout}
                  onChange={(e) => {
                    setPassout(e.target.value);
                  }}
                /> */}
              </FormControl>
              <input type="datetime-local" />
              <Stack spacing={10} pt={2}>
                <Button loadingText="Submitting" size="lg">
                  Apply
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}

export default alumni;
