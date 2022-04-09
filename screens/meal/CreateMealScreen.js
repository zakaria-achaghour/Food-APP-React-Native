import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet,  View,KeyboardAvoidingView } from 'react-native'
import {  Formik  } from 'formik';
import * as Yup from 'yup'
import { BackIcon, RemoveIcon, SaveIcon } from '../../Constants/Icons';
import { IndexPath, Select, SelectItem,Layout,CheckBox,Button, Text, Card, Input, TopNavigationAction, TopNavigation, } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import { ThemeContext } from '../../Config/theme-context';

const data = [
  'Developer',
  'Designer',
  'Product Manager',
];
const CreateMealScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const initialValues = { name:'', category:'', imageUrl: '', price: '', description: '',    active:false }
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
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    category: Yup.string().required(),
    imageUrl: Yup.string().required(),
    price: Yup.string().required(),
    description: Yup.string().required(),
    active: Yup.boolean().required() });
  
  const onSubmit = (values, onSubmitProps) => {
   console.log(values);
   
     
   }
   

    
    const handleCancel = (onSubmitProps) => {
      onSubmitProps.resetForm();
    }
    const renderOption = (title) => (
      <SelectItem title={title}/>
    );
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
          title={evaProps => <Text {...evaProps} style={styles.title} >Create Meal</Text>}
          accessoryLeft={renderBackAction}
          />
  
  <Animatable.View  animation="lightSpeedIn">
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
          label='Price'
          placeholder='Price'
          style={styles.input}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          value={values.price}
          keyboardType="numeric"
       />
       {errors.price &&
         <Text style={{ fontSize: 10,flexDirection: 'row', color: 'red' }}>{errors.price}</Text>
       }

      <Input
          label='Description'
          placeholder='Description'
          style={styles.input}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          value={values.description}
          multiline={true}
          textStyle={{ minHeight: 64 }}
       />
       {errors.description &&
         <Text style={styles.error}>{errors.description}</Text>
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

      <Select
              style={styles.input}
              size='medium'
              placeholder='Categories'
              value={displayValue}
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}>
              {data.map(renderOption)}
      </Select>

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

export default CreateMealScreen

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
    marginTop: 40,
    borderBottomLeftRadius: 90,
    borderTopRightRadius: 90,
    elevation: 10,
    paddingBottom: 50
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