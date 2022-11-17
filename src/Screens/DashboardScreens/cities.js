import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMGrid from "../../config/components/SMGrid";
import SMInput from "../../config/components/SMInput";
import SMSelect from "../../config/components/SMSelect";
import { getData, sendData } from "../../config/firebasemethods";

function Cities() {
    const [model, setModel] = useState({});
    const [citiesList, setCitiesList] = useState([]);

    let saveCity = () => {
        console.log(model);
        sendData(model, "cities")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getCityData = () => {
        getData("cities")
            .then((res) => {
                setCitiesList(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCityData();
    }, []);

    return (
        <>
            <div>
                <h1>Cities</h1>
                <Container>
                    <Grid container>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMSelect
                                displayField="countryName"
                                valueField="countryCode"
                                label="Country"
                                nodeName="countries"
                                onChange={(e) =>
                                    setModel({ ...model, countryCode: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMInput
                                label="City Name"
                                onChange={(e) =>
                                    setModel({ ...model, cityName: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid sx={{ padding: 2 }} md={4} item>
                            <SMInput
                                label="City Code"
                                onChange={(e) =>
                                    setModel({ ...model, cityCode: e.target.value })
                                }
                            />
                        </Grid>
                        <Grid md={4} item>
                            <SMButton onClick={saveCity} label="Save" />
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <SMGrid
                        datasource={citiesList}
                        Cols={[
                            {
                                key: "id",
                                displayName: "Id",
                            },
                            {
                                key: "cityName",
                                displayName: "City Name",
                            },
                            {
                                key: "cityCode",
                                displayName: "City Code",
                            },
                            {
                                key: "countryCode",
                                displayName: "Country Code",
                            },
                        ]}
                    />
                </Container>
            </div>
        </>
    );
}
export default Cities;
