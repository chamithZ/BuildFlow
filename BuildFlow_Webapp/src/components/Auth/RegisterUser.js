import React, { useState } from 'react';
import { Link as ChakraLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Swal from "sweetalert2";
import axios from 'axios';

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState(''); // Set default value for address
  const [role, setRole] = useState('Site Manager');
  const [password, setPassword] = useState('');
  const [salary, setSalary] = useState(0); // Set default value for salary
  const [status, setStatus] = useState('Active'); // Set default value for status

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '') {
      Swal.fire('error', 'Fill All the Required Fields', 'error');
    } else {
      let newdata = {
        userName: userName,
        email: email,
        mobile: mobile,
        address: address,
        roles: role,
        password: password,
        salary: salary,
        status: status,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/v1/users/saveUser', newdata);

        if (response.data.message=='Success !') {
          const userData = response.data;
          console.log("return data", userData);
          if (userData.token) {
            localStorage.setItem("token", userData.token);
            localStorage.setItem("userRole", userData.userRole);
            Swal.fire('Congrats', 'Successfully created your Account', 'success');
          } else {
            Swal.fire('error', 'Try Again!', 'error');
          }
        } else {
          Swal.fire('error', 'Failed to save user. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire('error', 'An error occurred while saving the user.', 'error');
      }
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form>
            <FormControl id="userName" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input type="text" value={userName} onChange={handleUserName} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmail} />
            </FormControl>
            <FormControl id="mobile">
              <FormLabel>Mobile</FormLabel>
              <Input type="text" value={mobile} onChange={handleMobile} />
            </FormControl>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input type="text" value={address} onChange={handleAddress} />
            </FormControl>
            <FormControl id="role" isRequired>
              <FormLabel>User Role</FormLabel>
              <Select value={role} onChange={handleRole}>
                <option value="Site Manager">Site Manager</option>
                <option value="Procurement Staff">Procurement Staff</option>
                <option value="Company Manager">Company Manager</option>
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePassword}
              />
            </FormControl>
            <Stack spacing={4} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <ChakraLink as={Link} to="/login" color={'blue.400'}>Login</ChakraLink>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterUser;
