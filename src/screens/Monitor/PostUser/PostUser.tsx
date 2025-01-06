import React,{useState} from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import OnlineItem from '../subcomponents/OnlineItem';
type PostType = {
    userName: string,
    time: string,
    content: string,
    like: string,
    comment: string,
    share: string,
    avatar: string
}
const PostUser = () => {
    const [listPost, setListPost] = useState<PostType[]>([
        {
            time: "27/11/2022",
            userName: "Trần Tùng",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "TT"
        },
        {
            time: "27/12/2022",
            userName: "Đào Hà",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "VH"
        },
        {
            time: "27/11/2022",
            userName: "Trần Trung",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "T"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "QB"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "QB"
        },
    ])
    return (
        <View>
            
            <View>
                <ScrollView>
                    {listPost.map((item: PostType, index: number) => (<OnlineItem share={item.share} time={item.time} like={item.like} userName={item.userName} avatar={item.avatar} comment={item.comment} content={item.content} />))}
                </ScrollView>
            </View>
        </View>
    );
};

export default PostUser;
const styles = StyleSheet.create({
    

});