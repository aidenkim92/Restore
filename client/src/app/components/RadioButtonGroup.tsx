import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Props{
    options: any[];
    onChange: (event: any) => void;
    selectedValue: string;
}

export default function RadioButtonGroup({selectedValue,options, onChange }: Props) {
    console.log(selectedValue);
    console.log(options);

  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            value={value}
            control={<Radio />}
            label={label}
            key={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
