import React, { useState } from 'react';
import { View, Text} from 'react-native';

import { Background,
          Container,
          Logo,
          AreaInput,
          Input,
          SubmitButton,
          SignUpLink,
          SignUpText,
          SubmitText


} from './styles';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Background>
      
      <Container>

        <Logo source={require('../../assets/logo.png')}/>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(texto)=> setEmail(texto)}
          
          
          />
        </AreaInput>


        <AreaInput>

        <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=> setPassword(password)}
          
          
          />
        
        
        </AreaInput>


        <SubmitButton onPress={()=>{}}>

          <SubmitText>Acessar</SubmitText>
        </SubmitButton>


        <SignUpLink onPress={()=>{}}>
          <SignUpText>Criar Conta Gratuita</SignUpText>
        </SignUpLink>

      

      </Container>

    </Background>
  );
}
