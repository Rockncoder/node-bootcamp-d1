const req = http.request(options, response => {
  response.on("data", data => {
    console.log("some data from the response", data);
  });
  response.on("end", () => {
    console.log("response ended");
  });
});

req.end();