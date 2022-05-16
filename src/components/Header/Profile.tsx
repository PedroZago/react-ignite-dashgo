import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Pedro Zago</Text>
            <Text color="gray.300" fontSize="small">
              pdecamargozago@gmail.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Pedro Zago" src="https://github.com/pedrozago.png" />
    </Flex>
  )
}