import React, {useState, useEffect} from 'react';
import Screen1 from '../screens/Screen1';
import {Amplify} from 'aws-amplify';
import {AWSIoTProvider, PubSub} from '@aws-amplify/pubsub';
import awsmobile from '../../aws-export';

Amplify.configure(awsmobile);
const pubsub = new PubSub({
  region: 'us-east-2',
  endpoint: 'wss://a171dy9zo12fhq-ats.iot.us-east-2.amazonaws.com/mqtt',
});
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-east-2:b2f61a9a-5787-4e76-8bf0-6e22d7fb9744',
//     region: 'us-east-2',
//     userPoolId: 'us-east-2_TlrjyzeZB',
//     userPoolWebClientId: '32oehlee9a1p5k0phgtnk6mrat',
//   },
// });

// Amplify.addPluggable(
//   new AWSIoTProvider({
//     aws_pubsub_region: 'us-east-2',
//     aws_pubsub_endpoint: `wss://a171dy9zo12fhq-ats.iot.us-east-2.amazonaws.com/mqtt`,
//   }),
// );

export default () => {
  const [color1, setColor1] = useState('#DDD');

  // pubSub.subscribe('topicfilter').subscribe({
  //   next: data => console.log('Message received', data.value.message),
  //   error: error => console.error(error),
  //   close: () => console.log('Done'),
  // });

  pubsub.subscribe({topics: ['topicfilter']}).subscribe({
    next: data => {
      console.log('Message received:');
      console.log(data.message);
      // setColor1(data.message);
    },
    error: error => console.error(error),
    close: () => console.log('Done'),
  });
  useEffect(() => {
    console.log('Change');
  }, []);

  const funColor1 = async () => {
    console.log('Change color On');
    await pubsub.publish({
      topics: 'Subscribefilter',
      message: {"message": 'ON'},
      options: {provider: 'AWSIoTProvider'},
    });
    // await pubSub.publish('Subscribefilter', {
    //   message: `ON`,
    // });
  };

  const funColor2 = async () => {
    console.log('Change color Off');
    await pubsub.publish({
      topics: 'Subscribefilter',
      message: {"message": 'OFF'},
      options: {provider: 'AWSIoTProvider'},
    });
    // await Amplify.PubSub.publish('Subscribefilter', {
    //   message: `OFF`,
    // });
  };

  return (
    <Screen1
      fun1={() => funColor1()}
      fun2={() => funColor2()}
      backgroundColor={color1}
    />
  );
};
