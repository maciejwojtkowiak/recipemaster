import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {FiBookmark} from 'react-icons/fi'

const Bookmark = () => {
    return ( 
        <Menu>
            <MenuButton 
                background="none"
                as={IconButton}
                borderRadius='md'
                borderWidth='0px'
                _hover={{bg: "none"}}
                _expanded={{ bg: 'none' }}
                _focus={{ boxShadow: 'none' }}
                _active={{bg: 'none'}}
                icon={<Icon as={FiBookmark} w={8} h={8} />}
            />
            <MenuList>
                <MenuItem>Elo</MenuItem>
            </MenuList>

            
        </Menu>
    )
}

export default Bookmark