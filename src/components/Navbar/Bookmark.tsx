import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {FiBookmark} from 'react-icons/fi'

const Bookmark = () => {
    return ( 
        <Menu>
            <MenuButton 
                as={IconButton}
                icon={<Icon as={FiBookmark} />}
            />
            <MenuList>
                <MenuItem>Elo</MenuItem>
            </MenuList>

            
        </Menu>
    )
}

export default Bookmark