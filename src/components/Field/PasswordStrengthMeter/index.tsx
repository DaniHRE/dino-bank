import { useState, useEffect } from "react";
import { UseFormReturnType } from "@mantine/form/lib/types";
import { Box, PasswordInput, Popover, Progress, Text } from "@mantine/core";
import { getStrength, requirements } from "../../../utils/validatePassword/index";
import { IconCircleCheck, IconPlaystationX } from "@tabler/icons";

interface PasswordStrengthMeterProps {
    form: UseFormReturnType<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }>
}

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text
            color={meets ? 'teal' : 'red'}
            sx={{ display: 'flex', alignItems: 'center' }}
            mt={7}
            size="sm"
        >
            {meets ? <IconCircleCheck size={16} /> : <IconPlaystationX size={16} />} <Box ml={10}>{label}</Box>
        </Text>
    )
}

export default function PasswordStregthMeter({ form }: PasswordStrengthMeterProps) {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');

    useEffect(()=> {
        form.setFieldValue('password', value);
    }, [value]);

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.regex.test(value)} />
    ));

    console.log("Component: ", form.values);

    return (
        <Popover opened={popoverOpened} position="bottom" width="target" transition="pop">
            <Popover.Target>
                <div
                    onFocusCapture={() => setPopoverOpened(true)}
                    onBlurCapture={() => setPopoverOpened(false)}
                >
                    <PasswordInput withAsterisk label="Password" placeholder="Create a password" mt="md" size="md"
                         onChange={(event) => {setValue(event.currentTarget.value)}} />
                </div>
            </Popover.Target>
            <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
                <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
                {checks}
            </Popover.Dropdown>
        </Popover>
    );
}