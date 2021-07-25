import { User } from "./User"

export const USERS: User[] = [
    {
        id: "IU1685",
        profile: "assets/image.png",
        firstname: "Lindsey",
        lastname: "Stroud",
        emailid: "lindsey.stroud@gmail.com",
        role: "Admin",
        usertype: "Internal",
        customers: 6,
        updatedOnDate: "16 Feb 2021",
        updatedOnTime: "02:30 Pm",
        status: "Active",
    },
    {
        id: "IU1234",
        profile: "assets/image 2.png",
        firstname: "Nicci",
        lastname: "Troiani",
        emailid: "nicci.troiani@gmail.com",
        role: "",
        usertype: "Internal",
        customers: 0,
        updatedOnDate: "08 Feb 2021",
        updatedOnTime: "11:30 Am",
        status: "Draft",
    },
    {
        id: "IU2456",
        profile: "assets/image 3.png",
        firstname: "Geroge",
        lastname: "Fields",
        emailid: "geroge.fields@gmail.com",
        role: "Sales Head",
        usertype: "Internal",
        customers: 3,
        updatedOnDate: "28 Feb 2021",
        updatedOnTime: "04:30 Pm",
        status: "Pending Approval",
    }
]