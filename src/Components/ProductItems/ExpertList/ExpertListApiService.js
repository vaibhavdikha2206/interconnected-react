import { API_BASE_URL } from "../../../Constants";
import { accessToken } from "../../../tokenConst";

export async function expertListApiService() {
  try {
    const storedObject = JSON.parse(localStorage.getItem("loginData"));
    //var accessToken = storedObject.response.accessToken;
    console.log("fetched access token " + accessToken); // Should log { key: 'value' }

    const response = await fetch(`${API_BASE_URL}/api/experts/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log("Data from Expert API " + JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
