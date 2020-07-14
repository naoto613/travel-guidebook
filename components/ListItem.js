import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Provider, Modal, Portal } from 'react-native-paper';

const ListItem = () => {
    // Modal部の制御
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const LeftContent = props => <Avatar.Icon {...props} icon="pencil" backgroundColor="#75A9FF" />

    return (
        // <Provider>
        //     <Portal>
                <ScrollView>
                    <Card style={styles.card}>
                        <Card.Title title="大阪旅行！" subtitle="USJに行きます" left={LeftContent} />
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>
                    <Card style={styles.card}>
                        <Card.Title title="大阪旅行！" subtitle="USJに行きます" left={LeftContent} />
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>

                    <Card style={styles.card}>
                        <Card.Title title="大阪旅行！" subtitle="USJに行きます" left={LeftContent} />
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>
                    {/* <Modal visible={visible} onDismiss={hideModal}>
            <Text>Example Modal</Text>
          </Modal>
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Show
        </Button> */}
        <Avatar.Icon size={40} style={styles.button} icon="plus" />
                </ScrollView>
        //     </Portal>
        // </Provider>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 30,
        backgroundColor: "#EEFFFF",
    },
    button: {
        backgroundColor: "red",
    },
});

export default ListItem;