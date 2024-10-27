import { API_BASE_URL } from "../../../Constants";

export async function fetchDataFromAPIFromText(text) {
  try {
    //const response = await fetch("https://swapi.dev/api/${text}/?format=json");
    //const response = await fetch("http:localhost:8080/swapi2/${text}");
    const response = await fetch(`${API_BASE_URL}/api/swapi3/${text}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function login(googleTokenObject) {
  const loginRequestData = googleTokenObject ;

  try {
  const response = await fetch(`${API_BASE_URL}/api/auth/googleLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequestData),
  });


  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error("Error fetching data:", error);
  throw error;
}

  
}

function makeLoginRequestBody(username, password) {
  const requestData = {
    // Your POST request payload
    username: username,
    password: password,
  };

  return requestData;
}
