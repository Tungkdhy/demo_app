import React, { useState } from 'react';
import { View } from 'react-native';
import MailDetail from '../subcomponent/MailDetail';

const Mail = () => {
    const [mailDetail, setMailDetail] = useState({
        content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
        title: "KÍNH GỬI BCDD35 TỈNH ĐÀ NẴNG TÌNH HÌNH ANCT-TTATXH TRÊN KGM NGÀY 22/12/2024",
        time: "20:12 22/12/2024",
        avatar: "T",
        userName: "Trần Tùng"
    })
    return (
        <View>
            <MailDetail content={mailDetail.content} title={mailDetail.title} time={mailDetail.time} avatar={mailDetail.avatar} userName={mailDetail.userName} />
        </View>
    );
};

export default Mail;