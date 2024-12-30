import React from "react";
import {
  View,
  Text,
  // TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Form, Field } from "react-final-form";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Icon } from "@rneui/base";
// import { AntDesign, EvilIcons } from "@expo/vector-icons";
import TextInput from "@/components/utils/TextInput";

// const logoimg = require("../../assets/Group 207.png");
// const logoimg = require("../../assets/Group 207.png");

const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "First Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.contact) {
    errors.contact = "Contact is required";
  }
  if (!values.cnic) {
    errors.cnic = "CNIC is required";
  }
  if (!values.passportnumber) {
    errors.passportnumber = "Passport Number is required";
  }
  if (!values.medical) {
    errors.medical = "Medical Number is required";
  }
  if (!values.enumber) {
    errors.enumber = "E Number is required";
  }
  if (!values.departuredate) {
    errors.departuredate = "Departure Date is required";
  }
  if (!values.arrivaldate) {
    errors.arrivaldate = "Arrival Date is required";
  }
  return errors;
};

const onSubmit = async (values) => {
  console.log("Form Submitted:", values);
  alert("Form submitted successfully!");
};

// const CustomInput = ({ input, meta, placeholder, icon }) => (
//   <View style={styles.inputContainer}>
//     <TextInput
//       style={[styles.input, meta.error && meta.touched && styles.inputError]}
//       onChangeText={input.onChange}
//       onBlur={input.onBlur}
//       value={input.value}
//       placeholder={placeholder}
//     />
//     {meta.error && meta.touched && (
//       <Text style={styles.error}>{meta.error}</Text>
//     )}
//   </View>
// );

const MyForm = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <View
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <View>
                  <Field
                    name="fullname"
                    component={TextInput}
                    icon={"person"}
                    placeholder="Full Name"
                  />

                  <Field
                    name="email"
                    component={TextInput}
                    icon={"email"}
                    placeholder="Email Address"
                  />
                  <Field
                    name="contact"
                    component={TextInput}
                    icon={"call"}
                    placeholder="Contact"
                  />
                  <Field
                    name="cnic"
                    component={TextInput}
                    placeholder="CNIC"
                    icon={"house"}
                  />
                  <Field
                    name="passportnumber"
                    component={TextInput}
                    icon={"house"}
                    placeholder="Passport Number"
                  />

                  <Field
                    name="enumber"
                    component={TextInput}
                    icon={"house"}
                    placeholder="E Number"
                  />

                  <Field
                    name="medical"
                    component={TextInput}
                    icon={"house"}
                    placeholder="Medical Number"
                  />

                  <Field
                    name="departuredate"
                    component={TextInput}
                    icon={"house"}
                    placeholder="Departure Date"
                  />
                  <Field
                    name="arrivaldate"
                    type="date"
                    component={TextInput}
                    icon={"house"}
                    placeholder="Arrival Date"
                  />
                </View>
                <Button
                  containerStyle={{
                    width: "100%",
                    borderRadius: 5,
                    flex: 1,
                    marginTop: 20,
                    alignSelf: "center",
                  }}
                  buttonStyle={{
                    padding: 10,
                    backgroundColor: "#FD8269",
                  }}
                  titleStyle={{
                    fontSize: 20,
                    marginHorizontal: 20,
                    color: "white",
                  }}
                  onPress={handleSubmit}
                  disabled={submitting}
                  title={"Submit"}
                />
              </View>
            )}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 38,
    color: "#000000",
  },
  inputContainer: {
    marginBottom: 5,
  },
  input: {
    borderColor: "#000000",
    position: "relative",
    // left: 29,
    borderWidth: 1,
    borderRadius: 4,
    padding: 14,
    gap: 4,
    top: 16,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 27,
    color: "#000000",
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    marginTop: 20,
  },
  submittButton: {
    borderRadius: 1,
    width: 307,
    height: 40,
    color: "white",
    fontStyle: "italic",
  },
  buttonsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  img: {
    flexDirection: "row",
  },
  searchIcon: {
    color: "#9C9C9C",
    fontSize: 35,
    position: "absolute",
    right: 15,
    top: "30%",
  },
});

export default MyForm;
