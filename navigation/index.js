import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  TabActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import Earphones from "../screens/earphones";
import Headphones from "../screens/headphones";
import Home from "../screens/home";
import Details from "../screens/product-details";
import Speakers from "../screens/speakers";
import { colors } from "../theme/colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();

function HeadphonesStackScreen() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Headphones" component={Headphones} />
      <HomeStack.Screen name="Details" component={Details} />
    </HeadphonesStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();

function EarphonesStackScreen() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Earphones" component={Earphones} />
      <HomeStack.Screen name="Details" component={Details} />
    </EarphonesStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();

function SpeakersStackScreen() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Speakers" component={Speakers} />
      <HomeStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Cart" component={Checkout} />
      <HomeStack.Screen name="Checkout" component={Cart} />
    </CartStack.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcon") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}
export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcon"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{ title: "Headphone" ,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              fontFamily={"MaterialCommunityIcon"}
              name="headphones"
              color={color}
            />
          ),}}
          name="HeadphonesTab"
          component={HeadphonesStackScreen}
        />
        <Tab.Screen
          options={{ title: "Earphone" ,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              fontFamily={"SimpleLineIcons"}
              name="earphones-alt"
              color={color}
            />
          ),}}
          name="EarphonesTab"
          component={EarphonesStackScreen}
        />
        <Tab.Screen
          options={{ title: "Speakers" ,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              fontFamily={"MaterialCommunityIcon"}
              name="speaker"
              color={color}
            />
          ),}}
          name="SpeakersTab"
          component={SpeakersStackScreen}
        />
        <Tab.Screen
          options={{ title: "Cart" ,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              fontFamily={"Ionicons"}
              name="cart-outline"
              color={color}
            />
          ),}}
          name="CartTab"
          component={CartStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
