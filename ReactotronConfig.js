import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apisaucePlugin from 'reactotron-apisauce'

Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(apisaucePlugin())
    .connect(); // let's connect!
