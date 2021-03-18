import React from 'react';
import {Appbar} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
const StackHeader=({scene,navigation})=>{
    const {options}=scene.descriptor;
    const title = options.headerTitle;

    return (
        <Appbar.Header>
            {
                navigation.canGoBack()?
                (
                    <Appbar.BackAction onPress={()=> navigation.pop()}/>
                )
                :
                <MaterialCommunityIcons name="instagram" size={24} color="white"/>
            }
            <Appbar.Content title={title}/>
            <Appbar.Action icon="bell" onPress={()=>console.log("Notification pressed")}/>
        </Appbar.Header>
    )
};

export default StackHeader;