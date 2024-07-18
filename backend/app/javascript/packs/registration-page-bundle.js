import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import MyJsComp from '../bundles/MyJsComp/components/MyJsComp';
import RegistrationPage from '../bundles/UserLogin/components/RegistrationPage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  MyJsComp,
  RegistrationPage
});
