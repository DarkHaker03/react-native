import { FC } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useUnit } from "effector-react";
import styles from "./styles";
import { PostArguments } from "../model";
import { isPhoneModel } from "../../../processes/isPhone";
import { $users, $posts, $photos } from "../model";

const POST_DEFAULT: PostArguments = {
  userId: '',
  id: '',
  title: '',
  body: ''
};

const Posts: FC = () => {
  const [
    isPhone,
    users,
    posts,
    photos,
  ] = useUnit([
    isPhoneModel.$state,
    $users,
    $posts,
    $photos,
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={!isPhone && styles.container}>
          {users.map((user) => {
            const post = posts ? posts.filter((item) => item.id === user.id)[0] : POST_DEFAULT;
            const photoUrl = photos
              ? photos.filter((item) => item.albumId == Number(post.userId))[0].url
              : '';

            return (
              <View style={isPhone ? styles.post : styles.postTablet} key={user.id}>
                {!isPhone
                  && <Image
                    style={styles.img}
                    source={{ uri: photoUrl + '.png' }}
                  />
                }
                <Text style={styles.text}>
                  Autor:{user.name}
                </Text>
                <Text style={styles.text}>
                  Company:{user.company.name}
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
