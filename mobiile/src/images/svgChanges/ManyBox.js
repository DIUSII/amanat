import React from 'react';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';
import {View} from 'react-native';

const ManyBox = ({
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
          d="M39.6605 30.7119H37.2198C36.7709 30.7119 36.4062 31.0772 36.4062 31.5254V41.2881C36.4062 41.737 36.7709 42.1017 37.2198 42.1017H46.9853L43.1648 34.7796H39.6607L39.6605 30.7119Z"
          fill="url(#paint0_linear_488_11248)"
        />
        <Path
          d="M29.8975 43.7287C29.4486 43.7287 29.084 44.0933 29.084 44.5423V54.305C29.084 54.7539 29.4486 55.1185 29.8975 55.1185H41.2874C41.7363 55.1185 42.1009 54.7539 42.1009 54.305V44.5423C42.1009 44.0933 41.7363 43.7287 41.2874 43.7287H38.0331V47.7965H33.1518V43.7287H29.8975Z"
          fill="url(#paint1_linear_488_11248)"
        />
        <Path
          d="M41.2881 56.7456H12.8136C12.3647 56.7456 12 57.1103 12 57.5592V59.1863C12 59.6352 12.3647 59.9998 12.8136 59.9998H54.3051V56.7456H41.2881Z"
          fill="url(#paint2_linear_488_11248)"
        />
        <Path
          d="M49.4243 41.2881V31.5254C49.4243 31.0772 49.0597 30.7119 48.6108 30.7119H44.543V33.9018L48.8011 42.0625C49.1559 41.9757 49.4243 41.6699 49.4243 41.2882L49.4243 41.2881Z"
          fill="url(#paint3_linear_488_11248)"
        />
        <Path
          d="M56.7466 54.305V44.5423C56.7466 44.0933 56.3819 43.7287 55.933 43.7287H52.6788V47.7965H51.793L55.6134 55.1185H55.9331C56.382 55.1185 56.7466 54.7539 56.7466 54.305H56.7466Z"
          fill="url(#paint4_linear_488_11248)"
        />
        <Path
          d="M22.5772 42.1017H33.9671C34.416 42.1017 34.7806 41.737 34.7806 41.2881V31.5254C34.7806 31.0772 34.416 30.7119 33.9671 30.7119H30.7128V34.7796H25.8315V30.7119H22.5772C22.1283 30.7119 21.7637 31.0772 21.7637 31.5254V41.2881C21.7637 41.737 22.1283 42.1017 22.5772 42.1017Z"
          fill="url(#paint5_linear_488_11248)"
        />
        <Path
          d="M44.5421 43.7287C44.0932 43.7287 43.7285 44.0933 43.7285 44.5423V54.305C43.7285 54.7539 44.0932 55.1185 44.5421 55.1185H53.7759L49.9554 47.7965H47.7962V43.7287H44.5421Z"
          fill="url(#paint6_linear_488_11248)"
        />
        <Path
          d="M15.255 55.1185H26.6448C27.0937 55.1185 27.4584 54.7539 27.4584 54.305V44.5423C27.4584 44.0933 27.0937 43.7287 26.6448 43.7287H23.3906V47.7965H18.5092V43.7287H15.255C14.8061 43.7287 14.4414 44.0933 14.4414 44.5423V54.305C14.4414 54.7539 14.8061 55.1185 15.255 55.1185Z"
          fill="url(#paint7_linear_488_11248)"
        />
        <Path
          d="M58.3723 56.7456H55.9316V59.9998H58.3723C58.8212 59.9998 59.1859 59.6352 59.1859 59.1863V57.5592C59.1859 57.1103 58.8212 56.7456 58.3723 56.7456Z"
          fill="url(#paint8_linear_488_11248)"
        />
        <Path
          d="M47.7969 43.6572V43.7288H47.8343L47.7969 43.6572Z"
          fill="url(#paint9_linear_488_11248)"
        />
        <Path
          d="M30.7719 29.0846L35.5791 20.2396L40.1943 29.0846H42.0299L36.5114 18.5083H37.2207V11.9998H33.9665V18.5083H34.6678L28.9199 29.0846H30.7719Z"
          fill="url(#paint10_linear_488_11248)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_488_11248"
            x1="36.1803"
            y1="30.4046"
            x2="50.1567"
            y2="36.7838"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_488_11248"
            x1="28.806"
            y1="43.4214"
            x2="44.6033"
            y2="52.2934"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_488_11248"
            x1="11.0965"
            y1="56.6578"
            x2="12.7117"
            y2="66.9765"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_488_11248"
            x1="44.4387"
            y1="30.4056"
            x2="51.898"
            y2="31.982"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_488_11248"
            x1="51.6872"
            y1="43.4214"
            x2="59.2496"
            y2="45.0377"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint5_linear_488_11248"
            x1="21.4857"
            y1="30.4046"
            x2="37.283"
            y2="39.2765"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint6_linear_488_11248"
            x1="43.5139"
            y1="43.4214"
            x2="57.0161"
            y2="49.2745"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint7_linear_488_11248"
            x1="14.1634"
            y1="43.4214"
            x2="29.9607"
            y2="52.2934"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint8_linear_488_11248"
            x1="55.8621"
            y1="56.6578"
            x2="60.0466"
            y2="58.7141"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint9_linear_488_11248"
            x1="47.7961"
            y1="43.6553"
            x2="47.8521"
            y2="43.6697"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint10_linear_488_11248"
            x1="28.6399"
            y1="11.5389"
            x2="46.9629"
            y2="18.4482"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default ManyBox;
