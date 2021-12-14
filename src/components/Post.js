const handlePost = (e) => {
  e.preventDefault();

  const testData = [{ name: "Hoppily Ever After", amount: 200 }];

  fetch("https://bandoen.herokuapp.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testData),
  }).then(() => console.log("POST", testData));
};
