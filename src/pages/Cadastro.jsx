import { Container, Input, Button, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Cadastro = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Cadastro</Text>
        <Input placeholder="Nome de usuário" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Telefone" type="tel" />
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Repetir senha" type="password" />
        <Button colorScheme="pink" width="100%">
          Cadastrar
        </Button>
        <Text>Ou entre com</Text>
        <IconButton aria-label="Google Sign-In" icon={<FaGoogle />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Cadastro;
