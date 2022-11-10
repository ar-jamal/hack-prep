import Switch from "@mui/material/Switch";

function CusSwitch(props) {
  const { label, onChange, value, Text } = props;
  return (
    <div style= {{display: "flex", alignItems: "center"}}>
     {Text && <p>Is Form Open</p>}
      <Switch checked={value} value={value} label={label} onChange={onChange} size= "large" />
    </div>
  );
}
export default CusSwitch;