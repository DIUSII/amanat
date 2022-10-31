import React from 'react';
import {View} from 'react-native';
import {Path, Svg, Defs, LinearGradient, Stop} from 'react-native-svg';

const Flasks = ({
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
          d="M28.0842 32.2974H26.984C26.0252 32.2974 25.3045 32.7182 24.7449 33.3678C24.1538 34.0543 23.7316 34.9965 23.3972 35.9819L19.5717 47.2616C20.2668 50.4564 21.2562 51.29 22.4136 51.0388C23.4341 50.8173 24.6495 49.8356 25.9158 48.8133C26.7919 48.1061 27.6908 47.3799 28.5975 46.8443C30.656 45.6279 32.698 45.3736 34.4419 48.3249C34.96 49.2018 35.8612 49.5052 36.8979 49.4827C37.918 49.4607 39.07 49.1298 40.1404 48.7062V36.5852L39.9361 35.9824C39.6021 34.9979 39.1798 34.0553 38.5888 33.3688C38.0292 32.7188 37.3086 32.2974 36.3497 32.2974H35.2495C35.0456 32.2974 34.8799 32.1317 34.8799 31.9278V29.8094H32.5904C32.3861 29.8094 32.2208 29.6437 32.2208 29.4398C32.2208 29.2359 32.3865 29.0702 32.5904 29.0702H34.8799V28.1276H32.5904C32.3861 28.1276 32.2208 27.9619 32.2208 27.758C32.2208 27.5536 32.3865 27.3884 32.5904 27.3884H34.8799V26.4458H32.5904C32.3861 26.4458 32.2208 26.2801 32.2208 26.0762C32.2208 25.8718 32.3865 25.7066 32.5904 25.7066H34.8799V24.764H32.5904C32.3861 24.764 32.2208 24.5983 32.2208 24.3944C32.2208 24.1905 32.3865 24.0249 32.5904 24.0249H34.8799V23.0822H32.5904C32.3861 23.0822 32.2208 22.9166 32.2208 22.7126C32.2208 22.5083 32.3865 22.3431 32.5904 22.3431H34.8799V20.4902H28.4534V31.9288C28.4534 32.1327 28.2877 32.2983 28.0838 32.2983L28.0842 32.2974ZM19.1356 48.5486L17.0995 54.5519C17.0315 54.7522 17 54.9512 17 55.1466C17 55.7119 17.2701 56.2499 17.6959 56.7028C18.1425 57.1777 18.7556 57.5567 19.4156 57.7804C19.8315 57.9213 20.2655 57.9997 20.6859 57.9997H42.6472C43.0083 57.9997 43.3765 57.9429 43.7335 57.839C43.8667 57.8003 43.9986 57.7548 44.1287 57.703C43.0456 57.1417 42.1179 56.3187 41.4309 55.3194C40.6175 54.1359 40.1399 52.7067 40.1399 51.173V49.4962C39.078 49.895 37.9458 50.1957 36.9118 50.2182C35.6203 50.2461 34.4846 49.8477 33.8062 48.6994C32.3652 46.2609 30.6762 46.472 28.9724 47.4785C28.109 47.9885 27.2317 48.697 26.3772 49.3868C25.0406 50.4658 23.7586 51.5012 22.5684 51.7596C21.1526 52.067 19.9547 51.3526 19.1341 48.5477L19.1356 48.5486ZM25.8681 43.8457C26.2026 43.8457 26.506 43.9817 26.7252 44.2009C26.9445 44.4201 27.0804 44.7235 27.0804 45.058C27.0804 45.3924 26.9445 45.6959 26.7252 45.9151C26.7171 45.9232 26.709 45.9304 26.7005 45.9376C26.483 46.1438 26.19 46.2703 25.8677 46.2703C25.5332 46.2703 25.2298 46.1343 25.0106 45.9151C24.7914 45.6959 24.6554 45.3925 24.6554 45.058C24.6554 44.7235 24.7914 44.4201 25.0106 44.2009C25.2298 43.9817 25.5332 43.8457 25.8677 43.8457L25.8681 43.8457ZM26.2026 44.7235C26.1171 44.638 25.9987 44.5849 25.8681 44.5849C25.7376 44.5849 25.6192 44.638 25.5337 44.7235C25.4481 44.8091 25.395 44.9274 25.395 45.058C25.395 45.1885 25.4481 45.3069 25.5337 45.3924C25.6192 45.478 25.7376 45.5311 25.8681 45.5311C25.9919 45.5311 26.1045 45.4843 26.1886 45.4073C26.1931 45.4024 26.1976 45.3974 26.2026 45.3924C26.2881 45.3069 26.3412 45.1885 26.3412 45.058C26.3412 44.9274 26.2881 44.809 26.2026 44.7235V44.7235ZM29.9965 38.5798C30.4476 38.5798 30.8559 38.7626 31.1516 39.0583C31.4473 39.3541 31.6301 39.7624 31.6301 40.2134C31.6301 40.6645 31.4473 41.0727 31.1516 41.3684C30.8558 41.6642 30.4475 41.847 29.9965 41.847C29.5455 41.847 29.1372 41.6642 28.8415 41.3684C28.5458 41.0727 28.363 40.6644 28.363 40.2134C28.363 39.7623 28.5457 39.354 28.8415 39.0583C29.1372 38.7626 29.5455 38.5798 29.9965 38.5798ZM30.629 39.581C30.4674 39.4194 30.2437 39.319 29.9965 39.319C29.7494 39.319 29.5261 39.4189 29.3641 39.581C29.2025 39.7426 29.1021 39.9663 29.1021 40.2135C29.1021 40.4606 29.202 40.6839 29.3641 40.8455C29.5257 41.0071 29.7494 41.1075 29.9965 41.1075C30.2432 41.1075 30.4669 41.0075 30.6286 40.8455C30.7902 40.6839 30.8905 40.4601 30.8905 40.2135C30.8905 39.9663 30.7906 39.743 30.6286 39.581H30.629ZM33.9566 34.4514C34.2901 34.4514 34.5931 34.5873 34.8123 34.8066H34.8137C34.8218 34.8147 34.829 34.8228 34.8362 34.8313C35.0424 35.0487 35.1689 35.3418 35.1689 35.6637C35.1689 35.9968 35.0334 36.2993 34.8137 36.5194L34.8128 36.5203L34.8137 36.5212C34.8056 36.5293 34.797 36.537 34.7885 36.5442C34.5706 36.7499 34.2775 36.8764 33.9566 36.8764C33.623 36.8764 33.3201 36.7404 33.1008 36.5212H33.0995C33.0914 36.5131 33.0842 36.505 33.077 36.4965C32.8708 36.279 32.7443 35.986 32.7443 35.6641C32.7443 35.3297 32.8798 35.0262 33.0995 34.807C33.3187 34.5878 33.6221 34.4518 33.9566 34.4518L33.9566 34.4514ZM34.2915 35.3288C34.206 35.2437 34.0876 35.191 33.9566 35.191C33.826 35.191 33.7076 35.2441 33.6221 35.3297C33.5366 35.4152 33.4835 35.5336 33.4835 35.6641C33.4835 35.7879 33.5303 35.9004 33.6073 35.9846C33.6122 35.9891 33.6172 35.9936 33.6221 35.9986L33.6212 35.9995C33.7067 36.0846 33.8251 36.1372 33.9561 36.1372C34.0804 36.1372 34.1925 36.0904 34.2757 36.0143C34.2807 36.0089 34.2852 36.004 34.2901 35.999H34.2915C34.3761 35.9144 34.4283 35.796 34.4283 35.6646C34.4283 35.5408 34.3815 35.4282 34.3045 35.3441C34.2996 35.3396 34.2946 35.3351 34.2897 35.3301L34.2906 35.3292L34.2915 35.3288ZM36.3996 40.3493C36.734 40.3493 37.0375 40.4848 37.2567 40.7045C37.2648 40.7126 37.272 40.7207 37.2792 40.7292C37.4854 40.9467 37.6119 41.2397 37.6119 41.562C37.6119 41.8965 37.4764 42.1999 37.2567 42.4191C37.0375 42.6384 36.734 42.7743 36.3996 42.7743C36.066 42.7743 35.7631 42.6388 35.5438 42.4191H35.5425L35.538 42.4146C35.3215 42.1959 35.1873 41.8943 35.1873 41.562C35.1873 41.2289 35.3228 40.9264 35.5425 40.7063L35.5434 40.7054L35.5425 40.7045C35.5506 40.6964 35.5591 40.6887 35.5677 40.6815C35.7856 40.4758 36.0786 40.3493 36.3996 40.3493V40.3493ZM36.734 41.2271C36.6485 41.1416 36.5301 41.0885 36.3996 41.0885C36.2753 41.0885 36.1632 41.1353 36.08 41.2114C36.0755 41.2168 36.0705 41.2217 36.0656 41.2267H36.0642C35.9796 41.3113 35.9274 41.4297 35.9274 41.5611C35.9274 41.6908 35.9796 41.8083 36.0638 41.8934L36.0656 41.8952L36.0647 41.8961C36.1502 41.9811 36.2686 42.0338 36.3996 42.0338C36.5301 42.0338 36.6485 41.9807 36.734 41.8952C36.8196 41.8096 36.8727 41.6912 36.8727 41.5607C36.8727 41.4369 36.8259 41.3244 36.7489 41.2402C36.7439 41.2357 36.739 41.2312 36.734 41.2262L36.734 41.2271Z"
          fill="url(#paint0_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1546 51.1735V40.9441H49.8092V44.7826C49.8092 44.987 49.6435 45.1522 49.4396 45.1522C49.2357 45.1522 49.07 44.9865 49.07 44.7826V40.9441H47.8874C47.6831 40.9441 47.5179 40.7784 47.5179 40.5745C47.5179 40.3706 47.6835 40.2049 47.8874 40.2049H49.07V38.2373H47.8874C47.6831 38.2373 47.5179 38.0716 47.5179 37.8677C47.5179 37.6634 47.6835 37.4982 47.8874 37.4982H49.07V35.5305H47.8874C47.6831 35.5305 47.5179 35.3649 47.5179 35.161C47.5179 34.9566 47.6835 34.7914 47.8874 34.7914H49.07V32.8238H47.8874C47.6831 32.8238 47.5179 32.6581 47.5179 32.4542C47.5179 32.2503 47.6835 32.0846 47.8874 32.0846H49.07V30.117H47.8874C47.6831 30.117 47.5179 29.9513 47.5179 29.7474C47.5179 29.5431 47.6835 29.3778 47.8874 29.3778H49.07V27.4102H47.8874C47.6831 27.4102 47.5179 27.2446 47.5179 27.0407C47.5179 26.8367 47.6835 26.6711 47.8874 26.6711H49.07V24.7476H40.9316V51.1757C40.9316 52.9934 41.6757 54.6464 42.874 55.8448C44.0728 57.043 45.7253 57.7871 47.5431 57.7871C49.3608 57.7871 51.0138 57.043 52.2122 55.8448C53.4105 54.6465 54.1546 52.9935 54.1546 51.1757V51.1735ZM54.1546 40.2049V38.2373H49.8092V40.2049H54.1546ZM54.1546 37.4977V35.5301H49.8092V37.4977H54.1546ZM54.1546 34.7905V32.8228H49.8092V34.7905H54.1546ZM54.1546 32.0832V30.1156H49.8092V32.0832H54.1546ZM54.1546 29.376V27.4084H49.8092V29.376H54.1546ZM54.1546 26.6688V24.7453H49.8092V26.6688H54.1546Z"
          fill="url(#paint1_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.6221 35.998C33.8058 36.1817 34.1051 36.1839 34.2911 35.998L34.292 35.9989C34.4761 35.8148 34.4752 35.51 34.2915 35.3295L34.2924 35.3286C33.9958 35.0333 33.4844 35.2422 33.4844 35.6635C33.4844 35.7963 33.5361 35.9111 33.623 35.998L33.6221 35.998Z"
          fill="url(#paint2_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.9137 50.2193C35.6222 50.2473 34.4865 49.8489 33.808 48.7005C32.3671 46.262 30.6781 46.4731 28.9743 47.4796C28.1109 47.9897 27.2336 48.6982 26.3791 49.3879C25.0425 50.4669 23.7605 51.5023 22.5703 51.7607C21.168 52.0654 19.9796 51.3672 19.1594 48.6289L17.1503 54.552C17.0823 54.7524 17.0508 54.9513 17.0508 55.1467C17.0508 55.7121 17.3209 56.25 17.7467 56.7029C18.1933 57.1778 18.8064 57.5569 19.4668 57.7806C19.8828 57.9215 20.3167 57.9998 20.7371 57.9998H42.6985C43.0595 57.9998 43.4277 57.9431 43.7847 57.8391C43.917 57.8004 44.0485 57.7554 44.1777 57.7041C43.5011 57.3529 42.8848 56.8996 42.3506 56.3653C41.0185 55.0333 40.1916 53.1953 40.1916 51.1736V49.4779C39.1149 49.8866 37.9634 50.1963 36.9127 50.2188L36.9137 50.2193Z"
          fill="url(#paint3_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.8676 45.5314C25.9914 45.5314 26.104 45.4846 26.1881 45.4076L26.2021 45.3928C26.2876 45.3072 26.3407 45.1889 26.3407 45.0583C26.3407 44.9278 26.2876 44.8094 26.2021 44.7239C26.1166 44.6383 25.9982 44.5852 25.8676 44.5852C25.7371 44.5852 25.6187 44.6383 25.5332 44.7239C25.4476 44.8094 25.3945 44.9278 25.3945 45.0583C25.3945 45.1889 25.4477 45.3073 25.5332 45.3928C25.6187 45.4783 25.7371 45.5314 25.8676 45.5314H25.8676Z"
          fill="url(#paint4_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.364 40.8456C29.5256 41.0072 29.7493 41.1076 29.9965 41.1076C30.2432 41.1076 30.4669 41.0077 30.6285 40.8456C30.7901 40.684 30.8905 40.4603 30.8905 40.2136C30.8905 39.9665 30.7906 39.7432 30.6285 39.5811C30.4669 39.4195 30.2432 39.3192 29.996 39.3192C29.7489 39.3192 29.5256 39.4191 29.3636 39.5811C29.2019 39.7427 29.1016 39.9665 29.1016 40.2136C29.1016 40.4607 29.2015 40.684 29.3636 40.8456H29.364Z"
          fill="url(#paint5_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.0655 41.8959C36.2491 42.0796 36.5485 42.0819 36.7344 41.8959L36.7353 41.8968C36.9194 41.7127 36.9185 41.408 36.7349 41.2275L36.7358 41.2266C36.4391 40.9313 35.9277 41.1401 35.9277 41.5615C35.9277 41.6943 35.9795 41.8091 36.0664 41.8959L36.0655 41.8959Z"
          fill="url(#paint6_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9539 16.2983C30.2713 16.2983 30.5585 16.1696 30.7665 15.9616C30.9745 15.7536 31.1032 15.4664 31.1032 15.1491C31.1032 14.8317 30.9745 14.5445 30.7665 14.3365C30.5585 14.1286 30.2713 13.9998 29.9539 13.9998C29.6366 13.9998 29.3489 14.1286 29.1414 14.3365C28.9334 14.5445 28.8047 14.8317 28.8047 15.1491C28.8047 15.4664 28.9334 15.7541 29.1414 15.9616C29.3494 16.1696 29.6366 16.2983 29.9539 16.2983Z"
          fill="url(#paint7_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.7651 21.5231H39.3203V24.0057H55.7651V21.5231Z"
          fill="url(#paint8_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 24.7453H49.8086V26.6688H54.1535V24.7453Z"
          fill="url(#paint9_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 27.4084H49.8086V29.3761H54.1535V27.4084Z"
          fill="url(#paint10_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 30.1158H49.8086V32.0839H54.1535V30.1158Z"
          fill="url(#paint11_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 32.8228H49.8086V34.7904H54.1535V32.8228Z"
          fill="url(#paint12_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 35.5307H49.8086V37.4983H54.1535V35.5307Z"
          fill="url(#paint13_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1535 38.2365H49.8086V40.2041H54.1535V38.2365Z"
          fill="url(#paint14_linear_488_11228)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.6356 18.9166C34.9529 18.9166 35.2406 18.7879 35.4481 18.5799C35.6561 18.3719 35.7848 18.0847 35.7848 17.7674C35.7848 17.45 35.6561 17.1623 35.4481 16.9548C35.2401 16.7469 34.9529 16.6181 34.6356 16.6181C34.3182 16.6181 34.031 16.7469 33.823 16.9548C33.6151 17.1628 33.4863 17.45 33.4863 17.7674C33.4863 18.0847 33.6151 18.3724 33.823 18.5799C34.031 18.7879 34.3182 18.9166 34.6356 18.9166Z"
          fill="url(#paint15_linear_488_11228)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_488_11228"
            x1="16.4206"
            y1="19.4783"
            x2="54.8711"
            y2="33.1441"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_488_11228"
            x1="40.6492"
            y1="23.8539"
            x2="60.972"
            y2="27.8505"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_488_11228"
            x1="33.4642"
            y1="35.1649"
            x2="34.6801"
            y2="35.7619"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_488_11228"
            x1="16.4714"
            y1="46.4667"
            x2="34.4475"
            y2="67.8046"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_488_11228"
            x1="25.3743"
            y1="44.5597"
            x2="26.591"
            y2="45.1576"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint5_linear_488_11228"
            x1="29.0634"
            y1="39.2709"
            x2="31.3634"
            y2="40.4015"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint6_linear_488_11228"
            x1="35.9075"
            y1="41.0629"
            x2="37.1235"
            y2="41.6598"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint7_linear_488_11228"
            x1="28.7556"
            y1="13.9378"
            x2="31.7112"
            y2="15.3902"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint8_linear_488_11228"
            x1="38.9691"
            y1="21.4561"
            x2="41.2331"
            y2="28.8255"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint9_linear_488_11228"
            x1="49.7158"
            y1="24.6934"
            x2="52.8231"
            y2="28.1426"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint10_linear_488_11228"
            x1="49.7158"
            y1="27.3554"
            x2="52.9011"
            y2="30.8119"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint11_linear_488_11228"
            x1="49.7158"
            y1="30.0627"
            x2="52.9019"
            y2="33.5193"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint12_linear_488_11228"
            x1="49.7158"
            y1="32.7697"
            x2="52.9011"
            y2="36.2262"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint13_linear_488_11228"
            x1="49.7158"
            y1="35.4776"
            x2="52.9011"
            y2="38.9341"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint14_linear_488_11228"
            x1="49.7158"
            y1="38.1834"
            x2="52.9011"
            y2="41.6399"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
          <LinearGradient
            id="paint15_linear_488_11228"
            x1="33.4372"
            y1="16.5561"
            x2="36.3928"
            y2="18.0085"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor={stopColorFirstGradient} />
            <Stop offset="1" stopColor={stopColorSecondGradient} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Flasks;
