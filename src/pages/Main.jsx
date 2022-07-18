import SideNavbar from "../components/sideNavbar";
import {useState} from "react"
import Dashboard from "./Tabs/Dashboard";
import Usage from "./Tabs/Usage";
import Stock from "./Tabs/Stock";
import Notifications from "./Tabs/Notifications";
import Fournisseurs from "./Tabs/Fournisseurs";
import Utilisateurs from "./Tabs/Utilisateurs";
import Services from "./Tabs/Services";
import Apropos from "./Tabs/Apropos";
import Commandes from "./Tabs/Commandes";
import Historique from "./Tabs/Historique";
import Parametres from "./Tabs/Parametres";

  import { ReactNode } from 'react';
  import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Icon
  } from '@chakra-ui/react';

  import { HamburgerIcon, CloseIcon ,InfoIcon,EmailIcon,BellIcon} from '@chakra-ui/icons';

const { default: TopNavbar } = require("../components/TopNavbar");


function Main(){
    const [showSidebar,setShowSidebar]=useState(false)
    const [openTab,setOpenTab]=useState(1)
    const [section,setSection]=useState("3")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

    return(
        <div className="bg-[#eef5f9] h-screen w-screen">
            {/* <TopNavbar onOpen={onOpen} isOpen={isOpen} onClose={onClose}/> */}
          


    
      <Box bg={useColorModeValue('#2d62ec', '#2d62ec')} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            backgroundColor={'#2d62ec'}
            color={'#fff'}
            size={'md'}
            icon={isOpen ? <CloseIcon boxSize={6}/> : <HamburgerIcon boxSize={6}/>}
            aria-label={'Open Menu'}
            display={{ md: 'block' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
             <HStack>
             <IconButton
            backgroundColor={'#2d62ec'}
            color={'#fff'}
            size={'md'}
            icon={  <InfoIcon  boxSize={5}/>}
            aria-label={'Open Menu'}
            display={{ md: 'block' }}
            onClick={isOpen ? onClose : onOpen}
          />
             <IconButton
            backgroundColor={'#2d62ec'}
            color={'#fff'}
            size={'md'}
            icon={  <BellIcon  boxSize={5}  marginRight={5}/>}
            aria-label={'Open Menu'}
            display={{ md: 'block' }}
            onClick={isOpen ? onClose : onOpen}
           
          />
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </HStack>
              </MenuButton>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
      {openTab==1 && <Dashboard/> }
                {openTab==2 && <Stock/>}
                {openTab==3 && <Usage/>}
                {openTab==4 && <Notifications/>}
                {openTab==5 && <Commandes/>}
                {openTab==6 && <Fournisseurs/>}
                {openTab==7 && <Utilisateurs/>}
                {openTab==8 && <Services/>}
                {openTab==9 && <Historique/>}
                {openTab==10 && <Parametres/>}
                {openTab==11 && <Apropos/>}
      </Box>
    

            {isOpen &&
             <div className="fixed  flex top-0 h-full w-full z-50 ">
                 <SideNavbar openTab={openTab} setOpenTab={setOpenTab} setSection={setSection}  onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
             </div>}
                 {/* <div className="w-3/4 z-50 bg-[#000] opacity-30" onClick={onClose}>
                 </div> /}
            {/* </div>
            } */}
            {/* <div className="h-[calc(100vh-70px)]">
                {openTab==1 && <Dashboard/> }
                {openTab==2 && <Stock/>}
                {openTab==3 && <Usage/>}
                {openTab==4 && <Notifications/>}
                {openTab==5 && <Commandes/>}
                {openTab==6 && <Fournisseurs/>}
                {openTab==7 && <Utilisateurs/>}
                {openTab==8 && <Services/>}
                {openTab==9 && <Historique/>}
                {openTab==10 && <Parametres/>}
                {openTab==11 && <Apropos/>}
            </div> */}
            
            
        </div>
    )
}

export default Main;