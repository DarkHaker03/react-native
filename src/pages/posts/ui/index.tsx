import { FC, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from 'axios';
import { isPhoneModel } from "../../../processes/isPhone";
import { useUnit } from "effector-react";
import styles from "./styles";

type AddressArguments = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  }
}

type UserArguments = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: AddressArguments,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

type PostArguments = {
  userId: string,
  id: string,
  title: string,
  body: string,
}

type ImgArguments = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

const Posts: FC = () => {
  const [users, setUsers] = useState<UserArguments[]>([]);
  const [posts, setPosts] = useState<PostArguments[]>([]);
  const [photos, setPhotos] = useState<ImgArguments[]>([]);
  const isPhone = useUnit(isPhoneModel.$state);
  useEffect(() => {
    (async () => {
      const newData = (await axios.get<UserArguments[]>('https://jsonplaceholder.typicode.com/users')).data;
      const newData2 = (await axios.get<PostArguments[]>('https://jsonplaceholder.typicode.com/posts')).data;
      const newData3 = (await axios.get<ImgArguments[]>('https://jsonplaceholder.typicode.com/photos')).data;
      setUsers(newData);
      setPosts(newData2);
      setPhotos(newData3);
    })();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={!isPhone && { flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
          {users.map(({ id, company, name }) => {
            let post: PostArguments = {
              userId: '',
              id: '',
              title: '',
              body: ''
            };
            if (posts.length !== 0) {
              post = posts.filter((item) => item.id === id)[0];
            }
            let photoUrl: string = '';
            if (photos.length !== 0) {
              photoUrl = photos.filter((item) => item.albumId == Number(post.userId))[0].url;
            }
            console.log(photoUrl);
            return (
              <View style={isPhone ? styles.post : styles.postTablet} key={id}>
                {!isPhone
                  && <Image
                    style={styles.img}
                    source={{ uri: photoUrl + '.png' }}
                  />
                }
                <Text style={styles.text}>
                  Autor:{name}
                </Text>
                <Text style={styles.text}>
                  Company:{company.name}
                </Text>
                <Text style={styles.text}>
                  Title:{post.title}
                </Text>
                {
                  !isPhone
                  && <Text style={styles.text}>
                    Body:{post.body}
                  </Text>
                }
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Posts;
