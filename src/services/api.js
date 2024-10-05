export const userAuthenticate = async (username, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      }
    );

    const data = await response.json();
    console.log("the data in api is :", data);

    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
