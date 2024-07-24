import { Box, FlexProps, BoxProps, Flex } from "@chakra-ui/react";

interface ContainerProps extends BoxProps, FlexProps {
  children: React.ReactNode;
  containerAs?: "Flex" | "Box";
}

const RWContainer = ({
  children,
  containerAs = "Box",
  ...rest
}: ContainerProps) => {
  return (
    <>
      {containerAs === "Flex" ? (
        <Flex
          height={"inherit"}
          width={"inherit"}
          bgColor={"bianca.100"}
          overflow={"hidden"}
          maxH={"inherit"}
          maxW={"inherit"}
          {...rest}
        >
          {children}
        </Flex>
      ) : (
        <Box
          height={"inherit"}
          width={"inherit"}
          bgColor={"bianca.100"}
          overflow={"hidden"}
          maxH={"inherit"}
          maxW={"inherit"}
          p={4}
          {...rest}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default RWContainer;
