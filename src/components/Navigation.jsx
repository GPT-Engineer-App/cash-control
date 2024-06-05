import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Button as={Link} to="/" colorScheme="blue">
        Home
      </Button>
      <Button as={Link} to="/cadastro" colorScheme="blue">
        Cadastro
      </Button>
    </HStack>
  );
};

export default Navigation;
