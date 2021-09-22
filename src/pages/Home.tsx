import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DataTable } from 'react-native-paper';

import { Container, Title, Greetings, Input, Text, Welcome, Title2 } from './styles'
import { Button } from '../components/button/Button';
import { InfoCard } from '../components/infoCards/InfoCard';
import { TextInfo } from '../components/infoCards/styles';

interface IInfoData {
  id: string,
  nome: string;
  codEsc: string;
  escolaridade: string;
}

export function Home() {

  const [newNome, setNewNome] = useState('')
  const [newCodEsc, setNewCodEsc] = useState('')
  const [newEscolaridade, setNewEscolaridade] = useState('')

  const [myInfo, setMyInfo] = useState<IInfoData[]>([]);
  const [greetings, setGreeting] = useState('');

  function handleAddNewInfo(){
    if (newNome === '' || newCodEsc === '' || newEscolaridade === '' ) {
      alert('Favor preencher os campos que estiverem vazios')
      return
    }
    const data = {
        id: String(new Date().getTime()),
        nome: newNome,
        codEsc: newCodEsc,
        escolaridade: newEscolaridade,
  }
    setMyInfo([...myInfo, data])

    setNewNome('')
    setNewCodEsc('')
    setNewEscolaridade('')
    
}

function handlerRemoveInfo(id: string){
  setMyInfo(myInfo => myInfo.filter(info => info.id !== id))
}

// useEffect(() => {
//   const currentHour = new Date().getHours()
//   if (currentHour < 12) {
//     setGreeting('Bom dia! 🌅')
//   } else if (currentHour >= 12 && currentHour < 17) {
//     setGreeting('Boa tarde! 🌇')
//   } else {
//     setGreeting('Boa noite! 🌃')
//   }
// }, [])

useEffect(() => {
  async function loadData(){
    const storageInfo = await AsyncStorage.getItem('@myinfo:infos')
      if (storageInfo){
        setMyInfo(JSON.parse(storageInfo))
      }
  }

loadData()
}, [])

//   async function removeAll() {
//     await AsyncStorage.removeItem('@myskills:skills')
//   }
// }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myinfo:infos', JSON.stringify(myInfo))
    }
    saveData()
  }, [myInfo])


  return (
    <>
      <Container>
        <Title>Colégio Estadual República Italiana 🏫</Title>

        <Welcome>Bem-vindo ao sistema de cadastro escolar!</Welcome>

        <Greetings>
          {greetings}
        </Greetings>

        <Text>Por favor, preencha os itens abaixo.</Text>

        <Input
            placeholder='Nome'
            placeholderTextColor='#555'
            value={newNome}
            onChangeText={value => setNewNome(value)}
            />

        <Input
            placeholder='Código da escolaridade'
            placeholderTextColor='#555'
            value={newCodEsc}
            onChangeText={value => setNewCodEsc(value)}
            />

        <Input
            placeholder='Escolaridade'
            placeholderTextColor='#555'
            value={newEscolaridade}
            onChangeText={value => setNewEscolaridade(value)}
            />

            <Button 
              title="Adicionar"
              onPress={handleAddNewInfo} 
            /> 
            

            <Title2 style={{ marginVertical: 20 }}>Alunos registrados:
            </Title2>
          

<DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Cód.</DataTable.Title>
          <DataTable.Title>Escolaridade</DataTable.Title>
        </DataTable.Header>

      {myInfo.map(info => (
        
        <DataTable.Row key={info.id}>

          <DataTable.Cell>
          {info.nome}
          </DataTable.Cell>

          <DataTable.Cell>
            {info.codEsc}
          </DataTable.Cell>

          <DataTable.Cell>
            {info.escolaridade}
          </DataTable.Cell>

          <TouchableOpacity
                onPress={() => 
                handlerRemoveInfo(info.id)
              }
            >
              <Text>
                Remover
              </Text>
            </TouchableOpacity>

        </DataTable.Row>
        
      ))}

</DataTable>

      </Container>
      
    </>
    
  );
}