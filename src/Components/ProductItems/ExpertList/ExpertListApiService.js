export async function expertListApiService(toggleLoadingStateCallback) {
    try {
        const storedObject = JSON.parse(localStorage.getItem('loginData'));
        var accessToken = storedObject.response.accessToken
        console.log("fetched access token "+accessToken); // Should log { key: 'value' }

        // const response = await fetch("http://18.212.182.224:8080/api/experts/list", {
        // method: "GET",
        // headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": "Bearer "+accessToken
        // }
        // });
  
        setTimeout(() => {
          const data = {"hehe":"hehe2"}
          console.log("Data from Expert API "+JSON.stringify(data))
          toggleLoadingStateCallback(false)
          return data;
        }, 2000); // 2000ms = 2 seconds
        
  
    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    // const data = await response.json();
    // console.log("Data from Expert API "+JSON.stringify(data))
    // return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
  
    
  }