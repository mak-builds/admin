"use client";

import { getSelectedTab, getSidebarData } from "@/redux/SharedSlice";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";

const SideBar = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const sidebarData = useSelector(getSidebarData);
  const selectedTab = useSelector(getSelectedTab);

  const handleNavigate = (href: string) => router.push(href);

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <Flex
      width={"300px"}
      bgColor={"white.900"}
      height={"inherit"}
      flexDir={"column"}
    >
      <Text py={8} width={"inherit"} textAlign={"center"} variant={"logo"}>
        RedWood Admin
      </Text>
      <Divider mb={4} />
      <Accordion defaultIndex={[0]} allowMultiple variant={"sidebar"}>
        {sidebarData.map((tab) => {
          return (
            <AccordionItem key={tab.id}>
              <AccordionButton
                color={tab.id === selectedTab.id ? "brand.900" : ""}
              >
                <Flex alignItems={"center"} flex="1" textAlign="left">
                  <Box mr={2}>
                    <IoMdHome />
                  </Box>
                  {tab.label}
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {tab.subTabs.map((subTab) => {
                  return (
                    <Button
                      onClick={() => handleNavigate(tab.href)}
                      key={subTab.id}
                      color={
                        tab.id === selectedTab.id &&
                        subTab.id === selectedTab.subTabId
                          ? "brand.900"
                          : ""
                      }
                    >
                      {subTab.label}
                    </Button>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
      <button onClick={handleLogOut}>Log out</button>
    </Flex>
  );
};

export default SideBar;
