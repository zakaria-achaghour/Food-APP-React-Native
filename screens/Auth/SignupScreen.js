
import { StyleSheet, View, TouchableWithoutFeedback,KeyboardAvoidingView,ScrollView } from 'react-native'
import React from 'react'
import { Button, CheckBox, Datepicker, Divider, Icon, Input, Layout, Text } from '@ui-kitten/components'
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  // const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  // const [name, setName] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [dob, setDob] = React.useState();
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp1");
  };
  const renderCheckboxLabel = React.useCallback(
    (evaProps) => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        By creating an account, I agree to the Ewa Terms of\nUse and Privacy
        Policy
      </Text>
    ),
    []
  );

  const emailIcon = (props) => <Icon {...props} name={"email-outline"} />;
  const userIcon = (props) => <Icon {...props} name={"person"} />;

  const LockIcon = (props) => <Icon {...props} name={"lock-outline"} />;
  const renderPasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  const GoogleIcon = (props) => <Icon {...props} name="google" />;

  const FacebookIcon = (props) => <Icon {...props} name="facebook" />;

  const TwitterIcon = (props) => <Icon {...props} name="twitter" />;
  return (
   
  
    <Layout style={styles.container}>
      <Animatable.View animation={"fadeInUpBig"} style={styles.header}>
        <Text style={styles.text_header}>SIGN UP</Text>
      </Animatable.View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
    <ScrollView  >

      <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={"position"}
        >
              <View style={styles.socialAuthContainer}>
            <Text style={styles.socialAuthHintText}>
              Sign with a social account
            </Text>
            <View style={styles.socialAuthButtonsContainer}>
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={GoogleIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={FacebookIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={TwitterIcon}
              />
            </View>
          </View>
          <View style={styles.orContainer}>
            <Divider style={styles.divider} />
            <Text style={styles.orLabel} category='h5'>
              OR
            </Text>
            <Divider style={styles.divider} />
          </View>
          <Text style={styles.emailSignLabel}>
            Sign up with Email
          </Text>
          <View style={ styles.formContainer}>
        <Input
          placeholder='Ally'
          label='FIRST NAME'
          autoCapitalize='words'
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          style={styles.formInput}
          placeholder='Watsan'
          label='LAST NAME'
          autoCapitalize='words'
          value={lastName}
          onChangeText={setLastName}
        />
        <Datepicker
          style={styles.formInput}
          placeholder='18/10/1995'
          label='Date of Birth'
          date={dob}
          onSelect={setDob}
        />
        <Input
          style={styles.formInput}
          placeholder='ally.watsan@gmail.com'
          label='EMAIL'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.formInput}
          label='PASSWORD'
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked) => setTermsAccepted(checked)}>
          {renderCheckboxLabel}
        </CheckBox>
      </View>

          <Button
            style={styles.button}
            appearance='outline'
            status={'control'}

            size="medium"
            onPress={onSignInButtonPress}
          >
            SIGN UP
          </Button>
          <Button
            style={styles.signUpButton}
            appearance='ghost'
            status={'control'}
            onPress={onSignUpButtonPress}>
                 <Text>Already have an account  {`?`}</Text> Sign In
          </Button>
      </KeyboardAvoidingView>
    </ScrollView>

      </Animatable.View>
    </Layout>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    textAlign: "center",
    color: "#FFA433",
    fontWeight: "bold",
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: "#FFC166",
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  button: {
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 50,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 25,
  },
  divider: {
    flex: 1,
  },
  orLabel: {
    marginHorizontal: 8,
  },
  emailSignLabel: {
 
    alignSelf: 'center',
    marginTop: 8,
  },
  
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  termsCheckBoxText: {
    fontSize: 11,
    lineHeight: 14,
    marginLeft: 10,
  },
  signUpButton: {
    marginVertical: 12,
  },
})