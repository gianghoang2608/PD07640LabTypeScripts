import React from "react";
import SectionView from "../../../components/SectionView"; // Đảm bảo điều chỉnh đường dẫn đến tệp SectionView
import { Button, Image } from "react-native";

const Ex2 = () => {
    const dummyData = [
        {
            title: "Lịch trình",
            events: [
                {
                    title: "Địa điểm",
                    content: "Hồ Tràm, Vũng Tàu"
                },
                {
                    title: "Thời gian",
                    content: "9:00 AM - 12:00 AM, 12/12/2024 "
                },
                {
                    title: "Phương tiện di chuyển",
                    content: "Xe bus"
                },
                {
                    title: "Thời gian",
                    content: "21:00 - 22:00 "
                },
                {    
                    title: "Hình ảnh",
                    content: <Image source={require('../../../assests/beach.jpg')}></Image>
                },
            ]
        },
        {
            title: "Khách sạn",
            events: [
                {
                    title: "Tên khách hàng",
                    content: "Hồng Quỳnh"
                },
                {
                    title: "Giờ mở cửa",
                    content: "6:00 AM - 12:00 AM"
                },
                {
                    title: "Địa điểm",
                    content: "234 Quang Trung, Hồ Chí Minh"
                },
                {
                    title: "",
                    content: <Button title="Book Now"></Button>
                }
                
            ]
        }
    ];

    return (
        <SectionView eventsInfo={dummyData} />
    );
};

export default Ex2;
