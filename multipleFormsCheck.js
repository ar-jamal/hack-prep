const optionsInput = (options) => {
    console.log(options);
    let subItems = [];
    for (let i = 0; i < options; i++) {
      items[i].question(
        <Grid item xs={4}>
          <CusInput
            key={i}
            label={`Option-${i + 1}`}
            onChange={(e) =>
              setAnsOptions([...ansOptions.push(e.target.value)])
            }
            value={ansOptions[i]}
          />
        </Grid>
      );
    }
    return items;
  };
  const quesInput = (moreQues) => {
    console.log(moreQues);
    let items = [];
    for (let i = 0; i < moreQues; i++) {
      items.push(
        <>
          <Grid item xs={8}>
            <CusInput
              required={true}
              label="Question"
              // placeholder= "create questions"
              onChange={(e) => inputChangeHandler("Question", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <CusInput
              label="Correct Answer *"
              onChange={(e) =>
                inputChangeHandler("CorrectAnswer", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "30" }}>
            <Button
              onClick={() => setOptions(options + 1)}
              style={{
                minWidth: "15%",
                alignSelf: "start",
                marginBlock: 20,
                fontSize: 18,
              }}
            >
              Add Ans Options
            </Button>
          {!!options && optionsInput(options)}
          </Grid>
        </>
      );
    }
    return (
      <>
        items;
      </>
    );
  };
