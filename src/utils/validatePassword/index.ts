export const requirements = [
    { regex: /[0-9]/, label: 'Includes number' },
    { regex: /[a-z]/, label: 'Includes lowercase letter' },
    { regex: /[A-Z]/, label: 'Includes uppercase letter' },
    { regex: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

export function getStrength(password: string) {
    let multiplier = password.length > 6 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.regex.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}