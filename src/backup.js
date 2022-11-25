if (submited.count <= 1) {
    setSubmited({ ...submited, status: true });

    sendFile(values).then((data) => {
      notify(); // show error

      setSubmited({ status: false, count: 1 });
      console.log(data);
    });
  } else {
    sendFile(values).then((data) => {
      // redirect
      navigate("../processing", { state: { domain: location.state.domain } });
      console.log("ok");
    });
    console.log(submited.count);
  }