import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import MyJsComp from '../bundles/MyJsComp/components/MyJsComp';
import RegistrationForm from '../bundles/UserLogin/components/RegistrationForm';
import LoginForm from '../bundles/UserLogin/components/LoginForm';
import Navbar from '../bundles/Navbar/components/Navbar';
import GreetingsSignedOut from '../bundles/MainPage/components/GreeingsSignedOut';
import GreetingsSignedIn from '../bundles/MainPage/components/GreetingsSignedIn';
import HandleImageCreate from '../bundles/HandleImage/components/hadle_image_create';
import HomePage from '../bundles/MainPage/components/HomePage';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  GreetingsSignedOut,
  GreetingsSignedIn,
  HandleImageCreate,
  HelloWorld,
  HomePage,
  LoginForm,
  MyJsComp,
  Navbar,
  RegistrationForm,
});
