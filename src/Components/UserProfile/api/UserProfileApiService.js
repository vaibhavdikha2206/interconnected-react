import { API_BASE_URL } from "../../../Constants";
import { accessToken } from "../../../tokenConst";

export async function fetchDataForUserProfile() {
    /*try {
      //const response = await fetch("https://swapi.dev/api/${text}/?format=json");
      //const response = await fetch("http:localhost:8080/swapi2/${text}");
      const response = await fetch('http://18.212.182.224:8080/api/auth/login');
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }*/

      return profileData
  }

  export async function expertDetailsApiService(expertId) {
    try {
      const storedObject = JSON.parse(localStorage.getItem("loginData"));
      //var accessToken = storedObject.response.accessToken;
      //var accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YWliaGF2ZGlraGEyMjA0QGdtYWlsLmNvbSIsImlhdCI6MTczMTYxNjc4MywiZXhwIjoxNzMyNTE2NzgzfQ.gA03lJVMP_8wMhlfkEL4bmM-IZjb_R_h01LLiaqMosge7lC7V6qlne2923l0kGiRdhmeXfErOYT5-QQeZVmyLA"
      console.log("fetched access token " + accessToken); // Should log { key: 'value' }
  
      const response = await fetch(`${API_BASE_URL}/api/experts/${expertId}/details`, {
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
      console.log("Data from Expert Details API " + JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  

export const profileData =
    {
        name: "Shivam",
        company: "Lodu Corp",
        stack: "Hands-free, Hads-on Mushc Experience",
        introduction: "Mooooooooooooooooooooooooooooo",
        price: "2",
        items: [
            {
                title: "Mock Interview",
                price: 2,
                description: "Hands-free, Hads-on Mushc Experience",
                content: "Here you can write some things to attract customers"
            },
            {
                title: "Lap Dance",
                price: 2,
                description: "Hands-free, Hads-on Mushc Experience",
                content: "Here you can write some things to attract customers"
            },
            {
                title: "Blowjob",
                price: 2,
                description: "Hands-free, Hads-on Mushc Experience",
                content: "Here you can write some things to attract customers"
            }
        ]
}


const items = [
    {
        title: "Mock Interview",
        price: 2,
        description: "Hands-free, Hads-on Mushc Experience",
        content: "Here you can write some things to attract customers"
    },
    {
        title: "Lap Dance",
        price: 2,
        description: "Hands-free, Hads-on Mushc Experience",
        content: "Here you can write some things to attract customers"
    },
    {
        title: "Blowjob",
        price: 2,
        description: "Hands-free, Hads-on Mushc Experience",
        content: "Here you can write some things to attract customers"
    }
]

export const slotDetails = [ 
    {
        date: "22/04/2024",
        price: 200,
        day: "Chewsday",
        time: "06:00 PM"
    },
    {
        date: "16/06/2024",
        price: 200,
        day: "Chewsday",
        time: "06:00 PM"
    },
]

export default profileData;