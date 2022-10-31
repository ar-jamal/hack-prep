{data.map((e, i) => {
    switch (data[i]) {
      case "Course":
        <CusSelect
          label="Course *"
          onChange={(e) => inputChangeHandler("Course", e.target.value)}
          value={course}
          child={[
            "Mobile & Web Development",
            "Python",
            "Machine Learning",
            "English Language",
          ]}
        />
        break;
      case "Sec":
        <CusSelect
          label="Sec *"
          onChange={(e) => inputChangeHandler("Sec", e.target.value)}
          value={sec}
          child={[
            "Sec A",
            "Sec B",
            "Sec C",
          ]}
        />
        break;
      default:
        <Input
          required={true}
          label={data[i]}
          onChange={(e) => inputChangeHandler(data[i], e.target.value)}
        />

    }
  })}