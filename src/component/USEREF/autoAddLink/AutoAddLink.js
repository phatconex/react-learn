import React, { useRef, useEffect } from "react";
import "./AutoAddLink.css";
const AutoAddLink = () => {
    const contentRef = useRef();
    useEffect(() => {
        const listLink = contentRef.current.querySelectorAll("a");
        console.log(listLink);
        listLink.forEach((element) => {
            element.setAttribute("target", "_blank");
            element.style.color = "blue";
        });
    }, []);
    return (
        <div className="detail-content" ref={contentRef}>
            <p>
                <a href="">TikTok</a> đã trải qua năm 2023 nhiều biến động tại Mỹ, nhưng cuộc bầu cử tổng thống năm 2024 có thể giúp ứng dụng này trỗi
                dậy.
            </p>
            <p>
                Đầu năm 2023, số phận của <a href="">TikTok</a> tại Mỹ đã bị thử thách khi chính quyền một số bang tìm cách áp đặt các biện pháp hạn
                chế sử dụng nó, viện dẫn mối lo ngại về an ninh liên quan tới Trung Quốc. Bang Montana thậm chí đã ban hành lệnh cấm{" "}
                <a href="">TikTok</a> trên phạm vi toàn bang.
            </p>
            <p>
                Tuy nhiên, hiện tại, <a href="">TikTok</a> dường như sẵn sàng cho năm 2024 với nền tảng vững chắc hơn, khi không chính đảng nào tại Mỹ
                muốn bắt đầu năm bầu cử bằng cách cấm một ứng dụng có tới 150 triệu người dùng, chủ yếu là thanh niên.
            </p>
        </div>
    );
};

export default AutoAddLink;
