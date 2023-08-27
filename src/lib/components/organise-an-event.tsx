import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

const CustomDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isMeetingScheduled, setIsMeetingScheduled] = useState(false);

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      setIsMeetingScheduled(true);
    }
  };

  return (
    <Box p={8}>
      <Flex direction="column" align="center" maxW="md" mx="auto">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Schedule a Meeting
        </Text>

        <Input
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
          mb={4}
        />

        <Select
          placeholder="Select a time"
          onChange={(e) => setSelectedTime(e.target.value)}
          mb={4}
        >
          <option value="10:00">10:00 AM</option>
          <option value="14:00">2:00 PM</option>
          <option value="16:30">4:30 PM</option>
        </Select>

        <Button colorScheme="teal" onClick={handleScheduleMeeting}>
          Schedule Meeting
        </Button>

        {isMeetingScheduled && (
          <Box mt={4}>
            <Text color={useColorModeValue("green.600", "green.400")}>
              Meeting scheduled for {selectedDate} at {selectedTime}
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default CustomDateTimePicker;
