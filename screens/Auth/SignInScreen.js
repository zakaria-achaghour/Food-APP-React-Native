import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {
  Layout,
  Text,
  Button,
  Icon,
  Input,
} from "@ui-kitten/components";
import * as Animatable from "react-native-animatable";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp1");
  };


  const emailIcon = (props) => <Icon {...props} name={"email-outline"} />;


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
      <Animatable.View animation={"fadeInDownBig"} style={styles.header}>
        <Text style={styles.text_header}>SIGN IN</Text>
      </Animatable.View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={"position"}
        >
          <Input
            label="EMAIL"
            placeholder="Email"
            status="warning"
            size="medium"
            value={email}
            onChangeText={setEmail}
            accessoryLeft={emailIcon}
          />
          <Input
            style={styles.passwordInput}
            placeholder="Password"
            label="PASSWORD"
            status="warning"
            size="medium"
            value={password}
            onChangeText={setPassword}
            accessoryRight={renderPasswordIcon}
            accessoryLeft={LockIcon}
            secureTextEntry={secureTextEntry}
          />

          <Button
            style={styles.button}
            status="warning"
            size="large"
            onPress={onSignInButtonPress}
          >
            SIGN IN
          </Button>

          <Layout style={styles.socialAuthContainer}>
            <Layout style={styles.socialAuthHintText} status="control">
              <Text>Sign with a social account</Text>
            </Layout>
            <Layout style={styles.socialAuthButtonsContainer}>
              <Button
                appearance="ghost"
                size="small"
                status="warning"
                accessoryLeft={GoogleIcon}
              />
              <Button
                appearance="ghost"
                size="giant"
                status="warning"
                accessoryLeft={FacebookIcon}
              />
              <Button
                appearance="ghost"
                size="medium"
                status="warning"
                accessoryLeft={TwitterIcon}
              />
            </Layout>
          </Layout>
            <Button
            style={styles.signUpButton}
            appearance='ghost'
            status="warning"
            onPress={onSignUpButtonPress}>
                 <Text>Don't have an account {`?`}</Text>Sign Up
          </Button>
        </KeyboardAvoidingView>
      </Animatable.View>
    </Layout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA433",
  },

  button: {
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 50,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  text_header: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  passwordInput: {
    marginTop: 16,
  },

  socialAuthContainer: { marginVertical: 25 },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    color: "#ddd",
    alignSelf: "center",
    marginBottom: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  
});
