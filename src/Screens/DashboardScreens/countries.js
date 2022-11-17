import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMInput from "../../config/components/SMInput";
import { sendData } from "../../config/firebasemethods";

function Countries() {
  const [model, setModel] = useState({});

  let saveCurrency = () => {
    console.log(model);
    sendData(model, "countries")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h1>Countries</h1>
        <Container>
          <Grid container>
            <Grid sx={{ padding: 2 }} md={4} item>
              <SMInput
                label="Country Name"
                onChange={(e) =>
                  setModel({ ...model, countryName: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <SMInput
                label="Country Code"
                onChange={(e) =>
                  setModel({ ...model, countryCode: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <SMInput
                label="Currency"
                onChange={(e) =>
                  setModel({ ...model, currency: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <SMButton onClick={saveCurrency} label="Save" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Countries;
