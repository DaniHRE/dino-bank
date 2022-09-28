import { useState } from "react";
import { UseForm, UseFormReturnType } from "@mantine/form/lib/types";
import { PasswordInput, Popover, Progress } from "@mantine/core";
import { PasswordRequirement } from "../PasswordRequirement";
import { getStrength, requirements } from "../../../utils/validatePassword/index";

interface PasswordStrengthMeterProps {
    form: UseFormReturnType<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }>,
}

export default function PasswordStregthMeter({ form } : PasswordStrengthMeterProps) {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));

    return(
        <Popover opened={popoverOpened} position="bottom" width="target" transition="pop">
            <Popover.Target>
                <div
                    onFocusCapture={() => setPopoverOpened(true)}
                    onBlurCapture={() => setPopoverOpened(false)}
                >
                    <PasswordInput withAsterisk label="Password" placeholder="Create a password" mt="md" size="md"
                        {...form.getInputProps('password')} value={value} onChange={(event) => setValue(event.currentTarget.value)}/>
                </div>
            </Popover.Target>
            <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} style={{ marginBottom: 10  }} />
                <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
                {checks}
            </Popover.Dropdown>
        </Popover>    
    );
}