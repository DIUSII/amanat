import React from 'react';
import {LinearGradient, Path, Svg, Defs, Stop} from 'react-native-svg';
import {View} from 'react-native';

const Loader = ({
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
          d="M54.0182 46.283C52.7087 46.283 51.5234 46.8136 50.666 47.6716C49.808 48.5296 49.2773 49.715 49.2773 51.0238C49.2773 52.3333 49.808 53.5187 50.666 54.3761C51.5239 55.2341 52.7094 55.7647 54.0182 55.7647C55.3277 55.7647 56.513 55.2341 57.3705 54.3761C58.2285 53.5181 58.7591 52.3327 58.7591 51.0238C58.7591 49.7144 58.2285 48.5296 57.3705 47.6716C56.5125 46.8136 55.3271 46.283 54.0182 46.283ZM52.8391 49.8448C52.5374 50.1466 52.3506 50.5633 52.3506 51.0239C52.3506 51.4845 52.5374 51.9013 52.8391 52.203C53.1409 52.5048 53.5576 52.6915 54.0182 52.6915C54.4788 52.6915 54.8956 52.5048 55.1973 52.203C55.4991 51.9013 55.6858 51.4845 55.6858 51.0239C55.6858 50.5633 55.4991 50.1466 55.1973 49.8448C54.8956 49.5431 54.4788 49.3563 54.0182 49.3563C53.5576 49.3563 53.1409 49.5431 52.8391 49.8448Z"
          fill="url(#paint0_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.4379 47.5612C34.3918 47.5612 35.9757 49.1451 35.9757 51.099C35.9757 53.0529 34.3918 54.6368 32.4379 54.6368C30.4839 54.6368 28.9001 53.0529 28.9001 51.099C28.9001 49.1451 30.4839 47.5612 32.4379 47.5612ZM26.3943 51.099C26.3943 51.2351 26.3977 51.3598 26.4046 51.4731C26.4108 51.5727 26.4205 51.6786 26.433 51.7896C26.433 51.7913 26.4336 51.793 26.4336 51.7947C26.4074 51.5664 26.3938 51.3341 26.3938 51.099L26.3943 51.099ZM38.4683 51.4953C38.4683 51.4816 38.4695 51.4679 38.4706 51.4548C38.47 51.4685 38.4689 51.4816 38.4683 51.4953ZM37.3177 55.9789C38.3852 54.9114 39.1049 53.496 39.291 51.9172C39.3229 51.6491 39.3388 51.3758 39.3388 51.0991V51.0604C39.3286 49.1701 38.5583 47.4593 37.3177 46.2192C36.0686 44.9701 34.3435 44.1981 32.438 44.1981C30.5324 44.1981 28.8073 44.9707 27.5582 46.2192C26.3091 47.4678 25.5371 49.1934 25.5371 51.099C25.5371 51.2282 25.5405 51.3563 25.5474 51.4839C25.5633 51.7731 25.5969 52.0572 25.6476 52.3356C25.9026 53.7453 26.5864 55.0063 27.5582 55.9788C28.8068 57.2279 30.5324 57.9999 32.4379 57.9999C34.3435 57.9999 36.0686 57.2273 37.3177 55.9788L37.3177 55.9789Z"
          fill="url(#paint1_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7297 25.6198V35.0304C12.7297 35.2917 12.5179 35.5035 12.2566 35.5035H10.4364C10.1751 35.5035 9.9633 35.2917 9.9633 35.0304V25.6198H8.13281V36.3974H20.4249V25.6198H12.7291H12.7297Z"
          fill="url(#paint2_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.3741 33.0181L43.8367 39.1146L39.8969 39.1094L44.3155 23.963L55.203 20.9774L55.1978 32.7218L47.797 32.7559L47.7965 32.7542C47.6109 32.7548 47.4509 32.8624 47.374 33.0184L47.3741 33.0181ZM59.7663 36.742L59.7259 14.515C59.731 14.4604 59.7265 14.4046 59.7111 14.3488C59.6428 14.0965 59.3826 13.948 59.1309 14.0169L54.3582 15.3144V15.9253C54.3616 16.1325 54.2278 16.3238 54.0217 16.3859C54.0177 16.387 54.0137 16.3881 54.0092 16.3893L50.1787 17.4306C50.1781 17.4306 50.1781 17.4306 50.1776 17.4312C50.1679 17.434 50.1588 17.4369 50.1491 17.4391L40.7823 19.9853L35.3354 39.1996C35.2899 39.4114 35.1026 39.5714 34.8771 39.5731V39.5714L27.6732 39.6289C27.6584 39.6306 27.6436 39.6312 27.6282 39.6312C27.3669 39.6312 27.1551 39.4199 27.1551 39.1586H27.1568L27.1466 19.8131L24.0039 19.7966L24.103 36.7197C24.1189 36.7675 24.128 36.8182 24.128 36.8717V40.9784L24.1303 41.3684C24.1314 41.3832 24.1326 41.398 24.1326 41.4134H24.1309L24.1297 41.989H60.2832"
          fill="url(#paint3_linear_488_11158)"
        />
        <Path
          d="M55.6293 33.6621L48.0714 33.6969L44.517 39.8229L44.1088 39.5867L44.5176 39.8241C44.4219 39.9886 44.2431 40.074 44.0655 40.0575L39.2694 40.0512V39.5804L39.2689 40.0535C39.0075 40.0529 38.7963 39.8412 38.7969 39.5798C38.7969 39.5195 38.8083 39.462 38.8288 39.409L43.4848 23.4478L43.9374 23.5788L43.4836 23.4461C43.5354 23.2679 43.6835 23.1438 43.8548 23.1131L55.5502 19.9054L55.5496 19.9037C55.8013 19.8348 56.0614 19.9828 56.1309 20.2345C56.1463 20.2908 56.1508 20.3478 56.1457 20.403L56.14 33.1903H55.6692H56.1423C56.1423 33.4516 55.9305 33.6628 55.6692 33.6628C55.6561 33.6628 55.643 33.6623 55.6299 33.6611L55.6293 33.6621ZM47.7986 33.2272L47.7969 32.7563L55.1977 32.7222L55.2028 20.9778L44.3153 23.9634L39.8968 39.1098L43.8366 39.115L47.3739 33.0185C47.4508 32.8625 47.6108 32.7549 47.7964 32.7543L47.7986 33.2272Z"
          fill="url(#paint4_linear_488_11158)"
        />
        <Path
          d="M53.4764 26.5771C53.4764 26.3158 53.2646 26.104 53.0032 26.104C52.7419 26.104 52.5301 26.3158 52.5301 26.5771V29.9505H49.1567C48.8954 29.9505 48.6836 30.1623 48.6836 30.4237C48.6836 30.685 48.8954 30.8968 49.1567 30.8968H53.0032C53.2646 30.8968 53.4763 30.685 53.4763 30.4237L53.4764 26.5771Z"
          fill="url(#paint5_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.3379 50.7272C48.4125 49.2754 49.0319 47.967 49.9958 47.0031C51.0246 45.9738 52.4468 45.3372 54.0171 45.3372C55.5873 45.3372 57.0089 45.9737 58.0384 47.0031C58.9248 47.889 59.5198 49.0669 59.6679 50.3793L62.6501 50.2876L60.551 42.9335H24.1264L24.1133 51.4707L24.8392 51.4485C24.8318 51.3079 24.8278 51.1667 24.8278 51.0243C24.8278 48.9229 25.6795 47.0201 27.0568 45.6435C28.434 44.2663 30.3368 43.4145 32.4376 43.4145C34.539 43.4145 36.4418 44.2663 37.8184 45.6435C39.1866 47.011 40.036 48.8978 40.0474 50.9822L48.3381 50.7277L48.3379 50.7272Z"
          fill="url(#paint6_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.5117 14.9069V16.3599L53.4125 15.5713V14.9069H50.5117Z"
          fill="url(#paint7_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7847 34.557V25.619H10.9102V34.557H11.7847Z"
          fill="url(#paint8_linear_488_11158)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8976 37.3429H7V37.8445L23.1813 41.6665V37.343L20.8976 37.3429Z"
          fill="url(#paint9_linear_488_11158)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_488_11158"
            x1="49.0748"
            y1="46.0272"
            x2="61.267"
            y2="52.0185"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_488_11158"
            x1="25.2423"
            y1="43.8258"
            x2="42.9894"
            y2="52.5468"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_488_11158"
            x1="7.87029"
            y1="25.3291"
            x2="22.8024"
            y2="33.698"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_488_11158"
            x1="23.2291"
            y1="13.2449"
            x2="64.4286"
            y2="39.4876"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_488_11158"
            x1="38.4263"
            y1="19.3426"
            x2="61.9264"
            y2="29.2753"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint5_linear_488_11158"
            x1="48.5812"
            y1="25.9747"
            x2="54.744"
            y2="29.0032"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint6_linear_488_11158"
            x1="23.2903"
            y1="42.7032"
            x2="33.6811"
            y2="65.7524"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint7_linear_488_11158"
            x1="50.4498"
            y1="14.8677"
            x2="52.8093"
            y2="17.1826"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint8_linear_488_11158"
            x1="10.8915"
            y1="25.3779"
            x2="12.2843"
            y2="25.4449"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint9_linear_488_11158"
            x1="6.65442"
            y1="37.2263"
            x2="12.5488"
            y2="48.0667"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Loader;
