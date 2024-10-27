import Image from "../../../Assets/testimg7.png";


const product_card = [
      {
        id: 1,
        name: "Shivam22",
        otherDetails: "Hands-free, Hads-on Mushc Experience",
     
        services: [
          {
            id: 1,
            serviceName: "Interview Preparation",
            price: 2000,
            duration: 60,
          },
          {
            id: 2,
            serviceName: "Resume Review",
            price: 1000,
            duration: 30,
          },
        ],
        timeslots: [
          {
            id: 5,
            dayOfWeek: "SUNDAY",
            startTime: "18:00:00",
            endTime: "19:00:00",
          },
          {
            id: 6,
            dayOfWeek: "SATURDAY",
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
        ],
      },
      {
        id: 2,
        name: "Vaibhav",
        otherDetails: "Hands-free, Hads-on Mushc Experience",
        organization: "Master Corp",
        skills: "java , c++ , springboot",
        price: 3,
        currency: "$",
        thumb: Image,
        services: [
          {
            id: 1,
            serviceName: "Interview Preparation",
            price: 2000,
            duration: 60,
          },
          {
            id: 2,
            serviceName: "Resume Review",
            price: 1000,
            duration: 30,
          },
        ],
        timeslots: [
          {
            id: 5,
            dayOfWeek: "SUNDAY",
            startTime: "18:00:00",
            endTime: "19:00:00",
          },
          {
            id: 6,
            dayOfWeek: "SATURDAY",
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
        ],
      },
      {
        id: 3,
        name: "Apoorv",
        otherDetails: "Hands-free, Hads-on Mushc Experience",
        organization: "Lodu Corp",
        skills: "java , c++ , springboot",
        price: 3,
        currency: "$",
        thumb: Image,
        services: [
          {
            id: 1,
            serviceName: "Interview Preparation",
            price: 2000,
            duration: 60,
          },
          {
            id: 2,
            serviceName: "Resume Review",
            price: 1000,
            duration: 30,
          },
        ],
        timeslots: [
          {
            id: 5,
            dayOfWeek: "SUNDAY",
            startTime: "18:00:00",
            endTime: "19:00:00",
          },
          {
            id: 6,
            dayOfWeek: "SATURDAY",
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
        ],
      }
    
]

export default product_card;