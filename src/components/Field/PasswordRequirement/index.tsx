import { Box, Text } from "@mantine/core";
import { IconCheck, IconX} from "@tabler/icons";

export function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text
            color={meets ? 'teal' : 'red'}
            sx={{display: 'flex', alignItems: 'center'}}
            mt={7}
            size="sm"
        >
            {meets ? <IconCheck size={14} /> : <IconX size={14} /> } <Box ml={10}>{label}</Box>
        </Text>
    )
}