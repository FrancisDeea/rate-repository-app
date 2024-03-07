import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: '300px',
    minHeight: '100%',
    marginHorizontal: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 6,
  },
  button: {
    backgroundColor: "#0165d4",
    border: 'none',
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  error: {
    color: '#d73a4a'
  }
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required('You have to enter a username'),
  password: yup.string().required('You have to enter a password')
})

const SignIn = () => {
  const [singIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await singIn({ username, password });
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  return (
    <View style={styles.container}>
      <TextInput
        style={[formik.errors.username && { borderColor: '#d73a4a' }, styles.input]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (<Text style={styles.error}>{formik.errors.username}</Text>)}
      <TextInput
        style={[formik.errors.password && { borderColor: '#d73a4a' }, styles.input]}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (<Text style={styles.error}>{formik.errors.password}</Text>)}
      <Pressable style={[styles.button, styles.input]} onPress={formik.handleSubmit}>
        <Text style={styles.text}>Sing in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
