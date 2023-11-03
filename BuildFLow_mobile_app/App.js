import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import NewOrderScreen from './screens/SiteManager/NewOrderScreen';
import AllOrdersScreen from './screens/SiteManager/AllOrdersScreen';
import Quotations from './screens/Supplier/Quotations';
import NewInvoiceScreen from './screens/Supplier/NewInvoiceScreen';
import AllInvoices from './screens/Supplier/AllInvoices';
import NewDelivery from './screens/Supplier/NewDelivery';
import DeliveryScreen from './screens/DeliveryScreen';
import PaymentScreen from './screens/Supplier/PaymentScreen';
import AddItems from './screens/Supplier/AddItems';
import AllItemsScreen from './screens/SiteManager/AllItemsScreen';
import ViewPayment from './screens/Supplier/ViewPayment';
import UpdateOrderScreen from './screens/SiteManager/UpdateOrderScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // navigation
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='NewOrder' component={NewOrderScreen} />
        <Stack.Screen name='AllOrders' component={AllOrdersScreen} />
        <Stack.Screen name='Quotes' component={Quotations} />
        <Stack.Screen name='NewInvoice' component={NewInvoiceScreen} />
        <Stack.Screen name='AllInvoices' component={AllInvoices} />
        <Stack.Screen name='NewDelivery' component={NewDelivery} />
        <Stack.Screen name='Delivery' component={DeliveryScreen} />
        <Stack.Screen name='Payment' component={PaymentScreen} />
        <Stack.Screen name='AddItem' component={AddItems} />
        <Stack.Screen name='AllItems' component={AllItemsScreen} />
        <Stack.Screen name='ViewPayment' component={ViewPayment} />
        <Stack.Screen name='UpdateOrder' component={UpdateOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
