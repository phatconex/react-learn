import React from "react";
import UserItem from "./UserItem";
import "./User.css";
const UserList = () => {
    const userList = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            job: "Web developer",
            img: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
            male: true,
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            job: "Web developer",
            img: "https://duhocchaudaiduong.edu.vn/hinh-nen-fb-de-thuong/imager_1_4178_200.jpg",
            male: true,
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            job: "Web developer",
            img: "https://i.pinimg.com/originals/3c/b5/14/3cb514b0be85da4b31b8092361b7c948.jpg",
            male: false,
        },
    ];
    return (
        <div className="user-list">
            {userList.map((item, index) => (
                <UserItem
                    key={index}
                    name={item.name}
                    gender={item.male ? "male" : "female"}
                    job={item.job}
                    img={item.img}
                ></UserItem>
            ))}
        </div>
    );
};

export default UserList;
