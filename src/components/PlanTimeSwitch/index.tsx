import { Stack, Switch, Text } from "@chakra-ui/react"

export default function PlanTimeSwitch(props: {
    setSelected: (val: boolean) => void;
    isSelected: boolean;
}) {
    return (
        <Stack align='center' direction='row'>
            <Text>
                {props.isSelected ? "Trimestral" : "Mensal"}
            </Text>
            <Switch size='lg' onChange={(e) => {
                props.setSelected(e.target.checked)
            }}/>
        </Stack>
    )
}
