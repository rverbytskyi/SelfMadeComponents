import { Navigation } from 'react-native-navigation';
import { registerScreens } from './js/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'homeScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Feel like at home',
                  },
                },
              },
            },
          },
        ],
      },
    },
  })
})
