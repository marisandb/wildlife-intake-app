import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './index.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Flex,
    Box,
    Spacer
  } from "@chakra-ui/react"

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
          <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink color="white" as={Link} to="allAnimals">
                View all Animals
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="white">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
            </BreadcrumbItem>
        </Breadcrumb>

        

      );
    } else {
      return (
        <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize="xl" mr="4" color="white" as={Link} to="/">Home</BreadcrumbLink>
        </BreadcrumbItem>       
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xl" mr="4" color="white" as={Link} to="/signup">
            Signup
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xl" mr="4" color="white" as={Link} to="/login">
            Login
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xl" mr="4" color="white" as={Link} to="/intakeForm">
              IntakeForm
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xl" mr="4" color="white" as={Link} to="/allAnimals">
            All animals            
            </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      );
    }
  }

  return (
    <header>
      <nav>
        <Flex>
            <Box p="5">
            <Heading size="lg" color="white">
                Coulee Region Humane Society Wildlife Rehabilitation
            </Heading>
            </Box>
            <Spacer />
            <Box>
            {showNavigation()}
            </Box>
        </Flex>
      </nav>
    </header>
  );
}

export default Nav;
