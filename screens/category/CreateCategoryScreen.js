import { StyleSheet,  View,KeyboardAvoidingView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button,  Card, CheckBox, Input, Layout,Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import * as Animatable from "react-native-animatable";
import {  Formik  } from 'formik';
import * as Yup from 'yup'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { BackIcon, RemoveIcon, SaveIcon } from '../../Constants/Icons';
import { ThemeContext } from '../../Config/theme-context';

const CreateCategoryScreen = ({navigation}) => {

  const initialValues = { name:'', active:'1',imageUrl: '' }
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState(0);
  useEffect(() => {
    if(themeContext.theme === 'light'){
      setTheme(0);
    }
    else{
      setTheme(1);
    }
  }, [themeContext]);
    const validationSchema = Yup.object({name: Yup.string().required(), active: Yup.boolean().required(),imageUrl: Yup.string().required(), });
  const onSubmit = (values, onSubmitProps) => {
   console.log(values);
   
     
   }
   

    
    const handleCancel = (onSubmitProps) => {
      onSubmitProps.resetForm();
    }
    const renderBackAction = () => (
      <TopNavigationAction
        icon={<BackIcon />}
        onPress={() => navigation.goBack()}
      />
    );
  return (
   
    <>
    <StatusBar barStyle="dark-content" />
   <Layout style={[styles.container, {  backgroundColor: !theme ? "#FFC166":'#DB9A4A' ,}]}>
    <SafeAreaView >
    <TopNavigation style={styles.header}   alignment='center' appearance={'control'}
          title={evaProps => <Text {...evaProps} style={styles.title} >Create Category</Text>}
          accessoryLeft={renderBackAction}
          />
  

  <Animatable.View  animation="fadeInUp">
    <Card style={styles.formControl} disabled >
    <KeyboardAvoidingView  behavior={"position"}>
       <Formik validationSchema={validationSchema} initialValues={initialValues}  onSubmit={onSubmit}>
           {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldValue,
                    setFieldTouched
                  }) => (
     <>
    
       <Input
        label='Name'
        placeholder='Name'
        style={styles.input}
       
         onChangeText={handleChange('name')}
         onBlur={handleBlur('name')}
         value={values.name}
       />
       {errors.name &&
         <Text style={{ fontSize: 10,flexDirection: 'row', color: 'red' }}>{errors.name}</Text>
       }
        <Input
          label='Iamge'
          placeholder='Image'
          style={styles.input}
          onChangeText={handleChange('imageUrl')}
          onBlur={handleBlur('imageUrl')}
          value={values.imageUrl}
       />
       {errors.imageUrl &&
         <Text style={{ fontSize: 10,flexDirection: 'row', color: 'red' }}>{errors.imageUrl}</Text>
       }
    
     <CheckBox
       style={styles.input}
        checked={values.active} 
        onChange={(nextChecked ) => setFieldValue('active',nextChecked) }
        onBlur= { (nextChecked ) => setFieldTouched('active', nextChecked)}
        >
        Active
      </CheckBox>
    
      
      <View style={styles.buttonGroup} >
          <Button  onPress={handleSubmit}  size='small' status={'basic'} appearance='outline'  disabled={!isValid} accessoryRight={SaveIcon}>
            Save
          </Button>
          <Button   size='small' appearance='outline' status={'basic'}  accessoryRight={RemoveIcon}>
            Cancel
          </Button>
         </View>
      
              </>
            )}
          </Formik>
          </KeyboardAvoidingView>
     
        </Card>
        </Animatable.View>
        
    </SafeAreaView>
   </Layout>
   
   </>
  )
}

export default CreateCategoryScreen

const styles = StyleSheet.create({
 

  container: {
    flex: 1,
  },
  header: {
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
 
  },
  formControl: {
    justifyContent: 'center',
    borderBottomLeftRadius: 90,
    borderTopRightRadius: 90,
    elevation: 10,
    paddingBottom: 50,
    marginTop: 50,
  },
  input: {
    marginTop: 20,
  },
  error: {

  },
  buttonGroup: {
      paddingTop: 50,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
  }
 
})