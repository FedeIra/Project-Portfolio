import { useToast } from "@chakra-ui/react";

const useToastNotifications = () => {
  const toast = useToast();

  const showToast = ({ title, description, status, duration }) => {
    toast({
      title,
      description,
      status,
      duration: duration ? duration : 3000,
      isClosable: true,
      position: "top-right",
    });
  };
  return { showToast };
};

export default useToastNotifications;
