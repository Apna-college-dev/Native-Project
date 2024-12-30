import React from "react";
import { Input, Icon } from "@rneui/themed";
import { View as DefaultView } from "react-native";
import { FieldRenderProps } from "react-final-form";
import { StyleSheet } from "react-native";

type Props = {
  lightColor?: string;
  darkColor?: string;
};

export type TextInputProps = Props &
  DefaultView["props"] &
  FieldRenderProps<any>;

const TextInput = ({
  input,
  icon,
  placeholder,
  keyboardType,
  meta: { touched, error, submitError },
  ...inputProps
}: TextInputProps) => {
  return (
    <Input
      {...inputProps}
      inputContainerStyle={styles.inputContainer}
      placeholder={placeholder}
      leftIcon={icon && <Icon name={icon} size={30} />}
      errorMessage={touched && (error || submitError)}
      keyboardType={!keyboardType ? "default" : keyboardType}
      onChangeText={input.onChange}
      inputStyle={styles.input}
      // @ts-ignore
      onBlur={input.onBlur}
      // @ts-ignore
      onFocus={input.onFocus}
      value={input.value}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "#000000",
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  input: {
    paddingLeft: 10,
    gap: 4,
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
  searchIcon: {
    color: "#9C9C9C",
    fontSize: 35,
    position: "absolute",
    right: 15,
    top: "30%",
  },
});

export default TextInput;
