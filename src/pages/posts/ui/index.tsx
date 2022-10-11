import { FC, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useUnit } from "effector-react";
import styles from "./styles";
import { ImgArguments, PostArguments, UserArguments } from "../model";
import { isPhoneModel } from "../../../processes/isPhone";
import { getFx } from "../../../shared/api/get";

const Posts: FC = () => {
  const [users, setUsers] = useState<UserArguments[]>([]);
  const [posts, setPosts] = useState<PostArguments[]>([]);
  const [photos, setPhotos] = useState<ImgArguments[]>([]);
  const isPhone = useUnit(isPhoneModel.$state);
  useEffect(() => {
    (async () => {
      const USERS = await getFx('https://jsonplaceholder.typicode.com/users');
      const POSTS = await getFx('https://jsonplaceholder.typicode.com/posts');
      const PHOTOS = await getFx('https://jsonplaceholder.typicode.com/photos');
      setUsers(USERS);
      setPosts(POSTS);
      setPhotos(PHOTOS);
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
