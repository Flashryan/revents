import React from 'react';
import {Button,  Menu } from 'semantic-ui-react';

export default function SignedOutMenu ({setAuthenticated}){
  return (
    <Menu.Item position="right">       
    <Button onClick={() => setAuthenticated(true)} positive inverted content='Login' />
    <Button positive inverted content='Register' style={{marginLeft: 10}} />
</Menu.Item>
  )

}