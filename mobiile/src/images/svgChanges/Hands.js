import React from 'react';
import {View} from 'react-native';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';

const Hands = ({
  stopColorFirstGradient = '#32A360',
  stopColorSecondGradient = '#227845',
}) => {
  return (
    <View>
      <Svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9822 43.6837C25.1189 43.87 25.0784 44.1317 24.8921 44.2684C24.7058 44.4051 24.4441 44.3646 24.3074 44.1783L18.8519 36.7557L17.601 35.6071C17.5813 35.5914 17.5626 35.5732 17.5454 35.5529L17.5464 35.5519C16.6195 34.4691 16.6595 33.5913 16.7339 31.9512C16.7562 31.4637 16.7815 30.9049 16.7835 30.2671C16.7845 29.894 16.7946 29.3954 16.8063 28.8238C16.8478 26.7599 16.9085 23.7252 16.6499 22.7036C16.5628 22.3599 16.3978 22.0379 16.175 21.7544C15.8419 21.3307 15.3848 20.9956 14.8706 20.8033C14.3598 20.6119 13.7918 20.5608 13.2345 20.702C12.8796 20.7916 12.5268 20.9607 12.1932 21.2229C10.9089 22.2318 10.9656 24.1478 11.0243 26.1094C11.0365 26.5255 11.0491 26.9437 11.0491 27.3684C11.0496 28.032 11.0507 28.6962 11.0517 29.3598C11.0547 31.3821 11.0577 33.405 11.0421 35.4253C11.0167 38.7477 13.1692 41.3298 15.2142 43.784C16.9273 45.8391 18.569 47.8089 18.9222 50.1223H31.4668C31.399 43.6411 31.318 43.5425 29.0218 40.7734C28.5824 40.2434 28.0646 39.6193 27.4526 38.8402C27.2587 38.5937 27.0046 38.2519 26.7277 37.8799C25.8054 36.6402 24.6157 35.0405 23.8504 34.6213C23.6661 34.5206 23.4859 34.4386 23.3097 34.3748C22.5175 34.0872 21.826 34.1769 21.2554 34.4821C20.6642 34.7985 20.1893 35.3467 19.8557 35.9552C19.7742 36.104 19.7013 36.2569 19.637 36.4108L24.9816 43.683L24.9822 43.6837Z"
          fill="url(#paint0_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.4587 40.774C40.1624 43.5425 40.0814 43.6412 40.0137 50.1229H52.5582C52.9121 47.8099 54.5533 45.8403 56.2662 43.7846C58.3113 41.3304 60.4638 38.7483 60.4384 35.4259C60.4232 33.4051 60.4263 31.3823 60.4288 29.3604C60.4298 28.6968 60.4308 28.0326 60.4313 27.369C60.4313 26.9443 60.444 26.5261 60.4561 26.11C60.5144 24.1479 60.5711 22.2319 59.2873 21.2235C58.9537 20.9613 58.6009 20.7922 58.246 20.7026C57.6881 20.5614 57.1202 20.6125 56.6094 20.8039C56.0951 20.9962 55.6375 21.3314 55.3049 21.7551C55.0827 22.038 54.9172 22.36 54.8301 22.7042C54.5714 23.7257 54.6327 26.7605 54.6737 28.8244C54.6853 29.3964 54.6949 29.8945 54.6965 30.2677C54.6985 30.9055 54.7238 31.4649 54.7461 31.9518C54.8205 33.5919 54.8605 34.4698 53.9336 35.5525L53.9346 35.5535C53.9174 35.5738 53.8987 35.5915 53.8789 35.6077L52.6281 36.7563L47.1725 44.1789C47.0359 44.3652 46.7741 44.4057 46.5879 44.269C46.4016 44.1323 46.3611 43.8706 46.4977 43.6843L51.8424 36.4121C51.7781 36.2577 51.7052 36.1053 51.6237 35.9565C51.2906 35.348 50.8152 34.8003 50.224 34.4834C49.6535 34.1782 48.9625 34.0886 48.1697 34.3761C47.994 34.4399 47.8133 34.5214 47.629 34.6226C46.8636 35.0418 45.674 36.6414 44.7517 37.8812C44.4748 38.2533 44.2207 38.5955 44.0268 38.8415C43.4148 39.6206 42.8969 40.2447 42.4576 40.7747L42.4587 40.774Z"
          fill="url(#paint1_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.829 52.3115C33.829 51.9405 33.6771 51.6028 33.4321 51.3578C33.1871 51.1128 32.8495 50.9609 32.4789 50.9609H17.1807C16.8096 50.9609 16.472 51.1128 16.227 51.3578C15.9819 51.6028 15.8301 51.9405 15.8301 52.3115V56.6499C15.8301 57.0209 15.9819 57.3586 16.227 57.6031C16.472 57.8481 16.8096 57.9999 17.1807 57.9999H32.4789C32.85 57.9999 33.1876 57.8481 33.4321 57.6031C33.6771 57.3581 33.829 57.0204 33.829 56.6499V52.3115ZM20.9432 53.3032C21.2444 53.6044 21.4312 54.021 21.4312 54.4806C21.4312 54.9403 21.2449 55.3569 20.9432 55.6581C20.642 55.9593 20.2254 56.1461 19.7658 56.1461C19.3061 56.1461 18.8895 55.9598 18.5883 55.6581C18.2871 55.3569 18.1003 54.9403 18.1003 54.4806C18.1003 54.021 18.2866 53.6044 18.5883 53.3032C18.8895 53.002 19.3061 52.8152 19.7658 52.8152C20.2254 52.8152 20.642 53.0015 20.9432 53.3032Z"
          fill="url(#paint2_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.6523 52.3115V56.6499C37.6523 57.0209 37.8042 57.3586 38.0492 57.6031C38.2942 57.8481 38.6319 57.9999 39.0024 57.9999H54.3007C54.6717 57.9999 55.0094 57.8481 55.2544 57.6031C55.4994 57.3581 55.6513 57.0204 55.6513 56.6499V52.3115C55.6513 51.9405 55.4994 51.6028 55.2544 51.3578C55.0094 51.1128 54.6717 50.9609 54.3007 50.9609H39.0024C38.6314 50.9609 38.2937 51.1128 38.0492 51.3578C37.8042 51.6028 37.6523 51.9405 37.6523 52.3115ZM50.5381 53.3032C50.8393 53.002 51.2559 52.8152 51.7156 52.8152C52.1752 52.8152 52.5918 53.0015 52.893 53.3032C53.1942 53.6044 53.381 54.021 53.381 54.4806C53.381 54.9403 53.1947 55.3569 52.893 55.6581C52.5918 55.9593 52.1752 56.1461 51.7156 56.1461C51.2559 56.1461 50.8393 55.9598 50.5381 55.6581C50.2369 55.3569 50.0501 54.9403 50.0501 54.4806C50.0501 54.021 50.2364 53.6044 50.5381 53.3032Z"
          fill="url(#paint3_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.5529 28.0315C43.0402 26.5442 43.9604 24.489 43.9604 22.2196C43.9604 19.9497 43.0406 17.895 41.5529 16.4077C40.0655 14.9203 38.0103 14.0001 35.7409 14.0001C33.471 14.0001 31.4164 14.9199 29.929 16.4077C28.4417 17.895 27.5215 19.9502 27.5215 22.2196C27.5215 24.4895 28.4413 26.5442 29.929 28.0315C31.4164 29.5188 33.4715 30.439 35.7409 30.439C38.0109 30.439 40.0655 29.5192 41.5529 28.0315ZM38.0433 22.1255C38.3774 22.5203 38.5439 23.0266 38.5439 23.6442C38.5439 24.3341 38.3348 24.9148 37.9147 25.3876C37.4945 25.8609 36.9119 26.1535 36.1631 26.2709V27.338H35.3304V26.2826C34.6733 26.2026 34.1398 25.9601 33.7277 25.5516C33.3152 25.1431 33.0535 24.5645 32.938 23.8199L34.4273 23.6442C34.488 23.9489 34.603 24.2112 34.7715 24.4319C34.9396 24.6526 35.1254 24.811 35.3304 24.9108V22.5163C34.5857 22.3032 34.04 21.9807 33.6943 21.5489C33.3465 21.1151 33.1724 20.5912 33.1724 19.9736C33.1724 19.3479 33.3698 18.8225 33.7626 18.3983C34.1555 17.9721 34.6774 17.7281 35.3304 17.6633V17.1003H36.1632V17.6633C36.7732 17.7357 37.2576 17.9427 37.6195 18.2849C37.9789 18.6271 38.2098 19.0842 38.3095 19.6568L36.8551 19.8441C36.765 19.3945 36.5346 19.0898 36.1631 18.9293V21.1637C37.0834 21.4097 37.7111 21.7322 38.0432 22.125L38.0433 22.1255Z"
          fill="url(#paint4_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.1375 23.8484C37.1375 23.5943 37.0616 23.3735 36.9087 23.1898C36.7584 23.004 36.5098 22.8633 36.1641 22.7635V25.0056C36.4511 24.9428 36.686 24.8062 36.8657 24.5951C37.0474 24.384 37.1375 24.1354 37.1375 23.8484L37.1375 23.8484Z"
          fill="url(#paint5_linear_488_11187)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.3304 20.8882V18.9063C35.1057 18.9863 34.9295 19.1174 34.7989 19.3012C34.6678 19.4849 34.6035 19.6859 34.6035 19.9071C34.6035 20.1086 34.6622 20.2959 34.7817 20.47C34.9007 20.6421 35.0844 20.7829 35.3309 20.8882L35.3304 20.8882Z"
          fill="url(#paint6_linear_488_11187)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_488_11187"
            x1="10.5629"
            y1="19.8256"
            x2="39.8334"
            y2="29.8046"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_488_11187"
            x1="39.5766"
            y1="19.8262"
            x2="68.8468"
            y2="29.805"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_488_11187"
            x1="15.4457"
            y1="50.771"
            x2="26.5872"
            y2="64.7709"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_488_11187"
            x1="37.2679"
            y1="50.771"
            x2="48.4094"
            y2="64.7709"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_488_11187"
            x1="27.1704"
            y1="13.5566"
            x2="48.3085"
            y2="23.9441"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint5_linear_488_11187"
            x1="36.1433"
            y1="22.7031"
            x2="37.6296"
            y2="23.0202"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint6_linear_488_11187"
            x1="34.588"
            y1="18.8528"
            x2="35.7126"
            y2="19.0557"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Hands;