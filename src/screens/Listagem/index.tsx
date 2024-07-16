import React from 'react';
import { Container, Title, TrashImage, Subtitle, Content, ItemContainer, CustomCheckbox, ItemText, CheckboxImage } from './styles';
import { SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

interface Item {
  id: string;
  text: string;
  checked: boolean;
}

const initialItems: Item[] = [
  { id: '1', text: 'Pagar boleto', checked: false },
  { id: '2', text: 'Arrumar a cama', checked: true },
  { id: '3', text: 'Entregar notebook', checked: false },
];

export default function App() {

  const [items, setItems] = useState<Item[]>(initialItems);

  const toggleItemChecked = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const renderItem = ({ item }: { item: Item }) => (
    <ItemContainer checked={item.checked} onPress={() => toggleItemChecked(item.id)}>
      <CustomCheckbox checked={item.checked}>
        {item.checked && (
          <CheckboxImage source={require('../../assets/checked.png')} />
        )}
      </CustomCheckbox>
      <ItemText checked={item.checked}>{item.text}</ItemText>
      <TrashImage source={require('../../assets/trash.png')} />
    </ItemContainer>
  );

  return (
    <SafeAreaView>
      <Content>
        <Container>
          <Title>Agenda.IFRN</Title>
          <Subtitle>Lista de tarefas</Subtitle>
        </Container>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </SafeAreaView>
  );
}
